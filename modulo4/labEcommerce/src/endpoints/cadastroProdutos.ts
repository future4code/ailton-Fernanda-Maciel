import { request, Request, response, Response } from "express";
import { produtosEntrada } from "../data/produtosEntrada";
import { EntradaProdutos } from "../types/produtos";

export async function cadastroProdutos(req: Request, res: Response) {
  try {
    const { name, price, image_url } = req.body;
    if (!name || !price || !image_url) {
      throw new Error("Todos os campos devem ser preenchidos");
    }

    const entradaProdutos: EntradaProdutos = {
      id: Date.now().toString(),
      name,
      price,
      image_url,
    };

    console.log(entradaProdutos);

    await produtosEntrada(entradaProdutos);

    res.status(200).send("Produto cadastrado com Sucesso!!");
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
}
