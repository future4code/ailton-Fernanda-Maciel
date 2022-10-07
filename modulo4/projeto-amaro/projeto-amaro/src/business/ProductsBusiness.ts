import { ProductsDatabase } from "../database/ProductsDatabase";
import {
  IProductsInputDTO,
  IProductsOutputDTO,
  Product,
} from "../models/Products";
import { Authenticator, ITokenPayload } from "../services/Authenticator";
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

    const produtos = new Product(id, name);
    console.log(produtos);
    //criar produtos e chamar no dataBase
    await this.productsDatabase.createProducts(produtos);

    // criar token

    const payload: ITokenPayload = {
      id: produtos.getId(),
      name: produtos.getName(),
    };

    const token = this.authenticator.generateToken(payload);
    console.log(token);

    const response: IProductsOutputDTO = {
      message: "Cadastro realizado com sucesso!!",
      token,
    };
    return response;
  };

  public getProductName = (name: string) => {
    //parei aqui
  };
}
