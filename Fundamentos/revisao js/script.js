const cursos = [
    {
        curso: "HTMLeCSS",
        descricao: "Aprenda react do zero",
        duracao: "6 meses",
        valor: 500,
    },
    {
        curso: "Javascript",
        descricao: "Aprenda react do zero",
        duracao: "2 meses",
        valor: 900,
    },
    {
        curso: "APIsRest",
        descricao: "Aprenda react do zero",
        duracao: "6 meses",
        valor: 2000,
    }
]

const turmas = [

    {
        turma: "Hipátia",
        curso: "Javascript",
        inicio: "30/06/2022",
        termino: "30/08/2022",
        numeroDeAlunos: 150,
        periodo: "noturno",
        concluida: false

    },
    {
        turma: "Sibyla",
        curso: "Javascript",
        inicio: "30/06/2022",
        termino: "30/08/2022",
        numeroDeAlunos: 200,
        periodo: "Integral",
        concluida: false

    },
    {
        turma: "Curie",
        curso: "HTML e CSS",
        inicio: "30/06/2022",
        termino: "30/06/2023",
        numeroDeAlunos: 180,
        periodo: "noturno",
        concluida: true

    },
    {
        turma: "Zhenyi",
        curso: "HTML e CSS",
        inicio: "30/06/2022",
        termino: "22/12/2022",
        numeroDeAlunos: 80,
        periodo: "Integral",
        concluida: false

    },
    {
        turma: "Clarke",
        curso: "HTML e CSS",
        inicio: "30/06/2022",
        termino: "30/06/2023",
        numeroDeAlunos: 200,
        periodo: "noturno",
        concluida: true

    },
    {
        turma: "Blackwell",
        curso: "APIs Rest",
        inicio: "30/06/2022",
        termino: "30/06/2023",
        numeroDeAlunos: 100,
        periodo: "Integral",
        concluida: true

    },
    {
        turma: "Elion",
        curso: "APIs Rest",
        inicio: "30/06/2022",
        termino: "30/06/2023",
        numeroDeAlunos: 200,
        periodo: "Noturno",
        concluida: true

    },
    {
        turma: "Burnell",
        curso: "APIs Rest",
        inicio: "30/06/2022",
        termino: "30/06/2023",
        numeroDeAlunos: 90,
        periodo: "Integral",
        concluida: false

    }

]


const estudantes = [
    {
        estudante: "Chris Evans",
        turma: "Hipátia",
        curso: "Javascript",
        valor: 900,
        numeroDeParcelas: 9,
        valorDaParcela: 100
    },
    {
        estudante: "Halle Berry",
        turma: "Burnell",
        curso: "APIsRest",
        valor: 2000,
        numeroDeParcelas: 4,
        valorDaParcela: 500
    }
]

//Desenvolva um programa que tenha as seguintes funções
//buscar em um array por: um estudante, uma turma, um curso


const buscarCurso = (nomeCurso) => {

    const curso = cursos.find((cadaCurso) => {
        if (cadaCurso.curso.toLowerCase() === nomeCurso.toLowerCase()) {

            return cadaCurso
        }
    })

    return curso

}

//console.log(buscarCurso('JAvascript'))


const buscarTurma = (nomeTurma) => {

    const turma = turmas.filter((cadaTurma) => {
        if (cadaTurma.turma.toLowerCase() === nomeTurma.toLowerCase()) {
            return cadaTurma
        }
    })

    return turma.length > 0 ? turma : 'Turma não encontrada'

}

//console.log(buscarTurma('Blackwell'));


const buscarEstudante = (nomeEstudante) => {

    let estudante

    for (let cadaEstudante of estudantes) {
        if (cadaEstudante.estudante.toLowerCase().includes(nomeEstudante)) {

            estudante = cadaEstudante
        }
    }

    return estudante
}

//console.log(buscarEstudante('be'))


//exiba no console as informações desse estudante


const relatorioEstudante = (nomeEstudante) => {

    const estudante = buscarEstudante(nomeEstudante)

    console.log(`Aluno: ${estudante.estudante} \nTurma: ${estudante.turma} \nCurso: ${estudante.curso}\nValor Total: ${estudante.valor} \nParcelas: ${estudante.numeroDeParcelas} \nValor da Parcela: ${estudante.valorDaParcela}`)
}

//relatorioEstudante('halle berry')


// Simule o valor do parcelamento dos cursos
// A partir do valor total dos cursos escolhidos aplicar os descontos:
// 20% de desconto - Aplicado para pagamentos avista ou parcelado em até 2x
// 15% de desconto - Aplicado na compra de 3 cursos
// 10% de desconto - Aplicado na compra de 2 cursos
// Obs.: Os descontos podem ser acumulados.

const carrinhoCursos = []

const adicionarCarrinho = (nomeCurso) => {

    const curso = buscarCurso(nomeCurso)

    const cursoSelecionado = {
        nomeCurso: curso.curso,
        valorCurso: curso.valor
    }

    carrinhoCursos.push(cursoSelecionado)

    return carrinhoCursos

}

console.log(adicionarCarrinho('Javascript'))
console.log(adicionarCarrinho('APIsRest'))


const parcelarCurso = (carrinho, numeroParcelas) => {

    let valorTotal = 0
    let desconto = 0
    let valorParcela = 0

    if (carrinho.length > 1) {

        switch (carrinho.length) {
            case 3:
                desconto = 0.15
                break
            case 2:
                desconto = 0.10
                break
            default:
                desconto = 0
                break
        }

        for (elemento of carrinho) {
            valorTotal += elemento.valorCurso
        }

        valorTotal = valorTotal - (valorTotal * desconto)

    } else {
        valorTotal = carrinho[0].valorCurso
    }


    if (numeroParcelas > 0 && numeroParcelas <= 2) {
        valorTotal = valorTotal - (valorTotal * 0.2)
        valorParcela = valorTotal / numeroParcelas

        console.log(`O valor do pagamento é de R$ ${valorTotal} com 20% de desconto, parcelado em ${numeroParcelas}X de R$${valorParcela.toFixed(2)}.`)

    } else if (numeroParcelas > 2 && numeroParcelas <= 12) {
        valorParcela = valorTotal / numeroParcelas

        console.log(`O valor do pagamento é de R$ ${valorTotal}, parcelado em ${numeroParcelas}X de R$${valorParcela.toFixed(2)}.`)

    } else {
        console.log("O número máximo de parcelas é de 12 vezes sem juros. \nInforme um número entre 1 e 12!")
    }


    carrinhoCursos.push({
        valorTotal: valorTotal,
        valorParcela: valorParcela,
        numeroParcelas: numeroParcelas
    })

}

parcelarCurso(carrinhoCursos, 3)

console.log(carrinhoCursos);


//Crie uma função Matricular:
// Para matricular um aluno, mostre no console um o objeto com as seguintes informações desse aluno
// nome do estudante
// turma do estudante
// nome do curso
// valor total
// numero de parcelas
// valor da parcela

console.log(estudantes);

const matricular = (nomeEstudante, carrinho, nomeTurma) => {

    const nomesCursos = []

    carrinho.forEach((elem)=>elem.nomeCurso && nomesCursos.push(elem.nomeCurso))


    const novoAluno = {
        estudante: nomeEstudante,
        turma: nomeTurma,
        curso: nomesCursos,
        valor: carrinho[carrinho.length - 1].valorTotal,
        numeroDeParcelas:carrinho[carrinho.length - 1].numeroParcelas,
        valorDaParcela: carrinho[carrinho.length - 1].valorParcela
    } 

    //console.log(novoAluno);

    estudantes.push(novoAluno)
    console.log(estudantes);

    
}

matricular('Juliana', carrinhoCursos, 'Curie')