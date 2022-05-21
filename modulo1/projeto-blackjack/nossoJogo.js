/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
   //  console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
//     console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
//  * 
 * 
 * 
// // //  */

console.log("Boas vindas ao jogo de Blackjack"); // 1

if (confirm("Quer iniciar uma rodada?")) {
} else {
  console.log("O jogo acabou"); // 3
}

const usuario = []; // COMO SE ESTIVESSE AQUI DENTRO AS CARTAS COMPRADAS
const computador = [];

usuario.push(comprarCarta()); // 2vezes compra a carta
usuario.push(comprarCarta());
computador.push(comprarCarta());
computador.push(comprarCarta());

const somaPontosUsuario = usuario[0].valor + usuario[1].valor;
const somaPontosComputador = computador[0].valor + computador[1].valor;

console.log(
  `carta do usuario: ${usuario[0].texto} ${usuario[1].texto}, pontos usuario : ${somaPontosUsuario}`
);
// console.log(`pontos usuario : ${somaPontosUsuario}`);
console.log(
  `carta Computador: ${computador[0].texto}, ${computador[1].texto}, pontos Computador: ${somaPontosComputador}`
);

const carta = comprarCarta();
// Sorteia uma carta. Por exemplo, o rei de ouros
if (somaPontosComputador > somaPontosUsuario) {
  console.log("Computador Venceu!!");
} else if (somaPontosUsuario < somaPontosComputador) {
  console.log("Usuario Venceu!!!");
} else {
  console.log("Empataram!!");
}
