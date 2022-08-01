import React, { useState } from "react";

function Etapa1() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [email, setEmail] = useState("");

  const onChangeNome = (event) => {
    setNome(event.target.value);
  };
  const onChangeIdade = (event) => {
    setIdade(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  return (
    <div>
      <h1>Etapa 1 - Dados Gerais</h1>
      <p>1. Qual o seu nome?</p>
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={onChangeNome}
      />
      <p>2. Qual a sua idade?</p>
      <input
        type={"number"}
        placeholder="Idade"
        value={idade}
        onChange={onChangeIdade}
      />
      <p>3. Qual seu email?</p>
      <input
        type={"text"}
        placeholder="Email"
        value={email}
        onChange={onChangeEmail}
      />
      <p>4. Qual a sua escolaridade?</p>
      <select>
        <option value={"Ensino médio incompleto"}>
          Ensino médio incompleto
        </option>
        <option value={"Ensino Médio Completo"}>Ensino Médio Completo</option>
        <option value={"Ensino Superior Incompleto"}>
          Ensino Superior Incompleto
        </option>
        <option value={"Ensino Superior Completo"}>
          Ensino Superior Completo
        </option>
      </select>
    </div>
  );
}

export default Etapa1;
