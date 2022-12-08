import React from 'react'
import '../styles/AboutMe.scss'
import img from '../assets/pixelart.png'
import Resume from '../assets/CurriculoRian.pdf'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export default function AboutMe() {
    return (
        <>
            <div className="aboutMeContainer">
                <div
                    className='aboutMeTextDiv'
                    data-aos="fade-up"
                    data-aos-duration="2000"
                >
                    <h1 style={{ fontSize: '2.5em' }}>About Me</h1>
                    <h4 style={{ color: 'gray', margin: '1em 0', fontSize: '1.2em' }}>Full Stack Developer</h4>
                    <p>
                        Junior Full Stack Developer, with experience working on large projects for national and multinational companies.
                        <br />
                        <br />
                        I focus on development with the Javascript language, using the stacks:
                        <br />
                        Front End: ReactJS, VueJS , React Native and APIs;
                        <br />
                        Back End: NodeJS, Express, NestJS and APIs construction;
                        <br />
                        Databases: MySQL, PostgreSQL e MongoDB.
                        <br />
                        <br />
                        Even though I am Brazilian, I have an advanced level in English, enabling communication in both languages.
                        <br />
                        I consider myself a very accessible and extroverted person, always helping with the integration and communication of the teams in which I worked,
                        I also consider myself agile and consistent in learning a new technology and highly adaptable to changes, ready to overcome any challenge!
                    </p>
                    <div style={{ marginTop: '1em' }}>
                        <a href="https://github.com/idkrian" target="_blank">
                            <button class="gitButton">GitHub</button>
                        </a>
                        <a href={Resume} download="Rian Curriculum.pdf">
                            <button class="cvButton">Resume</button>
                        </a>
                    </div>
                </div>
                <div
                    className='imageDiv'
                    data-aos="fade-up"
                    data-aos-duration="2000"
                >
                    <img src={img} style={{ width: '18em' }} />
                </div>
            </div>
        </>
    )
}
