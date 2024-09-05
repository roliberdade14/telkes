import { Request, Response } from "express"
import { UserDatabase } from "../database/UserDatabase"
import { User } from "../models/User"
import { UserDB, UserDBPost } from "../types"
import { UserBusiness } from "../business/UserBusiness"

export class UserController {

    userBusiness = new UserBusiness() 

    public getUsers = async (req: Request, res: Response):Promise<void> => {
        try {
            const q = req.query.q as string | undefined

            //conectando com a business            
            const result:User[] = await this.userBusiness.getUsers(q)
    
            res.status(200).send(result)
        } catch (error) {
            console.log(error)
    
            if (req.statusCode === 200) {
                res.status(500)
            }
    
            if (error instanceof Error) {
                res.send(error.message)
            } else {
                res.send("Erro inesperado")
            }
        }
    }

    public createUser = async (req: Request, res: Response) => {
        try {
            const { id, name, email, password } = req.body

            const input: UserDBPost = {
                id,
                name,
                email,
                password
            }

            await this.userBusiness.createUser(input) 
            
            res.status(201).send("Usuário criado com sucesso")
            
        } catch (error) {
            console.log(error)
    
            if (req.statusCode === 200) {
                res.status(500)
            }
    
            if (error instanceof Error) {
                res.send(error.message)
            } else {
                res.send("Erro inesperado")
            }
        }
    }
}