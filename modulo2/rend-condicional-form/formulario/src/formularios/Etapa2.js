import React from "react";
import Container from "./Container";

export default class Etapa2 extends React.Component {
  state = {
    curso: "",
    unidadeEnsino: "",
  };

  onClick = () => {
    this.props.proximo(this.state);
  };

  render() {
    return (
      <div>
        <Container>
          <h1>Etapa 2 - Informações do Ensino Superior</h1>
          <div>
            <input
              type="text"
              value={this.state.curso}
              name="nome"
              onChange={(e) => this.setState({ curso: e.target.value })}
              placeholder="Qual o curso?"
            />
            <input
              type="text"
              value={this.state.unidadeEnsino}
              name="idade"
              onChange={(e) => this.setState({ unidadeEnsino: e.target.value })}
              placeholder="Qual a unidade de ensino?"
            />
            <input type="button" value="Próximo" onClick={this.onClick} />
          </div>
        </Container>
      </div>
    );
  }
}
