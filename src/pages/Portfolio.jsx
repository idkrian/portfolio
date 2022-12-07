import React from 'react'
import '../styles/Portfolio.scss'
import CardInput from '../components/CardInput'
import StatsfyImage from '../assets/statsfy.png'
import PokedexImage from '../assets/pokedex.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export default function Portfolio() {
    return (
        <>
            <div className='portfolioContainer'>
                <div className='portfolioTitle'>
                    <p className='title'>My Portfolio</p>
                    <p className='subtitle'>I love what I do. I take great pride in what I do.</p>
                </div>
                <div
                    className='portfolioCards'
                    data-aos="fade-up"
                    data-aos-duration="2000"
                >
                    <CardInput title="Statsfy" image={StatsfyImage} />
                    <CardInput title="Pokedex" image={PokedexImage} />
                    <CardInput title="Klima" image={PokedexImage} />
                    <CardInput title="Klima" image={PokedexImage} />
                    <CardInput title="Klima" image={PokedexImage} />
                </div>
            </div>
        </>
    )
}
