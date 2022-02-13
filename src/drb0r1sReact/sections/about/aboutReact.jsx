import React from "react";
import reactLogo from "../../images/react-white-logo.png";

const AboutReact = () => {
    return(
        <section className="about-react" id="about-react">
            <div className="custom-shape-divider-top-1643124743">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-4 logo-holder">
                        <a href="https://reactjs.org/">
                            <img src={reactLogo} alt="R E A C T" />
                        </a>
                    </div>

                    <div className="col-md-8 text-holder">
                        <h3>about react</h3>
                        <p><span>React</span> (also known as React.js or ReactJS) is a free and open-source <span>front-end JavaScript library</span> for building user interfaces based on UI components. It is maintained by <span>Meta</span> (formerly Facebook) and a community of individual developers and companies. React can be used as a base in the development of <span>single-page</span> or <span>mobile applications</span>. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutReact;