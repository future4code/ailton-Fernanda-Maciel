import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";
import fer from "./img/fer.jpeg";
import ju from "./img/perfil2.jpeg";
import gio from "./img/perfil3.jpeg";
const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={"Fernanda"}
          fotoUsuario={fer}
          fotoPost={"https://picsum.photos/200/150"}
        />

        <Post
          nomeUsuario={"Juliana"}
          fotoUsuario={ju}
          fotoPost={"https://picsum.photos/200/300?grayscale"}
        />
        <Post
          nomeUsuario={"Gio"}
          fotoUsuario={gio}
          fotoPost={"https://picsum.photos/id/237/200/300"}
        />
      </MainContainer>
    );
  }
}

export default App;
