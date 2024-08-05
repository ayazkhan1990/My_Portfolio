import React, { useEffect } from "react";
import GLightbox from "glightbox";
import Isotope from "isotope-layout";
import "glightbox/dist/css/glightbox.min.css";

const Portfolio = () => {
  useEffect(() => {
    GLightbox({ selector: ".glightbox" });

    const iso = new Isotope(".isotope-container", {
      itemSelector: ".isotope-item",
      layoutMode: "masonry",
    });

    const filters = document.querySelectorAll(".portfolio-filters li");
    filters.forEach((filter) => {
      filter.addEventListener("click", () => {
        const filterValue = filter.getAttribute("data-filter");
        iso.arrange({ filter: filterValue });
        filters.forEach((btn) => btn.classList.remove("filter-active"));
        filter.classList.add("filter-active");
      });
    });
  }, []);

  const portfolioItems = [
    {
      filter: "app",
      img: "app-1.jpg",
      title: "Puja App",
      description: "Android App",
      link: "https://play.google.com/store/apps/details?id=www.shrikashivishwanath.org.kashivishwanath&pli=1",
    },
    {
      filter: "product",
      img: "web-1.png",
      title: "Nagar Nigam Varanasi",
      description: "MERN Stack",
      link: "https://www.nagarnigamayodhya.in",
    },
    {
      filter: "branding",
      img: "branding-1.jpg",
      title: "E-commerce",
      description: "Wordpress",
      link: "https://jacario.com/",
    },
    {
      filter: "books",
      img: "books-1.jpg",
      title: "NMM",
      description: "National Mission for Mentoring",
      link: "https://ncte.gov.in/Website/nmm/nmmindex.aspx",
    },
    {
      filter: "app",
      img: "app-2.jpg",
      title: "Sunflag",
      description: "Android App",
      link: "https://play.google.com/store/apps/details?id=sengar.com.sunflag",
    },
    {
      filter: "product",
      img: "web-2.png",
      title: "Hospitality Management",
      description: "Wordpress",
      link: "http://avantehospitalityservices.com",
    },
    {
      filter: "branding",
      img: "branding-2.jpg",
      title: "E-Commerce",
      description: "React One Touch All",
      link: "https://onetouchall.com/",
    },
    {
      filter: "product",
      img: "books-2.jpg",
      title: "CRM",
      description: "Wordpress",
      link: "https://www.cxrefresh.com/",
    },
    {
      filter: "app",
      img: "app-3.jpg",
      title: "CRM",
      description: "React",
      link: "http://yojus.com/",
    },
    {
      filter: "product",
      img: "product-3.jpg",
      title: "shrikashivishwanath",
      description: "HTML/CSS/ Javascript",
      link: "https://www.shrikashivishwanath.org/",
    },
    {
      filter: "product",
      img: "product-1.jpg",
      title: "Bridgeloyalty",
      description: "Wordpress",
      link: "https://bridgeloyalty.com/",
    },
    {
      filter: "branding",
      img: "branding-3.jpg",
      title: "E-Commerce",
      description: "shri kashi prasadam",
      link: "https://shrikashiprasadam.com/",
    },
    {
      filter: "product",
      img: "books-3.jpg",
      title: "Call Centre Service",
      description: "Wordpress",
      link: "https://dialdesk.in",
    },
  ];

  return (
    <section id="portfolio" className="portfolio section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>
          Welcome to Ayaz Khan's Portfolio. With 7 years of experience in
          HTML5/CSS3, JavaScript, and expertise in the MERN Stack, I specialize
          in creating dynamic and responsive web applications.
        </p>
      </div>

      <div className="container">
        <div
          className="isotope-layout"
          data-default-filter="*"
          data-layout="masonry"
          data-sort="original-order"
        >
          <ul
            className="portfolio-filters isotope-filters"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <li data-filter="*" className="filter-active">
              All
            </li>
            <li data-filter=".filter-app">App</li>
            <li data-filter=".filter-product">Website</li>
            <li data-filter=".filter-branding">E-Commerce</li>
            <li data-filter=".filter-books">Books</li>
          </ul>

          <div
            className="row gy-4 isotope-container"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className={`col-lg-4 col-md-6 portfolio-item isotope-item filter-${item.filter}`}
              >
                <div className="portfolio-content h-100">
                  <img
                    src={`assets/img/portfolio/${item.img}`}
                    className="img-fluid"
                    alt={item.title}
                  />
                  <div className="portfolio-info">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <a
                      href={`assets/img/portfolio/${item.img}`}
                      title={item.title}
                      data-gallery={`portfolio-gallery-${item.filter}`}
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-zoom-in" />
                    </a>
                    <a
                      href={item.link}
                      title="More Details"
                      className="details-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-link-45deg" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
