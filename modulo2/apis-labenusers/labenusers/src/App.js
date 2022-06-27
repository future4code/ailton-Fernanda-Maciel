import React from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  border: 1px solid black;

  > bottom {
    width: 100px;
  }
`;

const Conteudo = styled.section`
  background-color: pink;
  display: flex;
  flex-direction: row;
`;

const Titulo = styled.h1`
  color: blue;
  align-items: center;
  text-align: center;
`;

class App extends React.Component {
  state = {
    nome: "",
    email: "",
    dados: [],
    pagina: false,
  };

  onChangeInput = (e) => {
    this.setState({ nome: e.target.value });
  };
  onChangeInputEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  componentDidMount() {
    this.getDados();
  }
  getDados = async () => {
    try {
      const resposta = await axios.get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "fernanda-maciel-ailton",
          },
        }
      );

      this.setState({ dados: resposta.data });
    } catch (error) {
      console.log(error.message);
    }
  };
  mudapagina = () => {
    this.setState({
      pagina: !this.state.pagina,
    });
  };

  creatDados = () => {
    const body = {
      name: this.state.nome,
      email: this.state.email,
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "fernanda-maciel-ailton",
          },
        }
      )
      .then((response) => {
        this.getDados();
        alert("Usuario Criado");
      })
      .catch((erro) => {
        console.log(erro);
        alert("Erro ao cadastrar usuario");
      });
  };

  deletaUsuario = async (id) => {
    const resposta = await axios.delete(
      `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
      {
        headers: {
          Authorization: "fernanda-maciel-ailton",
        },
      }
    );
    alert("usuario excluido");
    this.getDados();
  };

  render() {
    const arrayDados = this.state.dados.map((item) => {
      return (
        <div key={item.id}>
          <p>{item.name}</p>
          <button onClick={() => this.deletaUsuario(item.id)}>
            Deletar Usuario
          </button>
        </div>
      );
    });
    console.log(this.state.dados);
    console.log(arrayDados);
    return (
      <Container>
        <Titulo>Olá Labenusers!!!</Titulo>
        <button onClick={this.mudapagina}>Outra Pagina </button>
        {this.state.pagina === false && (
          <section>
            <label>
              Nome:
              <input value={this.state.nome} onChange={this.onChangeInput} />
              <label>
                E-mail:
                <input
                  value={this.state.email}
                  onChange={this.onChangeInputEmail}
                />
              </label>
              <button onClick={this.creatDados}>Criar Usuario</button>
            </label>
          </section>
        )}

        {this.state.pagina === true && (
          <div>
            <h1>lista de cadastro</h1>
            {arrayDados}
          </div>
        )}
      </Container>
    );
  }
}

export default App;
