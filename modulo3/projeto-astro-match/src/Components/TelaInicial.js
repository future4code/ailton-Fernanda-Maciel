import React from "react";
import styled from "styled-components";

const MiniContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid lemonchiffon;
  border-radius: 10px;

  > h1 {
    color: red;
    text-align: center;
  }
`;
const MiniFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 5px;
  padding: 5px;
  border: 1px solid lemonchiffon;
`;

export default function TelaInicial() {
  return (
    <MiniContainer>
      <h1>Astro♥Match</h1>
      <MiniFooter>
        <button>
          {" "}
          <img src="https://img.icons8.com/emoji/50/000000/cross-mark-emoji.png" />
        </button>
        <button>
          <img src="https://img.icons8.com/cotton/50/000000/hearts--v2.png" />
        </button>
      </MiniFooter>
    </MiniContainer>
  );
}
