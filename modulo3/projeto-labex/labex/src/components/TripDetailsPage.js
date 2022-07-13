import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CardTRips = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid white;
  background-color: white;
`;

function TripDetailsPage() {
  const [trip, setTrip] = useState({});
  const navigate = useNavigate();

  const goAdmin = () => {
    navigate("/admin");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === null) {
      console.log("Não esta logado!!!");
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/fernanda-maciel/trip/kAGYDvD1fOCJLWbBQKMz",
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((res) => {
        console.log(res.data.trip);
        setTrip(res.data.trip);
      })
      .catch((err) => {
        console.log("deu erro:", err.response);
      });
  }, []);

  return (
    <CardTRips>
      <h3>{trip.name}</h3>
      <p>Planeta:{trip.planet}</p>
      <p>{trip.description}</p>
      <p>{trip.durationInDays} dias</p>
      <p>Data:{trip.date}</p>
      <div>
        <button onClick={goAdmin}>Voltar</button>
      </div>
    </CardTRips>
  );
}

export default TripDetailsPage;
