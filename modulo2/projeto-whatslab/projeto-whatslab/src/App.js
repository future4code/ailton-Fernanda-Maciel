import React from "react";
import styled from "styled-components";

const Titulo = styled.h1`
  color: Green;
  text-align: center;
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const OutraDiv = styled.div`
  display: flex;
  width: 300px;
  margin-bottom: 20px;

  > input {
    margin: 1px;
    border-radius: auto;
    text-align: center;
    display: flex;

    align-items: center;
    width: 150px;
    height: 30px;
    margin-top: 0px;
    display: flex;
    background-color: #a2efa29e;
  }
`;
const Conversa = styled.p`
  display: flex;
  border: 1px solid black;
  border-radius: 10px;
  width: 400px;
  height: 50px;
  align-items: center;
  text-align: center;
  background-color: #a2efa29e;
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
        <Titulo>WhatsLab 🚀</Titulo>
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
        <div>{listaDeInformacoes}</div>
      </MainContainer>
    );
  }
}

export default ProjetoWhats;
