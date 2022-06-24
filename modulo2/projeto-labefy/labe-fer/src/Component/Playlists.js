import React from "react";
import axios from "axios";

export default class PlayLists extends React.Component {
  state = {
    data: [],
  };

  deletarPlayList = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:${id}`;
    axios
      .delete(url, {
        headers: {
          Authorization: "fernanda-maciel-ailton",
        },
      })
      .then((res) => {
        alert("Playlist deletada com sucesso!!!");
      })
      .catch((err) => {
        alert("Erro ao cancelar!");
        console.log(err.response.data);
      });
  };

  render() {
    return (
      <div>
        <p>PlayLists</p>
        {this.props.data.map((playlist) => (
          <div style={{ border: "1px solid black" }}>
            <span key={playlist.id}>{playlist.id}</span>
            <span>{playlist.name}</span>
            <button onClick={() => this.deletarPlayList(playlist.id)}>
              Deletar
            </button>
          </div>
        ))}
      </div>
    );
  }
}
