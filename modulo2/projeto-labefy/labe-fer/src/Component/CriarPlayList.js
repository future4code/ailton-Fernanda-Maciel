import React from "react";
import axios from "axios";
export default class CriarPlayList extends React.Component {
  state = {
    playList: "",
  };

  novaPlayList = (e) => {
    this.setState({ playList: e.target.value });
  };

  criarPlayList = () => {
    const body = {
      name: this.state.playList,
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        body,
        {
          headers: {
            Authorization: "fernanda-maciel-ailton",
          },
        }
      )
      .then((res) => {
        console.log(res);
        this.setState({ playList: "" });
        this.props.atualizarPlaylists();
        alert("PlayList cadastrada com sucesso :)");
      })
      .catch((err) => {
        console.log(err);
        alert("Erro ao cadastrar PlayList :(");
      });
  };

  render() {
    return (
      <div>
        <label> </label>
        <input value={this.state.playList} onChange={this.novaPlayList} />
        <button onClick={this.criarPlayList}>Criar ♥</button>
        <p>{this.state.playList}</p>
      </div>
    );
  }
}
