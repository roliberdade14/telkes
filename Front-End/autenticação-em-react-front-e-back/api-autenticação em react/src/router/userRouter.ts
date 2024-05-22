import express from "express"
import { UserController } from "../controller/UserController"
import { UserBusiness } from "../business/UserBusiness"
import { UserDatabase } from "../database/UserDatabase"
import { TokenManager } from "../services/tokenManager"
import { IdGenerator } from "../services/idGenerator"
import { PostsDatabase } from "../database/PostsDatabase"

export const userRouter = express.Router()

const userController = new UserController(
    new UserBusiness(
        new UserDatabase(),
        new PostsDatabase(),
        new TokenManager(),
        new IdGenerator()
    )
)


userRouter.get("/", userController.getUsers)
userRouter.post("/signup", userController.signup)
userRouter.post("/login", userController.login)
userRouter.put("/user", userController.updateUser)
userRouter.delete("/user", userController.deleteUser)