import React from "react";
import "../styles/HomeBar.scss";
import Typed from "typed.js";
import { useRef, useEffect } from "react";

export default function HomeBar() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Skills em React",
        "Skills em NodeJS",
        "Skills em React Native",
        "Skills em NestJS",
        "Skills em Typescript",
      ],
      startDelay: 100,
      typeSpeed: 80,
      backSpeed: 80,
      backDelay: 600,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div class="background">
      <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>

      <div className="nameContainer">
        <h1>Hello World, I'm Rian!</h1>
        <p style={{ color: "white", letterSpacing: "5px", fontSize: "1.5em" }}>
          Desenvolvedor Full Stack
        </p>
        <div style={{ display: "flex" }}>
          <h4 ref={el}></h4>
          <p
            ref={el}
            style={{
              color: "white",
              letterSpacing: "5px",
              fontSize: "1.2em",
            }}
          ></p>
        </div>
        <div className="custom-shape-divider-bottom-1670261602">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
