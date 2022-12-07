import React from 'react'
import '../styles/Navbar.scss'


export default function Navbar() {

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                flexWrap: 'wrap',
                height: '3rem',
                alignContent: 'center',
                position: 'fixed',
                zIndex: '1',
                backgroundColor: 'white',
                width: '100%'
            }}
        >
            <div>
                <h4>Rian</h4>
            </div>
            <div style={{ display: 'flex' }}>
                <div style={{ margin: '0 1em' }}>
                    <button class="navButton">
                        Home
                    </button>
                </div>
                <div style={{ margin: '0 1em' }}>
                    <button class="navButton">
                        About Me
                    </button>
                </div>
                <div style={{ margin: '0 1em' }}>
                    <button class="navButton">
                        Portfolio
                    </button>
                </div>
                <div style={{ margin: '0 1em' }}>
                    <button class="navButton">
                        Testimonial
                    </button>
                </div>
                <div style={{ margin: '0 1em' }}>
                    <button class="navButton">
                        Contact
                    </button>

                </div>
            </div>
        </div >
    )
}
