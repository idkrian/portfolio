import React from 'react'
import '../styles/AboutMe.scss'
import img from '../assets/topera.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export default function AboutMe() {
    return (
        <>
            <div className="aboutMeContainer">
                <div data-aos="fade-up"
                    data-aos-duration="3000">
                    <h1>About Me</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Tincidunt arcu non sodales
                        neque. Viverra orci sagittis eu volutpat odio. Nequ
                        {/* e ornare aenean euismod elementum nisi. Diam phasel
                        lus vestibulum lorem sed risus. Sapien et ligula ul
                        lamcorper malesuada proin libero nunc consequat. Id
                        venenatis a condimentum vitae sapien. Auctor augu
                        e mauris augue neque. Eget dolor morbi non arcu r
                        isus. */}
                    </p>
                </div>
                <div data-aos="fade-up"
                    data-aos-duration="3000">
                    <img src={img} style={{ width: '400px' }} />
                </div>
            </div>
        </>
    )
}
