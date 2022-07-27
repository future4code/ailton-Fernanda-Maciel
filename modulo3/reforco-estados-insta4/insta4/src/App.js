import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <MainContainer>
      <Post
        nomeUsuario={"paulinha"}
        fotoUsuario={"https://picsum.photos/50/50"}
        fotoPost={"https://picsum.photos/200/150"}
      />

      <Post
        nomeUsuario={"Fernanda"}
        fotoUsuario={"https://picsum.photos/id/237/200/300"}
        fotoPost={"https://picsum.photos/200/150"}
      />

      <Post
        nomeUsuario={"Vitor"}
        fotoUsuario={"https://picsum.photos/200/300?grayscale"}
        fotoPost={"https://picsum.photos/200/150"}
      />
    </MainContainer>
  );
}

export default App;
