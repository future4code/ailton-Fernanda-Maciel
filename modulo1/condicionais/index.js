// - **Exercícios de interpretação de código**

// Tente responder os exercícios dessa seção sem executar o código.
// Se ficar muito difícil, pode rodar no seu computador
//  **para analisar e pensar sobre o resultado.**

// a) Explique o que o código faz. Qual o teste que ele realiza?
// Ele testa numeros pares e impares.

// // b) Para que tipos de números ele imprime no console "Passou no teste"?
// Numeros pares

// // c) Para que tipos de números a mensagem é "Não passou no teste"?
// Numeros Impares

// //  2 -O código abaixo foi feito por uma pessoa desenvolvedora,
// // // contratada para automatizar algumas tarefas de um supermercado:

// // a) Para que serve o código acima?
//  Ele serve apenas para chegar em resultados iguais, e também para deixar mais lindo o código.

// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
// O preço da fruta maça é, R$ 2.25

// c) Considere que um usuário queira comprar uma `Pêra`,
// qual seria a mensagem impressa no console se retirássemos
// o `break` que está logo acima do `default`
// (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
// o código sem o brake continua sendo executado, ou seja, não vai aparecer o valor da pêra.

//EXERCICIO 3

// a) O que a primeira linha está fazendo?
// Esta pedindo para inserir um numero.

// b) Considere um usuário digitou o número 10.
// Qual será a mensagem do terminal? E se fosse o número -10?

// Se digitar o 10 vai aparecer "Esse numero passou no teste"
// Mas se digitar -10, não vai aparecer nada no console, pois o código não possui o cód else para
// dar continuidade.

// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
// O let mensagem que esta dentro do cód não deveria estar dentro, por isso apresenta o erro.

//Exercícios de escrita de código
// Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela
// pode dirigir (apenas maiores de idade).
// const idade = +prompt("Qual a sua idade?");
// if (idade >= 18) {
//   console.log("você já pode dirigir :D");
// } else {
//   console.log("Que pena!!! Ainda não pode dirigir!!");
// }

//Agora faça um programa que verifica que turno do dia um aluno estuda.
//   Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno).
// const turnoDoAluno = prompt(
//   "Qual o seu turno? Digite M para matutino, V para vespertino ou N para noturno"
// );
// // //  Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

// const turno = (turnoAluno) => {
//   if (turnoAluno === "M") {
//     return `Bom dia!!!`;
//   } else if (turnoAluno === "V") {
//     return `Boa Tarde`;
//   } else if (turnoAluno === "N") {
//     return `Boa Noite!!!`;
//   }
// };
// console.log(turno(turnoDoAluno));

// Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

// const turnoDoAluno = prompt(
//   "Qual o seu turno? Digite M para matutino, V para vespertino ou N para noturno"
// );

// const turno = (turnoAluno) => {
//   switch (turnoDoAluno) {
//     case "M":
//       return "Bom dia!";
//     case "V":
//       return "Boa Tarde!!";
//     case "N":
//       return "Boa noite!!!";
//   }
// };
// console.log(turno(turnoDoAluno));

// // Considere a situação: você vai ao cinema com um amigo ou amiga,

// // porém ele/ela só assistirá a um filme com você se ele for do
// gênero fantasia  e se o ingresso está abaixo de 15 reais.

// // // Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir
// // // e outra pergunta sobre o preço do ingresso,
// const generoFilme = prompt("Qual o genero do filme que você quer assistir?");
// const ValorFilme = +prompt("Ate qual valor você quer pagar?");

// // // então verifique

// // // se seu amigo ou amiga vai topar assistir o filme.
// const filme = (genero, ingresso) => {
//   if (genero === "Fantasia" && ingresso < 15) {
//     return " Bom filme!!";
//   }

//   return "Escolha outro Filme :(";
// };
// console.log(filme(generoFilme, ValorFilme));
// Caso positivo,
// // imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("

// 🏅  Desafios

// 1 - Modifique o código do exercício 4 de escrita de código para,
// antes de imprimir a mensagem "Bom filme!",
// pergunte ao usuário, pelo prompt qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc)
//  e imprima no console as mensagens "Bom filme!" e "Aproveite o seu [LANCHINHO]",
// // trocando [LANCHINHO] pelo que o usuário colocou no input.

// const generoFilme = prompt("Qual o genero do filme que você quer assistir?");
// const ValorFilme = +prompt("Ate qual valor você quer pagar?");
// const lanche = prompt([
//   " Qual lanchinho você vai comprar? Pipoca, Chocolate, Coca? ",
// ]);

// const filme = (genero, ingresso) => {
//   if (genero === "Fantasia" && ingresso < 15) {
//     return `Bom filme!! e aproveite o seu ${lanche}`;
//   }

//   return "Escolha outro Filme :(";
// };
// console.log(filme(generoFilme, ValorFilme));

// 2 - Você foi contratado para criar um sistema de vendas de ingressos de
// jogos de um estádio de futebol. Para esta compra, o usuário deve fornecer algumas informações:

const nomeCompleto = prompt("Qual o sei nome completo?");
const tipoJogo = prompt(
  "Qual o tipo de Jogo? IN indica internacional; e DO indica doméstico;"
).toUpperCase();
const etapaJogo = prompt(
  "Qual a etapa do jogo? SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica fina"
).toUpperCase();
const categoria = +prompt("Qual a categoria? pode ser as opções 1, 2, 3 ou 4");
const quantidadeIngressos = +prompt("Qual a quantidade de ingressos?");

const calcularValorIngresso = () => {
  const valorDolar = 4.1;
  const tabelaPrecos = {
    semifinal: {
      categoria1: 1320,
      categoria2: 880,
      categoria3: 550,
      categoria4: 220,
    },
    decisaoTerceiroLugar: {
      categoria1: 660,
      categoria2: 440,
      categoria3: 330,
      categoria4: 170,
    },
    final: {
      categoria1: 1980,
      categoria2: 1320,
      categoria3: 880,
      categoria4: 330,
    },
  };

  const codigoEtapaJogo = obterEtapaJogoCodigo();
  const tabelaPrecoSelecionado = tabelaPrecos[codigoEtapaJogo];
  let valorIngresso = tabelaPrecoSelecionado[`categoria${categoria}`];
  let valorTotal = valorIngresso * quantidadeIngressos;

  if (tipoJogo === "IN") {
    valorTotal = valorTotal * valorDolar;
    valorIngresso = valorIngresso * valorDolar;
  }

  return {
    valorTotal,
    valorIngresso,
  };
};

const obterEtapaJogoCodigo = () => {
  switch (etapaJogo) {
    case "SF":
      return "semifinal";
    case "DT":
      return "decisaoTerceiroLugar";
    default:
      return "final";
  }
};

const valor = calcularValorIngresso();
const printarNotaFiscalJogo = (valorJogo) => {
  let tipoJogoTexto = "Nacional";
  let etapaJogoTexto = "Final";
  let unidadeMonetario = "R$";

  if (tipoJogo === "IN") {
    tipoJogoTexto = "Internacional";
    unidadeMonetario = "US$";
  }

  if (etapaJogo === "SF") {
    etapaJogoTexto = "Semi Final";
  }

  if (etapaJogo === "DT") {
    etapaJogoTexto = "Decisão de terceiro lugar";
  }

  let ingressosTexto = "ingresso";

  if (quantidadeIngressos > 1) {
    ingressosTexto = "ingressos";
  }

  console.log(`
    ---Dados da compra--- 
    Nome do cliente:  ${nomeCompleto}
    Tipo do jogo:  ${tipoJogoTexto} 
    Etapa do jogo:  ${etapaJogoTexto} 
    Categoria:  ${categoria} 
    Quantidade de Ingressos:  ${quantidadeIngressos} ${ingressosTexto}
    ---Valores--- 
    Valor do ingresso:  ${unidadeMonetario} ${valorJogo.valorIngresso}
    Valor total:  ${unidadeMonetario} ${valorJogo.valorTotal}
    `);
};

printarNotaFiscalJogo(valor);
