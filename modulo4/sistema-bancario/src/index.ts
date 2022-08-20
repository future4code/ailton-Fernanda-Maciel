import express from "express";
import cors from "cors";
import { constants } from "buffer";

const app = express();
app.use(express.json());
app.use(cors());

type Transacao = {
  valor: number;
  data: Date;
  descricao: string;
};
type Conta = {
  name: string;
  CPF: string;
  dataNascimento: Date;
  saldo: number;
  extrato: Transacao[];
};

const conta: Conta[] = [];

app.post("/cadastrar-conta", (request, response) => {
  try {
    const { name, CPF, dataNascimentoAsString } = request.body;
    const [dia, mes, ano] = dataNascimentoAsString.split("/"); //[06,06,1986]
    const dataNascimento: Date = new Date(`${ano}-${mes}-${dia}`);

    //validar as entradas de requisição// Milisegundos
    const age: number = Date.now() - dataNascimento.getTime();
    const idadeAnos: number = age / 1000 / 60 / 60 / 24 / 365;

    if (idadeAnos < 18) {
      response.statusCode = 406;
      throw new Error("Idade deve ser maior que 18 anos");
    }
    conta.push({ name, CPF, dataNascimento, saldo: 0, extrato: [] });

    response.status(201).send("Conta criada com sucesso");
  } catch (error: any) {
    response.status(400).send({ message: error.message });
    console.log(error);
  }
});

app.get("/usuarios/todos", (request, response) => {
  try {
    if (!conta.length) {
      response.statusCode = 404;
      throw new Error("Nenhuma conta encontrada");
    }

    response.status(200).send(conta);
  } catch (error: any) {
    response.send({ message: error.message });
  }
});

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});
