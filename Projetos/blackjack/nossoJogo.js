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

console.log('Seja bem vindo ao Blackjack')
let jogar = confirm('Deseja iniciar uma nova jogada?')
let usuarioCarta1 = comprarCarta()
let usuarioCarta2 = comprarCarta()
let pcCarta1 = comprarCarta()
let pcCarta2 = comprarCarta()

if (jogar) {
   pontosUsuario = usuarioCarta1.valor + usuarioCarta2.valor
   pontospc = pcCarta1.valor + pcCarta1.valor

   console.log('Usuário - cartas: ' + usuarioCarta1.texto +' ' + usuarioCarta2.texto + ' - pontuação ' + pontosUsuario)
   console.log('Computador - cartas: ' + pcCarta1.texto +' ' + pcCarta2.texto + ' - pontuação ' + pontospc)

   if(pontosUsuario > pontospc){
      console.log('O usuário ganhou')
   } else if (pontosUsuario === pontospc){
      console.log('Empate')
   } else {
      console.log('O pc ganhou')
   }

} else {
   console.log('O jogo acabou')
}
