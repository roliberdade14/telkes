import { BaseDatabase } from "./BaseDatabase";
import users from './users.json'
import accounts from './account.json'

export class MigrationsDataBase extends BaseDatabase {

    printError = (error: any) => { console.log(error.sqlMessage || error.message) }

    public async createTables() {
        await MigrationsDataBase
            .connection.raw(`
            CREATE TABLE IF NOT EXISTS users (
                id TEXT PRIMARY KEY UNIQUE NOT NULL,
                name TEXT NOT NULL,
                email TEXT UNIQUE NOT NULL,
                password TEXT NOT NULL,
                created_at TEXT DEFAULT (DATETIME()) NOT NULL
            );
        `)
            .then(() => { console.log("Tabela 'users' criada") })
            .catch(this.printError)

        await MigrationsDataBase
            .connection.raw(`
            CREATE TABLE IF NOT EXISTS accounts (
                id TEXT PRIMARY KEY UNIQUE NOT NULL,
                owner_id TEXT NOT NULL,
                balance REAL DEFAULT (0) NOT NULL,
                created_at TEXT DEFAULT (DATETIME()) NOT NULL,
                FOREIGN KEY (owner_id) REFERENCES users (id)
            );
        `)
            .then(() => { console.log("Tabela 'accounts' criada") })
            .catch(this.printError);

    }

    public async insertUsers() {
        await MigrationsDataBase
            .connection('users')
            .insert(users)
            .then(() => { console.log("Contas criadas") })
            .catch(this.printError)
    }

    public async insertAccounts() {
        await MigrationsDataBase
            .connection('accounts')
            .insert(accounts)
            .then(() => { console.log("Contas criadas") })
            .catch(this.printError)
    }

    public async closeConnection() {
        await MigrationsDataBase.connection.destroy()
    }

}

const newMigration = new MigrationsDataBase()

const createTablesAuto = () => {
    newMigration.createTables()
        .then(() => newMigration.insertUsers())
        .then(() => newMigration.insertAccounts())
        .finally(() => newMigration.closeConnection())
}

createTablesAuto()