
//selecionar a tag UL da lista
const pegaElemento = document.getElementById('lista')
//criar o elemento
const newLiZero = document.createElement('li')
//criar o texto
const liZero = document.createTextNode('Item 0')
// juntamos a li e o texto
newLiZero.appendChild(liZero)

pegaElemento.insertAdjacentElement('afterbegin', newLiZero)

const newLiCinco = document.createElement('li')
const liCinco = document.createTextNode("Item 5")
newLiCinco.appendChild(liCinco)
pegaElemento.insertAdjacentElement('beforeend', newLiCinco)

let picapau = false

const mostrarImagem = () => {
    console.log(picapau)
    if(picapau === false){
        const divImg = document.getElementById('imagens')
        const imagem = document.createElement('img')
        imagem.src = "./midea/PicaPau_antigo.webp"
        divImg.appendChild(imagem)
    }
    picapau = true
}


















