import React, { useState, useEffect, useRef, useMemo } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import useResponsiveObj from "use-responsive-obj";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/main.css";
import { components } from "./data";
import borisReact from "./images/boris-react-black-logo.png";

const Main = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [refs, setRefs] = useState([]);
    const [currentSection, setCurrentSection] = useState("");

    const navRef = useRef(null);

    const thresholdValues = useMemo(() => {
        return {
            phone: 0.1,
            normal: 0.3
        };
    }, []);

    const thresholdBreakpoints = useMemo(() => {
        return {
            phone: [false, 768],
            normal: [769, false]
        };
    }, []);

    const { responsive } = useResponsiveObj(thresholdValues, thresholdBreakpoints);
    
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
            
            const refArray = [];
            for(let i = 0; i < components.length; i++) refArray.push({ id: i, ref: React.createRef() });
            setRefs(refArray);
        }, 1500);
    }, []);

    useEffect(() => {
        const startObserving = () => {
            const options = {
                threshold: responsive,
                rootMargin: "20px 0px 0px 0px"
            };
            
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if(entry.isIntersecting) {
                            setCurrentSection(entry.target.id);

                            let refId;

                            for(let i = 0; i < refs.length; i++) {
                                if(refs[i].ref.current.id === entry.target.id) refId = refs[i].id;
                            }

                            if(refId >= 2) navRef.current.id = "active-menu";
                            else navRef.current.id = "";
                        }
                    });
                },
                options
            );

            for(let i = 0; i < refs.length; i++) observer.observe(refs[i].ref.current);
        }
        
        if(refs.length > 0) startObserving();
    }, [refs, responsive]);

    if(isLoading) {
        return(
            <section className="loading">
                <div className="loader">
                    <img src={borisReact} alt="B O R I S" />
                </div>

                <div className="circle"></div>
            </section>
        );
    }
    
    return(
        <HelmetProvider>
            <Helmet>
                <title>DRB0R1S - React</title>

                <meta name="author" content="drb0r1s" />
                <meta name="description" content="DRB0R1S x React is a portfolio that includes all projects created using React by the developer drb0r1s." />
                <meta name="keywords" content="React, React Functional Components, JavaScript, Bootstrap, SASS, Portfolio, React Portfolio, drb0r1s" />
            </Helmet>
            
            {components.map((Component, index) => {
                return <Component
                    key={index}
                    setRef={refs[index]?.ref}
                    currentSection={currentSection}
                    navRef={navRef}
                />
            })}
        </HelmetProvider>
    );
}

export default Main;