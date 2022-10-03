// //exercicio zero

describe("exercicio zero", () => {
  test("Verificando se é PAR", () => {
    const isEven = (intereger: number) => {
      return intereger % 2 == 0;
    };
    expect(isEven(300)).toBe(true);
  });
});

describe("exercicio 1", () => {
  test("Devolvendo palavra em maiusculo", () => {
    const palavra = (bananinha: string) => {
      return bananinha.toUpperCase();
    };
    expect(palavra("bananinha")).toBe("BANANINHA");
  });
});

describe("exercicio 2", () => {
  test("Retorna Array", () => {
    const palavraArray = (palavra: string): string[] => {
      return palavra.split("");
    };
    expect(palavraArray("dev")).toEqual(["d", "e", "v"]);
  });
});

describe("exercicio 3", () => {
  test("Retorna Valor", () => {
    const recebeValor = (valor: string): number => {
      return Number(valor);
    };
    expect(recebeValor("50")).toBe(50);
  });
});

describe("exercicio 4", () => {
  test("Retorna Saida", () => {
    const recebeString = (palavra: string): number => {
      return palavra.length;
    };
    expect(recebeString("jest")).toBe(4);
  });
});

describe("exercicio 5", () => {
  test("numero aleatório", () => {
    const randomNumberBetween1And10 = (): number => {
      const min = 1;
      const max = 10;
      const result = Math.floor(Math.random() * (max - min + 1)) + min;
      console.log(result);
      return result;
    };
    expect(randomNumberBetween1And10).toBe(5);
  });
});

describe("exercicio 6", () => {
  test("Lista Usuario", () => {
    const usuarios = getUsers();
    expect(usuarios).toContain("Marlene");
  });
});

const getUsers = () => {
  return ["Fer", "Marlene", "Vitor", "Celso", "Vinicius"];
};

interface User {
  id: string;
  name: string;
  age: number;
}

const users: User[] = [
  {
    id: "1",
    name: "Fer",
    age: 36,
  },
  {
    id: "2",
    name: "Vitor",
    age: 31,
  },
];
