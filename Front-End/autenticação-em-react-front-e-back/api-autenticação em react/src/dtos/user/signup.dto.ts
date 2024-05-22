
export interface SignupInputDTO {
    name: string,
    email: string,
    password: string
}

export interface SignupOutputDTO {
    message: string,
    token: string
}

export interface UserDB {
    id: string,
    name: string,
    email: string,
    password: string
}