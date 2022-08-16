import React, { useState } from "react";

function Etapa3() {
  const [pqNaoTerminou, setPqNaoTerminou] = useState("");
  return (
    <div>
      <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
      <p>Por que você não terminou um curso de graduação?</p>
      <input />
      <p>6. Você fez algum curso complementar?</p>
      <select>
        <option value="nenhum">Nenhum</option>
        <option value="Curso tecnico">Curso tecnico</option>
        <option value="Curso de inglês">Curso de inglês</option>
      </select>
    </div>
  );
}

export default Etapa3;
