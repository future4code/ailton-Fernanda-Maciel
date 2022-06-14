import React from "react";
import CardGrande from "./components/CardGrande/CardGrande";
import ImagemButton from "./components/ImagemButton/ImagemButton";
import CardPequeno from "./components/CardPequeno/CardPequeno";
import fernanda from "./img/fernanda.jpeg";
import cartinha from "./img/cartinha.png";
import localização from "./img/localização.png";
import styled from "styled-components";
import GlobalStyle from "./globalStyles";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

const PageSectionContainer = styled.div`
  width: 40vw;
  margin: 10px 0;

  > h3 {
    text-align: center;
    margin-bottom: 20px;
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <PageSectionContainer>
          <Title>Dados pessoais</Title>
          <CardGrande
            imagem={fernanda}
            nome="Fernanda"
            descricao="Olá!! Eu sou a Fer, moro em Curitba e estou em processo de transição de carreira!"
          />

          <ImagemButton
            imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
            texto="Ver mais"
          />
          <CardPequeno
            imagem={cartinha}
            email="Email: fernanda_tiyomi@hotmail.com"
          />
          <CardPequeno
            imagem={localização}
            endereço="Endereço: Rua Cianorte, 148"
          />
        </PageSectionContainer>

        <PageSectionContainer>
          <Title>Experiências profissionais</Title>
          <CardGrande
            imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
            nome="Labenu"
            descricao="Sou formada em Web Design, fiz um estagio de um ano porém não consegui nada na área na época.
          Minha experiência profissional começou em 2008 no setor Comercial/ Adminstrativo.
          Trabalhei também como promoções e eventos e 2 anos empreendendo no ramo da moda feminina.
          Este ano decidi mudar de vida, e tomei a decisão de voltar a estudar. 
          Com o incentivo do meu irmão que é desenvolvedor, pesquisei varias instituições de ensino até encontrar a Labenu :)"
          />

          <CardGrande
            imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg"
            nome="NASA"
            descricao="Apontando defeitos."
          />
        </PageSectionContainer>

        <PageSectionContainer>
          <Title>Minhas redes sociais</Title>
          <ImagemButton
            imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
            texto="Facebook"
          />

          <ImagemButton
            imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
            texto="Twitter"
          />
        </PageSectionContainer>
      </Container>
    </>
  );
}

export default App;
