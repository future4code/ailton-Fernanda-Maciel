import React from "react";

export default class ProcurarPlaylist extends React.Component {
  state = {
    palavraChave: "",
  };

  render() {
    return (
      <div>
        <input
          value={this.state.palavraChave}
          onChange={(e) => this.setState({ palavraChave: e.target.value })}
          type="text"
          placeholder="Procurar por playlist"
        />
        <button
          onClick={() => this.props.procurarPlaylist(this.state.palavraChave)}
        >
          Procurar
        </button>
      </div>
    );
  }
}
