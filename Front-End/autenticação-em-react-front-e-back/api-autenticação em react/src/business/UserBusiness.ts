import { error, log } from "console";
import { UserDatabase } from "../database/UserDatabase"
import { GetUserOutputDTO } from "../dtos/user/getUser.dto";
import { LoginInputDTO, LoginOutputDTO } from "../dtos/user/login.dto";
import { SignupInputDTO, SignupOutputDTO } from "../dtos/user/signup.dto";
import { BadRequestError } from "../errors/BadRequestError";
import { IdGenerator } from "../services/idGenerator";
import { TokenManager, TokenPayload } from "../services/tokenManager";
import { User } from "../model/User";
import { PostsDatabase } from "../database/PostsDatabase";
import { postsDeleteUserBD } from "../dtos/user/deleteUser.dto";
import { idPostUser } from "../dtos/posts/post.dto";
import { UpdateUser } from "../dtos/user/updateUser.dto";
import { NotFoundError } from "../errors/NotFoundError";


export class UserBusiness {

    constructor(
        private userDatabase: UserDatabase,
        private postsDatabase: PostsDatabase,
        private tokenManger: TokenManager,
        private idGenerator: IdGenerator
    ) { }

    public getUsers = async (input: string): Promise<GetUserOutputDTO> => {

        const outputDataBase = await this.userDatabase.findUsers(input)

        if (outputDataBase.length === 0) { throw new BadRequestError('Usuário não encontrado!') }

        return outputDataBase
    }

    public login = async (input: LoginInputDTO): Promise<LoginOutputDTO> => {

        const { email, password } = input

        const [userDataBase] = await this.userDatabase.findUserByEmail(email)

        if (userDataBase === undefined || password !== userDataBase.password) {
            throw new BadRequestError("'email' ou 'senha' incorretos")
        }

        const tokenPayload: TokenPayload = {
            id: userDataBase.id,
            email: userDataBase.email
        }
        const token = this.tokenManger.createToken(tokenPayload)

        const output: LoginOutputDTO = {
            message: 'Login realizado com sucesso',
            id: userDataBase.id,
            token
        }

        return output
    }

    public signup = async (input: SignupInputDTO): Promise<SignupOutputDTO> => {

        const { name, email, password } = input

        const id = this.idGenerator.generate()

        const newUser = new User(
            id,
            name,
            email,
            password
        )

        const newUserDB = newUser.toDBModel()
        await this.userDatabase.insertUser(newUserDB)

        const tokenPayload: TokenPayload = {
            id: newUser.getId(),
            email: newUser.getEmail()
        }

        const token = this.tokenManger.createToken(tokenPayload)

        const output: SignupOutputDTO = {
            message: "Cadastro realizado com sucesso",
            token: token
        }

        return output

    }

    public deleteUser = async (idUser: string): Promise<void> => {

        const [isUser] = await this.userDatabase.findUsers(idUser)

        if (!isUser) { throw new NotFoundError("Usuário não encontrado!") }

        const allPostsUserBD: idPostUser = await this.postsDatabase.getIdPostsByUser(idUser)

        await this.userDatabase.deleteUser(idUser, allPostsUserBD)

    }

    public updateUser = async (idUser: string, newUpUser: UpdateUser): Promise<void> => {

        const [userBD] = await this.userDatabase.findUsers(idUser)

        if (!userBD) { throw new BadRequestError("O usuário não existe!") }

        const upUserBD: UpdateUser = {
            id: newUpUser.id || userBD.id,
            name: newUpUser.name || userBD.name,
            email: newUpUser.email || userBD.email,
            password: newUpUser.password || userBD.password
        }
        await this.userDatabase.updateUser(idUser, upUserBD)
    }


}