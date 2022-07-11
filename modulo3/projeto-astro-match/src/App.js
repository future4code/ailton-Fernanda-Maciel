import React, { useState } from "react";
import TelaMach from "./Components/TelaMach";
import TelaInicial from "./Components/TelaInicial";
import styled from "styled-components";

const ContainerHeader = styled.header`
  display: flex;
  flex-direction: column;
  border: 3px solid lemonchiffon;
  border-radius: 10px;
  margin-top: 10;
  background-color: #ff80ab;
  /* width: 500px; */
  /* margin-left: 30%; */
`;

const MiniContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 5px;
  padding: 5px;
`;

const EfeitoButt = styled.button`
  :hover {
    -webkit-transform: rotateZ(-30deg);
    -ms-transform: rotateZ(-30deg);
    transform: rotateZ(-30deg);
  }
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
        <EfeitoButt onClick={() => setTelaAtual("Inicial")}>
          <img src="https://img.icons8.com/stickers/50/000000/--tinder.png" />
        </EfeitoButt>

        <EfeitoButt onClick={() => setTelaAtual("Match")}>
          <img src="https://img.icons8.com/external-others-iconmarket/50/000000/external-love-valentines-day-others-iconmarket-61.png" />
        </EfeitoButt>
      </MiniContainer>

      {MudaTela()}
    </ContainerHeader>
  );
}

export default App;
