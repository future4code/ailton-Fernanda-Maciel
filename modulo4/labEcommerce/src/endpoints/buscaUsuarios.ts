import { Request, Response } from "express";
import { todosUsuarios } from "../data/todosUsuarios";

export async function buscaUsuarios(request: Request, response: Response) {
  try {
    const usuarios = await todosUsuarios();

    if (usuarios.length < 1) {
      response.statusCode = 404;
      throw new Error("Nenhum usuario cadastrado");
    }
    response.status(200).send(usuarios);
    console.log(usuarios);
  } catch (error: any) {
    response.status(500).send({ message: error.message });
  }
}
