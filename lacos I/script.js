//REVISÃO

//FUNÇÕES - CONDICIONAIS - OPERADORES

function minhaFuncao() {
    //minha logica
    return // retorno da logica
}

/* const somar = (num1, num2) => {
   const soma = num1 + num2
   return soma
} */


// EXEMPLO SEM TERNÁRIO

const somar = (num1, num2) => {

    /* if (isNaN(num1 || num2)) {
        return 'Por favor, informe um número'
    } */

    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'Por favor, informe um número'
    }

    if (num1 < 0 && num2 < 0) {
        return "informe um número positivo"
    }

    const soma = num1 + num2

    return soma 
}

//EXEMPLO COM TERNÁRIO

/* const somar = (num1, num2) => {

    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'Por favor, informe um número'
    }

    return num1 < 0 || num2 < 0 ? "informe um número positivo" : num1 + num2


} */

//console.log(somar(6, 2))

//swicht case

/* const mes = 5

switch (mes) {
    case 1:
        console.log(`Janeiro`);
        break;

    case 2:
        console.log(`Fevereiro`);
        break;

    case 3:
        console.log(`Março`);
        break;
    case 4:
        console.log(`Abril`);
        break;

    default:
        console.log('Informe um número entre 1 e 4');
        break;
} */

// AULA LAÇOS 1 - WHILE E FOR

// PRATICA 1 WHILE

const jogar = () => {

    let numJogador = Number(prompt('Informe 1 numero, digite 0 para sair'))
    let soma = 0
    while (numJogador !== 0) {
        //console.log("O numero é:", numJogador);
        soma += numJogador
        console.log(`soma = `, soma);
        numJogador = Number(prompt('Informe outro numero'))
    }
}

//console.log(jogar())

//PRATICA 2 FOR

const incrementar = () => {
    let num = Number(prompt("Insira um número"))

    for (let i = 0; i <= num; i++) {
        console.log(i);
    }
}

//PRATICA 3

const imprimirIndice = () =>{

    const array = [1, 2, 3, 4, 5, 6, 7]

    for (let i = 0; i < array.length; i++) {
        console.log(`O número ${array[i]} está no índice ${i} `)
    }  
}

imprimirIndice()