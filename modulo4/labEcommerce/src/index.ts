import { cadastroUsuario } from "./endpoints/cadastroUsuario";
import { app } from "./app";
import { buscaUsuarios } from "./endpoints/buscaUsuarios";

app.post("/users", cadastroUsuario);

app.get("/users", buscaUsuarios);
