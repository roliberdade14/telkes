/* 
npm init

no arquivo package.json -> 
"main": "index.js",
"type": "module", -> isso permite os imports e exports

Quando você tiver "type": "module"o package.jsonarquivo, seu código-fonte deverá usar importsintaxe. Quando não tiver, você deve usar requiresintaxe; isto é, adicionar "type": "module"aos package.jsonmódulos ES 6 habilitados. Para mais informações https://nodejs.org/docs/latest-v13.x/api/esm.html#esm_enabling

*/

//ver o console no terminal -> node (nome do arq com a extensão)

//1 - > importar o coutries e mostrar no console no terminal

//2 - explicar o process.argv

//argv é uma propriedade do objeto process em Node. js, que retorna um array contendo os argumentos de linha de comando passados quando o script é executado no terminal.

// node   index.js   "o q vier depois"
// [0]    [1]         [2]


import { countries } from "./countries.js";

const teste = countries[0]

//console.log(countries);

//process.argv[2] = 'juliana'

//console.log(process.argv[2]);

//3 - função que recebe o nome do pais e busca na lista

const value = process.argv[2]

console.log(value);

if (!value) {
    console.log('Informe um pais')

} else {
    const result = countries.filter((country) => {
        return country.name[0] === value
        //return country.name.toLowerCase().includes(value.toLowerCase())
    })

    console.table(result)
}


// 4 - mostrar que não preciso digitar o comando no console, posso usar o script === rodar npm run start

//5 - inclir pais no outro arquivo

