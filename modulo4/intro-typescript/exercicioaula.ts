// let pessoa1:string = "Gabriel"
// let pessoa2:string = "Raoni"
// let pessoa3:string = "Daniel"

// const pessoas:string[] = [pessoa1,pessoa2,pessoa3]
// const pessoas2:Array<string> = [pessoa1,pessoa2,pessoa3]

type pessoa = {
  name: string;
  idade: number;
  cidade: string;
  estado: string;
};

const pessoa1: pessoa = {
  cidade: "São Paulo",
  idade: 20,
  estado: "São Paulo",
  name: "Fulano",
};

const pessoa2: pessoa = {
  name: "Ciclano",
  idade: 50,
  cidade: "Salvador",
  estado: "Bahia",
};

const pessoa3: pessoa = {
  name: "Beltrano",
  idade: 30,
  cidade: "Rio de Janeiro",
  estado: "Rio de Janeiro",
};

const pessoas: pessoa[] = [pessoa1, pessoa2, pessoa3];

console.log(pessoas);

// tipagem com ANY
let idade: any;

idade = 10;

idade = { idade: 10 };

idade = "isso é uma idade";

// tipagem com funcao
function somaNumero(numero1: number, numero2: number): boolean | undefined {
  if (numero1 > numero2) {
    return true;
  }
}

// tipagem com void
function divideNumero(numero1: number, numero2: number): void {
  if (numero1 / numero2) {
    console.log("o numero é divisivel");
  }
}

// console.log(somaNumero(20, 50))
// divideNumero(20,2)
