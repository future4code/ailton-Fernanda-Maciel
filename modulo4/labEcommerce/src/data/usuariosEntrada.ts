import { EntradaUsuarios } from "../types/usuarios";
import { connection } from "./connection";

export default async function usuariosEntrada(
  usuariosEntrada: EntradaUsuarios
): Promise<string> {
  const { id, name, email, password } = usuariosEntrada;
  await connection("labecommerce_users").insert({
    id,
    name,
    email,
    password,
  });
  return `Usuario ${name} criado com sucesso!!!`;
}
