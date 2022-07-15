import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo2 from "./img/logo2.png";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  > h1 {
    color: white;
  }
`;
const SelectContainer = styled.select`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const InputContainer = styled.input`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const BotaoBonito = styled.div`
  display: flex;
  justify-content: space-between;

  > button {
    font-size: 15px;

    :hover {
      background-color: blueviolet;
      color: white;
    }
  }
`;

function ApplicationFormPage() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const [tripsList, setTripsList] = useState([]);
  const [tripName, setTripName] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/fernanda-maciel/trips"
      )
      .then((response) => {
        setTripsList(response.data.trips);
        console.log(response.data.trips);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const enviarFormulario = () => {
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/fernanda-maciel/trips/:id/apply"
      )
      .then((res) => {
        console.log(res);
        alert("Inscrição para viagem recebida com sucesso!!!");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const changeTripName = (e) => {
    setTripName(e.target.value);
  };

  return (
    <Container>
      <img width="200 px" height="200px" src={logo2} alt={"logo2"} />
      <h1>Inscreva-se para uma viagem</h1>

      <SelectContainer onChange={changeTripName}>
        <option value={""}> Escolha uma Viagem </option>
        {tripsList.map((trips) => {
          return (
            <option key={trips.id} value={trips.name}>
              {trips.name}
            </option>
          );
        })}
      </SelectContainer>

      <InputContainer placeholder="Nome Completo" />
      <InputContainer
        placeholder="Idade"
        type="number"
        required
        pattern={"a - z"}
        title={"O viajante deve ser maior de 18 anos"}
      />
      <InputContainer placeholder="Texto de candidatura" type="text" />
      <InputContainer placeholder="Profissão" type="text" />
      <InputContainer placeholder="Escolha um País" type="text" />

      <BotaoBonito>
        <button onClick={goBack}>Voltar</button>
        <button onClick={enviarFormulario}>Enviar</button>
      </BotaoBonito>
    </Container>
  );
}

export default ApplicationFormPage;
