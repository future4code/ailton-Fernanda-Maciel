import { Compras } from "../types/compras";
import { EntradaProdutos } from "../types/produtos";
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

// função para verificar o id do usuario com a tabela users
export async function usuariosId(userId: string): Promise<EntradaUsuarios> {
  const [result] = await connection(" labecommerce_users")
    .select("*")
    .where({ id: userId });

  const typeUsusario: EntradaUsuarios = {
    id: result.id,
    name: result.name,
    email: result.email,
    password: result.password,
  };
  console.log(typeUsusario);
  return typeUsusario;
}

// função para verificar o id do produto com a tabela products

export async function produtosId(product_id: string): Promise<EntradaProdutos> {
  const [result] = await connection("labecommerce_products")
    .select("*")
    .where({ id: product_id });

  const typeProduto: EntradaProdutos = {
    id: result.id,
    name: result.name,
    price: result.price,
    image_url: result.image_url,
  };
  console.log(typeProduto);
  return typeProduto;
}
