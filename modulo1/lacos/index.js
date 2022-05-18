// // - **Exercícios de interpretação de código**

// // Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.**

// // 1. O que o código abaixo está fazendo? Qual o resultado impresso no console?

// resposta = Tive que rodar para entender que o sinal de (+) depois do valor é igual
// valor + i, que no caso era 5, por isso deu total de 10.

// EXERCICIO 2
// a) O que vai ser impresso no console? RESPOSTA: OS NUMEROS MAIORES QUE 18.

// b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente?
// Se sim, o que poderia ser usado para fazer isso? RESPOSTA : Não tenho certeza, mas acredito que sim... seria necessario colocar a função length

//1 - Pergunte ao usuário quantos bichinhos de estimação ele tem e
// guarde esse dado em uma variável.
// a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"

// const quantidadeBichos = +prompt("Quantos bichinhos de estimação você tem?");
// const numeroPets = [];

// if (quantidadeBichos === 0) {
//   console.log("Que pena! Você pode adotar um pet!");
// } else {
//   for (let i = 0; i < quantidadeBichos; i++) {
//     numeroPets.push(prompt("Qual o nome do seu pet?"));
//   }
//   console.log(numeroPets);
// }

// b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles,

// um por um, e guarde esses nomes em um array

// 💡 Dica

//⭐ Coloque o seu prompt dentro de um loop. Esse loop deve ser executado a mesma quantidade de vezes que o usuário inseriu. Por exemplo: se o usuário tem 4 pets, ele deve conseguir inserir 4 nomes.

// c) Por fim, imprima o array com os nomes dos bichinhos no console

// //**Considere que você tenha acesso a um array  (chamado de 'array original')
// // que é composto somente de números.
// baseando-se nisso,
// CRIE UMA FUNÇÃO
// para cada um dos itens abaixo, realizando as operações pedidas: */

// // arrayOriginal

// // a) Escreva um programa que **imprime** cada um dos valores do array original.

// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];

// const imprimeArray = (array) => {
//   console.log(arrayOriginal);
// };
// imprimeArray(arrayOriginal);

// // const resultado = arrayOriginal[0] / 10;

// // console.log(resultado);
// // B -  Escreva um programa que imprime cada um dos valores do array original divididos por 10
// for (const divisao of arrayOriginal) {
//   console.log(divisao / 10);
// }
// //************************************************************************************ */
// // c) Escreva um programa que crie um novo array contendo,
// // somente, os números pares do array original e imprima esse novo array

// for (const pares of arrayOriginal) {
//   if (pares % 2 === 0) {
//     console.log(`numeros pares: , ${pares}`);
//   }
// }
// d) Escreva um programa que crie um novo array contendo strings, da seguinte forma:
//  "O elemento do índex i é: numero". Depois, imprima este novo array.

// e) Escreva um programa que imprima no console o maior e o menor números
//  contidos no array original

// - 💡 Dica

//     Você deve criar variáveis para guardar o `valorMaximo` e o `valorMinimo`.
//     Inicialize a variável `valorMaximo` com um valor que não seja maior
//     que qualquer valor do array original e a `valorMinimo` com um valor que não seja menor que
//     qualquer valor do array original.
