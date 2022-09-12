import { EntradaUsuarios } from "../types/usuarios";
import { connection } from "./connection";

export async function todosUsuarios(): Promise<EntradaUsuarios[]> {
  const usuarios = await connection("labecommerce_users").select(
    "labecommerce_users.id",
    "labecommerce_users.name",
    "labecommerce_users.email"
  );
  return usuarios;
}
