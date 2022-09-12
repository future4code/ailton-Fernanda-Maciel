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

app.post("/user", async (request, response) => {
  let errorCode: number = 400;
  try {
    const { id, name, nickname, email } = request.body;
    if (!id || !name || !nickname || !email) {
      throw new Error("Não aceitamamos campos vazios.");
    }

    await connection.raw(
      `INSERT INTO users ( name, nickname, email)
        
        VALUES ("${id}", "${name}", "${nickname}", "${email}")`
    );
    response.status(200).send({ message: "Usuario criado com sucesso!!" });
    console.log(name);
  } catch (error: any) {
    response.status(errorCode).send({ message: error.message });
  }
});

// 2. Pegar usuário pelo id
app.get("/user/:id", async (request, response) => {
  try {
    const findUser = await connection("users").select("id");
    if (!findUser.length) {
      response.statusCode = 404;
      throw new Error("Nenhum usuario cadastrado.");
    }
    response.status(200).send(findUser);
    console.log(findUser);
  } catch (error: any) {
    response.status(400 || 500).send({ message: error.message });
  }
});

// exercicio 3
// Editar usuário

app.put("/user/:edit/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const { name, nickname, email } = request.body;
    if (!name || !nickname || !email) {
      response.statusCode = 400;
      throw new Error("Nenhum usuario cadastrado.");
    }
  } catch (error: any) {
    if (response.statusCode === 200) {
      response.status(500).send(error.message);
    } else {
      response.status(response.statusCode).send(error.message);
    }
  }
});

// exercicio 4
// Criar tarefa

app.post("/task", (request, response) => {
  try {
    const { title, description, limit_date } = request.body;

    if (!title || !description || !limit_date) {
      response.statusCode = 400;
      throw new Error("preencha todos os campos");
    }
  } catch (error: any) {
    if (response.statusCode === 200) {
      response.status(500).send(error.message);
    } else {
      response.status(response.statusCode).send(error.message);
    }
  }
});

// exercicio 5
app.get("/task/:id", (request, response) => {
  try {
    const { id } = request.params;
    if (!id) {
      response.statusCode = 400;
      throw new Error("Preencha o id");
    }
  } catch (error: any) {
    if (response.statusCode === 200) {
      response.status(500).send(error.message);
    } else {
      response.status(response.statusCode).send(error.message);
    }
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
