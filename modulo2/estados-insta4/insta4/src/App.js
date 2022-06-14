import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const NovoPostForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  border: 1px solid black;
  margin-bottom: 20px;

  > input {
    margin: 10px;
  }
`;

class App extends React.Component {
  state = {
    posts: [
      {
        nomeUsuario: "Fernanda",
        fotoUsuario: "./img/fer.jpeg",
        fotoPost: "https://picsum.photos/200/150",
      },
      {
        nomeUsuario: "Juliana",
        fotoUsuario: "./img/perfil2.jpeg",
        fotoPost: "https://picsum.photos/200/300?grayscale",
      },
      {
        nomeUsuario: "Gio",
        fotoUsuario: "./img/perfil3.jpeg",
        fotoPost: "https://picsum.photos/id/237/200/300",
      },
    ],
  };

  postarPostSubmit = (e) => {
    const nomeUsuario = e.target.elements.nomeUsuario.value;
    const fotoUsuario = e.target.elements.fotoUsuario.value;
    const fotoPost = e.target.elements.fotoPost.value;

    const novoPost = { nomeUsuario, fotoUsuario, fotoPost };
    this.setState({
      posts: [...this.state.posts, novoPost],
    });

    e.preventDefault();
  };

  render() {
    return (
      <MainContainer>
        <NovoPostForm onSubmit={this.postarPostSubmit}>
          <input name="nomeUsuario" type="text" placeholder="Nome do usuário" />
          <input name="fotoUsuario" type="text" placeholder="Foto do usuário" />
          <input name="fotoPost" type="text" placeholder="Foto do Post" />
          <input type="submit" value="Postar" />
        </NovoPostForm>
        {this.state.posts.map((post, index) => (
          <Post
            key={index}
            nomeUsuario={post.nomeUsuario}
            fotoUsuario={post.fotoUsuario}
            fotoPost={post.fotoPost}
          />
        ))}
      </MainContainer>
    );
  }
}

export default App;
