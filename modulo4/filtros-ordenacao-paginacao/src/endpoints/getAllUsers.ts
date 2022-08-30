import { Request, Response } from "express";
import { connection } from "../app";
import { users } from "../types";

export async function getAllUsers(req: Request, res: Response): Promise<void> {
  try {
    let name = req.query.name;
    let ordenacao = req.query.order;
    let pagina = req.query.pagina;
    const produtosPorPagina = 2;

    const offset = produtosPorPagina * (Number(pagina) - 1);

    if (!name) {
      name = "";
    }

    if (!ordenacao) {
      ordenacao = "asc";
    }
    const result = await connection("aula48_exercicio").where(`${name}`);
    // const result = await connection.raw(`
    // SELECT * FROM aula48_exercicio WHERE NAME LIKE "%${name}%"

    // `);

    // const result = await connection.raw(`
    //     SELECT id, name, email, type FROM aula48_exercicio
    // `);

    if (!result.length) {
      res.statusCode = 404;
      throw new Error(`não consegui localizar o nome -> ${name}`);
    }

    const user = result.map((usuarios: any) => {
      const tipo: users = {
        id: usuarios.id,
        name: usuarios.name,
        email: usuarios.email,
        type: usuarios.type,
      };
      return tipo;
    });
    console.log(name);

    res.status(200).send(result);
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
}
