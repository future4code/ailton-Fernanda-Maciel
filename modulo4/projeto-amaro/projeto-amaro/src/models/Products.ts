export interface IProduct {
  id: string;
  name: string;
}

export class Product {
  constructor(private id: string, private name: string) {}

  public getId = () => {
    return this.id;
  };

  public getName = () => {
    return this.name;
  };
}
export interface IProductsInputDTO {
  id: string;
  name: string;
}

export interface IProductsOutputDTO {
  message: string;
  token: string;
}
