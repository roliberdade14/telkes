import { PostsDatabase } from "../database/PostsDatabase";
import { CreatePostOutputDTO, idPostUser, inputCreatePost, postsDTO } from "../dtos/posts/post.dto";
import { Post } from "../model/Posts";
import { IdGenerator } from "../services/idGenerator";
import { BadRequestError } from "../errors/BadRequestError";



export class PostsBusiness {

    constructor(
        private postsDatabase: PostsDatabase,
        private idGenerator: IdGenerator
    ) { }

    public getPosts = async (idPost: string): Promise<postsDTO> => {

        const outputDataBase: postsDTO = await this.postsDatabase.findPosts(idPost)

        return outputDataBase

    }

    public getUserIdByPostId = async (idPost: string): Promise<idPostUser> => {

        const outputDataBase: idPostUser = await this.postsDatabase.getUserIdByPostId(idPost)

        return outputDataBase

    }

    public getIdPostsByUser = async (idUser: string): Promise<idPostUser> => {

        const outputDataBase: idPostUser = await this.postsDatabase.getIdPostsByUser(idUser)

        return outputDataBase
    }

    public createPosts = async (inputNewPost: inputCreatePost): Promise<CreatePostOutputDTO | undefined> => {

        const { idUser, textPost } = inputNewPost

        const id = this.idGenerator.generate()

        const newPost = new Post(
            id,
            textPost
        )

        const newPostDB = newPost.toDBModel()
        await this.postsDatabase.createPost(newPostDB, idUser)

        return {
            message: 'Postagem criada com sucesso!',
            postDB: {
                id: id,
                text_post: textPost
            }
        }

    }

    public deletPost = async (idPost: string):Promise<void> => {

        const isPost = await this.postsDatabase.findPosts(idPost)
        
        if(isPost?.length === 0){throw new BadRequestError("O post não existe!")}     

        await this.postsDatabase.deletPost(idPost)

    }


}