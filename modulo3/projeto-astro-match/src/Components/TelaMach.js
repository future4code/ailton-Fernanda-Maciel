import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  border: 1px solid lemonchiffon;
  border-radius: 5px;
  margin: 5px;

  > h1 {
    color: red;
    text-align: center;
  }
`;

export default function TelaMach() {
  const [listaMatch, setListaMatch] = useState([]);

  useEffect(() => {
    ListaLikes();
  }, [listaMatch]);

  const ListaLikes = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/fernanda-maciel/matches"
      )
      .then((res) => {
        setListaMatch(res.data.matches);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const apagarLista = () => {
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/fernanda-maciel/clear"
      )
      .then((response) => {
        console.log(response);
        alert("Se livrou heim!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <h1>Lista ♥ Matchs</h1>
      <div>
        {listaMatch.map((usuario) => {
          return (
            <div key={usuario.id}>
              <img
                height="70px"
                width="70px"
                src={usuario.photo}
                alt={usuario.photo_alt}
              />
              <span>{usuario.name}</span>
            </div>
          );
        })}

        <button onClick={apagarLista}> APAGAR </button>
      </div>
    </Container>
  );
}
