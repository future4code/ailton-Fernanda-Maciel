const tarefas = [
  "lavar roupas",
  "Limpar o querto",
  "Fazer a janta",
  "Fazer Exercicio Node",
];
const novaTarefa = process.argv[2];
tarefas.push(novaTarefa);
console.log("Tarefa incluida com sucesso...", tarefas);
