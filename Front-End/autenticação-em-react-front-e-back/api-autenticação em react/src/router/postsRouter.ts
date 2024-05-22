import express from "express"
import { UserController } from "../controller/UserController"
import { UserBusiness } from "../business/UserBusiness"
import { UserDatabase } from "../database/UserDatabase"
import { TokenManager } from "../services/tokenManager"
import { IdGenerator } from "../services/idGenerator"
import { PostsController } from "../controller/PostsController"
import { PostsBusiness } from "../business/PostsBusiness"
import { PostsDatabase } from "../database/PostsDatabase"

export const postsRouter = express.Router()

const postsController = new PostsController(
    new PostsBusiness(
        new PostsDatabase(),
        new IdGenerator()
    )
)


postsRouter.get("/", postsController.getPosts)
postsRouter.get("/post", postsController.getPostsByUser)
postsRouter.get("/postuser", postsController.getUserIdByPostId)
postsRouter.post("/post", postsController.createPosts)
postsRouter.delete("/post", postsController.deletPost)
