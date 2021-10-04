import React from 'react'

const Experience = () => {
    return (
        <section className="resume-section" id="experience">
        <div className="resume-section-content">
            <h2 className="mb-5">Experience</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                    <h3 className="mb-0">Application Developer</h3>
                    <div className="subheading mb-3">Free Lance</div>
                    <p>lorem ipsum dolor sit amet, consectetur adip</p>
                </div>
                <div className="flex-shrink-0"><span className="text-primary">May 2020 - Present</span></div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                    <h3 className="mb-0">Robotics & Automation</h3>
                    <div className="subheading mb-3">Tinkerer and Hobbyist</div>
                    <p>lorem ipsum dolor sit amet, consectetur adip</p>
                </div>
                <div className="flex-shrink-0"><span className="text-primary">August 2018 - Present</span></div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                    <h3 className="mb-0">Nuclear Electricain's Mate</h3>
                    <div className="subheading mb-3">US Navy</div>
                    <p>lorem ipsum dolor sit amet, consectetur adip</p>
                </div>
                <div className="flex-shrink-0"><span className="text-primary">September 2012 - November 2017</span></div>
            </div>
        </div>
    </section>
    )
}

export default Experience
