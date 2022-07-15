import React from "react";
import { useNavigate } from "react-router-dom";
import logo2 from "./img/logo2.png";
import styled from "styled-components";

const ContainerAdm = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  > h1 {
    color: white;
  }
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

function AdminHomePage() {
  const navigate = useNavigate();

  const createTrip = () => {
    navigate("/createTrip");
  };
  const goBack = () => {
    navigate(-1);
  };

  return (
    <ContainerAdm>
      <h1>Painel Administrativo </h1>
      <img width="200px" height="200px" src={logo2} alt={"logo2"} />

      <BotaoBonito>
        {" "}
        <button onClick={goBack}>Voltar</button>
        <button onClick={createTrip}>Criar Viagem </button>
        <button>Logout </button>
      </BotaoBonito>
    </ContainerAdm>
  );
}

export default AdminHomePage;
