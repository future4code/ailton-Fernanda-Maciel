import { Request, response, Response } from "express";
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
      const recipe = new Recipe(id, idRecipe, date, titulo, descricao);
      console.log(recipe);
    } catch (error: any) {
      res.status(500).send({ message: error.message });
    }
  }
}
