import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  border: 1px solid lemonchiffon;
  border-radius: 5px;
  margin: 5px;

  > h1 {
    color: red;
    text-align: center;
  }
`;

export default function TelaMach() {
  return (
    <Container>
      <h1>TelaMatch</h1>
    </Container>
  );
}
