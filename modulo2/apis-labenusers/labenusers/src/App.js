import React from "react";
import axios from "axios";

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
  getDados = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "fernanda-maciel-ailton",
          },
        }
      )
      .then((response) => {
        this.setState({ dados: response.data });
      })
      .catch((error) => {
        console.log(error.message);
      });
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
        console.log(response);
        this.getDados();
        alert("Usuario Criado");
      })
      .catch((erro) => {
        console.log(erro);
        alert("Erro ao cadastrar usuario");
      });
  };

  deletaUsuario = (id) => {
    axios.delete(
      `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
      {
        headers: {
          Authorization: "fernanda-maciel-ailton",
        },
      }
    );
  };

  render() {
    const arrayDados = this.state.dados.map((item) => {
      return (
        <div key={item.id}>
          <p>{item.name}</p>
          <button onClick={this.deletaUsuario}> Deletar Usuario</button>
        </div>
      );
    });
    console.log(this.state.dados);
    console.log(arrayDados);
    return (
      <main>
        <h1>Olá Labenusers!!!</h1>
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
      </main>
    );
  }
}

export default App;
