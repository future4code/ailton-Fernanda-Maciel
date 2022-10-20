import { Request, Response } from "express";
import { ProductBusiness } from "../business/ProductsBusiness";
import { IProductDB } from "../models/products";

export class ProductController {
  constructor(private productsBusiness: ProductBusiness) {}

  public createProducts = async (req: Request, res: Response) => {
    try {
      const input: IProductDB = {
        id: req.body.id,
        name: req.body.name,
      };
      const response = await this.productsBusiness.createProduct(input);
      res.status(201).send(response);
    } catch (error: any) {
      res.status(500).send({ message: error.message });
    }
  };
}
