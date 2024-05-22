export interface LoginInputDTO {
    email: string,
    password: string
}

export interface LoginDBDTO {
    id: string,
    email: string,
    password: string
}

export interface LoginOutputDTO {
    message: string,
    id: string,
    token: string
}

export type LoginInputDB = LoginDBDTO[]

