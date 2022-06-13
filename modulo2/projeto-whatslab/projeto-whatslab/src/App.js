import React from "react";
import styled from "styled-components";

const Titulo = styled.h1`
  color: #f50f99;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  display: flex;
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  margin: 1px;
  background-color: #f70eba2e;
`;

const OutraDiv = styled.div`
  display: flex;
  margin: 1px;

  > input {
    margin: 1px;
    border-radius: 4px;
    display: flex;
    margin-top: 10px;
    width: 110px;
    height: auto;
  }
`;
const Conversa = styled.p`
  display: flex;
  border: 1px solid black;
  border-radius: 10px;
  width: 375px;
  height: auto;
  margin: 1px;

  align-items: center;
  text-align: center;
  background-color: #d1f6fd;
`;

class ProjetoWhats extends React.Component {
  state = {
    informacoes: [
      {
        nome: "Fernanda",
        mensagem: "Estou a caminho",
      },
      {
        nome: "Taty",
        mensagem: "Onde vc esta?",
      },
    ],

    valorInputNome: "",
    valorInputMensagem: "",
  };

  adicionaNome = () => {
    const novoNome = {
      nome: this.state.valorInputNome,

      mensagem: this.state.valorInputMensagem,
    };

    const novosNomes = [...this.state.informacoes, novoNome];

    this.setState({ informacoes: novosNomes });

    this.setState({ valorInputMensagem: "", valorInputNome: "" });
  };

  onchangeInputNome = (event) => {
    this.setState({ valorInputNome: event.target.value });
  };

  onchangeInputMensagem = (event) => {
    this.setState({ valorInputMensagem: event.target.value });

    event.preventDefault();
  };

  render() {
    const listaDeInformacoes = this.state.informacoes.map((pessoa) => {
      return (
        <Conversa>
          {pessoa.nome} - {pessoa.mensagem}
        </Conversa>
      );
    });

    return (
      <MainContainer>
        <Titulo>WhatsLab 💌</Titulo>

        <div>{listaDeInformacoes}</div>

        <OutraDiv>
          <input
            value={this.state.valorInputNome}
            onChange={this.onchangeInputNome}
            placeholder={"Nome"}
          />
          <input
            value={this.state.valorInputMensagem}
            onChange={this.onchangeInputMensagem}
            placeholder={"Mensagem"}
          />
          <button onClick={this.adicionaNome}>💌</button>
        </OutraDiv>
      </MainContainer>
    );
  }
}

export default ProjetoWhats;
