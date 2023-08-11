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
            Desenvolvedor de Software Full Stack, com experiência de atuação em
            grandes projetos de empresas nacionais e multinacionais.
            <br />
            <br />
            Possuo foco em desenvolvimento com a linguagem Javascript e
            Typescript, utilizando as stacks:
            <br />
            Front End: ReactJS, VueJS , React Native e APIs;
            <br />
            Back End: NodeJS, Express, NestJS, PHP, Laravel e construção de
            APIs;
            <br />
            Databases: MySQL, PostgreSQL e MongoDB.
            <br />
            <br />
            Também possuo nível avançado em inglês, possibilitando a comunicação
            em ambas as línguas.
            <br />
            Me considero uma pessoa muito acessiva e extrovertida, sempre
            contribuindo no entrosamento e na comunicação das equipes em que
            trabalhei, me considero ágil e consistente em aprender uma nova
            tecnologia e também alta adaptabilidade às mudanças, pronto para
            superar qualquer desafio!
          </p>
          <div style={{ marginTop: "1em" }}>
            <a href="https://github.com/idkrian" target="_blank">
              <button class="gitButton">GitHub</button>
            </a>
            <a href={Resume} download="Rian Curriculum.pdf">
              <button class="cvButton">Currículo</button>
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
