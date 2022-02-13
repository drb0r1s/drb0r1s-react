import React, { useMemo } from "react";
import useResponsiveObj from "use-responsive-obj";
import borisLogo from "../../images/drb0r1s-white-logo.png";

const AboutBoris = () => {
    const defineCenter = useMemo(() => {
        return {
            center: "align-items-center justify-content-center",
            notCenter: ""
        };
    }, []);
    
    const centerBreakpoints = useMemo(() => {
        return {
            center: [false, 1200],
            notCenter: [1201, false]
        };
    }, []);

    const { responsive } = useResponsiveObj(defineCenter, centerBreakpoints);
    
    return(
        <section className="about-boris" id="about-boris">
            <div className="container">
                <div className={`row ${responsive}`}>
                    <div className="col-md-8 text-holder">
                        <h3>about boris</h3>
                        <p>Hello everyone, I'm <span>Boris</span> (<span>drb0r1s</span>). 
                        I've been doing <span>Front-end Web Development</span> for
                        <span>9 months</span> now and I like this job. As for my
                        <span>skills</span>, I know <span>HTML</span>, <span>CSS (SASS,
                        Bootstrap)</span>, <span>JavaScript (React)</span>.
                        I do different projects every day and all of them can be found on
                        my <a className="link" href="https://github.com/drb0r1s">Github</a>,
                        mostly <span>websites</span>, but I also have several <span>web
                        applications</span> as well as <span>npm packages (discbot-easy,
                        useResponsiveObj)</span>. In the coming period, I plan to learn a lot
                        more about the web and Front-end. If you are interested in
                        contacting me about the job, you can find my contact
                        information <a className="link" href="#contact">here</a>.</p>
                    </div>

                    <div className="col-md-4 logo-holder">
                        <a href="https://boris.ml">
                            <img src={borisLogo} alt="B O R I S" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutBoris;