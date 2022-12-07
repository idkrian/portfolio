import React from 'react'
import '../styles/AboutMe.scss'
import img from '../assets/pixelart.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export default function AboutMe() {
    return (
        <>
            <div className="aboutMeContainer">
                <div
                    style={{ minWidth: '400px', maxWidth: '700px' }}
                    data-aos="fade-up"
                    data-aos-duration="3000"
                >
                    <h1>About Me</h1>
                    <h4 style={{ color: 'gray', margin: '1em 0' }}>Full Stack Developer</h4>
                    <p>
                        Desenvolvedor de Software Full Stack Júnior, com experiência de atuação em grandes projetos de empresas nacionais e multinacionais.
                        <br />
                        <br />

                        Possuo foco em desenvolvimento com a linguagem Javascript, utilizando as stacks:
                        <br />
                        Front End: ReactJS, VueJS , React Native e consumo de APIs;
                        <br />
                        Back End: NodeJS, Express, NestJS e construção de APIs;
                        <br />
                        Databases: MySQL, PostgreSQL e MongoDB.
                        <br />
                        <br />

                        Também possuo nível avançado em inglês, possibilitando a comunicação em ambas as línguas.
                        <br />

                        Me considero uma pessoa muito acessiva e extrovertida, sempre ajudando no entrosamento e na comunicação das equipes em que trabalhei,
                        também me considero ágil e consistente em aprender uma nova tecnologia e alta adaptabilidade às mudanças, pronto para superar qualquer desafio!
                    </p>
                    <button class="gitButton">GitHub</button>
                    <button class="cvButton">Currículo</button>
                </div>
                <div
                    style={{ margin: '4em' }}
                    data-aos="fade-up"
                    data-aos-duration="3000"
                >
                    <img src={img} style={{ width: '300px' }} />
                </div>
            </div>
        </>
    )
}
