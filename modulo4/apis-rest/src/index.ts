import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

type User = {
  id: number;
  name: string;
  email: string;
  type: UserType;
  age: number;
};

enum UserType {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL",
}
let users: User[] = [
  {
    id: 1,
    name: "Alice",
    email: "alice@email.com",
    type: UserType.ADMIN,
    age: 12,
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@email.com",
    type: UserType.NORMAL,
    age: 36,
  },
  {
    id: 3,
    name: "Coragem",
    email: "coragem@email.com",
    type: UserType.NORMAL,
    age: 21,
  },
  {
    id: 4,
    name: "Dory",
    email: "dory@email.com",
    type: UserType.NORMAL,
    age: 17,
  },
  {
    id: 5,
    name: "Elsa",
    email: "elsa@email.com",
    type: UserType.ADMIN,
    age: 17,
  },
  {
    id: 6,
    name: "Fred",
    email: "fred@email.com",
    type: UserType.ADMIN,
    age: 60,
  },
];
//a -Qual método HTTP você deve utilizar para isso? resposta: GET / query
//b. Como você indicaria a entidade que está sendo manipulada? Resposta: ("/users")

app.get("/users", (request, response) => {
  let errorCode: number = 400;
  try {
    const name: string = request.query.name as string;
    const user: User | undefined = users.find((user) => user.name === name);
    if (!user) {
      errorCode = 404;
      throw new Error("User not found");
    }
    response.status(200).send(user);
  } catch (error: any) {
    response.status(errorCode).send({ message: error.message });
  }
});

//exercicio3
app.get("/users/:id", (request, response) => {
  let errorCode: number = 400;
  try {
    const id: number = Number(request.params.id);
    if (isNaN(id)) {
      // testei com (!id) e deu certo tbm
      errorCode = 422; // Unprocessable Entity
      throw new Error("Valor de Id invalido, por gentileza digite um numero");
    }
    const user = users.find((user) => {
      return user.id === id;
    });
    if (!user) {
      errorCode = 404;
      throw new Error("User not found");
    }
    response.status(200).send(user);
  } catch (error: any) {
    response.status(errorCode).send({ message: error.message });
  }
});

//exercicio4
app.post("/users", (request, response) => {
  let errorCode: number = 400;
  try {
    const { id, name, email, type, age } = request.body;

    if (!id || !name || !email || !type || !age) {
      errorCode = 402;
      throw new Error("Por gentileza verifique os valores digitados");
    }
    const newUser: User = {
      id,
      name,
      email,
      type,
      age,
    };
    users.push(newUser);
    response.status(201).send({ message: "usuario criado com sucesso." });
  } catch (error: any) {
    response.status(errorCode).send({ message: error.message });
  }
});

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});
