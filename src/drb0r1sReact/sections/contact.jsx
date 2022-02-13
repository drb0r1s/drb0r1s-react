import React, { useState, useEffect, useRef, useContext } from "react";
import { contactData, contactDataBg, contactDataMode } from "../data";
import aboutBg from "../images/about-bg.jpg";

const SwitchFunctions = React.createContext();

const Contact = ({ setRef }) => {
    const [time, setTime] = useState({
        hours: 0, minutes: 0, seconds: 0
    });

    const [date, setDate] = useState({
        weekday: 0, day: 0, month: 0, year: 0
    });

    const [appModal, setAppModal] = useState(false);
    const [minimized, setMinimized] = useState({ apps: [], opened: false });
    const [settings, setSettings] = useState({
        settings: {
            bg: aboutBg, mode: "light"
        }, current: ""
    });

    const settingsStyle = {
        backgroundImage: `linear-gradient(
            rgba(0, 0, 0, 0.7),
            rgba(0, 0, 0, 0.7)
        ), url(${settings.settings.bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed"
    };
    
    const screen = useRef(null);
    const screenAppModal = useRef(null);
    const modalText = useRef(null);
    const screenTaskbar = useRef(null);
    const miniModal = useRef(null);
    const settingsModal = useRef(null);
    const screenTaskbarSettings = useRef(null);
    
    useEffect(() => {
        setInterval(() => {
            const currentTime = new Date();
            const week = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
            
            const currentHours = "0" + currentTime.getHours();
            const currentMinutes = "0" + currentTime.getMinutes();
            const currentSeconds = "0" + currentTime.getSeconds();

            const currentWeekDay = week[currentTime.getDay()];
            const currentDay = currentTime.getDate();
            const currentMonth = currentTime.getMonth();
            const currentYear = currentTime.getFullYear();

            setTime({
                hours: currentHours.substr(-2),
                minutes: currentMinutes.substr(-2),
                seconds: currentSeconds.substr(-2)
            });

            setDate({
                weekday: currentWeekDay,
                day: currentDay,
                month: currentMonth + 1,
                year: currentYear
            });
        }, 1000);
    }, []);

    function changeAppModal(app) {
        setAppModal(app);
        
        setTimeout(() => {
            screenAppModal.current.id = "active-app-modal";

            setTimeout(() => {
                modalText.current.style.opacity = "1";
                modalText.current.style.top = "0";

                screenTaskbar.current.style.opacity = "1";
                screenTaskbar.current.style.bottom = "0";
            }, 300);
        }, 100);
    }

    function closeAppModal() {
        if(!appModal) return;
        
        modalText.current.style.opacity = "0";
        modalText.current.style.top = "15px";

        screenTaskbar.current.style.opacity = "0";
        screenTaskbar.current.style.bottom = "-20px";
        
        setTimeout(() => {
            screenAppModal.current.id = "";

            setTimeout(() => {
                if(minimized.apps.indexOf(appModal) > -1) {
                    const miniFilter = minimized.apps.filter((app) =>
                        app.id !== appModal.id
                    );

                    setMinimized({...minimized, apps: miniFilter});
                }
                
                setAppModal(false);
            }, 300);
        }, 300);
    }

    function minimizeAppModal() {
        if(!appModal) return;

        modalText.current.style.opacity = "0";
        modalText.current.style.top = "15px";

        screenTaskbar.current.style.opacity = "0";
        screenTaskbar.current.style.bottom = "-20px";

        setTimeout(() => {
            screenAppModal.current.id = "minimized-app-modal";

            setTimeout(() => {
                if(minimized.apps.indexOf(appModal) === -1) setMinimized({...minimized, apps: [...minimized.apps, appModal]});
                setAppModal(false);
            }, 300);
        }, 300);
    }

    function openMiniAppModal() {
        if(appModal) return;

        setMinimized({...minimized, opened: true});

        setTimeout(() => {
            miniModal.current.id = "active-mini-modal";

            setTimeout(() => {
                modalText.current.style.opacity = "1";
                modalText.current.style.top = "0";

                screenTaskbar.current.style.opacity = "1";
                screenTaskbar.current.style.bottom = "0";
            }, 300);
        }, 100);
    }

    function closeMiniAppModal() {
        if(!minimized.opened) return;

        modalText.current.style.opacity = "0";
        modalText.current.style.top = "15px";

        screenTaskbar.current.style.opacity = "0";
        screenTaskbar.current.style.bottom = "-20px";

        setTimeout(() => {
            miniModal.current.id = "";

            setTimeout(() => {
                setMinimized({...minimized, opened: false});
            }, 300);
        }, 300);
    }

    function openAppWithMini(app) {
        closeMiniAppModal();
        setTimeout(() => changeAppModal(app), 700);
    }

    function openSetting(setting) {
        setSettings({...settings, current: setting});

        setTimeout(() => {
            settingsModal.current.id = "active-settings-modal";

            setTimeout(() => {
                screenTaskbarSettings.current.style.opacity = "1";
                screenTaskbarSettings.current.style.bottom = "0";
            }, 300);
        }, 100);
    }

    function closeSetting() {
        if(!settings.current) return;

        screenTaskbarSettings.current.style.opacity = "0";
        screenTaskbarSettings.current.style.bottom = "-20px";

        setTimeout(() => {
            settingsModal.current.id = "";

            setTimeout(() => {
                setSettings({...settings, current: ""});
            }, 300);
        }, 300);
    }
    
    return(
        <section className="contact" id="contact" ref={setRef}>
            <div className="custom-shape-divider-top-1644067675">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
                </svg>
            </div>

            <div className="container">
                <div className="row contact-holder">
                    <div className="col-lg-6 title-holder">
                        <h2>contact <span>me</span></h2>

                        <p>Here you can find <span>official accounts</span> where you can
                        contact the <span>developer</span>. By clicking on one of the
                        <span>"applications"</span> you can see the corresponding contact.
                        Also, if you want to contact the developer <span>about the job</span>,
                        it is best to do it via <span>e-mail</span>, but a job offer can
                        certainly be sent to <span>any</span> of these contacts.</p>
                    </div>

                    <div className="col-lg-6 content-holder">
                        <div className="phone">
                            <div className="camera"></div>
                            
                            <div 
                                className="screen"
                                ref={screen}
                                style={settingsStyle}
                            >
                                <div className="screen-time">
                                    <strong>{`${time.hours} : ${time.minutes} : ${time.seconds}`}</strong>
                                    <strong>{`${date.weekday}, ${date.day} / ${date.month} / ${date.year}`}</strong>
                                </div>

                                <div className="screen-apps">
                                    {contactData.map((app) => {
                                        return <App
                                            key={app.id}
                                            {...app}
                                            changeAppModal={() => changeAppModal(app)}
                                        />;
                                    })}
                                </div>

                                <SwitchFunctions.Provider value={{
                                    screen, closeAppModal, minimizeAppModal, openMiniAppModal,
                                    minimized, setMinimized, closeMiniAppModal,
                                    openAppWithMini, screenTaskbar, modalText,
                                    settings, setSettings, settingsModal,
                                    openSetting, closeSetting, screenTaskbarSettings
                                }}>
                                    {appModal && <AppModal
                                        {...appModal}
                                        screenAppModal={screenAppModal}
                                    />}

                                    {minimized.opened && <MiniModal
                                        miniModal={miniModal}
                                    />}

                                    {settings.current ?
                                        settings.current === "bg" ? <SettingsBg /> : <SettingsMode />
                                    : null}

                                    <Taskbar
                                        className="screen-main-taskbar"
                                        onlyReturn={false}
                                    />
                                </SwitchFunctions.Provider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact-border"></div>

            <div className="custom-shape-divider-bottom-1644508818">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
                </svg>
            </div>
        </section>
    );
}

const App = (props) => {
    const { icon, name, changeAppModal } = props;
    
    return(
        <div
            className="screen-app"
            onClick={changeAppModal}
        >
            <div className="icon-holder">
                <img src={icon} alt={name} />
            </div>
            
            <p>{name}</p>
        </div>
    );
}

const AppModal = (props) => {
    const {
        screenAppModal, icon, name,
        avatar, contact, username,
        link, special
    } = props;

    const {
        closeAppModal, modalText, screenTaskbar,
        openSetting, settings
    } = useContext(SwitchFunctions);
    
    return(
        <div
            className="screen-app-modal"
            ref={screenAppModal}
            style={{
                filter: settings.settings.mode === "light" ? "" : "invert(1)"
            }}
        >
            <div className="modal-x" onClick={closeAppModal}></div>

            <div className="modal-text" ref={modalText}>
                {special ?
                    <>
                        <div className="app-logo">
                            <img src={icon} alt={name} />
                            <p>{name}</p>
                        </div>
                        
                        <div className="settings-bg">
                            <strong>background</strong>
                            <p onClick={() => openSetting("bg")}>&gt;</p>
                        </div>

                        <div className="settings-mode">
                            <strong>mode</strong>
                            <p onClick={() => openSetting("mode")}>&gt;</p>
                        </div>
                    </>
                : <>
                    <div className="app-logo">
                        <img src={icon} alt={name} />
                        <p>{name}</p>
                    </div>

                    <div className="app-profile">
                        <img src={avatar} alt={contact} />

                        <div className="app-info">
                            <p>{username}</p>
                            <strong>{contact}</strong>
                        </div>
                    </div>

                    <a href={link}>go to {name} {name !== "email" && "profile"}</a>
                </>}
            </div>

            <Taskbar
                className="screen-taskbar"
                setRef={screenTaskbar}
                onlyReturn={false}
                closeFunction={closeAppModal}
            />
        </div>
    );
}

const MiniModal = (props) => {
    const {
        miniModal
    } = props;

    const {
        screen, closeMiniAppModal, minimized,
        openAppWithMini, setMinimized, modalText,
        screenTaskbar
    } = useContext(SwitchFunctions);

    const [appRefs, setAppRefs] = useState([]);
    
    const miniApps = useRef(null);

    useEffect(() => {
        const newArray = [];
        
        for(let i = 0; i < 3; i++) {
            newArray.push(React.createRef());
        }

        setAppRefs(newArray);
    }, []);

    function moveDown(event) {
        window.addEventListener("mousemove", moveMove);
        window.addEventListener("mouseup", moveUp);

        window.addEventListener("touchmove", moveMove);
        window.addEventListener("touchend", moveUp);

        const prevX = event.type === "mousedown" ? event.clientX : event.targetTouches[0].clientX;
        const previousPosition = getComputedStyle(miniApps.current).getPropertyValue("left");

        function moveMove(event) {
            const getNewX = event.type === "mousemove" ? event.clientX : event.targetTouches[0].clientX;
            const newX = prevX - getNewX;

            miniApps.current.style.left = parseInt(previousPosition) - newX + "px";
        }

        function moveUp() {
            window.removeEventListener("mousemove", moveMove);
            window.removeEventListener("mouseup", moveUp);

            window.removeEventListener("touchmove", moveMove);
            window.removeEventListener("touchend", moveUp);

            const screenWidth = getComputedStyle(screen.current).getPropertyValue("width");
            const miniAppsWidth = getComputedStyle(miniApps.current).getPropertyValue("width");
            const miniAppsLeft = getComputedStyle(miniApps.current).getPropertyValue("left");
            
            if(
                parseInt(miniAppsLeft) >= parseInt(miniAppsWidth) - parseInt(screenWidth) ||
                parseInt(miniAppsLeft) <= (parseInt(miniAppsWidth) - parseInt(screenWidth)) * -1
            ) {
                miniApps.current.style.transition = "300ms";
                miniApps.current.style.left = "0";

                setTimeout(() => {
                    miniApps.current.style.transition = "0ms";
                }, 300);
            }
        }
    }

    function closeMiniApp(id, app) {
        app.current.style.opacity = "0";
        app.current.style.top = "-10px";

        setTimeout(() => {
            const miniFilter = minimized.apps.filter((app) => app.id !== id);
            setMinimized({...minimized, apps: miniFilter});

            setTimeout(() => {
                if(app.current !== null) {
                    app.current.style.opacity = "1";
                    app.current.style.top = "0";
                }
            }, 100);
        }, 300);
    }

    function closeAllMiniApps() {
        miniApps.current.style.opacity = "0";
        miniApps.current.style.top = "-10px";

        setTimeout(() => {
            setMinimized({...minimized, apps: []});
        }, 300);
    }
    
    return(
        <div
            className="screen-mini-modal"
            style={minimized.apps.length > 0 ? { cursor: "grab" } : { cursor: "default" }}
            ref={miniModal}
            onMouseDown={minimized.apps.length === 0 ? null : moveDown}
            onTouchStart={minimized.apps.length === 0 ? null : moveDown}
        >
            <div className="modal-x" onClick={closeMiniAppModal}></div>

            <div className="modal-text" ref={modalText}>
                {minimized.apps.length === 0 ? <strong>No opened apps.</strong> : <div className="mini-apps" ref={miniApps}>
                    {minimized.apps.map((app, index) => {
                        return(
                            <div
                                className="mini-app"
                                key={index}
                                ref={appRefs[index]}
                            >
                                <div className="modal-x" onClick={() => closeMiniApp(app.id, appRefs[index])}></div>

                                <div
                                    className="mini-app-info"
                                    onClick={() => openAppWithMini(app)}
                                >
                                    <img src={app.icon} alt={app.name} />
                                    <strong>{app.name}</strong>
                                </div>
                            </div>
                        );
                    })}
                </div>}

                {minimized.apps.length > 0 && <button onClick={closeAllMiniApps}>close all</button>}
            </div>
            
            <Taskbar
                className="screen-taskbar"
                setRef={screenTaskbar}
                onlyReturn={true}
                closeFunction={closeMiniAppModal}
            />
        </div>
    );
}

const SettingsBg = () => {
    const {
        settingsModal, screenTaskbarSettings, closeSetting,
        settings, setSettings, screen
    } = useContext(SwitchFunctions);

    const bgList = useRef(null);

    function moveDown(event) {
        window.addEventListener("mousemove", moveMove);
        window.addEventListener("mouseup", moveUp);

        window.addEventListener("touchmove", moveMove);
        window.addEventListener("touchend", moveUp);

        const screenWidth = getComputedStyle(screen.current).getPropertyValue("width");
        const bgListWidth = getComputedStyle(bgList.current).getPropertyValue("width");
        const bgListPosition = getComputedStyle(bgList.current).getPropertyValue("left");

        const prevX = event.type === "mousedown" ? event.clientX : event.targetTouches[0].clientX;

        function moveMove(event) {
            const getNewX = event.type === "mousemove" ? event.clientX : event.targetTouches[0].clientX;
            const newX = prevX - getNewX;

            bgList.current.style.left = parseInt(bgListPosition) - newX + "px";
        }

        function moveUp() {
            window.removeEventListener("mousemove", moveMove);
            window.removeEventListener("mouseup", moveUp);

            window.removeEventListener("touchmove", moveMove);
            window.removeEventListener("touchend", moveUp);

            if(
                parseInt(bgListPosition) >= parseInt(bgListWidth) - parseInt(screenWidth) ||
                parseInt(bgListPosition) <= (parseInt(bgListWidth) - parseInt(screenWidth)) * -1
            ) {
                bgList.current.style.transition = "300ms";
                bgList.current.style.left = "0";

                setTimeout(() => {
                    bgList.current.style.transition = "0ms";
                }, 300);
            }
        }
    }
    
    return(
        <div
            className="settings-modal"
            ref={settingsModal}
            style={{
                cursor: "grab",
                filter: settings.settings.mode === "light" ? "" : "invert(1)"
            }}
            onMouseDown={moveDown}
            onTouchStart={moveDown}
        >
            <div className="modal-x" onClick={closeSetting}></div>

            <div className="modal-text">
                <h3>background</h3>

                <div className="bg-list" ref={bgList}>
                    {contactDataBg.map((bg, index) => {
                        return <img
                            key={index}
                            src={bg}
                            alt="BG"
                            id={settings.settings.bg === bg ? "current-bg" : ""}
                            style={{
                                filter: settings.settings.mode === "light" ? "" : "invert(1)"
                            }}
                            onClick={() => setSettings({
                                ...settings, settings: {...settings.settings, bg: bg}
                            })}
                        />
                    })}
                </div>
            </div>
            
            <Taskbar
                className="screen-taskbar"
                setRef={screenTaskbarSettings}
                onlyReturn={true}
                closeFunction={closeSetting}
            />
        </div>
    );
}

const SettingsMode = () => {
    const {
        settingsModal, screenTaskbarSettings, closeSetting,
        settings, setSettings
    } = useContext(SwitchFunctions);
    
    return(
        <div
            className="settings-modal"
            ref={settingsModal}
            style={{
                filter: settings.settings.mode === "light" ? "" : "invert(1)"
            }}
        >
            <div className="modal-x" onClick={closeSetting}></div>
            
            <div className="modal-text">
                <h3>mode</h3>

                <div className="mode-list" style={{
                    filter: settings.settings.mode === "light" ? "" : "invert(1)"
                }}>
                    {contactDataMode.map((mode, index) => {
                        return(
                            <div
                                className="mode-option"
                                key={index}
                                style={mode === "dark" ? { filter: "invert(1)" } : null}
                            >
                                <div className="mode-chat">
                                    <div className="mode-conversation">
                                        <div className="mode-profile"></div>
                                        <div className="mode-text"></div>
                                    </div>

                                    <div className="mode-conversation">
                                        <div className="mode-text"></div>
                                        <div className="mode-profile"></div>
                                    </div>

                                    <div className="mode-conversation">
                                        <div className="mode-profile"></div>
                                        <div className="mode-text"></div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mode-selected">
                    {contactDataMode.map((mode, index) => {
                        return(
                            <div className="mode-radio" key={index}>
                                <input
                                    type="radio"
                                    id={`${mode}-radio`}
                                    name="mode-radios"
                                    checked={settings.settings.mode === mode}
                                    onChange={() => setSettings({
                                        ...settings, settings: {...settings.settings, mode: mode}
                                    })}
                                />

                                <label htmlFor={`${mode}-radio`}>{mode}</label>
                            </div>
                        );
                    })}
                </div>
            </div>
            
            <Taskbar
                className="screen-taskbar"
                setRef={screenTaskbarSettings}
                onlyReturn={true}
                closeFunction={closeSetting}
            />
        </div>
    );
}
const Taskbar = (props) => {
    const {
        className, setRef, onlyReturn, closeFunction
    } = props;

    const {
        minimizeAppModal, openMiniAppModal,
    } = useContext(SwitchFunctions);
    
    return(
        <div className={className} ref={setRef}>
            <button onClick={closeFunction}>&lt;</button>
            {!onlyReturn && <>
                <button onClick={minimizeAppModal}>O</button>
                <button onClick={openMiniAppModal}>|||</button>
            </>}
        </div>
    );
}

export default Contact;