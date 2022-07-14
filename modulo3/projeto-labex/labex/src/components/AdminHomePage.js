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

      <div>
        {" "}
        <button onClick={goBack}>Voltar</button>
        <button onClick={createTrip}>Criar Viagem </button>
        <button>Logout </button>
      </div>
    </ContainerAdm>
  );
}

export default AdminHomePage;
