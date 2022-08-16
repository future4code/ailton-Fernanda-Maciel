import React, { useState } from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";
import menina from "./img/menina.png";
import dog from "./img/dog.jpg";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const MiniContainer = styled.header`
  display: flex;
  align-items: center;
`;

const InputBonito = styled.div`
  margin: 20px;
  align-items: center;

  > input {
    background-color: #e6e6fa;
  }
  > button {
    :hover {
      background-color: #ffb6c1;
      font-size: 15px;
    }
  }
`;
function App() {
  const [posts, SetPosts] = useState([
    {
      nomeUsuario: "paulinha",
      fotoUsuario: "https://picsum.photos/id/237/200/300",
      fotoPost:
        "https://img.freepik.com/vetores-gratis/bonito-shiba-inu-em-pe-e-acenando-a-mao-dos-desenhos-animados-icone-ilustracao-vetorial-conceito-de-icone-de-natureza-animal_138676-4381.jpg?t=st=1659057548~exp=1659058148~hmac=68b873c1d8503a06a3b8d28cc59f0fb526a75373b65ecfdb975d352a444ed23b",
    },
    {
      nomeUsuario: "Fernanda",
      fotoUsuario: "https://picsum.photos/id/237/200/300",
      fotoPost:
        "https://img.freepik.com/vetores-gratis/colecao-de-adesivos-fofos-desenhados-a-mao_52683-66000.jpg?t=st=1659057932~exp=1659058532~hmac=085ee753d3781e2e6f3662f01ea1551c372f8908f4821266ab1ff93ab4a66572",
    },
    {
      nomeUsuario: "Vivi",
      fotoUsuario: "https://picsum.photos/id/237/200/300",
      fotoPost:
        "https://img.freepik.com/vetores-gratis/um-modelo-de-adesivo-de-um-personagem-de-desenho-animado-de-gato_1308-79109.jpg?t=st=1659057976~exp=1659058576~hmac=af8599512f1fb3b927e01491204ea10738e3a2cc4779632a27391f4fd9abfdba",
    },
  ]);

  const [nomeUser, setNomeUser] = useState("");
  const [fotoPerfil, setFotoPerfil] = useState("");
  const [fotoNovoPost, setFotoNovoPost] = useState("");

  const adicionaPost = () => {
    const novoPost = {
      nomeUsuario: nomeUser,
      fotoUsuario: fotoPerfil,
      fotoPost: fotoNovoPost,
    };
    const atualizaPost = [...posts, novoPost];
    SetPosts(atualizaPost);
    setNomeUser("");
    setFotoPerfil("");
    setFotoNovoPost("");
  };

  const onChangeInputNome = (event) => {
    setNomeUser(event.target.value);
  };
  const onChangeInputFotoUser = (event) => {
    setFotoPerfil(event.target.value);
  };

  const onChangeInputFotoPost = (event) => {
    setFotoNovoPost(event.target.value);
  };
  const ListaPost = posts.map((itens) => {
    return (
      <Post
        nomeUsuario={itens.nomeUsuario}
        fotoUsuario={itens.fotoUsuario}
        fotoPost={itens.fotoPost}
      />
    );
  });

  return (
    <MainContainer>
      <MiniContainer>
        <img width="200" src={menina} alt={"logo"} />
        <h2>🌸 InstaGirls 🌸</h2>
      </MiniContainer>
      <InputBonito>
        <input
          placeholder="Nome"
          onChange={onChangeInputNome}
          value={nomeUser}
        />
        <input
          placeholder="Foto do Usuario"
          onChange={onChangeInputFotoUser}
          value={fotoPerfil}
        />
        <input
          placeholder="Foto do Post"
          onChange={onChangeInputFotoPost}
          value={fotoNovoPost}
        />
        <button onClick={adicionaPost}>Enviar 🌼</button>
      </InputBonito>

      {ListaPost}
    </MainContainer>
  );
}

export default App;
