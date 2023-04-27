import React from "react";
import "./Section1.css";
import mock1 from '../../img/mockup1.png';
import Button from "../../components/Button";


const Section1 = () => {

  return (
    <div className="section_total section1">
      <div className="container">
        <div className="content_left">
          <h2>ASSISTA SEUS PROGRAMAS FAVORITOS SEM TRAVAMENTO</h2>

          <h1>
            <span>A MELHOR LISTA DE </span><span> CANAIS, FILMES E SÉRIES </span>DISPONÍVEIS
            EM UMA ÚNICA PLATAFORMA
          </h1>
          <p>
            Quer assistir tudo o que quiser? A Power Iptv tem a solução para
            você. 
          </p>

          <Button text="QUERO ACESSAR OS MELHORES CANAIS"/>
        </div>

        <div className="content_right">
            <img src={mock1} alt=""/>
        </div>

      </div>
    </div>
  );
};

export default Section1;
