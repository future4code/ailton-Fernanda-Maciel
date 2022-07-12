import React from "react";
import logo from "./img/logo.png";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  const goListTrip = () => {
    navigate("/list");
  };

  const GoAdm = () => {
    navigate("/login");
  };
  return (
    <div>
      <h1>Home Page</h1>

      <img width="200 px" height="200px" src={logo} alt={"logo"} />

      <button onClick={goListTrip}>Ver Viagens</button>
      <button onClick={GoAdm}>Área ADM</button>
    </div>
  );
}

export default HomePage;
