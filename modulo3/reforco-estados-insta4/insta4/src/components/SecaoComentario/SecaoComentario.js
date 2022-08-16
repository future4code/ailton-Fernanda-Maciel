import React, { Component, useState } from "react";
import styled from "styled-components";

const CommentContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
`;

const InputComentario = styled.input`
  width: 100%;
  margin-right: 5px;
`;

export function SecaoComentario(props) {
  const [comentarios, setComentarios] = useState("");

  const onChangeComentario = (e) => {
    setComentarios(e.target.value);
    console.log(comentarios);
  };

  return (
    <CommentContainer>
      <InputComentario
        placeholder={"Comentário"}
        value={comentarios}
        onChange={onChangeComentario}
      />
      <button onClick={props.aoEnviar}>Enviar</button>
    </CommentContainer>
  );
}

export default SecaoComentario;
