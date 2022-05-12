// - **Exercícios de interpretação de código**
    
// //     Tente responder os exercícios dessa seção sem executar o código. 
// Se ficar muito difícil, pode rodar no seu computador **
// //     para analisar e pensar sobre o resultado.**
// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log (minhaFuncao(2))
// console.log (minhaFuncao(10))


// a) O que vai ser impresso no console? //aparece a multiplicação dos numeros 2 e 10

// b) O que aconteceria se retirasse os dois `console.log`  

// e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console? //IA DAR ERRO 


//Exercicio 2 

// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)
// console.log(textoDoUsuario)

// a. Explique o que essa função faz e qual é sua utilidade

// b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//      i.   `Eu gosto de cenoura` - //inseri um console.log com a variavel texto do usuario para ver no console o que foi digitado 
//      ii.  `CENOURA é bom pra vista` - não funcionou todas minusculas
//      iii. `Cenouras crescem na terra` - aparece true para a função includes



//**EXERCICIO DE ESCRITA DE CÓDIGO */


    // 1. Escreva as funções explicadas abaixo:
        
    //a) A função não deve receber nenhum parâmetro
    // e deve imprimir uma mensagem falando algumas informações sobre você, como: 
        
    //     ```
    // "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
    //     ```
        
    //  Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. 
    // Lembrando que a função não possui entradas, apenas imprime essa mensagem.


    // function quemSouEu () {

    //     return "Olá, eu sou a Fernanda, tenho 35 anos, moro em Curitiba e sou estudante"

    // }
    // const resultado = quemSouEu ("Olá, eu sou a Fernanda, tenho 35 anos, moro em Curitiba e sou estudante")
    // console.log(resultado)

// console.log ("Olá eu sou a Fer, tenho 35 anos, moro em Curitiba e sou estudante")

// // b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: 
// o nome (`string`), a idade (`number`), a cidade (`string`) e uma profissão (`string`). 
// Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:


// const nome = "Fernanda"
// const idade = 35
// const cidade = "Curitiba"
// const profissao = "Estudante"


// function quemSouEu (nome, idade, cidade, profissao) {
//     return `Olá eu sou a ${nome} e tenho ${idade} , e moro em ${cidade} e sou ${profissao}`
// }

// console.log (`Olá eu sou a ${nome} e tenho ${idade} , e moro em ${cidade} e sou ${profissao}`)

// const resultado = quemSouEu(nome, idade, cidade, profissao)
// console.log(resultado)


// 2. Escreva as funções explicadas abaixo:
    
    // a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, 
    // faça a soma das duas entradas e retorne o resultado. 
    // Invoque a função e imprima no console o resultado.

    
    // const numero1 = 35
    // const numero2 = 30


    //    function recebeNumeros (num1 , num2){

    //     return numero1 + numero2


    //    }
    //     const resultado = recebeNumeros (numero1, numero2)
    //     console.log(resultado)
    


    // b) Faça uma função que recebe 2 números 
    // e retorne um booleano que informa se o primeiro número é
    //  **maior ou igual** ao segundo.


    // const numero1 = 50
    // const numero2 = 236
    
    // function doisNumeros   (num1 , num2)  {

    //     return numero1 >= numero2

    // }
    // const resultado = doisNumeros (numero1 >= numero2)
    // console.log (resultado)

    // c) Escreva uma função que receba um número e devolva um booleano
    //  indicando se ele é par ou não

    // const numero1 = 500
    //     function receba1 (numero1) {

    //     return numero1 % 2

    //     }
    //     const resultado = receba1 (numero1 % 2)
    //     console.log (resultado)  // no caso meu numero é PAR, deu zero. 

    // d) Faça uma função que recebe uma mensagem (string) como parâmetro e imprima o tamanho dessa mensagem, 
    // juntamente com uma versão dela em letras maiúsculas.


 

    // function formatar (mensagem) {
    //     return [mensagem, mensagem.length, mensagem.toUpperCase()]
    // }


    // const resultado = formatar('O dia está lindo mas nem sempre é assim na minha cidade.')
    // console.log('Normal: ', resultado[0])
    // console.log('Tamanho: ', resultado[1])
    // console.log('Maiusculo: ', resultado[2])
    
    
    // Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). 
    // Em seguida, peça para o usuário inserir dois números e 
    // chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. 
    // Por fim, mostre no console o resultado das operações:

    // Números inseridos: 30 e 3
    // Soma: 33
    // Diferença: 27
    // Multiplicação: 90
    // Divisão: 10

//     const numero1 = +prompt("insira um numero")
//     const numero2 = +prompt("insira o segundo numero")

//     function operacoes (number1, number2) {
        
//         return [numero1+numero2, numero1-numero2, numero1*numero2, numero1/numero2]

      
//     }

//   console.log( numero1+numero2, numero1-numero2, numero1*numero2, numero1/numero2)










    





