import { Compras } from "../types/compras";
import { EntradaUsuarios } from "../types/usuarios";
import { connection } from "./connection";

export const comprasUsuario = async (compras: Compras): Promise<void> => {
  await connection("labecommerce_purchases").insert({
    id: compras.id,
    user_id: compras.user_id,
    product_id: compras.product_id,
    quantity: compras.quantity,
    total_price: compras.total_price,
  });
};

export const usuariosId = async (userId: string): Promise<EntradaUsuarios> => {
  const usuario = await connection("labecommerce_users").where({ id: userId });

  return usuario[0];
};
