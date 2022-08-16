import { dados } from "./dados.js";

const value = process.argv[2];
const result = dados.filter((itens) => {
  return itens.nome.toLowerCase().includes(value);
});
console.table(dados);
