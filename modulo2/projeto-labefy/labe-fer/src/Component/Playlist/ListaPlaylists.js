import React from "react";
import axios from "axios";
import CardPlaylist from "./CardPlaylist";

export default class ListaPlaylist extends React.Component {
  state = {
    data: [],
  };

  deletarPlayList = async (id) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Você quer deletar essa playlist")) {
      const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`;

      try {
        const resultado = await axios.delete(url, {
          headers: {
            Authorization: "fernanda-maciel-ailton",
          },
        });

        if (resultado.status === 200) {
          this.props.atualizarPlaylists();
        }
      } catch (err) {
        alert("Erro ao cancelar!");
        console.log(err.response.data);
      }
    }
  };

  render() {
    return (
      <div>
        <p>PlayLists</p>
        {this.props.data.map((playlist) => (
          <CardPlaylist
            key={playlist.id}
            id={playlist.id}
            name={playlist.name}
            deletarPlayList={this.deletarPlayList}
          />
        ))}
      </div>
    );
  }
}
