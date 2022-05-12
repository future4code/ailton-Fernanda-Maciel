// - **Exercícios de interpretação de código**
    
// Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 
    
//  1.  Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.

// let array
// console.log('a. ', array) //**RESPOSTA VAI DAR INDEFINIDO, POIS A VARIAVEL ARRAY NÃO TEM VALOR */

// array = null
// console.log('b. ', array) //**RESPOSTA VAI SER NULL, POIS  ARRAY ESTA COMO VARIAVEL NULL */

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] //**RESPOSTA 11 */
// console.log('c. ', array.length)

// let i = 0
// console.log('d. ', array[i]) //**DEU ERRO, MAS NÃO CONSIGO ACHAR O ERRO  */

// array[i+1] = 19
// console.log('e. ', array) //**DEU ERRO, MAS NÃO CONSIGO ACHAR O ERRO  */

// const valor = array[i+6]
// console.log('f. ', valor) //**DEU ERRO, MAS NÃO CONSIGO ACHAR O ERRO  */


// - **Exercícios de escrita de código**


//     1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. 

 
// const nome = prompt("Qual é o seu nome?")
// const email =prompt ("Qual é o su e-mail?")

// // Em seguida, Imprima no console a seguinte mensagem:
// // O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!
// console.log(`O E-mail ${email} foi cadastrado com sucesso!! Seja Bem - vinda (o) ${nome}`);

// 2 - Faça um programa que contenha um array com 5 das suas comidas preferidas, 
// armazenado em uma variável. Em seguida, siga os passos:
// let comidasPreferidas = ["Hamburguer","Polenta com molho", "Lasanha", "Pizza", "Churrasco"]

// // // // a) Imprima no console o array completo

// // console.log(comidasPreferidas)

// // // b) Imprima no console a mensagem
// // // //  "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, 
// // // **uma embaixo da outra**.

// console.log(`Essas são as minhas comidas preferidas 

// "Hamburguer"
// "Polenta com molho"
// "Lasanha"
// "Pizza"
// "Churrasco"`)

// // c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. 
// Troque a segunda comida da sua lista pela inserida pelo usuário.
//  Imprima no console a nova lista

// const comidaPreferidaUser = prompt("Qual a sua comida preferida?")
// comidasPreferidas[1] = comidaPreferidaUser

// console.log(comidasPreferidas)



// 3. Faça um programa, seguindo os passos:
    
// a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`

const listaDeTarefas = []
    
/*
    b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, 
    uma por uma, no array
*/

const primeiraTarefa = prompt("Qual a sua primeira tarefa diaria?")
const segundaTarefa = prompt("Qual a sua segunda tarefa diaria?")
const terceiraTarefa = prompt("Qual a sua terceira tarefa diaria?")

listaDeTarefas.push(primeiraTarefa, segundaTarefa, terceiraTarefa)
    
// c) Imprima o array no console
console.log(listaDeTarefas)

// d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
const indice = prompt("Por favor digite o índice para acessar a tarefa. 0,1 ou 2")
console.log(listaDeTarefas[indice])

// e) Remova da lista o item de índice que o usuário escolheu.
listaDeTarefas.splice(indice, 1)

// ['Feijão', 'Batata', 'Arroz']
// 0, 1, 2
// 0 - Feijão
// inicio = 0
// fim (opcional) = 0 + 2

// f) Imprima o array no console
console.log (listaDeTarefas)
