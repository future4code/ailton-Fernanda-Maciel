import React from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export default class AdicionaMusicas extends React.Component {
  state = {
    name: "",
    artist: "",
    url: "",
  };

  adicionarMusica = async () => {
    const resposta = await axios.post(
      `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}/tracks`,
      {
        name: this.state.name,
        artist: this.state.artist,
        url: this.state.url,
      },
      {
        headers: {
          authorization: "fernanda-maciel-ailton",
        },
      }
    );

    if (resposta.status === 200) {
      this.props.atualizarMusicas();
    }
  };

  render() {
    return (
      <Container>
        <input
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
          type="text"
          placeholder="Música"
        />
        <input
          value={this.state.artist}
          onChange={(e) => this.setState({ artist: e.target.value })}
          type="text"
          placeholder="Artista"
        />
        <input
          value={this.state.url}
          onChange={(e) => this.setState({ url: e.target.value })}
          type="text"
          placeholder="URL Música"
        />
        <button
          disabled={!this.state.name || !this.state.artist || !this.state.url}
          onClick={this.adicionarMusica}
        >
          Adicionar
        </button>
      </Container>
    );
  }
}
