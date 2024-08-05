import React from "react";
// import "./Header.css"; // Ensure you have the required CSS for styling

const Header = () => {
  return (
    <>
      <header id="header" className="header dark-background d-flex flex-column">
        <i className="header-toggle d-xl-none bi bi-list" />
        <div className="profile-img">
          <img
            src="../assets/img/my-profile-img.jpeg"
            alt="Profile"
            className="img-fluid rounded-circle"
          />
        </div>
        <a
          href="#hero"
          className="logo d-flex align-items-center justify-content-center"
        >
          {/* Uncomment the line below if you also wish to use an image logo */}
          {/* <img src="assets/img/logo.png" alt="Logo" /> */}
          <h1 className="sitename">Ayaz Khan</h1>
        </a>
        <div className="social-links text-center">
          <a href="https://x.com/AyazKhan1990" className="twitter">
            <i className="bi bi-twitter" />
          </a>
          <a
            href="https://www.facebook.com/mindedsoftware/"
            className="facebook"
          >
            <i className="bi bi-facebook" />
          </a>
          <a
            href="https://www.instagram.com/ayazkhanbareilly/"
            className="instagram"
          >
            <i className="bi bi-instagram" />
          </a>
          <a
            href="https://secure.skype.com/portal/overview"
            className="google-plus"
          >
            <i className="bi bi-skype" />
          </a>
          <a
            href="https://www.linkedin.com/in/ayaz-khan-353b77117/"
            className="linkedin"
          >
            <i className="bi bi-linkedin" />
          </a>
        </div>
        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <a href="#hero" className="active">
                <i className="bi bi-house navicon" />
                Home
              </a>
            </li>
            <li>
              <a href="#about">
                <i className="bi bi-person navicon" /> About
              </a>
            </li>
            <li>
              <a href="#skills">
                <i className="bi bi-file-earmark-text navicon" /> Skills
              </a>
            </li>
            <li>
              <a href="#resume">
                <i className="bi bi-file-earmark-text navicon" /> Resume
              </a>
            </li>
            <li>
              <a href="#portfolio">
                <i className="bi bi-images navicon" /> Portfolio
              </a>
            </li>
            <li>
              <a href="#services">
                <i className="bi bi-hdd-stack navicon" /> Services
              </a>
            </li>

            <li>
              <a href="#contact">
                <i className="bi bi-envelope navicon" /> Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
