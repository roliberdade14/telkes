import z from 'zod'

export interface CreateProductInputDTO {
    id: string,
    name: string,
    price: number
}

export interface CreateProductOutputDTO {
    message: string,
    product: {
        id: string,
        name: string,
        price: number,
        createdAt: string
    }
}

export interface EditProductInputDTO {
    idToEdit: string,
    id: string,
    name: string,
    price: number
}

export interface EditProductOutputDTO {
    message: string,
    product: {
        id: string,
        name: string,
        price: number,
        createdAt: string
    }
}


export const CreateProductSchema = z.object({
    id: z.string().min(2).optional(),
    name: z.string().min(2).optional(),
    price: z.number().positive().gte(1).optional()
}).transform(data => data as CreateProductInputDTO)


export const EditProductSchema = z.object({
    idToEdit: z.string(),
    id: z.string().min(2).optional(),
    name: z.string({
        invalid_type_error: "name deve ser do tipo string"
    }).min(2).optional(),
    price: z.number().positive().gte(2).optional()
}).transform(data => data as EditProductInputDTO)