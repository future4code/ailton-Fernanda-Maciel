import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  border: 2px solid gray;
  padding: 5px;
  border-radius: 5px;

  > span,
  button {
    margin-left: 10px;
  }
`;

function Musica(props) {
  const { id, name, artist, url, removerMusica } = props;

  return (
    <Container>
      <span>Nome: {name}</span>
      <span>Artista: {artist}</span>
      <span>URL da Música: {url}</span>
      <button onClick={() => removerMusica(id)}>Remover</button>
    </Container>
  );
}

export default Musica;
