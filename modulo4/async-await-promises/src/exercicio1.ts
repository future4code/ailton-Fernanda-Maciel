import axios from "axios";

import { baseURL } from "./baseURL";

const news = {
  title: "Como conseguir um emprego",
  content: "Estude 12 horas por dia e não desista!",
  date: Date.now(),
};

const getSubscribers = async (news: any) => {
  const response = await axios.get(`${baseURL}/subscribers`);
  return response.data;
};

// a) GET
//b) <any[]>
//c)
// async function getSubscribers(): Promisse<any[]> {
//     const response = await axios.get(`${baseURL}/subscribers`);
//     return response.data;
// }
