 import React from "react";
import { useNavigate } from 'react-router-dom';
import { Animate } from 'react-simple-animate';
import './styles.scss';
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate('/contact');
  };

  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Anjumara
          <br />
          Front End Developer
        </h1>
      </div>

      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: 'translateY(550px)',
        }}
        end={{
          transform: 'translateX(0px)',
        }}
      >
        <div className="home__contact-me">
          {/* Hire Me Button */}
          <button onClick={handleNavigateToContactMePage}>Hire Me</button>

          {/* Social Media Icons */}
          <div className="home__social-icons">
            <a
              href="https://www.linkedin.com/in/your-link"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a href="mailto:shaikanjumara6@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </Animate>
    </section>
  );
};

export default Home;
