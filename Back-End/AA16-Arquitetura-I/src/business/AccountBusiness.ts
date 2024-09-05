import { log } from "console"
import { AccountDatabase } from "../database/AccountDatabase"
import { Account } from "../models/Account"
import { AccountDB } from "../types"


export class AccountBusiness {

    accountDatabase = new AccountDatabase()

    public getAccounts = async (): Promise<Account[]> => {

        const accountsDB: AccountDB[] = await this.accountDatabase.findAccounts()

        const accounts: Account[] = accountsDB.map((accountDB) => new Account(
            accountDB.id,
            accountDB.balance,
            accountDB.owner_id,
            accountDB.created_at
        ))

        return accounts
    }


    public getAccountBalance = async (id: string) => {

            const accountDB:AccountDB | undefined = await this.accountDatabase.findAccountById(id)
    
            if (!accountDB) {
                throw new Error("'id' não encontrado")
            }
    
            const account = new Account(
                accountDB.id,
                accountDB.balance,
                accountDB.owner_id,
                accountDB.created_at
            )
    
            const balance:number = account.getBalance()

            return balance

    }
}