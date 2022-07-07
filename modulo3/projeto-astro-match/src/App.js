import React, { useState } from "react";
import TelaMach from "./Components/TelaMach";
import TelaInicial from "./Components/TelaInicial";
import styled from "styled-components";

const ContainerHeader = styled.header`
  display: flex;
  flex-direction: column;
  border: 1px solid lemonchiffon;
  border-radius: 10px;
  margin-top: 10;
  background-color: pink;
`;

const MiniContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px;
  padding: 5px;
`;
function App() {
  const [telaAtual, setTelaAtual] = useState("");

  const MudaTela = () => {
    switch (telaAtual) {
      case "Match":
        return <TelaMach />;
      case "Inicial":
      default:
        return <TelaInicial />;
    }
  };

  return (
    <ContainerHeader>
      <MiniContainer>
        <button onClick={() => setTelaAtual("Inicial")}>
          <img src="https://img.icons8.com/dusk/40/000000/home--v1.png" />
        </button>

        <button onClick={() => setTelaAtual("Match")}>
          <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/50/000000/external-match-modern-dating-flaticons-lineal-color-flat-icons-2.png" />
        </button>
      </MiniContainer>

      {MudaTela()}
    </ContainerHeader>
  );
}

export default App;
