import { Recipe } from "../model/Recipe";
import { BaseDatabase } from "./BaseDataBase";

export class RecipeData extends BaseDatabase {
  private static TABLE_NAME = "receitas_cookenu";
  async createRecipe(recipe: Recipe) {
    await this.getConnection()
      .insert({
        id: recipe.getId(),
        titulo: recipe.getTitulo(),
        descricao: recipe.getDescricao(),
        data_criacao: recipe.getData_criacao(),
        usuario_id: recipe.getUsuarioId(),
      })
      .into(RecipeData.TABLE_NAME);

    return `Receita ${recipe.getTitulo()} criada com sucesso`;
  }

  async pegarReceitaId(id: string): Promise<Recipe[] | undefined> {
    const result = await this.getConnection()
      .select("*")
      .from(RecipeData.TABLE_NAME)
      .where({ usuario_id: id });

    if (!result.length) {
      return undefined;
    }

    const typeRecipe = result.map((recipe: any) => {
      return new Recipe(
        recipe.id,
        recipe.titulo,
        recipe.descricao,
        recipe.data_criacao,
        recipe.usuario_id
      );
    });

    return typeRecipe;
  }
}
