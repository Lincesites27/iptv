import React from "react";
import "./Section1.css";
import mock1 from '../../img/mockup1.png';
import Button from "../../components/Button";
import { useInView } from 'react-intersection-observer';


const Section1 = () => {

  const { ref: leftRef, inView: leftInView } = useInView({
    threshold: 0.5, // Ajuste a porcentagem de visibilidade necessária para ativar a animação
    triggerOnce: true // Garante que a animação só seja executada uma vez
  });

  const { ref: rightRef, inView: rightInView } = useInView({
    threshold: 0.5, // Ajuste a porcentagem de visibilidade necessária para ativar a animação
    triggerOnce: true // Garante que a animação só seja executada uma vez
  });


  return (
    <div className="section_total section1">
      <div className="container">
        <div className={`content_left ${leftInView ? 'animate__animated animate__fadeInLeft' : ''}`} ref={leftRef}>
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

        <div className={`content_right ${rightInView ? 'animate__animated animate__fadeInRight' : ''}`} ref={rightRef}>
            <img src={mock1} alt=""/>
        </div>

      </div>
    </div>
  );
};

export default Section1;
