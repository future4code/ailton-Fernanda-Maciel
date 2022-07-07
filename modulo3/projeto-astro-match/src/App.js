import React, { useState } from "react";
import TelaMach from "./Components/TelaMach";
import TelaInicial from "./Components/TelaInicial";

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
    <div>
      <button onClick={() => setTelaAtual("Inicial")}>Tela Inicial</button>

      <button onClick={() => setTelaAtual("Match")}>Lista de Matchs ♥</button>
      {MudaTela()}
    </div>
  );
}

export default App;
