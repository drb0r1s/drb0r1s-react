import React, { useState, useRef, useMemo } from "react";
import useResponsiveObj from "use-responsive-obj";
import { projectsData } from "../data";
import arrowLeft from "../images/projects-arrow-left.svg";
import arrowRight from "../images/projects-arrow-right.svg";

const Projects = ({ setRef }) => {
    const [isOpened, setIsOpened] = useState(false);
    const [firstProject, setFirstProject] = useState(true);

    const projectModal = useRef(null);

    function openProject(project) {
        for(let i = 0; i < projectsData.length; i++) {
            projectsData[i].projects.forEach((p) => {
                if(p === project && firstProject) {
                    setIsOpened([projectsData[i], project]);
                    setFirstProject(false);
                }
            });
        }

        setTimeout(() => {
            projectModal.current.style.opacity = "1";
            projectModal.current.style.top = "50%";
        }, 100);
    }

    function closeModal() {
        projectModal.current.style.opacity = "0";
        projectModal.current.style.top = "60%";

        setTimeout(() => {
            setIsOpened(false);
            setFirstProject(true);
        }, 300);
    }
    
    return(
        <section className="projects" id="projects" ref={setRef}>
            <div className="projects-holder">
                <h2>projects</h2>

                {projectsData.map((project) => {   
                    return <Card
                        key={project.id}
                        {...project}
                        openProject={openProject}
                    />;
                })}
            </div>

            {isOpened && <ProjectModal
                isOpened={isOpened}
                projectModal={projectModal}
                closeModal={closeModal}
            />}
        </section>
    );
}

const Card = (props) => {
    const {
        id, title, icon, projects,
        openProject
    } = props;

    const [moveStatus, setMoveStatus] = useState({
        left: true, right: true
    });

    const cardProjects = useRef(null);
    const projectsScroll = useRef(null);

    const changerValues = useMemo(() => {
        return {
            change: true,
            notChange: false
        };
    }, []);
    
    const changerBreakpoints = useMemo(() => {
        return {
            change: [false, 1024],
            notChange: [1025, false]
        };
    }, []);

    const { responsive } = useResponsiveObj(changerValues, changerBreakpoints);

    const rightDirection = id % 2 === 0;
    const moveUnit = 40;

    function moveLeft() {
        const projectsLeft = getComputedStyle(projectsScroll.current).getPropertyValue("left");
        
        if(parseInt(projectsLeft) >= 0) return setMoveStatus({left: false, right: true});

        setMoveStatus({...moveStatus, right: true});
        projectsScroll.current.style.left = parseInt(projectsLeft) + moveUnit + "px";
    }

    function moveRight() {
        const cardProjectsWidth = getComputedStyle(cardProjects.current).getPropertyValue("width");
        const projectsWidth = getComputedStyle(projectsScroll.current).getPropertyValue("width");
        const projectsLeft = getComputedStyle(projectsScroll.current).getPropertyValue("left");
        
        if(parseInt(projectsLeft) <= parseInt(projectsWidth) * -1 + parseInt(cardProjectsWidth)) return setMoveStatus({left: true, right: false});

        setMoveStatus({...moveStatus, left: true});
        projectsScroll.current.style.left = parseInt(projectsLeft) - moveUnit + "px";
    }

    function moveHold(direction) {
        const setDirection = direction === "left" ? moveLeft : moveRight;
        
        const interval = setInterval(setDirection, 100);
        window.addEventListener("mouseup", clearHold);
        window.addEventListener("touchend", clearHold);

        function clearHold() {
            window.removeEventListener("mouseup", clearHold);
            window.removeEventListener("touchend", clearHold);
            clearInterval(interval);
        }
    }
    
    return(
        <div className="card-holder">
            {rightDirection && <img src={icon} alt={title} className="special-img left-img"/>}
            
            <div className="project-card project-card-left">
                {!rightDirection && <div className="card-title">
                    <h3 style={responsive ? { color: "black" } : {}}>{title}</h3>
                    <p style={responsive ? { color: "black" } : {}}>projects: {projects.length}</p>
                </div>}

                <div className="card-projects">
                    {responsive ? <>
                        <CardProjectsHolder
                            cardProjects={cardProjects}
                            projects={projects}
                            projectsScroll={projectsScroll}
                            openProject={openProject}
                        />

                        {projects.length > 1 && <div className="r-button-holder">
                            <button
                                className={moveStatus.left ? "" : "disabled-button"}
                                onClick={moveLeft}
                                onMouseDown={() => moveHold("left")}
                                onTouchStart={() => moveHold("left")}
                            >
                                <img src={arrowLeft} alt="LEFT" />
                            </button>

                            <button
                                className={moveStatus.right ? "" : "disabled-button"}
                                onClick={moveRight}
                                onMouseDown={() => moveHold("right")}
                                onTouchStart={() => moveHold("right")}
                            >
                                <img src={arrowRight} alt="RIGHT" />
                            </button>
                        </div>}
                    </> : <>
                        {projects.length > 1 && <button
                            className={moveStatus.left ? "" : "disabled-button"}
                            onClick={moveLeft}
                            onMouseDown={() => moveHold("left")}
                            onTouchStart={() => moveHold("left")}
                        >
                            <img src={arrowLeft} alt="LEFT" />
                        </button>}
                    
                        <CardProjectsHolder
                            cardProjects={cardProjects}
                            projects={projects}
                            projectsScroll={projectsScroll}
                            openProject={openProject}
                        />

                        {projects.length > 1 && <button
                            className={moveStatus.right ? "" : "disabled-button"}
                            onClick={moveRight}
                            onMouseDown={() => moveHold("right")}
                            onTouchStart={() => moveHold("right")}
                        >
                            <img src={arrowRight} alt="RIGHT" />
                        </button>}
                    </>}
                </div>

                {rightDirection && <div className="card-title">
                    <h3 style={responsive ? { color: "black" } : { color: "white" }}>{title}</h3>
                    <p style={responsive ? { color: "black" } : { color: "white" }}>projects: {projects.length}</p>
                </div>}
            </div>

            {!rightDirection && <img src={icon} alt={title} className="special-img"/>}
        </div>
    );
}

const ProjectModal = (props) => {
    const {
        isOpened, projectModal, closeModal
    } = props;

    const category = isOpened[0];
    const currentProject = isOpened[1];

    const [slider, setSlider] = useState(0);

    const mainSlider = useRef(null);

    const sliderValues = useMemo(() => {
        return {
            responsiveSlider: true,
            normalSlider: false
        };
    }, []);

    const sliderBreakpoints = useMemo(() => {
        return {
            responsiveSlider: [false, 768],
            normalSlider: [769, false]
        };
    }, []);

    const { responsive } = useResponsiveObj(sliderValues, sliderBreakpoints);

    const customModalBg = {
        background: `linear-gradient(
            rgba(255, 255, 255, 0.7),
            rgba(255, 255, 255, 0.7)
        ), url(${currentProject.images[0]})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed"
    };

    function slideLeft() {
        mainSlider.current.style.opacity = "0";
        mainSlider.current.style.left = "-50px";

        setTimeout(() => {
            if(slider === 0) setSlider(currentProject.images.length - 1);
            else setSlider(slider - 1);

            mainSlider.current.style.opacity = "1";
            mainSlider.current.style.left = "0";
        }, 500);
    }

    function slideRight() {
        mainSlider.current.style.opacity = "0";
        mainSlider.current.style.left = "50px";

        setTimeout(() => {
            if(slider === currentProject.images.length - 1) setSlider(0);
            else setSlider(slider + 1);

            mainSlider.current.style.opacity = "1";
            mainSlider.current.style.left = "0";
        }, 500);
    }
    
    return(
        <div className="project-modal" ref={projectModal}>
            <div className="modal-x" onClick={closeModal}></div>
            
            <div
                className="modal-bg"
                style={customModalBg}
            >
                <h4>{currentProject.name}</h4>
                <strong>{category.title} / {currentProject.name}</strong>
            </div>

            <div className="modal-info">
                <div className="basic-info">
                    <h4>name: <span>{currentProject.name}</span></h4>
                    <h5>category: <span>{category.title}</span></h5>
                </div>

                <div className="preview-info">
                    <div className="images-slider">
                        {responsive ? <>
                            <img
                                src={currentProject.images[slider]}
                                alt={currentProject.name}
                                className="main-slider"
                                ref={mainSlider}
                            />

                            {currentProject.images.length > 1 && <div className="r-button-holder">
                                <button onClick={slideLeft}>
                                    <img src={arrowLeft} alt="LEFT" />
                                </button>

                                <button onClick={slideRight}>
                                    <img src={arrowRight} alt="RIGHT" />
                                </button>
                            </div>}
                        </> : <>
                            {currentProject.images.length > 1 && <button
                                onClick={slideLeft}
                            >
                                <img src={arrowLeft} alt="LEFT" />
                            </button>}

                            <img
                                src={currentProject.images[slider]}
                                alt={currentProject.name}
                                className="main-slider"
                                ref={mainSlider}
                            />

                            {currentProject.images.length > 1 && <button
                                onClick={slideRight}
                            >
                                <img src={arrowRight} alt="RIGHT" />
                            </button>}
                        </>}
                    </div>

                    <strong>
                        view more?&nbsp;
                        <a href={currentProject.link}>live view</a>
                    </strong>
                </div>

                <div className="description-info">
                    <h5>description</h5>

                    <div className="description-about">
                        <strong>About this <span>{category.title.substr(0, category.title.length - 1)}</span></strong>

                        <p dangerouslySetInnerHTML={{ __html: currentProject.descriptionAbout }}></p>
                    </div>

                    <div className="description-dev">
                        <strong>Technologies used to make this <span>{category.title.substr(0, category.title.length - 1)}</span></strong>

                        <div className="dev-images">
                            {currentProject.descriptionImages.map((logo, index) => {
                                return <abbr title={logo.name} key={index}>
                                    <img
                                        src={logo.logo}
                                        alt={logo.name}
                                        className="dev-logo"
                                    />
                                </abbr>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const CardProjectsHolder = (props) => {
    const {
        cardProjects, projects, projectsScroll,
        openProject
    } = props;
    
    return(
        <div className="card-projects-holder" ref={cardProjects}>
            <div
                className={projects.length > 1 ? "projects-scroll" : "projects-scroll projects-scroll-one"}
                ref={projectsScroll}
            >
                {projects.map((project, index) => {
                    return(
                        <div
                            key={index}
                            className="single-project"
                            onClick={() => openProject(project)}
                        >
                            <img
                                src={project.images[0]}
                                alt={project.name}
                            />

                            <strong>{project.name}</strong>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Projects;