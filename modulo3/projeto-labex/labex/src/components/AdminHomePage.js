import React from "react";
import { useNavigate } from "react-router-dom";

function AdminHomePage() {
  const navigate = useNavigate();

  const createTrip = () => {
    navigate("/createTrip");
  };
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <h1>AdminHomePage</h1>
      <p>
        → Para o administrador ver a lista de viagens e poder deletá-las ou
        acessar o detalhe de cada uma delas
      </p>
      <button onClick={goBack}>Voltar</button>
      <button onClick={createTrip}>Criar Viagem </button>
      <button>Logout </button>
    </div>
  );
}

export default AdminHomePage;
