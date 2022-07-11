import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 3px solid lemonchiffon;
  background-color: white;
  border-radius: 5px;
  margin: 5px;

  > h1 {
    font-family: "Permanent Marker", cursive;
    color: black;
    text-align: center;
  }
`;
const MiniContainer = styled.div`
  align-items: center;
  text-align: center;
  border: 1px solid pink;
  flex-direction: column;
`;

const EfeitoButton = styled.button`
  :hover {
    -webkit-transform: rotateZ(-30deg);
    -ms-transform: rotateZ(-30deg);
    transform: rotateZ(-30deg);
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
      <h1>Lista 🔥 Matchs</h1>
      <div>
        {listaMatch.map((usuario) => {
          return (
            <MiniContainer key={usuario.id}>
              <img
                height="70px"
                width="70px"
                src={usuario.photo}
                alt={usuario.photo_alt}
              />
              <span>{usuario.name}</span>
            </MiniContainer>
          );
        })}

        <EfeitoButton onClick={apagarLista}>
          <img src="https://img.icons8.com/emoji/20/000000/wastebasket-emoji.png" />{" "}
          Apagar Matchs
        </EfeitoButton>
      </div>
    </Container>
  );
}
