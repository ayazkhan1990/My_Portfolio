import React from "react";

const skillsData = [
  { skill: "HTML/HTML5", level: "95%" },
  { skill: "CSS3", level: "95%" },
  { skill: "JavaScript", level: "75%" },
  { skill: "Bootstrap", level: "80%" },
  { skill: "React Js", level: "75%" },
  { skill: "Node Js", level: "50%" },
  { skill: "Express Js", level: "50%" },
  { skill: "Git / Github", level: "70%" },
  { skill: "MongoDb", level: "70%" },
  { skill: "Photoshop", level: "95%" },
  { skill: "Illustration", level: "75%" },
  { skill: "coreldraw", level: "75%" },
  { skill: "Figma", level: "80%" },
];

const Skills = () => {
  return (
    <section id="skills" className="skills section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Skills</h2>
        <p>Here is some Skills</p>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row skills-content">
          {skillsData.map(({ skill, level }) => (
            <div className="col-lg-6" key={skill}>
              <div className="progress">
                <span className="skill">
                  {skill} <i className="val">{level}</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={parseInt(level, 10)}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: level }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
