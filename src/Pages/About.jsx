import React from "react";

const About = () => {
  return (
    <>
      {/* About Section */}
      <section id="about" className="about section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>About</h2>
          <p>
            Front-end Developer with 7 years of extensive experience in HTML5,
            CSS3, BootStrap, and JavaScript, coupled with one year of
            proficiency in the MERN Stack. Adept at creating visually appealing,
            responsive, and interactive web applications with a strong emphasis
            on user experience and performance optimization. Skilled in
            utilizing a diverse range of graphics tools and video editing
            software to enhance visual storytelling and user engagement. Proven
            track record of delivering high-quality projects for government
            bodies and private organizations, driving efficiency and user
            satisfaction through innovative solutions. Strong analytical,
            problem-solving, and communication skills with a focus on
            data-driven decision-making and team collaboration.
          </p>
        </div>
        {/* End Section Title */}
        <div className="container" data-aos="fade-up" data-aos-delay={100}>
          <div className="row gy-4 justify-content-center">
            <div className="col-lg-4">
              <img
                src="assets/img/my-profile-img.jpeg"
                className="img-fluid"
                alt="img"
              />
            </div>
            <div className="col-lg-8 content">
              <h2>UI/UX Designer &amp; Web Developer.</h2>
              <p className="fst-italic py-3">
                Front-end Developer with 7 years of experience in HTML5, CSS3,
                Bootstrap, JavaScript, and one year of experience in the MERN
                Stack. Proven ability to create responsive and interactive web
                applications, with a strong focus on user experience and
                performance optimization.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right" />
                      <strong>Birthday:</strong> <span>2 Jul 1992</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />
                      <strong>Website:</strong>{" "}
                      <span>www.mindedsoftware.com</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />
                      <strong>Phone:</strong> <span>+91 8445632965</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />
                      <strong>City:</strong> <span>Bareilly, India</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right" />
                      <strong>Age:</strong> <span>30</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />
                      <strong>Degree:</strong>{" "}
                      <span>MCA Master of Computer Application</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />
                      <strong>Email:</strong>{" "}
                      <span>ayaz.khan1990@gmail.com</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />
                      <strong>Freelance:</strong> <span>Available</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /About Section */}
    </>
  );
};

export default About;
