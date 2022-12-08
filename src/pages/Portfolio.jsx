import React from 'react'
import '../styles/Portfolio.scss'
import CardInput from '../components/CardInput'
import StatsfyImage from '../assets/statsfy.png'
import PokedexImage from '../assets/pokedex.png'
import KlimaImage from '../assets/klima.png'
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
                    <CardInput
                        description="App that brings information and data from your profile on Spotify."
                        title="Statsfy"
                        image={StatsfyImage}
                    />
                    <CardInput
                        description="App that simulates a pokédex, to search for information about pokemons."
                        title="Pokedex"
                        image={PokedexImage}
                    />
                    <CardInput
                        description="App that brings the current temperature of a given city."
                        title="Klima"
                        image={KlimaImage}
                    />
                </div>
            </div>
        </>
    )
}
