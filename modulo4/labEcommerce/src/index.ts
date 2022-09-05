import { cadastroUsuario } from "./endpoints/cadastroUsuario";
import { app } from "./app";
import { buscaUsuarios } from "./endpoints/buscaUsuarios";
import { cadastroProdutos } from "./endpoints/cadastroProdutos";
import { buscarProdutos } from "./endpoints/buscarProdutos";
import { registroCompra } from "./endpoints/resgitroCompra";
import { buscarCompras } from "./endpoints/buscarCompras";

//cadastro Usuario
app.post("/users", cadastroUsuario);

// Busca todos usuarios
app.get("/users", buscaUsuarios);

// Cadastro de produtos

app.post("/products", cadastroProdutos);

// busca tods os produtos
app.get("/products", buscarProdutos);

// Registro de compra

app.post("/purchases", registroCompra);

//Busca das compras de um usuário
app.get("/users/:user_id/purchases", buscarCompras);
