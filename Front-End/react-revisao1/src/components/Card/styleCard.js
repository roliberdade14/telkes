import styled from "styled-components";

export const CardConteiner = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    width: 100%;
    
    align-items: center;

    p{
        margin-top: 0.2rem;
        margin-bottom: 0.2rem;
    }
`

export const ImgProduct = styled.img`
    width: 100%;
    height: 85%;
`

export const ButtonCard = styled.button`
    background-color: darkblue;
    border: none;
    padding: 2%;
    margin: 2%;
    border-radius: 5px;
    color: white;

    :hover{

    }
`