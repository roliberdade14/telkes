/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


//sortear cartas
//as cartas não podem ser "ASES"
//mostrar as cartas do usuario e a primeira carta do computador no confirm
//perguntar se quer comprar mais cartas
//somar a pontuação
//só pode comprar até atingir 21 pontos
// mostrar mensagem mostrando quem ganhou

let jogar = confirm('Bem vindo ao Balckjack' + '\n' + 'Deseja iniciar uma nova jogada?')
let usuario = []
let computador = []

if (jogar) {

   let cartasIguais = false
   while (!cartasIguais) {
      usuario.push(comprarCarta())
      usuario.push(comprarCarta())
      computador.push(comprarCarta())
      computador.push(comprarCarta())

      console.log('pc', computador[0].texto[0])

      if ((usuario[0].texto[0] === 'A' && usuario[1].texto[1] === 'A') || (computador[0].texto[0] === 'A' && computador[1].texto[1] === 'A')) {
         usuario = []
         computador = []
      } else {
         cartasIguais = true
      }
   }

   //Lógica de mostrar as cartas do usuário e uma carta do computador
   //Lógica de comprar mais cartas 
   let comprando = true
   while (comprando) {
      let textos = ''
      let pontos = 0

      for (let carta of usuario) {
         textos += carta.texto + ' '
         pontos += carta.valor
      }

      if (pontos > 21) {
         comprando = false
      } else {
         let comprarOutraCarta = confirm(`Suas cartas são ${textos}. A carta revelada do computador é ${computador[0].texto}` + '\n' + 'Deseja comprar mais uma carta? ')

         if (comprarOutraCarta) {
            usuario.push(comprarCarta())
         } else {
            comprando = false
         }
      }
   }

   // computador compra até a pontuação igual ou superior a do usuário
   // calcular a pontuação do usuário

   let pontosUsuario = 0
   let textoUsuario = ''
   let pontosComputador = 0
   let textoComputador = ''

   for (let carta of computador) {
      pontosComputador += carta.valor
      textoComputador += carta.texto + ' '
   }

   for (let carta of usuario) {
      pontosUsuario += carta.valor
      textoUsuario += carta.texto
   }

   // Parte 11 - computador compra
   if (pontosUsuario <= 21) {
      while (pontosComputador < pontosUsuario) {
         computador.push(comprarCarta())
         pontosComputador = 0
         textoComputador = ' '

         for (let carta of computador) {
            pontosComputador += carta.valor
            textoComputador += carta.texto
         }
      }
   }

   //Parte 12 - verificar quem ganhou e imprimir cartas

   let resultado = ''

   if (pontosUsuario > pontosComputador && pontosUsuario <= 21) {
      resultado = 'O usuário ganhou!'
   } else if (pontosComputador > pontosUsuario && pontosComputador <= 21) {
      resultado = 'O Computador ganhou!'
   } else if (pontosUsuario > 21 && pontosComputador <= 21) {
      resultado = 'O computador ganhou!'
   } else if (pontosComputador > 21 && pontosUsuario <= 21) {
      resultado = 'O usuário ganhou!'
   } else {
      resultado = 'Empate!'
   }

   // mostrar quem ganhou o jogo

   alert(`Usuário - cartas ${textoUsuario} - Pontuação: ${pontosUsuario}` + '\n' + `Computador - cartas ${textoComputador} - Pontuação: ${pontosComputador}` + '\n' + resultado)
} else {
   console.log('Jogo encarrado')
}