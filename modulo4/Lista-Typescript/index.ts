//exercicio 1

// let nome: string = "Fernanda";
// let nascimento: string = "06/06/1986";
// let separar: string[] = nascimento.split(" /", 3);

// console.log(
//   `Olá me chamo ${nome}, nasci no dia ${separar} no mês ${separar} do ano ${separar}}`
// );

// // exercicio 2

// function soma(a: number, b: number) {
//   return a + b;
// }
// console.log(soma(12, 35));

// // exercicio 3

// enum GeneroMovies {
//   ACAO = "ação",
//   DRAMA = "drama",
//   COMEDIA = "comédia",
//   ROMANCE = "romance",
//   TERROR = "terror",
// }

// type Movies = {
//   name: string;
//   ano: string;
//   genero: string;
//   pontuacao: string;
// };

// const filmes = {
//   name: " Continencia do amor",
//   ano: "13/07/2022",
//   genero: GeneroMovies.ROMANCE,
// };
// console.log(filmes);

// // exercicio 4

type funcionarios = {
  nome: string;
  salario: number;
  setor: string;
  presencial: boolean;
};
enum Setor {
  MARKETING = "marketing",
  VENDAS = "vendas",
  FINANCEIRO = "financeiro",
}

const listaFuncionarios = [
  { nome: "Marcos", salário: 2500, setor: Setor.MARKETING, presencial: true },
  { nome: "Maria", salário: 1500, setor: Setor.VENDAS, presencial: false },
  { nome: "Salete", salário: 2200, setor: Setor.FINANCEIRO, presencial: true },
  { nome: "João", salário: 2800, setor: Setor.MARKETING, presencial: false },
  { nome: "Josué", salário: 5500, setor: Setor.FINANCEIRO, presencial: true },
  { nome: "Natalia", salário: 4700, setor: Setor.VENDAS, presencial: true },
  { nome: "Paola", salário: 3500, setor: Setor.MARKETING, presencial: true },
].filter((itens) => {
  return itens.setor === "marketing" && itens.presencial === true;
});
console.table(listaFuncionarios);
