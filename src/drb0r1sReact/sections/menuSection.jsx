import React, { useState, useRef, useMemo } from "react";
import useResponsiveObj from "use-responsive-obj";
import { menuData, dropDownMenuData } from "../data";
import borisLogo from "../images/drb0r1s-white-logo.png";
import reactLogo from "../images/main-react-logo.png";
import borisReact from "../images/boris-react-black-logo.png";
import dropdownIcon from "../images/menu-dropdown-menu.svg";

const MenuSection = ({ setRef, currentSection, navRef }) => {
    const [isOpened, setIsOpened] = useState(false);
    const [animation, setAnimation] = useState(false);

    const dropdownMenu = useRef(null);
    const responsiveModal = useRef(null);
    const linkHolder = useRef(null);

    const responsiveValues = useMemo(() => {
        return {
            responsiveMenu: true,
            classicMenu: false
        };
    }, []);

    const responsiveBreakpoints = useMemo(() => {
        return {
            responsiveMenu: [false, 768],
            classicMenu: [769, false]
        };
    }, []);

    const { responsive } = useResponsiveObj(responsiveValues, responsiveBreakpoints);
    
    function openMenu() {
        if(isOpened) {
            dropdownMenu.current.style.opacity = "0";
            dropdownMenu.current.style.top = "50%";

            setTimeout(() => {
                setIsOpened(false);
            }, 300);
        }

        else {
            setIsOpened(true);

            setTimeout(() => {
                dropdownMenu.current.style.opacity = "1";
                dropdownMenu.current.style.top = "100%";
            }, 100);
        }
    }

    function changeResponsiveModal() {
        if(animation) {
            linkHolder.current.style.opacity = "0";
            linkHolder.current.style.top = "10px";

            setTimeout(() => {
                responsiveModal.current.style.opacity = "0";
                responsiveModal.current.style.left = "0";

                setTimeout(() => {
                    setAnimation(false);
                }, 500);
            }, 300);
        }

        else {
            setAnimation(true);

            setTimeout(() => {
                responsiveModal.current.style.opacity = "1";
                responsiveModal.current.style.left = "50%";

                setTimeout(() => {
                    linkHolder.current.style.opacity = "1";
                    linkHolder.current.style.top = "0";
                }, 500);
            }, 100);
        }
    }
    
    return(
        <>
            <section className="menu-section" ref={setRef} id="menu-section">
                <h2>explore the site</h2>

                <div className="logo-holder">
                    <img src={borisLogo} alt="B O R I S" />
                    <p>x</p>
                    <img src={reactLogo} alt="R E A C T" />
                </div>
            </section>

            <nav ref={navRef} style={responsive ? { overflow: "hidden" } : {}}>
                {responsive ? <div className="responsive-menu">
                    <img
                        src={borisReact}
                        alt="B O R I S"
                        onClick={() => window.location.reload()}
                    />
                    
                    <div className="menu-holder" onClick={changeResponsiveModal}>
                        <div className="r-menu" id={animation ? "active-r-menu" : ""}></div>
                    </div>
                </div> : <>
                    <div className="classic-menu">
                        {menuData.map((section, index) => {
                            if(index === 2) {
                                return <img
                                    src={borisReact}
                                    alt="B O R I S"
                                    key={index}
                                    onClick={() => window.location.reload()}
                                />
                            }

                            if(section === "about") {
                                return(
                                    <a
                                        key={index}
                                        href={`#${section}`}
                                        id={currentSection === section ? "active-section" : ""}
                                    >
                                        {section}

                                        <img
                                            src={dropdownIcon}
                                            alt=""
                                            className={isOpened ? "dropdown-icon dropdown-invert" : "dropdown-icon"}
                                            onClick={openMenu}
                                        />
                                    </a>
                                );
                            }
                    
                            return <a
                                key={index}
                                href={`#${section}`}
                                id={currentSection === section ? "active-section" : ""}
                            >{section}</a>
                        })}
                    </div>

                    {isOpened && <div
                        className="drop-down-menu"
                        ref={dropdownMenu}
                    >
                        {dropDownMenuData.map((section, index) => {
                            return <a key={index} href={`#${section.link}`}>{section.name}</a>;
                        })}
                    </div>}
                </>}
            </nav>

            {animation && <ResponsiveModal
                responsiveModal={responsiveModal}
                linkHolder={linkHolder}
                currentSection={currentSection}
            />}
        </>
    );
}

const ResponsiveModal = (props) => {
    const { responsiveModal, linkHolder, currentSection } = props;

    const [rDropdown, setRDropdown] = useState(false);

    const dropdownRef = useRef(null);

    function changeDropdown() {
        if(rDropdown) {
            dropdownRef.current.style.height = "0";
            dropdownRef.current.style.opacity = "0";

            setTimeout(() => {
                setRDropdown(false);
            }, 300);
        }

        else {
            setRDropdown(true);

            setTimeout(() => {
                dropdownRef.current.style.height = "175px";
                dropdownRef.current.style.opacity = "1";
            }, 300);
        }
    }
    
    return(
        <div className="responsive-modal" ref={responsiveModal}>
            <img src={borisReact} alt="B O R I S" />

            <div className="link-holder" ref={linkHolder}>
                {menuData.map((section, index) => {
                    if(section === "neutral") return <React.Fragment key={index} />

                    if(section === "about") {
                        return(
                            <React.Fragment key={index}>
                                <a
                                    key={index}
                                    href={`#${section}`}
                                    id={currentSection === section ? "active-section" : ""}
                                >
                                    {section}

                                    <img
                                        src={dropdownIcon}
                                        alt=""
                                        className={rDropdown ? "dropdown-icon dropdown-invert" : "dropdown-icon"}
                                        onClick={changeDropdown}
                                    />
                                </a>

                                {rDropdown && <div className="r-drop-down" ref={dropdownRef}>
                                    {dropDownMenuData.map((section, index) => {
                                        return <a key={index} href={`#${section.link}`}>{section.name}</a>
                                    })}
                                </div>}
                            </React.Fragment>
                        );
                    }
                
                    return <a
                        href={`#${section}`}
                        key={index}
                        id={currentSection === section ? "active-section" : ""}
                    >{section}</a>
                })}
            </div>
        </div>
    );
}

export default MenuSection;