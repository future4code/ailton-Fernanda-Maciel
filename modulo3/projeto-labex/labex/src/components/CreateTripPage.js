import React from "react";
import { useNavigate } from "react-router-dom";

function CreateTripPage() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <h1>CreateTripPage</h1>
      <p>→ Formulário para o administrador criar uma nova viagem</p>
      <button onClick={goBack}>Voltar</button>
      <button>Criar</button>
    </div>
  );
}

export default CreateTripPage;
