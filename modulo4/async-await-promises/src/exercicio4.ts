import axios from "axios";
import { baseURL } from "./baseURL";

// a

const news = {
  title: "Como conseguir um emprego",
  content: "Estude 12 horas por dia e não desista!",
  date: Date.now(),
};

// const createNews =(news: any)=>{
// return axios.put(`${baseURL}/news`, news)
// }

// b)

async function createNews(
  title: string,
  content: string,
  date: number
): Promise<void> {
  await axios.put(`${baseURL}/news`, {
    title: title,
    content: content,
    date: date,
  });
}
