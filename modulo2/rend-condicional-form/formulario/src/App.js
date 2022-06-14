import React from "react";
import Etapa1 from "./formularios/Etapa1";
import Etapa2 from "./formularios/Etapa2";
import Etapa3 from "./formularios/Etapa3";
import Final from "./formularios/Final";

export default class App extends React.Component {
  state = {
    dados: {},
    etapa: 1,
  };

  proximo = (dados) => {
    const dadosAtualizados = {
      ...this.state.dados,
      ...dados,
    };

    this.setState({
      dados: dadosAtualizados,
      etapa: this.state.etapa + 1,
    });
  };

  render() {
    switch (this.state.etapa) {
      case 2:
        return <Etapa2 proximo={this.proximo} />;
      case 3:
        return <Etapa3 proximo={this.proximo} />;
      case 4:
        return <Final dados={this.state.dados} />;
      default:
        return <Etapa1 proximo={this.proximo} />;
    }
  }
}
