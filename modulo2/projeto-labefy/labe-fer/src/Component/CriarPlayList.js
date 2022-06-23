import React from "react";
import Axios from "axios";
import axios from "axios";

export default class CriarPlayList extends React.Component {
  state = {
    playList: "",
  };

  novaPlayList = (e) => {
    this.setState({ playList: e.target.value });
  };

  creatPlayList = () => {
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
        <label> Criar PlayList</label>
        <input value={this.state.playList} onChange={this.novaPlayList} />
        <button onClick={this.creatPlayList}>Criar ♥</button>
        <p>{this.state.playList}</p>
      </div>
    );
  }
}
