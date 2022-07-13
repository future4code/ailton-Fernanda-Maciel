import React from "react";
import logo from "./img/logo.png";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h1 {
    color: white;
    font-size: 50px;
  }
`;

const MiniContainer = styled.div`
  display: flex;
`;

const BotaoHome = styled.button`
  :hover {
    background-color: #8a2be2;
    color: white;
  }
`;

function HomePage() {
  const navigate = useNavigate();
  const goListTrip = () => {
    navigate("/list");
  };

  const GoAdm = () => {
    navigate("/login");
  };
  return (
    <Container>
      <img width="300 px" height="300px" src={logo} alt={"logo"} />
      <h1>Labe-X</h1>
      <MiniContainer>
        <BotaoHome onClick={goListTrip}>Ver Viagens</BotaoHome>
        <BotaoHome onClick={GoAdm}>Área ADM</BotaoHome>
      </MiniContainer>
    </Container>
  );
}

export default HomePage;
