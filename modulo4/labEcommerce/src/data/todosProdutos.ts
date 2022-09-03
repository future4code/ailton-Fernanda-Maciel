import { EntradaProdutos } from "../types/produtos";
import { connection } from "./connection";

export async function todosProdutos(): Promise<EntradaProdutos[]> {
  const produtos = await connection("labecommerce_products").select(
    "labecommerce_products.id",
    "labecommerce_products.name",
    "labecommerce_products.price",
    "labecommerce_products.image_url"
  );
  return produtos;
}
