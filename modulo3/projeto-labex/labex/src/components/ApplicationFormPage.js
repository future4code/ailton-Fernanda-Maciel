import React from "react";
import { useNavigate } from "react-router-dom";
import logo2 from "./img/logo2.png";

function ApplicationFormPage() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <img width="200 px" height="200px" src={logo2} alt={"logo2"} />
      <h1>Inscreva-se para uma viagem</h1>

      <button onClick={goBack}>Voltar</button>
      <button>Enviar</button>
    </div>
  );
}

export default ApplicationFormPage;
