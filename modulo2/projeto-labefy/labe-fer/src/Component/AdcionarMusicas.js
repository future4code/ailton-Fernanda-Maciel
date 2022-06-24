import React from "react";

export default class AdcionarMusicas extends React.Component {
  state = {
    musicasUsuario: "",
  };

  render() {
    return (
      <div>
        <h1>Adcione Musicas ♥</h1>
        <label>Nome da playlist:</label> <button>Procurar Playlist</button>
        <input></input>
        <label>Nome da Música:</label>
        <input></input>
        <label>Nome do artista/banda:</label>
        <input></input>
        <label>Link da Música:</label>
        <input></input>
        <button>Adicionar</button>
      </div>
    );
  }
}
