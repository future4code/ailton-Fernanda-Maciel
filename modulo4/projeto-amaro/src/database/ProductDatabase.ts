import { IProductDB, Product } from "../models/products";
import { BaseDatabase } from "./BaseDatabase";

export class ProductDatabase extends BaseDatabase {
  public static TABLE_PRODUCT = "Amaro_Products ";

  public toProductDB = (product: Product): IProductDB => {
    const productDB: IProductDB = {
      id: product.getId(),
      name: product.getName(),
    };
    return productDB;
  };
}
