import React from "react";
import Container from "./Container";

class Etapa1 extends React.Component {
  state = {
    nome: "",
    idade: "",
    email: "",
    escolaridade: "",
  };

  onClick = () => {
    this.props.proximo({
      nome: this.state.nome,
      idade: this.state.idade,
      email: this.state.email,
      escolaridade: this.state.escolaridade,
    });
  };

  render() {
    return (
      <div>
        <Container>
          <h1>Etapa 1 - Dados Gerais</h1>
          <div>
            <input
              type="text"
              value={this.state.nome}
              name="nome"
              onChange={(e) => this.setState({ nome: e.target.value })}
              placeholder="Nome"
            />
            <input
              type="text"
              value={this.state.idade}
              name="idade"
              onChange={(e) => this.setState({ idade: e.target.value })}
              placeholder="Idade"
            />
            <input
              type="text"
              value={this.state.email}
              name="email"
              onChange={(e) => this.setState({ email: e.target.value })}
              placeholder="Email"
            />
            <p>Qual o grau de escolaridade</p>
            <select
              name="escolaridade"
              id="escolaridade"
              value={this.state.escolaridade}
              onChange={(e) => this.setState({ escolaridade: e.target.value })}
            >
              <option value="ensino-medio-incompleto">
                Ensino Médio Incompleto
              </option>
              <option value="ensino-medio-completo">
                Ensino Médio Completo
              </option>
              <option value="ensino-superior-incompleto">
                Ensino Superior Incompleto
              </option>
              <option value="ensino-superior-completo">
                Ensino Superior Completo
              </option>
            </select>
            <input type="button" value="Próximo" onClick={this.onClick} />
          </div>
        </Container>
      </div>
    );
  }
}

export default Etapa1;
