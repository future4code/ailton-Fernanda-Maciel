import React from "react";
import Container from "./Container";

export default class Etapa3 extends React.Component {
  state = {
    terminouCursoGraduacao: "",
    cursoComplementar: "",
  };

  onClick = () => {
    this.props.proximo(this.state);
  };

  render() {
    return (
      <div>
        <Container>
          <h1>Etapa 3 - Informações Gerais de Ensino</h1>
          <div>
            <input
              type="text"
              value={this.state.terminouCursoGraduacao}
              name="nome"
              onChange={(e) =>
                this.setState({ terminouCursoGraduacao: e.target.value })
              }
              placeholder="Porque você não terminou um curso de graduação?"
            />
            <p>Você fez algum curso complementar?</p>
            <select
              type="text"
              value={this.state.cursoComplementar}
              name="idade"
              onChange={(e) =>
                this.setState({ cursoComplementar: e.target.value })
              }
            >
              <option value="curso-tecnico">Curso Técnico</option>
              <option value="curso-ingles">Cursos de Inglês</option>
              <option value="sem-curso">Não fiz curso complementar</option>
            </select>
            <input type="button" value="Próximo" onClick={this.onClick} />
          </div>
        </Container>
      </div>
    );
  }
}
