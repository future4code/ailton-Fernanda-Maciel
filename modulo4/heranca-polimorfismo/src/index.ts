import { app } from "./app";

class User {
  private id: string;
  private email: string;
  private name: string;
  private password: string;

  constructor(id: string, email: string, name: string, password: string) {
    console.log("Chamando o construtor da classe User");
    this.id = id;
    this.email = email;
    this.name = name;
    this.password = password;
  }

  public getId(): string {
    return this.id;
  }

  public getEmail(): string {
    return this.email;
  }

  public getName(): string {
    return this.name;
  }
  public introduceYourself(): string {
    return `Olá, sou ${this.name}, Bom dia!!`;
  }
}

const usuarios = new User("001", "fer.fer@hotmail.com", "fernanda", "123456");
console.log(usuarios);
//a) Seria possível imprimir a senha (password) atrelada a essa instância?
// resposta: a senha imprimiu no console.
//b) Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?
//resposta: 1 vez.

class Customer extends User {
  public purchaseTotal: number = 0;
  private creditCard: string;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    creditCard: string
  ) {
    super(id, email, name, password);
    console.log("Chamando o construtor da classe Customer");
    this.creditCard = creditCard;
  }

  public getCreditCard(): string {
    return this.creditCard;
  }
}
const cliente = new Customer(
  "002",
  "vitor.vi@hotmail.com",
  "Vitor",
  "vivi1234",
  "12345679321"
);
console.log(cliente);

//exercicio 2
//a) Quantas vezes a mensagem "Chamando o construtor da classe Customer" foi impressa no terminal?
// 1 vez
//b) *Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal? Por quê?*
//1 vez

//exercicio 4
const customer = new Customer(
  "001",
  "fer.fer.com",
  "fernanda",
  "fer12365",
  "45632178936"
);
customer.introduceYourself();

// Polimorfismo

export interface Client {
  name: string;
  // Refere-se ao nome do cliente

  registrationNumber: number;
  // Refere-se ao número de cadastro do cliente na concessionária
  // como se fosse um id

  consumedEnergy: number;
  // Refere-se à energia consumida pelo cliente no mês

  calculateBill(): number;
  // Retorna o valor da conta em reais
}
const client: Client = {
  name: "Cini",
  registrationNumber: 1,
  consumedEnergy: 100,

  calculateBill: () => {
    return 2;
  },
};
console.log(client);
//a) Quais propriedades você conseguiu imprimir? Teve alguma que não foi possível? Por que isso aconteceu?
// Resposta : no console consegui visualizar nome, registrationNumber e calculateBill. A função calculateBill não retornou nada, não sei o pq.

//Exercício 2
export abstract class Place {
  constructor(protected cep: string) {}

  public getCep(): string {
    return this.cep;
  }
}

//a) *Mesmo sabendo que não é possível, tente criar uma instância dessa classe (ou seja: `new Place(...)`).
//Qual foi o erro que o Typescript gerou?*
//não é possivel criar uma instancia de uma classe abstrata

// b) Pense e responda: o que precisaríamos fazer para conseguir efetivamente criar uma instância dessa classe?
// resposta: para criar uma instância de uma classe abstrata precisamos declarar uma classe filha e criar uma instância dessa última.

export class Residence extends Place {
  constructor(
    protected residentsQuantity: number,
    // Refere-se ao número de moradores da casa

    cep: string
  ) {
    super(cep);
  }
  public getDwellersQuantity(): number {
    return this.residentsQuantity;
  }
}

//A segunda é para um comércio. Para ela, vamos adicionar uma propriedade para representar os andares desse lugar comercial (floorsQuantity)

export class Commerce extends Place {
  constructor(
    protected floorsQuantity: number,
    // Refere-se à quantidade de andares do lugar

    cep: string
  ) {
    super(cep);
  }
  public getFloorsQuantity(): number {
    return this.floorsQuantity;
  }
}

//A última é para uma indústria e adicionaremos uma propriedade para guardar a quantidade máquinas de lá (machinesQuantity)
export class Industry extends Place {
  constructor(
    protected machinesQuantity: number,
    // Refere-se à quantidade de máquinas do local

    cep: string
  ) {
    super(cep);
  }
  public getMachinesQuantity(): number {
    return this.machinesQuantity;
  }
}
const industria = new Industry(3, "456");
console.log(industria);

//
