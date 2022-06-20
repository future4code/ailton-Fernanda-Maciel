import React from "react";
import Container from "./Container";

class Final extends React.Component {
  render() {
    const {
      nome,
      email,
      idade,
      escolaridade,
      curso,
      unidadeEnsino,
      terminouCursoGraduacao,
      cursoComplementar,
    } = this.props.dados;

    return (
      <div>
        <Container>
          <h1>O FORMULÁRIO ACABOU</h1>
          <p>Muito obrigada por participar!</p>
        </Container>

        <p>Resumo</p>

        <table>
          <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>Email</th>
            <th>Escolaridade</th>
            <th>Curso</th>
            <th>Unidade de Ensino</th>
            <th>Porque você não terminou um curso de graduação?</th>
            <th>Você fez algum curso complementar?</th>
          </tr>
          <tr>
            <td>{nome}</td>
            <td>{idade}</td>
            <td>{email}</td>
            <td>{escolaridade}</td>
            <td>{curso}</td>
            <td>{unidadeEnsino}</td>
            <td>{terminouCursoGraduacao}</td>
            <td>{cursoComplementar}</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Final;
