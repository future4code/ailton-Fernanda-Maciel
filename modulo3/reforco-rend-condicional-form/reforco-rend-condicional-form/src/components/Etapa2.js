import React, { useState } from "react";

function Etapa2() {
  const [curso, setCurso] = useState("");
  const [unidadeEnsino, setUnidadeEnsino] = useState("");
  const onChangeCurso = (event) => {
    setCurso(event.target.value);
  };

  const onChangeUnidadeEnsino = (event) => {
    setUnidadeEnsino(event.target.value);
  };
  return (
    <div>
      <h1>Etapa 2 - Informações do Ensino Superior</h1>
      <p>5. Qual curso?</p>
      <input
        type={"text"}
        placeholder="Curso"
        value={curso}
        onChange={onChangeCurso}
      />
      <p>Qual a unidade de ensino?</p>
      <input
        type={"text"}
        placeholder="Unidade de ensino"
        value={unidadeEnsino}
        onChange={onChangeUnidadeEnsino}
      />
    </div>
  );
}

export default Etapa2;
