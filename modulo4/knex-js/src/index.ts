import express, { Express } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { Request, Response } from "express";

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

const app: Express = express();
app.use(express.json());
app.use(cors());

// exercicio1
// A) Explique como é a resposta que temos quando usamos o raw.
//resposta: ele mostra o primeiro ID do banco.

// B)Faça uma função que busque um ator pelo nome;
const buscarAtor = async (nome: string): Promise<any> => {
  const resultado = await connection.raw(
    ` SELECT * FROM Actor WHERE name = "${nome}"`
  );
  return resultado;
};
// C)Faça uma função que receba um gender retorne a quantidade de itens na tabela Actor com esse gender. Para atrizes, female e para atores male.
const countActors = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
      SELECT COUNT(*)  FROM Actor WHERE gender = "${gender}"

    `);
  console.log(result);
  const count = result[0][0];
  return count;
};
app.get("/quantidade", async (request, response) => {
  const resultado = await countActors("female");
  response.send(resultado);
});

// exercicio 2
// a) *Uma função que receba um salário e um id e realiza a atualização do salário do ator em questão*

const atualizaSalario = async (id: string, salary: number): Promise<any> => {
  await connection("Actor")
    .update({
      salary: salary,
    })
    .where("id", id);
};

// b) Uma função que receba um id e delete um ator da tabela
const deleteActor = async (id: string): Promise<void> => {
  await connection("Actor").delete().where("id", id);
};
// c) Uma função que receba um `gender` e devolva a média dos salários de atrizes ou atores desse `gender`*
const avgSalary = async (gender: string): Promise<any> => {
  const result = await connection("Actor")
    .avg("salary as average")
    .where({ gender });

  return result[0].average;
};

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
