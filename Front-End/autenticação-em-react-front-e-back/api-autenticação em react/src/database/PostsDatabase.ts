import { PostsDB, idPostUser, inputCreatePost, postsDTO } from "../dtos/posts/post.dto"
import { BaseDatabase } from "./BaseDatabase"



export class PostsDatabase extends BaseDatabase {
    public static TABLE_POSTS = "posts"
    public static TABLE_USER_POST = "user_post"

    public findPosts = async (idPost: string): Promise<postsDTO> => {

        let resultDb

        if (idPost) {
            resultDb = await BaseDatabase
                .connection(PostsDatabase.TABLE_POSTS)
                .where("id", `${idPost}`)

        } else {
            resultDb = await BaseDatabase
                .connection(PostsDatabase.TABLE_POSTS)
        }

        return resultDb
    }

    public getIdPostsByUser = async (idUser: string): Promise<idPostUser> => {

        const resultDb = await BaseDatabase
            .connection(PostsDatabase.TABLE_USER_POST)
            .where("user_id", idUser)

        return resultDb
    }

    public getUserIdByPostId = async (idPost: string): Promise<idPostUser> => {

        const resultDb = await BaseDatabase
            .connection(PostsDatabase.TABLE_USER_POST)
            .where("post_id", idPost)
            
        console.log(resultDb, 'podtuser');
        
        return resultDb
    }

    public createPost = async (newPostDB: PostsDB, idUser: string): Promise<void> => {

        await BaseDatabase
            .connection(PostsDatabase.TABLE_POSTS)
            .insert(newPostDB)

        await BaseDatabase
            .connection(PostsDatabase.TABLE_USER_POST)
            .insert({
                user_id: idUser,
                post_id: newPostDB.id
            })
    }

    public deletPost = async (idPost: string): Promise<void> => {

        await BaseDatabase
            .connection(PostsDatabase.TABLE_USER_POST)
            .where('post_id', idPost)
            .delete()

        await BaseDatabase
            .connection(PostsDatabase.TABLE_POSTS)
            .where('id', idPost)
            .delete()

        

    }


}