import { Router } from "express";
import { ProductsBusiness } from "../business/ProductsBusiness";
import { ProductsController } from "../controller/ProductsController";
import { ProductsDatabase } from "../database/ProductsDatabase";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export const productRouter = Router();

const productsController = new ProductsController(
  new ProductsBusiness(
    new ProductsDatabase(),
    new IdGenerator(),
    new HashManager(),
    new Authenticator()
  )
);

productRouter.post("/products", productsController.insertProduct);
productRouter.get("/products/:name", productsController.getProductName);
