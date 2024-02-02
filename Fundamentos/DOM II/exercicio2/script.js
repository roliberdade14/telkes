
const escondeSenha = () => {
    const pegaElemento = document.getElementById('password')

    pegaElemento.setAttribute('type', 'password')
}



const selectForm = document.getElementsByTagName('form')
console.log(selectForm);
selectForm[0].setAttribute('class', 'dark')
