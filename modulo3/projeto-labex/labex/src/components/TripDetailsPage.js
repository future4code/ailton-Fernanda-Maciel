import React from "react";
import { useNavigate } from "react-router-dom";

function TripDetailsPage() {
  const navigate = useNavigate();

  const goAdmin = () => {
    navigate = "/admin";
  };
  return (
    <div>
      <h1>TripDetailsPage</h1>
      <p>
        Para o administrador ver o detalhe de uma viagem específica, bem como os
        candidatos que aplicaram para ela
      </p>
      <button onClick={goAdmin}>Voltar</button>
    </div>
  );
}

export default TripDetailsPage;
