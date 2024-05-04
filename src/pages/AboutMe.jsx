import React from "react";
import "../styles/AboutMe.scss";
import img from "../assets/pixelart.png";
import Resume from "../assets/CurriculumRian.pdf";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default function AboutMe() {
  return (
    <>
      <div className="aboutMeContainer">
        <div
          className="aboutMeTextDiv"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h1 style={{ fontSize: "2.5em" }}>Sobre Mim</h1>
          <h4 style={{ color: "gray", margin: "1em 0", fontSize: "1.2em" }}>
            Desenvolvedor Full Stack
          </h4>
          <p>
            Desenvolvedor de Software Full Stack, formado em Análise e
            Desenvolvimento de Sistemas com experiência de atuação em grandes
            projetos de empresas nacionais e multinacionais.
            <br />
            <br />
            Me considero uma pessoa muito acessiva e extrovertida, sempre
            contribuindo no entrosamento e na comunicação das equipes em que
            trabalhei, me considero ágil e consistente em aprender uma nova
            tecnologia e também alta adaptabilidade às mudanças, pronto para
            superar qualquer desafio!
            <br />
            <br />
            Minhas habilidades incluem:
            <br />
            Front End: React, VueJS, Angular, React Native, NextJS e APIs;
            <br />
            Back End: NodeJS, Express, NestJS e construção de APIs;
            <br />
            Databases: MySQL, PostgreSQL e MongoDB.
            <br />
            <br />
            Habilidades essas que foram desenvolvidas através de mais de 3 anos
            de experiência na área onde pude participar de diversos tipos de
            aplicações que influenciaram e ajudaram bastante no meu aprendizado.
          </p>
          <div style={{ marginTop: "1em" }}>
            <a href="https://github.com/idkrian" target="_blank">
              <button class="gitButton">GitHub</button>
            </a>
            <a href="https://www.linkedin.com/in/riansouza/" target="_blank">
              <button class="cvButton">LinkedIn</button>
            </a>
          </div>
        </div>
        <div className="imageDiv" data-aos="fade-up" data-aos-duration="2000">
          <img src={img} style={{ width: "18em" }} />
        </div>
      </div>
    </>
  );
}
