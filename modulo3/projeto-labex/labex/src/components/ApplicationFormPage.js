import React from "react";
import { useNavigate } from "react-router-dom";

function ApplicationFormPage() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h1>ApplicationFormPage </h1>
      <p>
        → Para o usuário se candidatar à viagens, página que vai ter o
        formulário de inscrição
      </p>
      <button onClick={goBack}>Voltar</button>
      <button>Enviar</button>
    </div>
  );
}

export default ApplicationFormPage;
