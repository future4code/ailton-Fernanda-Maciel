import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const MiniContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid lemonchiffon;
  border-radius: 5px;
  margin: 5px;
  background-color: white;

  > h1 {
    font-family: "Permanent Marker", cursive;
    color: black;
    text-align: center;
  }
`;
const MiniFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 5px;
  padding: 5px;
  border: 3px solid lemonchiffon;
  border-radius: 5px;
  background-color: #ff80ab;
`;

const CardPerfil = styled.div`
  text-align: center;
`;
export default function TelaInicial() {
  const [perfil, setPerfil] = useState({});

  useEffect(() => {
    PegarPerfil();
  }, []);

  const PegarPerfil = () => {
    const url =
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/fernanda-maciel/person";

    axios
      .get(url)
      .then((res) => {
        setPerfil(res.data.profile);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const SelecionarLike = () => {
    const body = {
      id: perfil.id,
      choice: true,
    };

    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/fernanda-maciel/choose-person",
        body
      )
      .then((res) => {
        console.log(res);
        PegarPerfil();
        if (res.data.isMatch) {
          alert("Deu Match");
        } else {
          alert("Não foi dessa vez, tente novamente");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <MiniContainer>
      <h1>Astro 🔥 Match</h1>
      <CardPerfil key={perfil.id}>
        <h2>{perfil.name}</h2>
        <h2>{perfil.age} anos</h2>
        <img
          width="300"
          height="300"
          src={perfil.photo}
          alt={perfil.photo_alt}
        />
        <p>{perfil.bio}</p>
      </CardPerfil>

      <MiniFooter>
        <button onClick={PegarPerfil}>
          <img src="https://img.icons8.com/emoji/48/000000/broken-heart.png" />
        </button>
        <button onClick={SelecionarLike}>
          <img src="https://img.icons8.com/emoji/48/000000/beating-heart.png" />
        </button>
      </MiniFooter>
    </MiniContainer>
  );
}
