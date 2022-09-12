import axios from "axios";
import { baseURL } from "./baseURL";

// exercicio 6

// a)Esse método recebe um array de Promises e retorna outra
//Promise, que resolve em um array de respostas.

// B) Para melhorar a performance.

const sendNotifications = async (
  users: user[],
  message: string
): Promise<void> => {
  try {
    const promises = users.map((user) => {
      return axios.post(`${baseURL}/notifications`, {
        subscriberId: user.id,
        message: message,
      });
    });

    await Promise.all(promises);
  } catch {
    console.log("Error");
  }
};
