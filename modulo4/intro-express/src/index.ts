import express, { response } from "express";
import cors from "cors";
import { request } from "http";

const app = express();

app.use(express.json());
app.use(cors());

//exercicio 1
app.get("/primeira-api", (request, response) => {
  response.send("Hello from Express");
});

//exercicio 2

type DadosPessoais = {
  id: number;
  name: string;
  phone: string;
  email: string;
  website: string;
};

const dadosPessoais: DadosPessoais[] = [
  {
    id: 1,
    name: "Bret",
    phone: "1-770-736-8031 x56442",
    email: "Sincere@april.biz",
    website: "hildegard.org",
  },
  {
    id: 2,
    name: "Ervin Howell",
    phone: "010-692-6593 x09125",
    email: "Shanna@melissa.tv",
    website: "anastasia.net",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    phone: "1-463-123-4447",
    email: "Nathan@yesenia.net",
    website: "ramiro.info",
  },
];
app.get("/dadosPessoais", (request, response) => {
  response.send(dadosPessoais);
});

//exercicio 3 e 4

type ListaFuncionarios = {
  nome: string;
  cargo: string;
  salario: number;
  dataAdmissao: string;
};

const listaFuncionarios: ListaFuncionarios[] = [
  {
    nome: "Fernanda Tiyomi",
    cargo: "Desenvolvedora Jr",
    salario: 3500,
    dataAdmissao: "12/12/2022",
  },
  {
    nome: "Maria Caroline",
    cargo: "Desenvolvedora Jr",
    salario: 3500,
    dataAdmissao: "15/12/2022",
  },

  {
    nome: "Larissa Almeida",
    cargo: "Desenvolvedora Jr",
    salario: 3500,
    dataAdmissao: "17/12/2022",
  },
];

app.get("/listaFuncionarios/:nome", (request, response) => {
  const nome = request.params.nome;

  const acharFuncionario: ListaFuncionarios[] = listaFuncionarios.filter(
    (funcionario) => {
      return funcionario.nome.includes(nome);
    }
  );
  response.send(acharFuncionario);
});

app.get("/listaFuncionarios", (req, res) => {
  res.send(listaFuncionarios);
});

app.delete("/apagarFuncionario/:nome", (request, response) => {
  const nome = request.params.nome;
  const deletarFuncionario: ListaFuncionarios[] = listaFuncionarios.filter(
    (funcionario) => {
      return funcionario.nome !== nome;
    }
  );
  response.send(deletarFuncionario);
});

//exercicio 6

type Posts = {
  useId: number;
  id: number;
  title: string;
  body: string;
};

const posts: Posts[] = [
  {
    useId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    useId: 2,
    id: 2,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    useId: 3,
    id: 3,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    useId: 4,
    id: 4,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    useId: 5,
    id: 5,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
];

app.post("/criarposts", (request, response) => {
  response.send(posts);
});

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});
