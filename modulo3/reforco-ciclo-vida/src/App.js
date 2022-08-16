import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./styles.css";
import Delete from "./components/Delete";

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

function App() {
  const [tarefas, setTarefas] = useState([
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
  ]);
  const [inputValue, setInputValue] = useState("");
  const [filtro, setFiltro] = useState("");

  useEffect(() => {}, []);

  const onChangeInput = (event) => {
    setInputValue(event.target.value);
  };

  const criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: inputValue,
      completa: false,
    };
    const arraydeCopia = [...tarefas, novaTarefa];
    setTarefas(arraydeCopia);
    setInputValue("");
  };

  const selectTarefa = (id) => {
    const novoArray = tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        tarefa.completa = !tarefa.completa;
      }
      return tarefa;
    });
    setTarefas(novoArray);
    console.log(tarefas.completa);
  };

  const deletarTarefa = (id) => {
    const deletar = tarefas.map((item) => {
      if (item.id === id) {
        item.id = id;
      }
      return item;
    });
    setTarefas(deletar);
  };
  const onChangeFilter = (event) => {
    setFiltro(event.target.value);
  };

  const listaFiltrada = tarefas.filter((tarefa) => {
    switch (filtro) {
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
        <input value={inputValue} onChange={onChangeInput} />
        <button onClick={criaTarefa}>Adicionar</button>
      </InputsContainer>
      <br />

      <InputsContainer>
        <label>Filtro</label>
        <select value={filtro} onChange={onChangeFilter}>
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
              onClick={() => selectTarefa(tarefa.id)}
            >
              {tarefa.texto}
              <Delete deletarTarefa={deletarTarefa} />
            </Tarefa>
          );
        })}
      </TarefaList>
    </div>
  );
}

export default App;
