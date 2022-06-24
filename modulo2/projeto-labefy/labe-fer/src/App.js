import React from "react";
import CriarPlayList from "./Component/CriarPlayList";
import PlayList from "./Component/Playlists";
import AdcionarMusicas from "./Component/AdcionarMusicas";
import PesquisarPlayList from "./Component/PesquisarPlayList";

import axios from "axios";
export default class App extends React.Component {
  state = {
    playlists: [],
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
        <h2>Criar Playlist♥</h2>
        <CriarPlayList atualizarPlaylists={this.atualizarPlaylists} />
        <PesquisarPlayList />
        <PlayList data={this.state.playlists} />
        <PesquisarPlayList />
        <AdcionarMusicas />
      </div>
    );
  }
}
