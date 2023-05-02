import React from "react";
import "./Section2.css";
import mock2 from "../../img/mockup2.png";
import icone1 from "../../img/icone1.svg";
import icone2 from "../../img/icone2.svg";
import icone3 from "../../img/icone3.svg";

const Section2 = () => {

 


  return (
   <div className="section_total section2">
      <div className="container">
        <div className="content_left">
          <img src={mock2} alt="" />
        </div>

        <div className="content_right">
          <h1>ASSISTA ONDE QUISER</h1>
          <p className="paragrafo">
            A Power Iptv Play oferece um aplicativo totalmente exclusivo para
            você. Basta baixa-lo e assistir tudo o que quiser e quando quiser.
          </p>

          <div className="infos">
            <div className="icone">
              <img src={icone1} alt="" />
            </div>
            <div className="conteudos">
              <p  className="conteudo_titulo">+100 conteúdos</p>
              <p className="conteudo_texto">
                Em nosso Aplicativo você pode assistir todos os filmes que
                deseja
              </p>
            </div>
          </div>
          <div className="infos">
            <div className="icone">
              <img src={icone2} alt="" />
            </div>
            <div className="conteudos">
              <p className="conteudo_titulo">Todos os tipos de série</p>
              <p className="conteudo_texto">
              Nosso App oferece todos os tipos de Séries, basta escolher qual quer assistir

              </p>
            </div>
          </div>
          <div className="infos">
            <div className="icone">
              <img src={icone3} alt="" />
            </div>
            <div className="conteudos">
              <p className="conteudo_titulo">Canais Abertos e Fechados​</p>
              <p className="conteudo_texto">
              Oferecemos todos os Canais Abertos e Fechados, sem travamentos
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
