import React from 'react'
import '../styles/HomeBar.scss'

export default function HomeBar() {
    return (
        <div class="background">
            <div class="cube"></div>
            <div class="cube"></div>
            <div class="cube"></div>
            <div class="cube"></div>
            <div class="cube"></div>

            <div className='nameContainer'>
                <h1 className="homeName">Rian</h1>
                <h4>Creative developer front end located in London</h4>
                <div class="custom-shape-divider-bottom-1670261602">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z" class="shape-fill"></path>
                    </svg>
                </div>
            </div>
        </div>
    )
}
