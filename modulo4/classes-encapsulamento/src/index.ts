import { Transaction } from "./types";

//a) Para que serve o construtor dentro de uma classe e como fazemos para chamá-lo?
// Para construir o objeto

//Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?
//1 vez, invocando a função com o NEW
class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  constructor(cpf: string, name: string, age: number) {
    console.log("Chamando o construtor da classe UserAccount");
    this.cpf = cpf;
    this.name = name;
    this.age = age;
  }
  public getCpf(): string {
    return this.cpf;
  }
}

const pessoa1 = new UserAccount("05028040923", "fer", 36);
console.log(pessoa1);

// exercicio 2

class Transition {
  private date: string;
  private value: string;
  private description: string;

  constructor(date: string, value: string, description: string) {
    this.date = date;
    this.value = value;
    this.description = description;
  }
}

class Bank {
  private accounts: UserAccount[];

  constructor(accounts: UserAccount[]) {
    this.accounts = accounts;
  }
}
