import { Request, Response } from "express"
import { PostsBusiness } from "../business/PostsBusiness";
import { inputCreatePost } from "../dtos/posts/post.dto";
import { BaseError } from "../errors/BaseError";
import { BadRequestError } from "../errors/BadRequestError";


export class PostsController {

    constructor(
        private postsBusiness: PostsBusiness

    ) { }

    public getPosts = async (req: Request, res: Response) => {
        try {

            const idPost = req.query.idPost as string

            const output = await this.postsBusiness.getPosts(idPost)

            res.status(200).send(output)

        } catch (error) {

            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("Erro inesperado")
            }

        }
    }

    public getUserIdByPostId = async (req: Request, res: Response) => {
        try {           

            const idPost = req.query.idPost as string

            console.log('getUserIdByPostId', idPost);

            const output = await this.postsBusiness.getUserIdByPostId(idPost)

            res.status(200).send(output)

        } catch (error) {

            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("Erro inesperado")
            }

        }
    }


    public getPostsByUser = async (req: Request, res: Response) => {
        try {

            const idUser = req.query.idUser as string

            if (!idUser) { throw new BadRequestError("Informe o id do usuário!") }

            const output = await this.postsBusiness.getIdPostsByUser(idUser)

            res.status(200).send(output)

        } catch (error) {

            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("Erro inesperado")
            }

        }
    }

    public createPosts = async (req: Request, res: Response) => {
        try {

            const newPost: inputCreatePost = {
                idUser: req.body.idUser,
                textPost: req.body.textPost
            }

            if (!newPost.idUser && !newPost.textPost ||
                !newPost.idUser || !newPost.textPost) { throw new BadRequestError("Informe o id do usuário e o texto") }


            const output = await this.postsBusiness.createPosts(newPost)

            res.status(200).send(output)

        } catch (error) {

            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("Erro inesperado")
            }

        }
    }

    public deletPost = async (req: Request, res: Response) => {

        try {

            const idPost = req.query.idPost as string

            if(!idPost){throw new BadRequestError("informe o id do post a ser excluido!")}

            await this.postsBusiness.deletPost(idPost)
            
            res.status(200).send("Post deletado!")

        } catch (error) {

            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("Erro inesperado")
            }

        }


    }

}