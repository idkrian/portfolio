import React from 'react'
import '../styles/ContactForm.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export default function ContactForm() {
    return (
        <div className="contactContainer">
            <div
                data-aos="fade-right"
                data-aos-duration="2000"
                style={{
                    height: '80%',
                }}>
                <h1>Contact Info</h1>
                <div>
                    <div className='infoDiv'>
                        <div style={{ marginRight: '0.8em' }}>
                            <i class="fa-solid fa-envelope"></i>
                        </div>
                        <div>
                            <h4 className="contactText">Email: riansouza0@gmail.com</h4>
                        </div>
                    </div>
                    <div className='infoDiv'>
                        <div style={{ marginRight: '0.8em' }}>
                            <i class="fa-solid fa-phone"></i>
                        </div>
                        <div>
                            <h4 className="contactText">Tel: (61)9 9592-1144</h4>
                        </div>
                    </div>
                    <div className='infoDiv'>
                        <div style={{ marginRight: '0.8em' }}>
                            <i class="fa-brands fa-github"></i>
                        </div>
                        <div>
                            <h4 className="contactText">Github: github.com/idkrian</h4>
                        </div>
                    </div>
                    <div className='infoDiv'>
                        <div style={{ marginRight: '0.8em' }}>
                            <i class="fa-brands fa-linkedin-in"></i>
                        </div>
                        <div>
                            <h4 className="contactText">LinkedIn: linkedin.com/in/riansouza/</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div
                data-aos="fade-left"
                data-aos-duration="2000"
                style={{
                    height: '80%',
                    margin: '2em',
                    maxWidth: '650px'
                }}>
                <h1>Contact Form</h1>
                <form style={{
                    display: 'flex',
                    flexDirection: 'column'
                }} action="">
                    <div>
                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'space-between'
                        }}>
                            <input className='inputText' type="text" />
                            <input className='inputText' type="text" />
                            <input className='inputText' type="text" />
                            <input className='inputText' type="text" />
                        </div>
                        <div className=''>
                            <input className='inputMessage' type="text" name="" id="" />
                        </div>
                    </div>
                </form>
                <div style={{ marginTop: '1em' }}>
                    <button class="submitButton">Enviar Mensagem</button>
                </div>
            </div>
        </div >
    )
}
