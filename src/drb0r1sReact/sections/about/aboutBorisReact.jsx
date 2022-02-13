import React from "react";
import borisReact from "../../images/boris-react-black-logo.png";

const AboutBorisReact = () => {
    return(
        <section className="about-boris-react" id="drb0r1sxreact">
            <div className="custom-shape-divider-top-1643126683">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                </svg>
            </div>

            <div className="text-holder">
                <h3>drb0r1s x React</h3>
                <p><span>DRB0R1S x React</span> is a project in the form of a website intended
                to <span>promote the work and previous projects of the Front-end Web Developer
                drb0r1s</span>. On this site you can find <span>various projects</span>
                (<span>websites</span>, <span>web applications</span>,
                <span>custom hooks</span>...), as well as <span>explained</span> projects and
                their <span>source codes</span>.</p>
            </div>
        
            <a href="#home">
                <img src={borisReact} alt="B O R I S" />
            </a>
        </section>
    );
}

export default AboutBorisReact;