import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const servicesData = [
  {
    delay: 100,
    icon: "bi bi-briefcase",
    title: "Website Development",
    description:
      "Website development involves creating, building, and maintaining websites, including web design, coding, and content management.",
    link: "#",
  },
  {
    delay: 200,
    icon: "bi bi-card-checklist",
    title: "Mobile App Development",
    description:
      "Mobile app development creates software applications for smartphones and tablets, enhancing user engagement and functionality.",
    link: "#",
  },
  {
    delay: 300,
    icon: "bi bi-bar-chart",
    title: "Graphics Design",
    description:
      "Graphic design uses visual elements to communicate ideas and messages effectively through various media.",
    link: "#",
  },
  {
    delay: 400,
    icon: "bi bi-binoculars",
    title: "CRM Development",
    description:
      "CRM development involves creating systems to manage customer relationships, sales, and service processes effectively.",
    link: "#",
  },
  {
    delay: 500,
    icon: "bi bi-brightness-high",
    title: "Video Editing",
    description:
      "Video editing involves manipulating and rearranging video footage to create a polished, cohesive final product.",
    link: "#",
  },
  {
    delay: 600,
    icon: "bi bi-calendar4-week",
    title: "SEO Optimization",
    description:
      "SEO, or Search Engine Optimization, improves website visibility on search engines to increase traffic.",
    link: "#",
  },
];

const Services = () => {
  return (
    <section id="services" className="services section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>
          I offer expert services in front-end development, UI/UX design, and
          video editing. Specializing in HTML5, CSS3, JavaScript, and React, I
          create responsive, user-friendly websites and applications. My design
          skills include wireframing, prototyping, and using Adobe Suite tools.
          Additionally, I provide professional video editing to enhance visual
          content.
        </p>
      </div>
      <div className="container">
        <div className="row gy-4">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay={service.delay}
            >
              <div className="icon flex-shrink-0">
                <i className={service.icon} />
              </div>
              <div>
                <h4 className="title">
                  <a href={service.link} className="stretched-link">
                    {service.title}
                  </a>
                </h4>
                <p className="description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
