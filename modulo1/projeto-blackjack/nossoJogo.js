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
// //  */
console.log("Boas vindas ao jogo de Blackjack!"); // 1

const retornaPontuacaoJogador = (jogador) => {
  return {
    cartas: `${jogador[0].texto}, ${jogador[1].texto}`,
    pontuacao: jogador[0].valor + jogador[1].valor,
  };
};

const printarMensagemJogador = (jogadorInfo, jogadorMensagem) => {
  console.log(
    `${jogadorMensagem} - cartas: ${jogadorInfo.cartas} - pontuação ${jogadorInfo.pontuacao}`
  );
};

if (confirm("Quer iniciar uma nova rodada?")) {
  //2
  // Inicia nova rodada // 4
  const usuario = [];
  const computador = [];

  usuario.push(comprarCarta());
  usuario.push(comprarCarta());

  computador.push(comprarCarta());
  computador.push(comprarCarta());

  const usuarioInfo = retornaPontuacaoJogador(usuario);
  const computadorInfo = retornaPontuacaoJogador(computador);

  printarMensagemJogador(usuarioInfo, "Usuário");
  printarMensagemJogador(computadorInfo, "Computador");

  if (computadorInfo.pontuacao > usuarioInfo.pontuacao) {
    console.log("Vencedor computador");
  } else if (computadorInfo.pontuacao === usuarioInfo.pontuacao) {
    console.log("Vocês empataram");
  } else {
    console.log("Vencedor usuário");
  }
} else {
  console.log("O jogo acabou"); //3
}

//
///////////////////////eu

// console.log("Boas vindas ao jogo de Blackjack"); // 1

// if (confirm("Quer iniciar uma rodada?")) {
//   // 4
// } else {
//   console.log("O jogo acabou"); // 3
// }

// const usuario = []; // COMO SE ESTIVESSE AQUI DENTRO AS CARTAS COMPRADAS
// const computador = [];

// usuario.push(comprarCarta); // 2vezes compra a carta
// usuario.push(comprarCarta);
// computador.push(comprarCarta);
// computador.push(comprarCarta);

// const carta = comprarCarta();
// // Sorteia uma carta. Por exemplo, o rei de ouros

// console.log(carta.texto);
// // imprime o texto da carta. Nesse caso: "K♦️"

// console.log(carta.valor);
// // imprime o valor da carta (um número). Nesse caso: 10)
