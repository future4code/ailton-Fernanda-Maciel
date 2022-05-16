//Exercicios de interpretação

// const filme = {
// 	nome: "Auto da Compadecida",
// 	ano: 2000,
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga",
// 		"Virginia Cavendish"
// 		],
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"},
// 		{canal: "Canal Brasil", horario: "19h"},
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2]) //

// 2. Leia o código abaixo

// const cachorro = {
// 	nome: "Juca",
// 	idade: 3,
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

// a) O que vai ser impresso no console?  "juca", 3, "SDR" / "juba",  3, "SDR" ,  "Jubo "- 3 "SRD"

// b) O que faz a sintaxe dos três pontos antes do nome de um objeto? // ele clona o objeto

// - **Exercícios de escrita de código**
//     1. Resolva os passos a seguir:

//         a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos]
//          (um array que sempre terá exatamente **três apelidos**). Depois,
//         escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo:

function recebeObjeto(obj) {
    console.log(
      `Eu sou ${obj.nome}, mas pode me chamar de : ${obj.apelidos[0]}, ${obj.apelidos[1]} ou ${obj.apelidos[2]}`
    );
  }

const pessoa = {
  nome: " Fernanda",
  apelidos: ["fer", "Mozi", "Mozzila"],
};


recebeObjeto(pessoa);


// b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome,
// mas com uma nova lista de três apelidos.
// Depois, chame a função feita no item anterior passando como argumento o novo objeto

const novaPessoa = {
  ...pessoa,
  apelidos: ["Fofinha", "Nene", "Fê"],
};

recebeObjeto(novaPessoa)

// 2. Resolva os passos a seguir:

//a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão.

const pessoal = {
  nome: " Jefferson Vitor",
  idade: 30,
  profissao: "Caminhoneiro",
};

const pessoal2 = {
  nome: " Fernanda",
  idade: 35,
  profissao: "Desenvolvedora",
};

// b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:

function ajustarDadosPessoa(pessoa) {
  const array = [];

  array.push(pessoa.nome);
  array.push(pessoa.nome.length);
  array.push(pessoa.idade);
  array.push(pessoa.profissao);
  array.push(pessoa.profissao.length);

  return array;
}

console.log(ajustarDadosPessoa(pessoal));
console.log(ajustarDadosPessoa(pessoal2));

//EXERCICIO 3
//Crie uma variável de escopo global que guarde um array vazio chamada carrinho.

const carrinho = [];

//Crie três novos objetos que representem frutas de um sacolão.
// Eles devem ter as seguintes propriedades: nome (string) e disponibilidade (boolean - devem começar como true)

const fruta = {
  nome: "Banana",
  disponibiliodade: true,
};

const fruta2 = {
  nome: "Maça",
  disponibiliodade: true,
};

const fruta3 = {
  nome: "Melão",
  disponibiliodade: true,
};
// c) Crie uma função que receba um objeto fruta por parâmetro e coloque-a dentro do array de carrinho.
// Invoque essa função passando os três objetos criados.

function sacolao(fruta) {
  carrinho.push(fruta);
}

sacolao(fruta);
sacolao(fruta2);
sacolao(fruta3);

// d) Imprima a variável carrinho e garanta que ela agora seja um array preenchido com três objetos.
console.log(carrinho);

//Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão
// e depois imprima no console um objeto com essas propriedades.
function perguntaUsuario () {

    const nome = prompt ("Qual o seu nome?")
    const idade = +prompt ("Qual a sua idade?")
    const profissao = prompt ("Qual a sua profissão?")
    console.log (nome, idade, profissao)
   console.log("Tipo nome : ",typeof nome) 
   console.log("tipo idade" , typeof idade)
   console.log ("tipo profissão:", typeof profissao)
}

perguntaUsuario()

//  Depois de imprimir o novo objeto, imprima também o tipo dele para garantir que é um objeto.
