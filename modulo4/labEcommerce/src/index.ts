import { cadastroUsuario } from "./endpoints/cadastroUsuario";
import { app } from "./app";
import { buscaUsuarios } from "./endpoints/buscaUsuarios";
import { cadastroProdutos } from "./endpoints/cadastroProdutos";
import { buscarProdutos } from "./endpoints/buscarProdutos";

//cadastro Usuario
app.post("/users", cadastroUsuario);

// Busca todos usuarios
app.get("/users", buscaUsuarios);

// Cadastro de produtos

app.post("/products", cadastroProdutos);

app.get("/products", buscarProdutos);
