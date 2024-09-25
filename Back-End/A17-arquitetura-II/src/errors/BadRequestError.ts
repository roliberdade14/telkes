import { BaseError } from "./BaseError";

export const NAME_INVALIDO = "name deve ser string"

export class BadRequestError extends BaseError{

    constructor(
        message: string = "Requisição inválida!"
    ){
        super(400, message)
    }

}