import React from "react";
import "./CardPequeno.css";

function CardPequeno(props) {
  return (
    <div className="pequenocard-container">
      <img src={props.imagem} />
      <div>
        <h4>{props.email}</h4>
        <h4>{props.endereço}</h4>
      </div>
    </div>
  );
}

export default CardPequeno;
