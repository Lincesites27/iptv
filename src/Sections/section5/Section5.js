import React from "react";
import satisfacao from "../../img/satisfacao.png";

import "./Section5.css";

const Section5 = () => {
  return (
    <div className="section_total section5">
      <div className="container">

        <div className="content_center">
        <div className="content_left">
          <img src={satisfacao} alt="" />
        </div>
        <div className="content_right">
          <p>
            O código de defesa consumidor (Art. 49) garante 7 dias para
            solicitar reembolso em caso de insatisfação com o produto.
            <span> Nós confiamos tanto em nossos estudos e pesquisas que lhe garantimos 15 dias de garantia incondicional!</span>
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
