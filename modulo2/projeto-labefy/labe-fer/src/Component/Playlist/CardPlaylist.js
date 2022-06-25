import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .deletar {
    margin-left: 10px;
    border: 1px solid black;
    padding: 5px;
    border-radius: 5px;

    :hover {
      cursor: pointer;
    }
  }
`;

function CardPlaylist(props) {
  const { id, name, deletarPlayList } = props;

  return (
    <Card>
      <Header>
        <h3>{name}</h3>
        <span className="deletar" onClick={() => deletarPlayList(id)}>
          ❌
        </span>
      </Header>
    </Card>
  );
}

export default CardPlaylist;
