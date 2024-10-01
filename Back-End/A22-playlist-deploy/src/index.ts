import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { userRouter } from './router/userRouter'
import { playlistRouter } from './router/playlistRouter'
import { AddressInfo } from 'net'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;

    console.log(`Servidor rodando em http://localhost:${address.port}`)
  } else {
    console.error(`Falha na inicialização do servidor.`);

  }
})

app.use("/users", userRouter)

app.use("/playlists", playlistRouter)

app.get("/ping", (req, res) => {
  res.send("Pong!")
})