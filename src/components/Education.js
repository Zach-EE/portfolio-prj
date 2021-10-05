import React from "react";

const Education = () => {
  return (
    <section className="resume-section" id="education">
      <div className="resume-section-content">
        <h2 className="mb-5">Education</h2>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
            <h3 className="mb-0">Old Dominion University</h3>
            <div className="subheading mb-3">Bachelor of Science</div>
            <div>Electrical Engineering - Power and Renewable Engineering</div>
            <p>GPA: 3.23</p>
          </div>
          <div className="flex-shrink-0">
            <span className="text-primary">August 2017 - May 2021</span>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-between">
          <div className="flex-grow-1">
            <h3 className="mb-0">UNC Chapel Hill</h3>
            <div className="subheading mb-3">FullStack WebDev Coding Bootcamp</div>
            <p>GPA: 3.56</p>
          </div>
          <div className="flex-shrink-0">
            <span className="text-primary">May 2020 - Present</span>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-between">
          <div className="flex-grow-1">
            <h3 className="mb-0">Chicago Institute of Technology</h3>
            <div className="subheading mb-3">Android & iOS App Development</div>
            <p>GPA: 3.69</p>
          </div>
          <div className="flex-shrink-0">
            <span className="text-primary">Jan 2020 - Present</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
