import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > h1 {
    color: white;
  }
`;

const CardTrips = styled.div`
  border: 1px solid white;
  background-color: white;
`;

const BotaoBonito = styled.div`
  display: flex;
  justify-content: space-between;

  > button {
    font-size: 15px;

    :hover {
      background-color: blueviolet;
    }
  }
`;

function ListTripsPage() {
  const [getTripsList, setGetTripsList] = useState([]);

  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  };

  const GoToApplication = () => {
    navigate("/application");
  };

  useEffect(() => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/fernanda-maciel/trips"
      )
      .then((response) => {
        setGetTripsList(response.data.trips);
        console.log(response.data.trips);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <h1>Lista de Viagens </h1>

      {getTripsList.map((trips) => {
        return (
          <CardTrips key={trips.id}>
            <h4>{trips.name}</h4>
            <p>{trips.description}</p>
            <p>{trips.planet}</p>
            <p>{trips.duration}</p>
            <p>{trips.date}</p>
          </CardTrips>
        );
      })}
      <BotaoBonito>
        <button onClick={goToHomePage}>Voltar</button>
        <button onClick={GoToApplication}>Inscreva-se</button>
      </BotaoBonito>
    </Container>
  );
}

export default ListTripsPage;
