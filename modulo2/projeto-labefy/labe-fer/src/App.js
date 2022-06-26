import React from "react";
import AdicionaPlaylist from "./Component/Playlist/AdicionaPlaylist";
import ListaPlaylists from "./Component/Playlist/ListaPlaylists";
import ProcurarPlaylist from "./Component/Playlist/ProcurarPlaylist";

import axios from "axios";
export default class App extends React.Component {
  state = {
    playlists: [],
  };

  procurarPlaylist = async (palavraChave) => {
    const resposta = await axios.get(
      `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/search?name=${palavraChave}`,
      {
        headers: {
          Authorization: "fernanda-maciel-ailton",
        },
      }
    );

    console.log(resposta);

    this.setState({ playlists: resposta.data.result.playlist });
  };

  atualizarPlaylists = async () => {
    const resposta = await axios.get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
      {
        headers: {
          Authorization: "fernanda-maciel-ailton",
        },
      }
    );

    // Deu certo
    if (resposta.status === 200) {
      // Atualiza o state com as playlists do servidor
      this.setState({
        playlists: resposta.data.result.list,
      });
    }
  };

  // Este método é chamado apenas uma vez, quando a tela está sendo carrega no navegador
  async componentDidMount() {
    await this.atualizarPlaylists();
  }

  render() {
    // Este método é chamado toda vez que o state é atualizado, através do setState. Mesmo tento uma propriedade atualizada sem conexão com o layout o render será chamado
    return (
      <div>
        <h1> Labe♥Fer</h1>
        <h2>♥♥♥Criar Playlist♥♥♥ </h2>
        <AdicionaPlaylist atualizarPlaylists={this.atualizarPlaylists} />
        <ProcurarPlaylist procurarPlaylist={this.procurarPlaylist} />
        <ListaPlaylists
          data={this.state.playlists}
          atualizarPlaylists={this.atualizarPlaylists}
        />
      </div>
    );
  }
}
