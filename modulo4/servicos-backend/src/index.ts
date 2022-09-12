import { criarEndereco } from "./endpoints/criarEndereco";
import { app } from "./app";

app.post("/cadastro-cep/:cep", criarEndereco);
