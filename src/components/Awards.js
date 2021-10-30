import React from "react";

const Awards = () => {
  return (
    <section className="resume-section" id="awards">
      <div className="resume-section-content">
        <h2 className="mb-5">Awards & Certifications</h2>
        <ul className="fa-ul mb-0">
          <li>
            <span className="fa-li">
              <i className="fas fa-trophy text-warning"></i>
            </span>
            EIT in Computer and Electrical Engineering
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-trophy text-warning"></i>
            </span>
            Certified FullStack Web Developer (pending)
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-trophy text-warning"></i>
            </span>
            1<sup>st</sup>
            Place - Old Dominion University - Quadruped Walker Arduino Design Competition
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-trophy text-warning"></i>
            </span>
            Bloomberg Terminal Certified Researcher
          </li>

        </ul>
      </div>
    </section>
  );
};

export default Awards;
