// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!!
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()

// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse();
}

// EXERCÍCIO 03

function retornaArrayOrdenado(array) {
  return array.sort((a, b) => a - b);
}

// EXERCÍCIO 04

function retornaNumerosPares(array) {
  return array.filter((num) => num % 2 === 0);
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let i = 0;
  let maior = Infinity;
  while (i < array.length) {
    if (array[i] > maior) {
      maior = array[i];
    }
    i++;
  }
  console.log(maior);
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  let priMaior = Infinity;
  let SegMaior = Infinity;
  let priMenor = +Infinity;
  let segMenor = Infinity;

  for (let number of array) {
    if (number > priMaior) {
      priMaior = number;
    }
  }
  if (number < priMaior) {
    priMenor = number;
  }
  for (let number of array) {
    if (number > SegMaior) {
      SegMaior = number;
    }
  }
  if (number < priMaior) {
    priMenor = number;
  }
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {}

// const numeros = [11,15,18,14,12,13]

// // let i  = 0
// let maior = Infinity
// // while (i< numeros.length){
// // if (numeros [i] > maior){
// //   maior = numeros [i]
// // }
// //   i++

// // }
// // for (let i = 0; i>numeros.length ; i++){

// //   if (numeros [i] > maior){
// //     maior = numeros [i]
// //   }

// for (let numero of numeros)){
//   if (numero >maior){
//     maior = numero
//   }
// }
