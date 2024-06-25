import { countries } from './countries.js'


const country = process.argv[2]
const code = process.argv[3]

// como escrever um código para mostra o pais ou codigo

if(!country || !code){
    console.log('Digite o nome do pais e/ou código do pais')
}else{

    const newCountry = {
        name: country,
        code
    }

    countries.push(newCountry)
    //unshift - adiciona no inicio

    console.table(countries)

}