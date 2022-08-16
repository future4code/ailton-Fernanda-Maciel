// O Typescript é uma linguagem um pouco mais criteriosa que o Javascript, então vamos conhecer um pouco desses critérios.

// a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?

const minhaString: string = "Olá Mundo!!!";

// b) Crie uma variável meuNumero do tipo number e atribua um valor numérico.
// Como fazer para que essa variável também aceite strings?
// Ou seja, como criamos no typescript uma variável que aceite mais de um tipo de valor?

let meuNumero: string | number; // union type

// c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:

// `nome`, que é uma string;

// `idade`, que é um número;

// `corFavorita`, que é uma string.
//Type Aliases
type person = {
  nome: string;
  idade: number;
  corFavorita: string;
};

//Crie mais três objetos, que também precisam ter apenas os campos definidos acima.
// Crie um tipo Pessoa para garantir que todos os objetos tenham os mesmos campos.
const novaPessoa: person = {
  nome: "Fernanda",
  idade: 36,
  corFavorita: "Roxo",
};
console.table(novaPessoa);

// d) Modifique a propriedade corFavorita para que apenas seja possível escolher entre as cores do arco-íris. Utilize um enum para isso.

enum CorFavorita {
  VERMELHO = "vermelho",
  LARANJA = "laranja",
  AMARELO = "amarelo",
  VERDE = "verde",
  AZUL = "azul",
  VIOLETA = "violeeta",
}

const novaPessoa1: person = {
  nome: "Mozilla",
  idade: 31,
  corFavorita: CorFavorita.AZUL,
};
console.table(novaPessoa1);
