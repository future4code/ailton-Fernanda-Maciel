import { Request, Response } from "express";
import usuariosEntrada from "../data/usuariosEntrada";
import { EntradaUsuarios, Usuarios } from "../types/usuarios";

export async function cadastroUsuario(req: Request, res: Response) {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      throw new Error("Os campos são obrigatórios!!");
    }

    const entradaUsuarios: EntradaUsuarios = {
      id: Date.now().toString(),
      name,
      email,
      password,
    };
    console.log(entradaUsuarios);

    await usuariosEntrada(entradaUsuarios);

    res.status(201).send("Usuario criado com sucesso");
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
    console.log(error);
  }
}
