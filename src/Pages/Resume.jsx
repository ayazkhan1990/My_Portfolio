import React from "react";

const Resume = () => {
  return (
    <section id="resume" className="resume section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
        <p>Details Resume</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
            <h3 className="resume-title">Summary</h3>
            {/* ===================== Summary =================== */}
            <div className="resume-item pb-0">
              <h4>Ayaz KHan</h4>
              <p>
                <em>Frontend Developer</em>
              </p>
              <ul>
                <li>Bareilly, India</li>
                <li>+91 8445632965</li>
                <li>ayaz.khan1990@gmail.com</li>
              </ul>
            </div>
            <h3 className="resume-title">Certifications</h3>

            {/* =====================Certifications =================== */}
            <div className="resume-item">
              <h4>MERN Stack Certification</h4>
              <h5>March’2023 - August’2023</h5>
              <p>
                <em>Cetpa Infotech Pvt. Ltd, India</em>
              </p>
              <p>Full Stack Development</p>
            </div>
            {/*  2nd */}
            <div className="resume-item">
              <h4>HTML/CSS/Javascript/ReactJs Certified</h4>
              <h5>2021 - 2022</h5>
              <p>
                <em>Great-Learning Online</em>
              </p>
              <p>Frontend Development</p>
            </div>
            {/*  2nd */}
            <div className="resume-item">
              <h4>GNIIT Certified</h4>
              <h5>2013 - 2015</h5>
              <p>
                <em>NIIT, Bareilly, India</em>
              </p>
              <p>Software Development</p>
            </div>
            {/* ===================== End Certifications =================== */}

            <h3 className="resume-title">Education</h3>
            {/* ===================== MCA =================== */}
            <div className="resume-item">
              <h4>Master of Computer Application</h4>
              <h5>2018 - 2020</h5>
              <p>
                <em>Mewar University, Chittorgarh Rajasthan, India</em>
              </p>
              <p>Computer Science</p>
            </div>
            {/* ===================== BCA =================== */}
            <div className="resume-item">
              <h4>Bachelor of Computer Application</h4>
              <h5>2014 - 2016</h5>
              <p>
                <em>Mahatma Jyotiba Phule Rohilkhand University, India</em>
              </p>
              <p>Computer Science</p>
            </div>
          </div>
          {/* ===================== Experience =================== */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay={200}>
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Front-end Developer</h4>
              <h5>March 2024 - Present</h5>
              <p>
                <em>NISG | Arunachal Pradesh, Itanagar </em>
              </p>
              <ul>
                <li>
                  Develop and Maintain Web Applications: Use HTML5, CSS3, and
                  JavaScript to create and maintain responsive web applications
                  that offer a seamless user experience.
                </li>
                <li>
                  Collaborate with Designers and Developers: Work closely with
                  UX/UI designers and back-end developers to integrate designs
                  and functionality.
                </li>
                <li>
                  Optimize Web Performance: Implement best practices for web
                  performance optimization, including minimizing load times and
                  ensuring efficient code execution.
                </li>
              </ul>
            </div>
            {/* ===================== NCTE =================== */}
            <div className="resume-item">
              <h4>UI/UX Developer</h4>
              <h5>2021 - 2022</h5>
              <p>
                <em>National Council for Teacher Education (NCTE)</em>
              </p>
              <ul>
                <li>
                  <b>UI/UX Design:</b> Developed intuitive and engaging user
                  interfaces, improving the overall user experience.
                </li>
                <li>
                  Social Media Banner Design: Designed creative and eye-catching
                  social media banners to enhance online presence.
                </li>
                <li>
                  <b>Projects:</b> Contributed to projects such as NMM, NPST,
                  and ITEP, ensuring high-quality deliverables and client
                  satisfaction.
                </li>
                <li>
                  <b>Printing Banner Design:</b> Created print-ready banners for
                  various promotional events and campaigns.
                </li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Web/Graphics Developer</h4>
              <h5>2016 - 2019</h5>
              <p>
                <em>3i Consulting, India Pvt. Ltd</em>
              </p>
              <ul>
                <li>
                  <b>Design and Development:</b> Created visually appealing and
                  user-friendly websites and graphics using HTML5, CSS3, and
                  JavaScript.
                </li>
                <li>
                  <b>Responsive Design:</b> Ensured websites were responsive and
                  optimized for various devices and screen sizes using Bootstrap
                  and media queries.
                </li>
                <li>
                  <b>Content Management:</b> Managed website content updates and
                  maintenance using content management systems (CMS).
                </li>
                <li>
                  <b>SEO Optimization:</b> Implemented SEO best practices to
                  improve website visibility and search engine rankings.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
