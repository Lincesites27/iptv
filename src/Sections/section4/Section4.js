import React from "react";
import "./Section4.css";
import check from "../../img/check.png";
import Button from "../../components/Button"; 

const Section4 = () => {
  const planos = [
    "1 tela",
    "+100.00 conteúdos",
    "Qualidade Hd/SD",
    "Guia de Programação [EPG]​",
    "Assista no Smartphone​",
    "Pacote Filmes e Séries​",
  ];

  return (
    <div className=" section_total section4">
      <div className="container2">
        <div className="content_center">
          <h1>
            CONHEÇA OS <span>NOSSO PLANOS</span>
          </h1>
          <p>
            Faça parte dessa familia hoje mesmo. Planos sem fidelidade de  forma
            pré-paga, sem surpresas e de maneira simples.
          </p>
        </div>

        <div className="cards">
          <div className="card">
            <div className="content_center">
              <h5 className="titulo_card">PLANO MENSAL</h5>
              <h5 className="price_card">R$25,00</h5>
            </div>
            <div className="lista">
              {planos.map((plano) => (
                <div className="check">
                  <img src={check} alt="" />
                  <span>{plano}</span>
                </div>
              ))}
            </div>
            <Button text="ASSINAR PLANO"/>
          </div>
          <div className="card">
            <div className="content_center">
              <h5 className="titulo_card">PLANO MENSAL</h5>
              <h5 className="price_card">R$25,00</h5>
            </div>
            <div className="lista">
              {planos.map((plano) => (
                <div className="check">
                  <img src={check} alt="" />
                  <span>{plano}</span>
                </div>
              ))}
            </div>
            <Button text="ASSINAR PLANO"/>
          </div>
          <div className="card">
            <div className="content_center">
              <h5 className="titulo_card">PLANO MENSAL</h5>
              <h5 className="price_card">R$25,00</h5>
            </div>
            <div className="lista">
              {planos.map((plano) => (
                <div className="check">
                  <img src={check} alt="" />
                  <span>{plano}</span>
                </div>
              ))}
            </div>
            <Button text="ASSINAR PLANO"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
