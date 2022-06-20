import React from "react";
import styled from "styled-components";
import "./styles.css";
const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`;
const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? "line-through" : "none")};
`;
const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`;
class App extends React.Component {
  state = {
    tarefas: [
      {
        id: Date.now(), // Explicação abaixo
        texto: "Texto da tarefa",
        completa: false, // Indica se a tarefa está completa (true ou false)
      },
      {
        id: Date.now(), // Explicação abaixo
        texto: "Texto da segunda tarefa",
        completa: true, // Indica se a tarefa está completa (true ou false)
      },
    ],
    inputValue: "",
    filtro: "pendentes",
    textoNovaTarefa: "",
  };
  componentDidUpdate() {}
  componentDidMount() {}
  onChangeInput = (event) => {
    this.setState({ textoNovaTarefa: event.target.value });
  };
  criaTarefa = () => {
    console.log("inseriu tarefa");
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.textoNovaTarefa,
      completa: false,
    };
    this.setState({ tarefas: [...this.state.tarefas, novaTarefa] });
  };
  selectTarefa = (id) => {
    console.log("selecionar tarefa", id);
    const tarefaSelecionada = this.state.tarefas.map((selecionar) => {});
  };
  onChangeFilter = (event) => {};
  render() {
    const listaFiltrada = this.state.tarefas.filter((tarefa) => {
      switch (this.state.filtro) {
        case "pendentes":
          return !tarefa.completa;
        case "completas":
          return tarefa.completa;
        default:
          return true;
      }
    });
    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input
            value={this.state.textoNovaTarefa}
            onChange={this.onChangeInput}
          />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />
        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map((tarefa) => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            );
          })}
        </TarefaList>
      </div>
    );
  }
}
export default App;
