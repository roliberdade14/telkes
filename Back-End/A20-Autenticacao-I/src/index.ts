import express from 'express'
import cors from 'cors'
import { productRouter } from './router/productRouter'
import { userRouter } from './router/userRouter'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

console.log(process.env.PORT);

app.listen(Number(process.env.PORT), () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`)
})

app.use("/users", userRouter)
app.use("/products", productRouter)
