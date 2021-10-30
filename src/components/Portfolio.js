import React from 'react';

const Portfolio = () => {
  return (
    <section className="resume-section" id="portfolio">
      <div className="resume-section-content">
        <h2 className="mb-5">Project-Portfolio</h2>
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">readMe.md Generator</h5>
                <p className="card-text">
                  This application allows a user to quickly generate a README.md
                  file for a project from the CLI in project root folder. Built
                  with node.js.
                </p>
                <a
                  href="https://github.com/Zach-EE/readMe-generator-md"
                  className="btn btn-primary"
                >
                  Repository
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">5-Day Weather Web-App</h5>
                <p className="card-text">
                  5 day city weather forecast web application. Built using
                  vanilla JavaScript and using the OpenWeather API.
                </p>
                <a
                  href="https://github.com/Zach-EE/weatherDashboard-webApplication"
                  className="btn btn-primary"
                >
                  Repository
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
