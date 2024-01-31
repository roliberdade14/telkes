
const paragrafo = document.getElementById('paragrafo')

const textoInput = document.getElementById('texto')

/* const valorInput = () =>{
    console.log(document.getElementById('texto').value)
} */


const trocar = () =>{

    paragrafo.innerHTML += textoInput.value

}
