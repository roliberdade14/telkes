//vamos ver hoje
//FOR IN
// FOR OF
//CALLBACK
//FOR EACH
//MAP
//FILTER
//FUNÇÕES ANONIMAS


// 1 - FUNÇÕES ANONIMAS

//()=>{}

// crie uma função que retorne um array com os elementos multiplicados por 3

/* const arrayNumeros = [3, 8, 4, 5, 7, 10, 20, 2]

const multiplicarPorTres = (array) => {
    const novoArray = []

    for (elem of array) {
        novoArray.push(elem * 3)
    }

   return novoArray
} */

//console.log(multiplicarPorTres(arrayNumeros))

//FOR IN

/* const pessoa = {
    nome: 'Juliana',
    idade: 20,
    rg: '1234567',
    profissao: 'desenvolvedora'
}

for(prop in pessoa){
    console.log(prop);//propriedade
    console.log(pessoa[prop]) // valor da propriedade
} */


// CALLBACK - chamar uma função dentro de outra função

// quero que função retorne um array de numeros pares

//const arrayNumeros = [3, 8, 4, 5, 7, 10, 20, 2]

const retornaPar = (array) => {

    const novoArray = []

    for (elem of array) {
        elem % 2 === 0 && novoArray.push(elem)
    }

    return novoArray

}

const multiplicarPorTresPar = (array, funcArrayPar) => {
    const novoArray = []

    for (elem of array) {
        novoArray.push(elem * 3)
    }
    //eu posso armazenar o resultado de uma função em uma variável
    const resultadoArrayPar = funcArrayPar(novoArray)

    return resultadoArrayPar

    //return funcArrayPar(novoArray)
}

//console.log(multiplicarPorTresPar(arrayNumeros, retornaPar)) 



//FILTER

//FILTRAR ELEMENTOS DE UM ARRAY
// filtro tras como resultado a verificação de uma condição
// condição ela precisa ser verdadeira
// sempre retorna 1 array

//const arrayNumeros = [3, 8, 4, 5, 7, 10, 20, 2]


/* const arrayPares = arrayNumeros.filter((elem)=>elem % 2 === 0)

console.log(arrayPares); */

const filtraPar = (array) => {

    return array.filter((e) => e % 2 === 0)
}

//console.log('filter', filtraPar(arrayNumeros));

//MAP - Sempre vai retornar um array de mesmo tamanho
// modificar os elementos de um array

/* const resultMap = arrayNumeros.map((elem)=>{return elem * 8})

console.log('map', resultMap);  */

const arrayNumeros = [3, 8, 4, 5, 7, 10, 20, 2]

//FOR EACH

/* const novoArray1 = []
arrayNumeros.forEach((e)=>{
    if(e % 2 ==0 ){
       novoArray1.push(e*3)
    }
})
console.log(novoArray1); */

// 1 - Altere as propriedade vida para 100
// 2 - crie um array somente com os objetos que sejam do tipo fogo

const pokemons = [
    { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
    { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
    { nome: 'Charmander', tipo: 'fogo', vida: 35 },
    { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
    { nome: 'Squirtle', tipo: 'água', vida: 45 },
    { nome: 'Psyduck', tipo: 'água', vida: 25 }
]


const pokeVidaCheia = pokemons.map((elem)=>{

    const novoObj = {
        ...elem,
        vida: 100
    }

    return novoObj

})

//console.log(pokeVidaCheia);

const pokeFogo = pokeVidaCheia.filter((elem)=> elem.tipo === 'fogo')

console.log(pokeFogo);