import React, { useEffect } from "react";
import Typed from "typed.js";

const Hero = () => {
  useEffect(() => {
    const options = {
      strings: [
        "MERN Stack Developer",
        "UI/UX Developer",
        "Frontend Developer",
        "Graphics Designer",
      ],
      typeSpeed: 100,
      backSpeed: 10,
      backDelay: 1500,
      loop: true,
    };

    const typed = new Typed(".typed", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="hero section dark-background">
        <img
          src="../assets/img/hero-bg.jpg"
          alt="Hero Background"
          data-aos="fade-in"
        />
        <div className="container" data-aos="fade-up" data-aos-delay={100}>
          <h2>Ayaz Khan</h2>
          <p>
            I'm <span className="typed">MERN Stack Developer</span>
            <span
              className="typed-cursor typed-cursor--blink"
              aria-hidden="true"
            />
          </p>
        </div>
      </section>

      {/* /Hero Section */}
    </>
  );
};

export default Hero;
