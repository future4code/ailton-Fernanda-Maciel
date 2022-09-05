import { Request, response, Response } from "express";
import { isThisTypeNode } from "typescript";
import { comprasUsuario, produtosId, usuariosId } from "../data/comprasUsuario";
import { produtosEntrada } from "../data/produtosEntrada";
import { Compras } from "../types/compras";
import { produtosComprados } from "./produtosComprados";

export async function registroCompra(req: Request, res: Response) {
  try {
    const { user_id, product_id, quantity, total_price } = req.body;

    if (!user_id || !product_id || !quantity) {
      throw new Error("Favor preencher todos os campos");
    }

    const confirmacaoUsuario = await usuariosId(user_id);

    if (!confirmacaoUsuario) {
      res.statusCode = 404;
      throw new Error(`Usuario com o id ${user_id} não encontrado`);
    }

    const confirmacaoProduto = await produtosId(product_id);

    if (!confirmacaoProduto) {
      res.statusCode = 404;
      throw new Error(`Produto com o id ${product_id} não encontrado`);
    }

    const valorTotal = confirmacaoProduto.price * quantity;

    const compras: Compras = {
      id: Date.now().toString(),
      user_id,
      product_id,
      quantity,
      total_price: confirmacaoProduto.price * quantity,
    };
    console.log(compras);

    await comprasUsuario(compras);

    const resposta = await produtosComprados(compras);
    console.log(resposta);

    res.status(201).send({ message: resposta });
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
}
