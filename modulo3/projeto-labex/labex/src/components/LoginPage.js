import React from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const goAdminPage = () => {
    navigate("/admin");
  };
  const GoBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <h1>LoginPage → Para fazermos login como administrador</h1>
      <button onClick={GoBack}>Voltar</button>
      <button onClick={goAdminPage}>Entrar</button>
    </div>
  );
}

export default LoginPage;
