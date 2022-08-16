import React, { useState } from "react";
import Principal from "./components/Principal";
import styled from "styled-components";

const Container = styled.div`
  max-width: 600px;
  height: 100vh;
  border: 1px solid black;
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
`;

const InputNome = styled.input`
  width: 100px;
  margin: 5px;
  text-align: center;
  justify-content: center;
`;
const InputMensagem = styled.input`
  width: 300px;
  margin: 5px;
  text-align: center;
  justify-content: center;
`;

const FooterBonito = styled.footer`
  height: 100px;
  max-width: 600px;
  align-items: center;
  background-color: white;
`;
function App() {
  const [users, setUsers] = useState([
    {
      nome: "Fernanda",
      mensagem:
        "Olá, seja bem vindo (a) ao WhatsLab, sua ferramenta de mensagens!!!",
    },
    {
      nome: "Micaela",
      mensagem: "Estou amando essa ferramenta de mensagens!!!",
    },
  ]);

  const [valorInputNome, setValorInputNome] = useState("");
  const [valorInputMensagem, setValorInputmensagem] = useState("");

  const addUsuarios = () => {
    const usuarios = {
      nome: valorInputNome,
      mensagem: valorInputMensagem,
    };
    const novoUsuario = [...users, usuarios];

    setUsers(novoUsuario);
  };

  const onChangeInputNome = (e) => {
    setValorInputNome(e.target.value);
  };

  const onChangeInputMensagem = (e) => {
    setValorInputmensagem(e.target.value);
  };

  return (
    <Container>
      {users.map((pessoa) => (
        <Principal nome={pessoa.nome} mensagem={pessoa.mensagem} />
      ))}
      <FooterBonito>
        <InputNome
          value={valorInputNome}
          placeholder={"Nome"}
          onChange={onChangeInputNome}
        />
        <InputMensagem
          value={valorInputMensagem}
          placeholder={"Digite sua mensagem!"}
          onChange={onChangeInputMensagem}
        />
        <button onClick={addUsuarios}>Enviar </button>
      </FooterBonito>
    </Container>
  );
}

export default App;
