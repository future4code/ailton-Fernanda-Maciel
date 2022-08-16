import React from "react";
import styled from "styled-components";

const Container1 = styled.div`
  border: 1px solid black;
  margin: 5px;
  display: flex;
  align-items: center;
  padding: 10px;
`;

const Container2 = styled.div`
  border: 1px solid black;
  margin: 5px;
  display: flex;
  align-items: center;
  padding: 10px;
`;
function CardPequeno(props) {
  return (
    <div>
      <Container1>
        <img width="40px" src={props.imagem} />
        <p>{props.texto}</p>
      </Container1>

      <Container2>
        <img width="60px" src={props.imagemLocal} />
        <p>{props.endereco}</p>
      </Container2>
    </div>
  );
}
export default CardPequeno;
