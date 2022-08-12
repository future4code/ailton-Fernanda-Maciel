//exercicio 1
var GeneroMovies;
(function (GeneroMovies) {
    GeneroMovies["ACAO"] = "a\u00E7\u00E3o";
    GeneroMovies["DRAMA"] = "drama";
    GeneroMovies["COMEDIA"] = "com\u00E9dia";
    GeneroMovies["ROMANCE"] = "romance";
    GeneroMovies["TERROR"] = "terror";
})(GeneroMovies || (GeneroMovies = {}));
var filmes = {
    name: " Continencia do amor",
    ano: "13/07/2022",
    genero: GeneroMovies.ROMANCE
};
console.table(filmes);
