import React, { useState } from 'react'
import { ContainerForm, ContainerSignup, Input } from './styled'
import useForm from '../../hooks/useForm'

export default function Signup() {

    const { form, onChangeInputs, cleanFields } = useForm({nome: '', email: '', password: '', confirmPassword: ''})

    const enviarCadastro = (e) => {
        //* EXTRA: validando a senha - ter certeza que o usuário sabe qual senha cadastrou
        e.preventDefault()
        if (form.password === form.confirmPassword) {
            console.log(form)
        }

        cleanFields()
    }

    return (
        <ContainerSignup>
            <ContainerForm onSubmit={enviarCadastro}>
                <label htmlFor='nome'>Nome de usuario:</label>
                <Input
                    id='nome'
                    name='nome'
                    value={form.nome}
                    onChange={onChangeInputs}
                    placeholder="username"
                    required
                />
                <label htmlFor='email'>Email:</label>
                <Input
                    id='email'
                    name='email'
                    value={form.email}
                    onChange={onChangeInputs}
                    placeholder="nome@email.com"
                    type='email'
                    required
                />
                <label htmlFor='senha'>Senha:</label>
                <Input
                    id='senha'
                    name='password'
                    value={form.password}
                    onChange={onChangeInputs}
                    placeholder="Crie sua senha"
                />
                <label htmlFor='confirma-senha'>Confirmação de senha:</label>
                <Input
                    id='confirma-senha'
                    name='confirmPassword'
                    value={form.confirmPassword}
                    onChange={onChangeInputs}
                    placeholder="Confirme a senha"
                />
                <button>Cadastrar</button>
            </ContainerForm>
        </ContainerSignup>
    )
}
