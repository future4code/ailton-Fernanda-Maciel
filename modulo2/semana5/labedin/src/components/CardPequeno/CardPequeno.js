import React from "react";

import styled from "styled-components";

const PequenoCard = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  padding: 20px 10px;
  margin-bottom: 10px;
  height: 50px;

  > img {
    width: 30px;
    margin-right: 10px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
  }

  > h4 {
    margin-bottom: 1px;
  }
`;

function CardPequeno(props) {
  return (
    <PequenoCard>
      <img src={props.imagem} />
      <div>
        <h4>{props.email}</h4>
        <h4>{props.endereço}</h4>
      </div>
    </PequenoCard>
  );
}

export default CardPequeno;
