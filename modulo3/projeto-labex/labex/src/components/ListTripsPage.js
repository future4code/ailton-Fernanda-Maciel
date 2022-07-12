import React from "react";
import { useNavigate } from "react-router-dom";
function ListTripsPage() {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  };

  const GoToApplication = () => {
    navigate("/application");
  };

  return (
    <div>
      <h1>ListTripsPage </h1>
      <p>→ Para vermos todas as viagens</p>

      <button onClick={goToHomePage}>Voltar</button>
      <button onClick={GoToApplication}>Inscreva-se</button>
    </div>
  );
}

export default ListTripsPage;
