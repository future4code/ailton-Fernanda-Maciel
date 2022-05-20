//- **Exercícios de interpretação de código**

// Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.**

// 1.  Leia o código abaixo
// a) O que vai ser impresso no console? Vai aparecer o array sem nenhuma mudança.

// 2 - a) O que vai ser impresso no console? resposta = Apenas os nomes
// a) O que vai ser impresso no console? Apenas os apelidos: resposta = apelidos de Mandi e Laura
// **********************************************************************

// Exercícios de escrita de código
// 1-  Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize
// as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

// const pets = [
//   { nome: "Lupin", raca: "Salsicha" },
//   { nome: "Polly", raca: "Lhasa Apso" },
//   { nome: "Madame", raca: "Poodle" },
//   { nome: "Quentinho", raca: "Salsicha" },
//   { nome: "Fluffy", raca: "Poodle" },
//   { nome: "Caramelo", raca: "Vira-lata" },
// ];

// //  a) Crie um novo array que contenha apenas o nome dos doguinhos:

// const nomeBichinhos = pets.map((index) => {
//   return index.nome;
// });
// console.log(nomeBichinhos);

// // b) Crie um novo array apenas com os cachorros salsicha:

// const racaSalsicha = pets.filter((salsicha) => {
//   return salsicha.raca === "Salsicha";
// });
// console.log(racaSalsicha);

// // c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles.
// // A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"

// const petsModificado = pets
//   .filter((pet) => pet.raca === "Poodle")
//   .map((pet) => {
//     console.log(
//       `Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}`
//     );
//   });

// 2 -  Dado o seguinte array de produtos, realize as
//   operações pedidas nos itens abaixo utilizando as funções de array map e filter:
const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.3 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.8 },
];

//  a) Crie um novo array que contenha apenas o nome de cada item

// const nomeItem = produtos.map((index) => {
//   return index.nome;
// });
// console.log(nomeItem);
// // b) Crie um novo array que contenha um objeto com o nome e o preço de cada item,
// // aplicando 5% de desconto em todos eles

// const desconto = produtos.map((produto) => {
//   return { nome: produto.nome, preco: (produto.preco * 0, 95) };
// });
// console.log(desconto);

// // c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
// const bebidas = produtos.filter((index) => index.categoria.includes("Bebidas"));

// console.log(bebidas);
// / d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

// const ipe = produtos.filter((index, item, array) => {
//   if (index.nome.includes("Ypê")) {
//     return index;
//   }
// });

// console.log(ipe);
// e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]".
// Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

// const frases = produtos
//   .filter((produto) => produto.nome.includes("Ypê"))
//   .map((produto) => `Compre ${produto.nome} por ${produto.preco}`);
// console.log(frases);
