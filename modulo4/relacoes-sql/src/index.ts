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

//exercicio 1
// a) Explique o que é uma chave estrangeira
//resposta: É a FOREIGN KEY, onde se cria uma relação com outra tabela.

// b) Crie a tabela e, ao menos, uma avaliação para cada um dos filmes

// INSERT INTO Rating (id, comment, rate, movie_id)
// VALUES (
//     "001",
//     "Adorei o filme!",
//     8,
//     "005"
// )

//c) Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.
// INSERT INTO Rating (id, comment, rate, movie_id)
// VALUES (
// 		"002",
//     "Filme muito longo!",
//     5,
// 		"00m"
// );

// d) Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
