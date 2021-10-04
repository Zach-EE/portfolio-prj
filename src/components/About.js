import React from 'react'

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
            <p className="lead mb-5">I am experienced electrical engineer with a concentration in power and renewable energy engineering. My software development experience includes but is not limited to: 
            · robotics and automation development in python and JavaScript, 
            · as well as development in the fullstack, MERN being the focus.</p>
            <div className="social-icons">
                <a className="social-icon" href="#!"><i className="fab fa-linkedin-in"></i></a>
                <a className="social-icon" href="#!"><i className="fab fa-github"></i></a>
                <a className="social-icon" href="#!"><i className="fab fa-twitter"></i></a>
                <a className="social-icon" href="#!"><i className="fab fa-facebook-f"></i></a>
            </div>
        </div>
    </section>
    //<hr className="m-0" />
    )
}

export default About
