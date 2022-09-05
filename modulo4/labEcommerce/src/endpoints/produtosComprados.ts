import { connection } from "../data/connection";
import { Compras } from "../types/compras";

export async function produtosComprados(compras: Compras): Promise<string> {
  const { id, user_id, product_id, quantity, total_price } = compras;

  await connection("labecommerce_purchases").insert({
    id,
    user_id: user_id,
    product_id: product_id,
    quantity,
    total_price: total_price,
  });
  return `compra numero de id ${compras} registrada com sucesso!!`;
}
