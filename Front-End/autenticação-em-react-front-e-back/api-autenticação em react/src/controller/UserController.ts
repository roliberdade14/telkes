import { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness"
import { LoginInputDTO } from "../dtos/user/login.dto";
import { BaseError } from "../errors/BaseError";
import { ZodError } from "zod";
import { UpdateUser } from "../dtos/user/updateUser.dto";
import { BadRequestError } from "../errors/BadRequestError";


export class UserController {

    constructor(
        private userBusiness: UserBusiness

    ) { }

    public getUsers = async (req: Request, res: Response) => {
        try {

            const idInput = req.query.idUser as string

            const output = await this.userBusiness.getUsers(idInput)

            res.status(200).send(output)

        } catch (error) {

            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("Erro inesperado")
            }

        }
    }

    public login = async (req: Request, res: Response) => {

        try {
            const input: LoginInputDTO = {
                email: req.body.email,
                password: req.body.password
            }

            if (!input.email || !input.password) { throw new BadRequestError('Informe o Login e a senha!') }

            const output = await this.userBusiness.login(input)

            res.status(200).send(output)

        } catch (error) {
            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("Erro inesperado")
            }
        }
    }

    public signup = async (req: Request, res: Response) => {

        try {

            const input = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            }

            if (!input.name || !input.email || !input.password) {
                throw new BadRequestError("O nome, email e senha, devem ser informados!")
            }

            const output = await this.userBusiness.signup(input)

            res.status(200).send(output)

        } catch (error) {
            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("Erro inesperado")
            }
        }
    }

    public deleteUser = async (req: Request, res: Response) => {

        try {
            const idUser = req.query.idUser as string

            if (!idUser) { throw new BadRequestError("Informe o id do usuário que deseja excluir!") }

            await this.userBusiness.deleteUser(idUser)

            res.status(200).send("Usuário excluido da base de dados!")

        } catch (error) {
            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("Erro inesperado")
            }
        }


    }

    public updateUser = async (req: Request, res: Response) => {

        try {

            const idUser = req.query.idUser as string

            if(!idUser){throw new BadRequestError("Informe o id atual do usuário!")}

            const newUpUser: UpdateUser = {
                id: req.body.id,
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            if (!newUpUser.id && !newUpUser.name &&
                !newUpUser.email && !newUpUser.password) { throw new BadRequestError('Informe o dado a ser alterado!') }

            await this.userBusiness.updateUser(idUser, newUpUser)

            res.status(200).send("Usuário modificado!")

        } catch (error) {
            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("Erro inesperado")
            }
        }
    }

}