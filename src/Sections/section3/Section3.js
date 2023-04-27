import React from "react";
import "./Section3.css";
import icone4 from "../../img/icone4.svg";
import icone5 from "../../img/icone5.svg";
import icone6 from "../../img/icone6.svg";
import icone7 from "../../img/icone7.svg";
import Button from "../../components/Button";

const Section3 = () => {
  return (
    <div className="section_total section3">
      <div className="container2">
        <div className="content_center">
          <h2>A MELHOR SOLUÇÃO ESTÁ AQUI</h2>
          <h1>IPTV POWER</h1>
        </div>

        <div className="cards">
          <div className="card">
            <img src={icone4} alt="" />
            <h5>PROTEÇÃO</h5>
            <p>
              Estamos sempre atentos as novas tecnologias de proteção para
              prestarmos o melhor produto.
            </p>
          </div>
          <div className="card">
            <img src={icone5} alt="" />
            <h5>PAGAMENTO</h5>
            <p>
              Se você procura rapidez, está no lugar certo. Em poucos minutos os
              canais estarão 100% liberados para você
            </p>
          </div>
          <div className="card">
            <img src={icone6} alt="" />
            <h5>SUPORTE TÉCNICO</h5>
            <p>
              Equipe pronta para lhe atender 24 horas. Você pode optar o suporte
              técnico via Ticket e Chat ao Vivo.
            </p>
          </div>
          <div className="card">
            <img src={icone7} alt="" />
            <h5>SERVIDORES</h5>
            <p>
              Nós possuímos os melhores servidores para que você tenha uma
              programação de qualidade e sem risco de travamento.
            </p>
          </div>
            
        </div>
        <div className="content_center">
          <Button  text="QUERO ENCONTRAR OS MELHORES CANAIS"/>
        </div>
        
         

      </div>
    </div>
  );
};

export default Section3;
