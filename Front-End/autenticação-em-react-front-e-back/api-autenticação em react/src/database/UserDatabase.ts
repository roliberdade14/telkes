import { idPostUser } from "../dtos/posts/post.dto";
import { GetUserOutputDTO } from "../dtos/user/getUser.dto";
import { LoginInputDB, LoginInputDTO, LoginOutputDTO } from "../dtos/user/login.dto";
import { UserDB } from "../dtos/user/signup.dto";
import { UpdateUser } from "../dtos/user/updateUser.dto";
import { BaseDatabase } from "./BaseDatabase";



export class UserDatabase extends BaseDatabase {
    public static TABLE_POSTS = "posts"
    public static TABLE_USERS = "users"
    public static TABLE_USER_POST = "user_post"

    public findUsers = async (idUser: any): Promise<GetUserOutputDTO> => {

        let resultDb

        if (idUser) {
            resultDb = await BaseDatabase
                .connection(UserDatabase.TABLE_USERS)
                .where("id", `${idUser}`)

        } else {
            resultDb = await BaseDatabase
                .connection(UserDatabase.TABLE_USERS)
        }

        return resultDb
    }

    public findUserByEmail = async (email: string): Promise<LoginInputDB> => {

        const userDB: LoginInputDB | undefined = await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .select('id', 'email', 'password')
            .where({ email })

        return userDB
    }

    public insertUser = async (newUser: UserDB): Promise<void> => {

        await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .insert(newUser)
    }

    public deleteUser = async (idUser: string, allPostsUserBD: idPostUser): Promise<void> => {

        if (allPostsUserBD) {
            for (const elem of allPostsUserBD) {
                await BaseDatabase
                    .connection(UserDatabase.TABLE_USER_POST)
                    .where('post_id', elem.post_id)
                    .delete()

                await BaseDatabase
                    .connection(UserDatabase.TABLE_POSTS)
                    .where('id', elem.post_id)
                    .delete()

            }
        }

        await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .where('id', idUser)
            .delete()
    }

    public updateUser = async (idUser: string, newUpUser: UpdateUser): Promise<void> => {

        await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .where('id', idUser)
            .update(newUpUser)

    }
}