import React from "react";

const About = () => {
  return (
    <section className="resume-section" id="about">
      <div className="resume-section-content">
        <h1 className="mb-0">
          Zachary
          <span className="text-primary">Holloway</span>
        </h1>
        <div className="subheading mb-5">
          Charleston, SC 29412 · (757) 777-9912 ·
          <a href="mailto:name@email.com">zachholloway.n@gmail.com</a>
        </div>
        <p className="lead mb-5">
          I am experienced electrical engineer with a concentration in power and
          renewable energy engineering. I have robust software development experience
          including:
          <br />· Robotics and automation development in Python and JavaScript
          <br />· FullStack web-app development,with the MERN technology stack
          being the core focus.
        </p>
        <div className="social-icons">
          <a
            className="social-icon"
            href="https://www.linkedin.com/in/zachholloway-n/"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a className="social-icon" href="https://github.com/Zach-EE/">
            <i className="fab fa-github"></i>
          </a>
          <a className="social-icon" href="#!">
            <i className="fab fa-twitter"></i>
          </a>
          <a className="social-icon" href="#!">
            <i className="fab fa-facebook-f"></i>
          </a>
        </div>
      </div>
    </section>
    //<hr className="m-0" />
  );
};

export default About;
