export interface IProductDB {
  id: string;
  name: string;
}

export class Product {
  constructor(private id: string, private name: string, private tags: string) {}

  public getId = () => {
    return this.id;
  };

  public getName = () => {
    return this.name;
  };

  public getTags = () => {
    return this.tags;
  };

  public setId = (newId: string) => {
    this.id = newId;
  };

  public setName = (newName: string) => {
    this.name = newName;
  };
}
