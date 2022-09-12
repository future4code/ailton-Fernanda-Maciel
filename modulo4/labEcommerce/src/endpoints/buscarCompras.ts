import { request, Request, Response } from "express";
import { compraPorUsuario } from "../data/compraPorUsuario";

export async function buscarCompras(req: Request, res: Response) {
  try {
    const { user_id } = req.params;

    const compras = await compraPorUsuario(user_id);

    if (!compras) {
      res.statusCode = 404;
      throw new Error("não existe compra realizada por esse usuario.");
    }

    res.status(200).send(compras);
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
}
