import styled from "styled-components";

export const GaragemContainer = styled.main`
    /* background-color: aqua; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;
`

export const Container = styled.div`
    min-height: 40vh;
    width: 80vw;
    display: flex;
    column-gap: 2rem;
    margin-bottom: 2rem;

`
export const Estacionamento = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    height: 90%;
    width: 50%;
    align-items: center;
    justify-items: center;
    margin-top: 5vh;
    background-color: #7A717D;
    padding: 20px;
    border-radius: 10px;
`

export const Botao = styled.button`
    background-color: orange;
    border: none;
    padding: 10px;
    margin-top: 5vh;
    &:hover{
        background-color: red;
    }
`
