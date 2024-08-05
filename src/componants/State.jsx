import React, { useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css"; // Ensure Bootstrap Icons are included
import PureCounter from "@srexi/purecounterjs"; // Import PureCounter library

const State = () => {
  useEffect(() => {
    new PureCounter();
  }, []);

  const stats = [
    {
      icon: "bi bi-emoji-smile",
      end: 232,
      label: "Happy Clients",
      description: "All ouer World",
    },
    {
      icon: "bi bi-journal-richtext",
      end: 521,
      label: "Projects",
      description: "Completed",
    },
    {
      icon: "bi bi-headset",
      end: 24,
      label: "Hours Of Support",
      description: "24 x 7",
    },
    {
      icon: "bi bi-people",
      end: 32,
      label: "Hard Workers",
      description: "Team",
    },
  ];

  return (
    <section id="stats" className="stats section">
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row gy-4">
          {stats.map((stat, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className="stats-item">
                <i className={stat.icon} />
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={stat.end}
                  data-purecounter-duration={1}
                  className="purecounter"
                />
                <p>
                  <strong>{stat.label}</strong> <span>{stat.description}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default State;
