//exercicio 1

// let nome: string = "Fernanda";
// let nascimento: string = "06/06/1986";
// let separar: string[] = nascimento.split(" /", 3);

// console.log(
//   `Olá me chamo ${nome}, nasci no dia ${separar} no mês ${separar} do ano ${separar}}`
// );

// // exercicio 2
// const nome = "Fernanda Desenvolvedora";
// function pessoa(nome: string) {
//   return nome;
// }
// console.log(nome);

// // exercicio 3

type Movies = {
  name: string;
  ano: string;
  genero: string;
};

enum GeneroMovies {
  ACAO = "ação",
  DRAMA = "drama",
  COMEDIA = "comédia",
  ROMANCE = "romance",
  TERROR = "terror",
}

const filmes = {
  name: " Continencia do amor",
  ano: "13/07/2022",
  genero: GeneroMovies.ROMANCE,
};

console.table(filmes);
