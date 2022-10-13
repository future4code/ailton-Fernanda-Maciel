//base da URL : https://api.themoviedb.org/3/
//URL DA API: /movie/now_playing?api_key=59fe92202422144f206ebadc7d2435b2

import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});
export default api;
