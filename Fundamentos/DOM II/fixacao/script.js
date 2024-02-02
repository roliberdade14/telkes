
const insereItem = () =>{
    //capturar input
    const input = document.getElementById('meu-input')
    //capturar lista
    const lista = document.getElementById('lista')
    //criar uma li
    const newli = document.createElement('li')
    //capturar o texto
    const texto = document.createTextNode(input.value)
    //coloca o texto na li
    newli.appendChild(texto)

    lista.insertAdjacentElement('beforeend', newli)
    input.value = ""

}
