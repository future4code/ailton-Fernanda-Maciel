import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

//exercicio 1
app.get("/digaOla", (request, response) => {
  response.send("Diga Olá, Terraqueo!!");
});

//exercicio 2

type Afazeres = {
  userId: number;
  id: number;
  title: string;
  completede: boolean;
};

//exercicio 3
const afazeres: Afazeres[] = [
  {
    userId: 1,
    id: 1,
    title: "Ir para academia",
    completede: false,
  },
  {
    userId: 1,
    id: 2,
    title: "Fazer a janta",
    completede: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fazer os exercicios de typescript",
    completede: false,
  },
  {
    userId: 1,
    id: 4,
    title: "Tomar chá",
    completede: true,
  },

  {
    userId: 1,
    id: 4,
    title: "fazer almoço",
    completede: true,
  },
  {
    userId: 1,
    id: 4,
    title: "Lavar a louça",
    completede: true,
  },
  {
    userId: 1,
    id: 4,
    title: "Dar almoço para os pets",
    completede: true,
  },
];

//exercicio 4

app.get("/afazeres", (request, response) => {
  const retornaTrue = afazeres.filter((tarefa) => {
    if (tarefa.completede === true) {
      return tarefa;
    }
  });
  response.send(retornaTrue);
});

//exercicio 5
app.post("/criarAfazeres", (request, response) => {
  const { userId, id, title, completede } = request.body;
  const novaTarefa: Afazeres = {
    userId,
    id,
    title,
    completede,
  };
  afazeres.push(novaTarefa);
  response.send(afazeres);
});
console.log(afazeres);

//exercicio 6

app.put("/editarTarefas/:completede", (request, response) => {
  const completas = request.params.completede;
  const { title, completede } = request.body;

  const procurarTarefas: Afazeres[] = afazeres.filter((tarefas) => {
    return tarefas.title === completas;
  });
  console.log(procurarTarefas);
});

//exercicio 7

app.delete("/deletarTarefa/:title", (request, response) => {
  const titulo = request.params.title;

  const deletarTarefa: Afazeres[] = afazeres.filter((tarefa) => {
    return tarefa.title !== titulo;
  });
  response.send(deletarTarefa);
});

// exercicio 8

app.get("/retornaTarefas/:title", (request, response) => {
  const titulo = request.params.title;

  const retornaTarefa: Afazeres[] = afazeres.filter((tarefa) => {
    return tarefa.title.includes(titulo);
  });
  response.send(retornaTarefa);
});

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});
