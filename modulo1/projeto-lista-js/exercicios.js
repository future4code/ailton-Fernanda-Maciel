// // EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// // EXERCÍCIO 0A
// function soma(num1, num2) {
// //
//   return num1 + num2
// }

// // EXERCÍCIO 0B
// function imprimeMensagem() {
//   // implemente sua lógica aqui
//   const mensagem = prompt('Digite uma mensagem!')

//   console.log(mensagem)
// }

// // EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = +prompt("Qual a altura do retangulo?");
  const largura = +prompt("Qual largura do retangulo?");
  const resultado = altura * largura;
  console.log(resultado);
  return resultado;
}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = +prompt("qual o ano atual?");
  const anoNascimento = +prompt("qual o seu ano de nascimento?");

  const suaIdade = anoAtual - anoNascimento;
  console.log(suaIdade);
  return suaIdade;
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return peso / (altura * altura);
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Qual o seu nome?");
  const idade = prompt("qual a sua idade?");
  const email = prompt("qual o seu email?");

  const resultado = `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`;

  console.log(resultado);
  return resultado;
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const primeiraCor = prompt("Qual é a sua primeira cor favorita?");
  const segundaCor = prompt("Qual é a sua segunda cor favorita?");
  const terceiraCor = prompt("Qual é a sua terceira cor favorita?");
  console.log([primeiraCor, segundaCor, terceiraCor]);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(texto) {
  return texto.toUpperCase();
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo / valorIngresso;
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length === string2.length;
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0];
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length - 1];
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const primeiro = array[0];
  const ultimo = array[array.length - 1];
  array[0] = ultimo;
  array[array.length - 1] = primeiro;
  return array;
}

// // EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toLowerCase() === string2.toLowerCase();
}

// EXERCÍCIO 13
function checaRenovacaoRG() {


 


}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui


}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {




}
