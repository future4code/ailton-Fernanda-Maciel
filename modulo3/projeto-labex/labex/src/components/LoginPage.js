import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";
import logo from "./img/logo.png";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h1 {
    color: white;
    font-size: 50px;
  }
`;

function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();

  const goAdminPage = () => {
    navigate("/admin");
  };
  const GoBack = () => {
    navigate(-1);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangeSenha = (event) => {
    setSenha(event.target.value);
  };

  const enviarLogin = () => {
    console.log(email, senha);
    const body = {
      email: email,
      password: senha,
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/fernanda-maciel/login",
        body
      )
      .then((response) => {
        console.log(response.data.token);
        localStorage.setItem("token", response.data.token);
        navigate("/tripDetails");
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <Container>
      <img width="300 px" height="300px" src={logo} alt={"logo"} />
      <h1>Login</h1>
      <input
        placeholder="email"
        type="email"
        value={email}
        onChange={onChangeEmail}
      />
      <input
        placeholder="senha"
        type="password"
        value={senha}
        onChange={onChangeSenha}
      />
      <div>
        <button onClick={GoBack}>Voltar</button>
        <button onClick={enviarLogin}>Entrar</button>
      </div>
    </Container>
  );
}

export default LoginPage;
