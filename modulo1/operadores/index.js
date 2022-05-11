//# 1 - EXERCICIO DE INTERPRETAÇÃO 

// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado)    

//#Resultado correto: FALSO, pois True && False = FALSO

// resultado = bool1 && bool2 && bool3 
// console.log("b. ", resultado)  

// /**/ Resultado : FALSO, POIS PRECISA SER TODOS TRUE

// resultado = !bool3 && (bool1 || bool2)  
// console.log("c. ", resultado)   // //# deu erro pois o correto era boll3 no lugar de resultado//

// console.log("d. ", typeof resultado) 
/*RESPOSTA: RESULTADO BOOLEAN POIS COLOCANDO O TYPEOF NA FRENTE APARECE  QUAL A VARIAVEL.*/ 

//# exercicio 2

// let primeiroNumero = +prompt("Digite um numero!")  
// let segundoNumero = +prompt("Digite outro numero!")

// const soma = primeiroNumero + segundoNumero

// console.log(soma)

/**RESPOSTA: O comando prompt altera tudo pra string.
// então para deixar como number e dar certo precisa colocar o sinal de + antes do prompt. */

// EXERCICIO 3





//## Exercícios de escrita de código

// const idadeUsuario = +prompt("Qual a sua idade?")
// const IdadeAmigo = +prompt("Qual a idade do seu melhor amigo (a)?")
// const resultado = idadeUsuario > IdadeAmigo

// console.log (`"Sua idade é maior do que a do seu melhor amigo?" ${resultado}`)

/// EXERCICIO 2

// const numeroPar = +prompt("Digite um numero Par") //Testei com diferentes numeros pares, e sempre resultado Zero
// const ValorDivisao = 2

// const resultado = numeroPar % ValorDivisao

// console.log(resultado)

 /**Testei com diferentes numeros impares, sempre o mesmo resultado de 1 */


//**EXERCICIO 3 */



// const idade = prompt("Qual a sua Idade?")

// const idadeMeses = 12 
// const idadeDias = 365
// const idadeHoras = 8760

// const resultadoMeses = idade * idadeMeses
// const resultadoDias = idade * idadeDias
// const resultadoHoras = idade * idadeHoras
// console.log (`A sua idade é ${idade} , sua idade em meses é ${resultadoMeses} , a sua idade em dias é ${resultadoDias} , e a sua idade em horas é ${resultadoHoras}`)
 

//#EXERCICIO 4

const numero1 = prompt("Insira um numero?")
const numero2 = prompt("insira outro numero?")

const resultado = numero1 > numero2
const resultado1 = numero1 === numero2
const resultado2 = (numero1 % numero2) ===0
const resultado3 = (numero2 % numero1) ===0

console.log (resultado, resultado1, resultado2, resultado3)


