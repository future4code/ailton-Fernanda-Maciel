import { EntradaProdutos } from "../types/produtos";
import { connection } from "./connection";

export async function produtosEntrada(
  entradaProdutos: EntradaProdutos
): Promise<void> {
  //   const { id, name, price, image_url } = entradaProdutos;

  await connection("labecommerce_products").insert({
    id: entradaProdutos.id,
    name: entradaProdutos.name,
    price: entradaProdutos.price,
    image_url: entradaProdutos.image_url,
  });
}
