import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'

dotenv.config()

export class HasManager {

    //gerar criptografia
    public hash = async (plaintext: string): Promise<string> => {

        const rounds = Number(process.env.BCRYPT_COST)
        const salt = await bcrypt.genSalt(rounds)
        const hash = await bcrypt.hash(plaintext, salt)

        return hash
    }

    //saber se a senha é válida
    //                       senha              criptografada
    public compare = async (plaintext: string, hash: string): Promise<boolean> => {

        return bcrypt.compare(plaintext, hash)
    }
}


