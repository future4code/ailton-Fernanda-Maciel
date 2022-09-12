import axios from "axios";
import { baseURL } from "./baseURL";

// exercicio 3

type user = {
  id: string;
  name: string;
  email: string;
};

// const getSubscribers = async (): Promise<user[]> => {
//   const response = await axios.get(`${baseURL}/subscribers`);
//   return response.data;
// };

//c

const getSubscribers = async (): Promise<user[]> => {
  const response = await axios.get(`${baseURL}/subscribers`);
  return response.data.map((res: any) => {
    return {
      id: res.id,
      name: res.name,
      email: res.email,
    };
  });
};
