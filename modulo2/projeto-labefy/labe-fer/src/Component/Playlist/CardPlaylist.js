import React from "react";
import styled from "styled-components";
import AdicionaMusica from "../Musicas/AdicionaMusica";
import Musica from "../Musicas/Musica";
import axios from "axios";

const Card = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .deletar {
    margin-left: 10px;
    border: 1px solid black;
    padding: 5px;
    border-radius: 5px;

    :hover {
      cursor: pointer;
    }
  }
`;

export default class CardPlaylist extends React.Component {
  state = {
    musicas: [],
  };

  atualizarMusicas = async () => {
    const response = await axios.get(
      `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks`,
      {
        headers: {
          authorization: "fernanda-maciel-ailton",
        },
      }
    );

    this.setState({ musicas: response.data.result.tracks });
  };

  removerMusica = async (musicaId) => {
    await axios.delete(
      `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks/${musicaId}`,
      {
        headers: {
          authorization: "fernanda-maciel-ailton",
        },
      }
    );

    await this.atualizarMusicas();
  };

  async componentDidMount() {
    await this.atualizarMusicas();
  }

  render() {
    const { id, name, deletarPlayList } = this.props;
    return (
      <Card>
        <Header>
          <h3>{name}</h3>
          <span className="deletar" onClick={() => deletarPlayList(id)}>
            ❌
          </span>
        </Header>
        <AdicionaMusica
          playlistId={id}
          atualizarMusicas={this.atualizarMusicas}
        />
        {this.state.musicas.map((musica, index) => (
          <Musica
            name={musica.name}
            artist={musica.artist}
            url={musica.url}
            id={musica.id}
            key={index}
            removerMusica={this.removerMusica}
          />
        ))}
      </Card>
    );
  }
}
