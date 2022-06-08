import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";
import fer from "./img/fer.jpeg";

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
          nomeUsuario={"Fernanda"}
          fotoUsuario={fer}
          fotoPost={"https://picsum.photos/200/150"}
        />
        <Post
          nomeUsuario={"Fernanda"}
          fotoUsuario={fer}
          fotoPost={"https://picsum.photos/200/150"}
        />
      </MainContainer>
    );
  }
}

export default App;
