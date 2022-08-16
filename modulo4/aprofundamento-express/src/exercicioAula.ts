import express from "express";
import cors from "cors";
import { playlist, Playlist, Musicas, editarMusica } from "./data";

// variavel que tem os poderes de criar endpoints
const app = express();
app.use(cors());
app.use(express.json());

// exercicios que faz mais sentido
// CRUD - Create , Read , Update , Delete

// retornar todas as playlist
// http://localhost:3003/retornaPlaylist
app.get("/retornaPlaylist", (request, response) => {
  response.send(playlist);
});

// http://localhost:3003/criarPlaylist
app.post("/criarPlaylist", (request, response) => {
  const { nome } = request.body;

  const novaPlaylist: Playlist = {
    nome,
    musicas: [],
  };
  playlist.push(novaPlaylist);

  response.send(playlist);
});
// retorna uma playlist especifica
// http://localhost:3003/retornaPlaylist
app.get("/retornaPlaylist/:nome", (request, response) => {
  const nome = request.params.nome;

  const acharPlaylist: Playlist[] = playlist.filter((playlist) => {
    return playlist.nome.includes(nome);
  });

  response.send(acharPlaylist);
});

// http://localhost:3003/apagarPlaylist/:nome
app.delete("/apagarPlaylist/:nome", (request, response) => {
  const nome = request.params.nome;

  const deletePlaylist: Playlist[] = playlist.filter((playlist) => {
    return playlist.nome !== nome;
  });

  response.send(deletePlaylist);
});

// http://localhost:3003/adicionarMusica/:nomePlaylist
app.post("/adicionarMusica/:nomePlaylist", (request, response) => {
  const nomePlaylist = request.params.nomePlaylist;
  const { musica, artista, ano } = request.body;

  const [procurarPlaylist]: Playlist[] = playlist.filter((playlist) => {
    return playlist.nome === nomePlaylist;
  });

  const novaMusica: Musicas = {
    musica,
    artista,
    ano,
  };

  procurarPlaylist.musicas.push(novaMusica);

  response.send(procurarPlaylist);
});

// servidor esta rodando nesse endereço. Startar o backEnd
// endereço base -> http://localhost:3003/primeira-api
app.listen(3003, () => {
  console.log("SERVER IS RUNNING IN http://localhost:3003");
});
