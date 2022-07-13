import React from "react";
import { useNavigate } from "react-router-dom";
import logo2 from "./img/logo2.png";
import styled from "styled-components";

const ContainerAdm = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid white;
  text-align: center;
  background-color: white;
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
      <header>
        <h1>Painel Administrativo </h1>
        <img width="150px" height="150px" src={logo2} alt={"logo2"} />
      </header>
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
