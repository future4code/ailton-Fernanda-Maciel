import React from "react";
import styled from "styled-components";

const TelaInteira = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  background-color: orange;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  height: 10%;
`;

const Main = styled.main`
  min-height: 80%;
  display: flex;
`;

const MenuVertical = styled.nav`
  flex-basis: 200px;
  border-right-style: solid;
  border-right-width: thin;
`;

const BotoesMeunu = styled.li`
  list-style-type: none;
`;

const PainelDeVideos = styled.section`
  padding-left: 20px;
  padding-top: 20px;
  flex-grow: 1;
  display: grid;
  grid-template-columns: repeat(4, 24.8% 0.2%);
  grid-template-rows: repeat(4, 270px 20px);
`;

const Media1 = styled.div`
  grid-column-start: 1;
  grid-row-start: 1;
`;

const Media2 = styled.div`
  grid-column-start: 3;
  grid-row-start: 1;
`;

const Media3 = styled.div`
  grid-column-start: 5;
  grid-row-start: 1;
`;

const Media4 = styled.div`
  grid-column-start: 7;
  grid-row-start: 1;
`;

const Media5 = styled.div`
  grid-column-start: 1;
  grid-row-start: 3;
`;

const Media6 = styled.div`
  grid-column-start: 3;
  grid-row-start: 3;
`;

const Media7 = styled.div`
  grid-column-start: 5;
  grid-row-start: 3;
`;

const Media8 = styled.div`
  grid-column-start: 7;
  grid-row-start: 3;
`;

const Footer = styled.footer`
  height: 10%;
  background-color: grey;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  text-align: center;
`;

const Imagem = styled.img`
  width: 100%;
  height: 200px;
`;

const Titulo = styled.h4`
  margin-left: 20px;
  display: flex;
  text-align: center;
`;

function App() {
  const titulo = "Titulo do vídeo";

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido");
  }

  return (
    <div>
      <TelaInteira className="tela-inteira">
        <Header>
          <h1>Future Tube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </Header>

        <Main>
          <MenuVertical className="menu-vertical">
            <ul>
              <BotoesMeunu className="botoes-meunu-vertical">
                Início
              </BotoesMeunu>
              <BotoesMeunu className="botoes-meunu-vertical">
                Em alta
              </BotoesMeunu>
              <BotoesMeunu className="botoes-meunu-vertical">
                Inscrições
              </BotoesMeunu>
              <hr />
              <BotoesMeunu className="botoes-meunu-vertical">
                Originais
              </BotoesMeunu>
              <BotoesMeunu className="botoes-meunu-vertical">
                Histórico
              </BotoesMeunu>
            </ul>
          </MenuVertical>

          <PainelDeVideos className="painel-de-videos">
            <Media1
              className="box-pagina-principal media1"
              onClick={reproduzVideo}
            >
              <Imagem src="https://picsum.photos/400/400?a=1 " alt="" />
              <Titulo>{titulo}</Titulo>
            </Media1>
            <Media2
              className="box-pagina-principal media2"
              onClick={reproduzVideo}
            >
              <Imagem src="https://picsum.photos/400/400?a=2 " alt="" />
              <Titulo>{titulo}</Titulo>
            </Media2>
            <Media3
              className="box-pagina-principal media3"
              onClick={reproduzVideo}
            >
              <Imagem src="https://picsum.photos/400/400?a=3 " alt="" />
              <Titulo>{titulo}</Titulo>
            </Media3>
            <Media4
              className="box-pagina-principal media4"
              onClick={reproduzVideo}
            >
              <Imagem src="https://picsum.photos/400/400?a=4 " alt="" />
              <Titulo>{titulo}</Titulo>
            </Media4>
            <Media5
              className="box-pagina-principal media5"
              onClick={reproduzVideo}
            >
              <Imagem src="https://picsum.photos/400/400?a=5 " alt="" />
              <Titulo>{titulo}</Titulo>
            </Media5>
            <Media6
              className="box-pagina-principal media6"
              onClick={reproduzVideo}
            >
              <Imagem src="https://picsum.photos/400/400?a=6 " alt="" />
              <Titulo>{titulo}</Titulo>
            </Media6>
            <Media7
              className="box-pagina-principal media7"
              onClick={reproduzVideo}
            >
              <Imagem src="https://picsum.photos/400/400?a=7 " alt="" />
              <Titulo>{titulo}</Titulo>
            </Media7>
            <Media8
              className="box-pagina-principal media8"
              onClick={reproduzVideo}
            >
              <Imagem src="https://picsum.photos/400/400?a=8 " alt="" />
              <Titulo>{titulo}</Titulo>
            </Media8>
          </PainelDeVideos>
        </Main>

        <Footer>
          <Titulo>Oi! Eu moro no Footer!</Titulo>
        </Footer>
      </TelaInteira>
    </div>
  );
}

export default App;
