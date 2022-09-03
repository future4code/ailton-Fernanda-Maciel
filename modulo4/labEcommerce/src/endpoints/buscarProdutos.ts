import { Request, response, Response } from "express";
import { todosProdutos } from "../data/todosProdutos";

export async function buscarProdutos(req: Request, res: Response) {
  try {
    const produtos = await todosProdutos();

    if (produtos.length < 1) {
      res.statusCode = 404;
      throw new Error("nenhum produto cadastrado");
    }

    res.status(200).send(produtos);
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
}
