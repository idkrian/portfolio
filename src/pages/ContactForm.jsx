import "../styles/ContactForm.scss";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
import { useRef } from "react";
import emailjs from "@emailjs/browser";
export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pkfy5vc",
        "template_vxit5xb",
        form.current,
        "7AzArv9-xnWfPh5nb"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contactContainer">
      <div
        data-aos="fade-right"
        data-aos-duration="2000"
        style={{ height: "80%" }}
      >
        <h1>Contato</h1>
        <div>
          <div className="infoDiv">
            <div style={{ marginRight: "0.8em" }}>
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div>
              <h4 className="contactText">Email: riansouza0@gmail.com</h4>
            </div>
          </div>
          <div className="infoDiv">
            <div style={{ marginRight: "0.8em" }}>
              <i className="fa-solid fa-phone"></i>
            </div>
            <div>
              <h4 className="contactText">Tel: (61)9 9592-1144</h4>
            </div>
          </div>
          <div className="infoDiv">
            <div style={{ marginRight: "0.8em" }}>
              <i className="fa-brands fa-github"></i>
            </div>
            <div>
              <h4 className="contactText">Github: github.com/idkrian</h4>
            </div>
          </div>
          <div className="infoDiv">
            <div style={{ marginRight: "0.8em" }}>
              <i className="fa-brands fa-linkedin-in"></i>
            </div>
            <div>
              <h4 className="contactText">
                LinkedIn: linkedin.com/in/riansouza/
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-left"
        data-aos-duration="2000"
        style={{ height: "80%", margin: "2em", maxWidth: "650px" }}
      >
        <h1>Formulário de Contato</h1>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
          }}
          ref={form}
          onSubmit={sendEmail}
        >
          <div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              <input
                placeholder="Nome*"
                className="inputText"
                type="text"
                name="name"
                required
              />
              <input
                placeholder="Email*"
                className="inputText"
                type="text"
                name="email"
                required
              />
              <input
                placeholder="Titulo*"
                className="inputText"
                type="text"
                name="subject"
                required
              />
              <input
                placeholder="Phone"
                className="inputText"
                type="text"
                name="phone"
              />
            </div>
            <div>
              <input
                placeholder="Mensagem*"
                className="inputMessage"
                type="text"
                name="message"
                required
              />
            </div>
          </div>
          <div style={{ marginTop: "1em" }}>
            <button type="submit" className="submitButton">
              Enviar Mensagem
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
