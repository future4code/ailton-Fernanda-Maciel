import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "./img/logo.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
`;

function CreateTripPage() {
  const [tripName, setTripName] = useState("");
  const [planeta, setPlaneta] = useState([]);
  const [data, setData] = useState([]);
  const [descricao, setDescricao] = useState("");
  const [duracaoDias, setDuracaoDias] = useState("");

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const onChangeNomeViagem = (event) => {
    setTripName(event.target.value);
  };

  const onChangePlaneta = (event) => {
    setPlaneta(event.target.value);
  };

  const onChangeData = (event) => {
    setData(event.target.value);
  };

  const onChangedescricao = (event) => {
    setDescricao(event.target.value);
  };

  const onChangeDuracaoDias = (event) => {
    setDuracaoDias(event.target.value);
  };

  return (
    <Container>
      <img width="300px" height="300px" src={logo} alt={"logo"} />
      <h1>Criar Viagem</h1>
      <Formulario>
        <input
          placeholder="nome"
          type="text"
          value={tripName}
          onChange={onChangeNomeViagem}
        />
        <select placeholder="Planeta" name="planet" required="">
          <option
            onChange={onChangePlaneta}
            value={planeta}
            disabled=""
            selected=""
          >
            Escolha um Planeta
          </option>
          <option value={planeta}>Mercúrio</option>
          <option value={planeta}>Vênus</option>
          <option value={planeta}>Terra</option>
          <option value={planeta}>Marte</option>
          <option value={planeta}>Jupiter</option>
          <option value={planeta}>Saturno</option>
          <option value={planeta}>Urano</option>
          <option value={planeta}>Netuno</option>
          <option value={planeta}>Plutão</option>
        </select>
        <input
          placeholder="Data"
          type="date"
          name="date"
          required=""
          min="2022-07-13"
          value={data}
          onChange={onChangeData}
        />
        <input
          placeholder="Descrição"
          name="description"
          required=""
          pattern="^.{30,}$"
          title="O nome deve ter no mínimo 30 caracteres"
          value={descricao}
          onChange={onChangedescricao}
        />
        <input
          placeholder="Duração em dias"
          type="number"
          name="durationInDays"
          required=""
          min="0"
          value={duracaoDias}
          onChange={onChangeDuracaoDias}
        ></input>
      </Formulario>

      <div>
        <button onClick={goBack}>Voltar</button>
        <button>Criar</button>
      </div>
    </Container>
  );
}

export default CreateTripPage;
