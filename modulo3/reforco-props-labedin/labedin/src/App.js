import React from "react";
import "./App.css";
import CardGrande from "./components/CardGrande/CardGrande";
import CardPequeno from "./components/CardPequeno/CardPequeno";
import ImagemButton from "./components/ImagemButton/ImagemButton";
import perfil from "./img/perfil.jpg";

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={perfil}
          nome="Fernanda Tiyomi"
          descricao="Oi, eu sou a Fernanda. Sou estudante de programação. Sou formada em Web Design e estou em processo de transição de carreira."
        />

        <ImagemButton
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4dW9IOkRXIJ4KnQvw23Gq8dOxKXr-DE6R7w&usqp=CAU"
          texto="Ver mais"
        />

        <CardPequeno
          imagem="https://cdn-icons-png.flaticon.com/512/561/561127.png"
          texto=" Email: fernanda_tiyomi@hotmail.com"
          imagemLocal="https://i.pinimg.com/originals/4a/15/1d/4a151d5f9c8cd243296d32640bef10f7.png"
          endereco="Rua Cianorte,148"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
          nome="Labenu"
          descricao="Formando desenvolvedores para o mercado de trabalho!"
        />

        <CardGrande
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg"
          nome="NASA"
          descricao="Apontando defeitos."
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
