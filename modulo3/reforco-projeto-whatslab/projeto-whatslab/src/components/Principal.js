import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: pink;
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 10px;
`;
const Nome = styled.p`
  font-weight: bold;
  /* display: block; */
  margin-right: 10px;
  color: green;
`;

function Principal(props) {
  return (
    <Container>
      <Nome>{props.nome} </Nome>
      <p>{props.mensagem}</p>
    </Container>
  );
}
export default Principal;
