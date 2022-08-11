// O Typescript é uma linguagem um pouco mais criteriosa que o Javascript, então vamos conhecer um pouco desses critérios.
// a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?
var minhaString = "Olá Mundo!!!";
// b) Crie uma variável meuNumero do tipo number e atribua um valor numérico.
// Como fazer para que essa variável também aceite strings?
// Ou seja, como criamos no typescript uma variável que aceite mais de um tipo de valor?
var meuNumero; // union type
//Crie mais três objetos, que também precisam ter apenas os campos definidos acima.
// Crie um tipo Pessoa para garantir que todos os objetos tenham os mesmos campos.
var novaPessoa = {
    nome: "Fernanda",
    idade: 36,
    corFavorita: "Roxo"
};
console.table(novaPessoa);
// d) Modifique a propriedade corFavorita para que apenas seja possível escolher entre as cores do arco-íris. Utilize um enum para isso.
var CorFavorita;
(function (CorFavorita) {
    CorFavorita["VERMELHO"] = "vermelho";
    CorFavorita["LARANJA"] = "laranja";
    CorFavorita["AMARELO"] = "amarelo";
    CorFavorita["VERDE"] = "verde";
    CorFavorita["AZUL"] = "azul";
    CorFavorita["VIOLETA"] = "violeeta";
})(CorFavorita || (CorFavorita = {}));
var novaPessoa1 = {
    nome: "Mozilla",
    idade: 31,
    corFavorita: CorFavorita.AZUL
};
console.table(novaPessoa1);
