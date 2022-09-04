import { Request, response, Response } from "express";
import { comprasUsuario, usuariosId } from "../data/comprasUsuario";
import { produtosEntrada } from "../data/produtosEntrada";
import { Compras } from "../types/compras";

export async function registroCompra(req: Request, res: Response) {
  try {
    const { user_id, product_id, quantity, total_price } = req.body;

    if (!user_id || !product_id || !quantity) {
      throw new Error("Favor preencher todos os campos");
    }

    const user = await usuariosId(user_id);

    if (!user) {
      res.statusCode = 404;
      throw new Error("Usuario não encontrado");
    }

    const compras: Compras = {
      id: Date.now().toString(),
      user_id,
      product_id,
      quantity,
      total_price,
    };
    console.log(compras);

    await comprasUsuario(compras);

    res.status(200).send("Compra registrada com sucesso!!! ");
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
}
