// for dentro de for
// for in
// for of



// REVISÃO FOR

/*  for(let i=0; i < nomes.length; i++){
    //console.log(`${nomes[i]} está no indice ${i}`);
    if(nomes[i]==='kenia'){
        console.log(nomes[i], `está no indice ${i}`);
    }
}  */


const nomes = ['juliana', 'telks', 'lessa', 'luiz',
    'rodrigo', 'velter', 'bruno', 'kenia', 'roberto']


// FOR OF
//  elemento of array

/*  for(elem of nomes){
    console.log(elem);
}  */

//FOR IN - mostra a propriedade do array e objeto
// unico for que passa por um objeto

const pessoa = {
    nome: 'Juliana',
    idade: 20
}

/* for (const prop in pessoa) {
    console.log(prop);
} */



const bimestre1 = [8, 4, 9, 10]
const bimestre2 = [10, 8, 5, 7]
const bimestre3 = [3, 4, 9, 1]
const bimestre4 = [7, 6, 8, 10]
const notasDoAno = [bimestre1, bimestre2, bimestre3, bimestre4]

/* for (let i = 0; i < notasDoAno.length; i++) {

    console.log(`bimestre${i+1}`,notasDoAno[i]);
                      
    for (let z = 0; z < notasDoAno[i].length; z++) {
 
        console.log('for2: ',notasDoAno[i][z]);

    }
} */

//o mesmo laço de cima, mas agora com for in e for of

for (let i in notasDoAno) { //aqui precisamos apenas dos indices
    console.log(`bimestre${i + 1}`, notasDoAno[i]);

    for (let z of notasDoAno[i]) { //aqui precisamos apenas dos elementos
        console.log('for2: ', z);
    }
}









































// ---- PRATICA EXTRA -----


const filmes = [
    {
        titulo: 'O Auto da Compadecida',
        ano: 2000,
        diretor: 'Guel Arraes',
        elenco: [
            'Selton Mello',
            'Mateus Nachtergaele',
            'Marco Nanini',
            'Fernanda Montenegro',
        ],
    },
    {
        titulo: 'Carandiru',
        ano: 2001,
        diretor: 'Hector Babenco',
        elenco: [
            'Wagner Moura',
            'José Carlos Vasconcelos',
            'Ailton Graça',
            'Caio Blat',
        ],
    },
    {
        titulo: 'Aquarius',
        ano: 2012,
        diretor: 'Kléber Mendonça Filho',
        elenco: [
            'Sônia Braga',
            'Humberto Carrão',
            'Maeve Jinkings',
            'Bárbara Colen',
        ],
    },
]



/*  for(let i=0; i < filmes.length; i++){
    console.log(filmes[i].titulo, filmes[i].ano, filmes[i].diretor)
}  */


/* for (let i = 0; i < filmes.length; i++) {

    console.log(`"${filmes[i].titulo}, de ${filmes[i].ano}, dirigido por ${filmes[i].diretor}"`)

    for (let j = 0; j < filmes[i].elenco.length; j++) {
        console.log(`Ator/Atriz ${j}: ${filmes[i].elenco[j]}`)
    }

}   */



/* for (let i in filmes) {

    console.log(`"${filmes[i].titulo}, de ${filmes[i].ano}, dirigido por ${filmes[i].diretor}"`)

    for (let j of filmes[i].elenco) {
        //console.log(j)
        console.log(`Ator/Atriz: ${j}`)
    }

}   */