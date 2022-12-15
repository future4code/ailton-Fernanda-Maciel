import { ProductDatabase } from "../database/ProductDatabase";
import { IProductDB, Product } from "../models/products";

export class ProductBusiness {
  constructor(private productDatabase: ProductDatabase) {}

  public createProduct = async (input: IProductDB) => {
    const { id, name } = input;

    if (!id || !name) {
      throw new Error("Necessário preencer todos os campos.");
    }
  };
}
