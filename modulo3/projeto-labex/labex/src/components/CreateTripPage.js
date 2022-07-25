import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "./img/logo.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  > h1 {
    color: white;
  }
`;

const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

function CreateTripPage() {
  const [tripName, setTripName] = useState("");
  const [planeta, setPlaneta] = useState("");
  const [data, setData] = useState("");
  const [descricao, setDescricao] = useState("");
  const [duracaoDias, setDuracaoDias] = useState(0);

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

  const criarViagem = (event) => {
    event.preventDefault();

    console.log(tripName, planeta, data, descricao, duracaoDias);
  };

  const CreatTrips = () => {
    const body = {
      name: tripName,
      planet: planeta,
      date: data,
      description: descricao,
      durationInDays: duracaoDias,
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/fernanda-maciel/trips",
        body
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log("erro", err);
      });
  };

  return (
    <Container>
      <img width="300px" height="300px" src={logo} alt={"logo"} />
      <h1>Criar Viagem</h1>
      <Formulario onSubmit={criarViagem}>
        <input
          placeholder="nome"
          type="text"
          value={tripName}
          onChange={onChangeNomeViagem}
          required
        />
        <select
          placeholder="Planeta"
          name="planet"
          required
          onChange={(e) => setPlaneta(e.target.value)}
        >
          <option>Escolha um Planeta</option>
          <option value="mercurio" selected={planeta === "mercurio"}>
            Mercúrio
          </option>
          <option value="venus" selected={planeta === "venus"}>
            Vênus
          </option>
          <option value="terra" selected={planeta === "terra"}>
            Terra
          </option>
          <option value="marte" selected={planeta === "marte"}>
            Marte
          </option>
          <option value="jupiter" selected={planeta === "jupiter"}>
            Jupiter
          </option>
          <option value="saturno" selected={planeta === "saturno"}>
            Saturno
          </option>
          <option value="urano" selected={planeta === "urano"}>
            Urano
          </option>
          <option value="netuno" selected={planeta === "netuno"}>
            Netuno
          </option>
          <option value="plutao" selected={planeta === "plutao"}>
            Plutão
          </option>
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
        <button onClick={CreatTrips}>Criar</button>
      </Formulario>

      <div>
        <button onClick={goBack}>Voltar</button>
      </div>
    </Container>
  );
}

export default CreateTripPage;
