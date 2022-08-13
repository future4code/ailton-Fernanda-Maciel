//exercicio 1
var Setor;
(function (Setor) {
    Setor["MARKETING"] = "marketing";
    Setor["VENDAS"] = "vendas";
    Setor["FINANCEIRO"] = "financeiro";
})(Setor || (Setor = {}));
var listaFuncionarios = [
    { nome: "Marcos", salário: 2500, setor: Setor.MARKETING, presencial: true },
    { nome: "Maria", salário: 1500, setor: Setor.VENDAS, presencial: false },
    { nome: "Salete", salário: 2200, setor: Setor.FINANCEIRO, presencial: true },
    { nome: "João", salário: 2800, setor: Setor.MARKETING, presencial: false },
    { nome: "Josué", salário: 5500, setor: Setor.FINANCEIRO, presencial: true },
    { nome: "Natalia", salário: 4700, setor: Setor.VENDAS, presencial: true },
    { nome: "Paola", salário: 3500, setor: Setor.MARKETING, presencial: true },
].filter(function (itens) {
    return itens.setor === "marketing" && itens.presencial === true;
});
console.table(listaFuncionarios);
