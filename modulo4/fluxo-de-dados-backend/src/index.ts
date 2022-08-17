import express from "express";
import cors from "cors";
import { Produtos, produtos } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

//exercicio 1

app.get("/test", (tequest, response) => {
  response.send("Olá, seja bem vindo(a)!!! Sua API esta funcionando!!!");
});

//exercicio 2
// feito no arquivo data.ts

//exercicio 3
app.post("/criarProduto", (request, response) => {
  try {
    const { id, name, price } = request.body;
    const novoProduto: Produtos = {
      id,
      name,
      price,
    };
    produtos.push(novoProduto);
    response.send(produtos);
  } catch (error: any) {
    response
      .status(response.statusCode || 500)
      .send({ message: error.message });
  }
});
console.log(produtos);

//exercicio 4

app.get("/retornaProdutos", (request, response) => {
  try {
    response.send(produtos);
  } catch (error: any) {
    response.send(response.statusCode || 500).send({ message: error.message });
  }
});

// exercicio 5

app.put("/editarProduto/:id", (request, response) => {
  try {
    const { name, price } = request.body;
    const novoValor = request.params.id;

    type NovoValor = {
      name: string;
      price: number;
    };

    const editarValor: NovoValor = {
      name,
      price,
    };
    if (!name || !price) {
      throw new Error("Não pode passar valores vazios");
    }
    const acharProdutos: Produtos[] = produtos.filter((editar) => {
      return editar.name.includes(novoValor);
    });
    const mudarValor = acharProdutos.map((editar) => {
      if (editar.name.includes(editarValor.name)) {
        return {
          ...name,
          Nome: editarValor.name,
        };
      }
      return {
        name,
      };
    });
    response.status(200).send(mudarValor);
  } catch (error: any) {
    response
      .status(response.statusCode || 500)
      .send({ message: error.message });
  }
});

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});
