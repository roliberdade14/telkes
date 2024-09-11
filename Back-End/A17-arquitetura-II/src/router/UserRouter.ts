import express from "express";
import { UserController } from "../controller/UserController";


export const userRouter = express.Router()

const userController = new UserController()

// http://localhost:3003/users/users -  não pode acontecer

userRouter.get("/", userController.getUsers)
userRouter.post("/", userController.createUser)