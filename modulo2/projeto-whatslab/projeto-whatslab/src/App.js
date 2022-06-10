import React from "react";
import styled from "styled-components";

const Titulo = styled.h1`
  color: Green;
  border: 1px solid black;
  border-radius: 10px;
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
  }
  > botton {
  }
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
        <p>
          {pessoa.nome} - {pessoa.mensagem}
        </p>
      );
    });

    return (
      <MainContainer>
        <Titulo>WhatsLab</Titulo>
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

          <button onClick={this.adicionaNome}>Enviar</button>
        </OutraDiv>
        <div>{listaDeInformacoes}</div>
      </MainContainer>
    );
  }
}

export default ProjetoWhats;
