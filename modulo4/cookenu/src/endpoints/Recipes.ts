import { Request, response, Response } from "express";
import { RecipeData } from "../data/RecipeData";
import { Recipe } from "../model/Recipe";
import { Authenticator } from "../services/Authenticator";
import GenerateId from "../services/GenerateId";

export class RecipeEndpoint {
  async create(req: Request, res: Response) {
    try {
      const token = req.headers.authorization;
      const { titulo, descricao } = req.body;

      if (!titulo || !descricao) {
        throw new Error("Os campos são obrigatórios");
      }

      if (!token) {
        throw new Error("O token deve ser passado!!!");
      }

      const id = new Authenticator().getTokenData(token);
      const idRecipe = new GenerateId().createId();
      const date = new Date();
      const recipe = new Recipe(idRecipe, titulo, descricao, date, id.id);
      const recipedata = new RecipeData();
      const response = await recipedata.createRecipe(recipe);

      res.status(201).send(response);

      console.log(recipe);
    } catch (error: any) {
      res.status(500).send({ message: error.message });
    }
  }

  async pegarReceita(req: Request, res: Response) {
    try {
      const token = req.headers.authorization;
      const id = req.params.id;

      if (!token) {
        throw new Error("Necessario passar o token");
      }

      new Authenticator().getTokenData(token);
      const recipeData = new RecipeData();

      const recipeById = await recipeData.pegarReceitaId(id);

      if (!recipeById) {
        throw new Error("Receita não encontrada");
      }

      res.status(200).send(recipeById);
      console.log(recipeById);
    } catch (error: any) {
      res.status(500).send({ message: error.message });
    }
  }
}
