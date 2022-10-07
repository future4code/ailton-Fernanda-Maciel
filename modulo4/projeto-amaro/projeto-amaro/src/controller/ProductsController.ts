import { Request, Response } from "express-serve-static-core";
import { ProductsBusiness } from "../business/ProductsBusiness";
import { IProductsInputDTO } from "../models/Products";

export class ProductsController {
  constructor(private productsBusiness: ProductsBusiness) {}

  public insertProduct = async (req: Request, res: Response) => {
    try {
      const input: IProductsInputDTO = {
        id: req.params.id,
        name: req.body.name,
      };

      const response = await this.productsBusiness.insertProduct(input);
      res.status(201).send(response);
      console.log(response);
    } catch (error: any) {
      res.status(500).send({ message: error.message });
    }
  };

  public getProductName = async (req: Request, res: Response) => {
    try {
      const name = req.params.name;
      res.status(200).send({ message: name });
    } catch (error: any) {
      res.status(500).send({ message: error.message });
    }
  };
}
