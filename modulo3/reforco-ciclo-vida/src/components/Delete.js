import React from "react";

function Delete(props) {
  return (
    <div>
      <button onClick={props.deletarTarefa}>Excluir</button>
    </div>
  );
}
export default Delete;
