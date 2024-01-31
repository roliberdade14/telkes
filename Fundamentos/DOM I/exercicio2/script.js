
/* console.log(document.getElementById('nome').value)

document.getElementById('nome').value = ""

document.getElementById('endereco').value = "" */

const exibirNome = () => {
    console.log(document.getElementById('nome').value)
}

const exibirEndereco = () => {
    console.log(document.getElementById('endereco').value)
}

const exibirEmail = () => {
    console.log(document.getElementById('email').value)
}

const mostrarForm = () =>{
    exibirNome()
    exibirEndereco()
    exibirEmail()

    document.getElementById('nome').value = ""
    document.getElementById('endereco').value = ""
    document.getElementById('email').value = ""
}

/* const escrever = () => {
    console.log(document.getElementById('nome').value)

    document.getElementById('texto').innerHTML = document.getElementById('nome').value
} */


