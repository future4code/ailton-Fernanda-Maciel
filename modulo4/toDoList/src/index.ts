import express from "express";
import cors from "cors";
import { AddressInfo } from "net";
import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

export const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
});

const app = express();

app.use(express.json());
app.use(cors());

type User = {
  id: number;
  name: string;
  nickname: string;
  email: string;
};

const user: User[] = [];

// exercicio 1
// O seu código deve validar se os três campos estão completos (ou seja se não foram enviados ou se não estão vazios)
// e retornar um erro caso não estejam válidos.

app.post("/user", (request, response) => {
  let errorCode: number = 400;
  try {
    const { id, name, nickname, email } = request.body;
    if (!id || !name || !nickname || !email) {
      throw new Error("Não aceitamamos campos vazios.");
    }

    const newUser: User = {
      id,
      name,
      nickname,
      email,
    };
    user.push(newUser);
    response.status(200).send({ message: "Usuario criado com sucesso!!" });
  } catch (error: any) {
    response.status(errorCode).send({ message: error.message });
  }
});

// 2. Pegar usuário pelo id
app.get("/user/:id", (request, response) => {
  let errorCode: number = 400;
  try {
    const id: number = Number(request.params.id);
    if (!id) {
      errorCode = 402;
      throw new Error("Valor de id invalido.");
    }
    const usuario = user.find((users) => {
      return users.id === id;
    });
    if (!usuario) {
      errorCode = 404;
      throw new Error("Usuario não encontrado");
    }
    response.status(200).send(usuario);
  } catch (error: any) {
    response.status(errorCode).send({ message: error.message });
  }
});

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
