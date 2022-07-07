import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  border-radius: 30 pxs;
  border: 1px solid lemonchiffon;

  > h1 {
    color: red;
    text-align: center;
  }
`;

export default function TelaMach() {
  return (
    <Container>
      <h1>TelaMatch</h1>

      <h2>Aqui é a lista de Matchs</h2>
    </Container>
  );
}