import { IProduct, Product } from "../models/Products";
import { BaseDatabase } from "./BaseDatabase";

export class ProductsDatabase extends BaseDatabase {
  public static TABLE_PRODUCTS = "Amaro_Products";

  public productDB = (product: Product): IProduct => {
    const productDB: IProduct = {
      id: product.getId(),
      name: product.getName(),
     
    };
    return productDB;
  };

  public findByName = async (name: string): Promise<IProduct | undefined> => {
    const result: IProduct[] = await BaseDatabase.connection(
      ProductsDatabase.TABLE_PRODUCTS
    )
      .select()
      .where({ name });
    return result[0];
  };

  public createProducts = async (products: Product): Promise<void> => {
    const productDB = this.productDB(products);

    await BaseDatabase.connection(ProductsDatabase.TABLE_PRODUCTS).insert(
      productDB
    );
  };
}
