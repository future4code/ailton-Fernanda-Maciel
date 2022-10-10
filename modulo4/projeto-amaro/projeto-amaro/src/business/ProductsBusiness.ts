import { ProductsDatabase } from "../database/ProductsDatabase";
import { IProductsInputDTO, Product } from "../models/Products";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export class ProductsBusiness {
  constructor(
    private productsDatabase: ProductsDatabase,
    private idGenerator: IdGenerator,
    private hashManager: HashManager,
    private authenticator: Authenticator
  ) {}

  public insertProduct = async (input: IProductsInputDTO) => {
    const { name } = input;

    if (!name) {
      throw new Error("O nome do produto é obrigatório!!!");
    }

    const isProductAlreadyExist = await this.productsDatabase.findByName(name);

    if (isProductAlreadyExist) {
      throw new Error("O nome do produto já existe!!");
    }

    const id = this.idGenerator.generate();
    ///parei aqui
  };
}
