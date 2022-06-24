import React from "react";
import axios from "axios";

export default class PegarPlayList extends React.Component {
  state = {
    listaDePlayLists: [],
  };

  componentDidMount() {}

  pegarPlaylists = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/search?name=string";
    axios
      .get(url, {
        headers: {
          Authorization: "fernanda-maciel-ailton",
        },
      })
      .then((response) => {
        this.setState.apply({ listaDePlayLists: response.data });
      })
      .catch((error) => {
        alert("Ocorreu um problema, tente novamente");
      });
  };

  deletarPlaylist = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`;
    axios
      .delete(url, {
        headers: {
          Authorization: "fernanda-maciel-ailton",
        },
      })
      .then((response) => {
        alert("Playlist deletada com sucesso!!!");
      })
      .catch((error) => {
        alert("Ocorreu um erro, tente novamente!");
      });
  };

  render() {
    const listaPlaylists = this.state.listaDePlayLists.map((lista) => {
      return (
        <div>
          <p key={lista.id}> {lista.name} </p>
          <button onClick={() => this.deletarPlaylist(lista.id)}> x </button>
        </div>
      );
    });

    return (
      <div>
        <h2> </h2>
        <div>{listaPlaylists}</div>
      </div>
    );
  }
}
