// Websites

import projectWebsites from "./images/projects-websites-icon.svg";
import projectWebapps from "./images/projects-webapps-icon.svg";
import projectHooks from "./images/projects-hooks-icon.svg";

import reactLogo from "./images/react-blue-logo.png";
import javaScriptLogo from "./images/projects-js-logo.png";
import cssLogo from "./images/projects-css-logo.png";
import sassLogo from "./images/projects-sass-logo.webp";
import bootstrapLogo from "./images/projects-bootstrap-logo.png";
import weatherAPI from "./images/projects-weather-logo.png";

import chain1 from "./images/projects/websites/chain/chain-1.jpg";
import chain2 from "./images/projects/websites/chain/chain-2.jpg";
import chain3 from "./images/projects/websites/chain/chain-3.jpg";
import chain4 from "./images/projects/websites/chain/chain-4.jpg";
import chain5 from "./images/projects/websites/chain/chain-5.jpg";
import chain6 from "./images/projects/websites/chain/chain-6.jpg";

import hostCloud1 from "./images/projects/websites/host-cloud/host-cloud-1.jpg";
import hostCloud2 from "./images/projects/websites/host-cloud/host-cloud-2.jpg";
import hostCloud3 from "./images/projects/websites/host-cloud/host-cloud-3.jpg";
import hostCloud4 from "./images/projects/websites/host-cloud/host-cloud-4.jpg";
import hostCloud5 from "./images/projects/websites/host-cloud/host-cloud-5.jpg";

import reactPlayground1 from "./images/projects/websites/react-playground/react-playground-1.jpg";
import reactPlayground2 from "./images/projects/websites/react-playground/react-playground-2.jpg";
import reactPlayground3 from "./images/projects/websites/react-playground/react-playground-3.jpg";
import reactPlayground4 from "./images/projects/websites/react-playground/react-playground-4.jpg";

// Webapps

import reactCalculator1 from "./images/projects/webapps/react-calculator/react-calculator-1.jpg";
import reactCalculator2 from "./images/projects/webapps/react-calculator/react-calculator-2.jpg";

import weatherApp1 from "./images/projects/webapps/weather-app/weather-app-1.jpg";
import weatherApp2 from "./images/projects/webapps/weather-app/weather-app-2.jpg";

import myGrades1 from "./images/projects/webapps/my-grades/my-grades-1.jpg";
import myGrades2 from "./images/projects/webapps/my-grades/my-grades-2.jpg";
import myGrades3 from "./images/projects/webapps/my-grades/my-grades-3.jpg";

// Hooks

import useRO from "./images/projects/hooks/useResponsiveObj/useResponsiveObj-1.jpg";

// Other

import MainSection from "./sections/mainSection";
import MenuSection from "./sections/menuSection";
import About from "./sections/about/about";
import Projects from "./sections/projects";
import Contact from "./sections/contact";
import SeeMore from "./sections/seeMore";
import Footer from "./sections/footer";

import contactEmail from "./images/contact-email.svg";
import contactGithub from "./images/contact-github.svg";
import contactDiscord from "./images/contact-discord.svg";
import contactB from "./images/b-black-bg-logo.jpg";
import contactSettings from "./images/contact-settings.svg";

import aboutBg from "./images/about-bg.jpg";
import mainBg from "./images/main-bg.jpg";
import projectsBg from "./images/projects-bg.jpg";

import bWhiteLogo from "./images/b-white-logo.png";

export const components = [
    MainSection, MenuSection, About,
    Projects, Contact, SeeMore,
    Footer
];

export const menuData = [
    "home", "about", "neutral", "projects", "contact"
];

export const dropDownMenuData = [
    {
        name: "drb0r1s",
        link: "about-boris"
    },

    {
        name: "React",
        link: "about-react"
    },

    {
        name: "drb0r1s x React",
        link: "drb0r1sxreact"
    }
];

export const projectsData = [
    {
        id: 1,
        title: "websites",
        icon: projectWebsites,
        projects: [
            {
                id: 1,
                name: "Chain",
                link: "https://drb0r1s-chain-react.netlify.app/",
                images: [
                    chain1, chain2, chain3,
                    chain4, chain5, chain6
                ],
                descriptionAbout: "<span>Chain</span> is a website made using <span>React</span> (Class Components), <span>CSS</span> and <span>JavaScript</span>. The site consists of <span>one page</span>.",
                descriptionImages: [
                    {
                        id: 1,
                        name: "React Class Components",
                        logo: reactLogo
                    },

                    {
                        id: 2,
                        name: "CSS (Cascading Style Sheets)",
                        logo: cssLogo
                    },

                    {
                        id: 3,
                        name: "JavaScript",
                        logo: javaScriptLogo
                    }
                ]
            },

            {
                id: 2,
                name: "Host Cloud",
                link: "https://drb0r1s-host-cloud-react.netlify.app/",
                images: [
                    hostCloud1, hostCloud2, hostCloud3,
                    hostCloud4, hostCloud5
                ],
                descriptionAbout: "<span>Host Cloud</span> is a website created using <span>React</span> (Functional Components), <span>SASS</span>, <span>Bootstrap</span> and <span>JavaScript</span>. It is a site that consists of <span>several pages</span>, each of which has a certain theme.",
                descriptionImages: [
                    {
                        id: 1,
                        name: "React Functional Components",
                        logo: reactLogo
                    },

                    {
                        id: 2,
                        name: "SASS (Syntactically Awesome Style Sheets)",
                        logo: sassLogo
                    },

                    {
                        id: 3,
                        name: "Bootstrap",
                        logo: bootstrapLogo
                    },

                    {
                        id: 4,
                        name: "JavaScript",
                        logo: javaScriptLogo
                    }
                ]
            },

            {
                id: 3,
                name: "React Playground",
                link: "https://drb0r1s-react-playground.netlify.app/",
                images: [
                    reactPlayground1, reactPlayground2, reactPlayground3,
                    reactPlayground4
                ],
                descriptionAbout: "<span>React Playground</span> is a website created using <span>React</span> (Functional Components), <span>SASS</span>, <span>Bootstrap</span> and <span>JavaScript</span>. This site contains <span>6 games</span>. List of games: Guess The Number, Dice, Typing Speed Test, Drawing, Dino, Snake.",
                descriptionImages: [
                    {
                        id: 1,
                        name: "React Functional Components",
                        logo: reactLogo
                    },

                    {
                        id: 2,
                        name: "SASS (Syntactically Awesome Style Sheets)",
                        logo: sassLogo
                    },

                    {
                        id: 3,
                        name: "Bootstrap",
                        logo: bootstrapLogo
                    },

                    {
                        id: 4,
                        name: "JavaScript",
                        logo: javaScriptLogo
                    }
                ]
            }
        ]
    },

    {
        id: 2,
        title: "web apps",
        icon: projectWebapps,
        projects: [
            {
                id: 1,
                name: "React Calculator",
                link: "https://drb0r1s-react-calculator.netlify.app/",
                images: [
                    reactCalculator1, reactCalculator2
                ],
                descriptionAbout: "<span>React Calculator</span> is a web application made using <span>React</span> (Functional Components), <span>SASS</span>, <span>Bootstrap</span> and <span>JavaScript</span>. The application provides the ability to calculate <span>basic</span> (+, -, *, /), but also <span>complex</span> arithmetic operations and functions (sin, cos, tan, ctg, log...).",
                descriptionImages: [
                    {
                        id: 1,
                        name: "React Functional Components",
                        logo: reactLogo
                    },

                    {
                        id: 2,
                        name: "SASS (Syntactically Awesome Style Sheets)",
                        logo: sassLogo
                    },

                    {
                        id: 3,
                        name: "Bootstrap",
                        logo: bootstrapLogo
                    },

                    {
                        id: 4,
                        name: "JavaScript",
                        logo: javaScriptLogo
                    }
                ]
            },

            {
                id: 2,
                name: "Weather App",
                link: "https://drb0r1s-weather-app.netlify.app/",
                images: [
                    weatherApp1, weatherApp2
                ],
                descriptionAbout: "<span>Weather App</span> is a web application created using <span>React</span> (Functional Components), <span>SASS</span>, <span>JavaScript</span> and <span>OpenWeatherMap API</span>. The application is intended for displaying the <span>weather forecast</span> for any location. The prognosis is divided into <span>5 days every 3 hours</span>. The application provides the ability to display a <span>direct weather forecast</span>, as long as the use of the user's location is allowed.",
                descriptionImages: [
                    {
                        id: 1,
                        name: "React Functional Components",
                        logo: reactLogo
                    },

                    {
                        id: 2,
                        name: "SASS (Syntactically Awesome Style Sheets)",
                        logo: sassLogo
                    },

                    {
                        id: 3,
                        name: "JavaScript",
                        logo: javaScriptLogo
                    },

                    {
                        id: 4,
                        name: "OpenWeatherMap",
                        logo: weatherAPI
                    }
                ]
            },

            {
                id: 3,
                name: "My Grades",
                link: "https://drb0r1s-my-grades.netlify.app/",
                images: [
                    myGrades1, myGrades2, myGrades3
                ],
                descriptionAbout: "<span>My Grades</span> is a web application created using <span>React</span> (Functional Components), <span>CSS</span> and <span>JavaScript</span>. This application is used for <span>recording grades</span>, <span>calculating the average grade</span> as well as <span>writing schedules</span>.",
                descriptionImages: [
                    {
                        id: 1,
                        name: "React Functional Components",
                        logo: reactLogo
                    },

                    {
                        id: 2,
                        name: "CSS (Cascading Style Sheets)",
                        logo: cssLogo
                    },

                    {
                        id: 3,
                        name: "JavaScript",
                        logo: javaScriptLogo
                    }
                ]
            }
        ]
    },

    {
        id: 3,
        title: "hooks",
        icon: projectHooks,
        projects: [
            {
                id: 1,
                name: "useResponsiveObj",
                link: "https://github.com/drb0r1s/useResponsiveObj",
                images: [
                    useRO
                ],
                descriptionAbout: "<span>useResponsiveObj</span> is a custom <span>React hook</span> designed to make it easier to use <span>responsive</span> and <span>determine breakpoints</span> in React using the <span>Responsive object</span>.",
                descriptionImages: [
                    {
                        id: 1,
                        name: "React",
                        logo: reactLogo
                    },

                    {
                        id: 2,
                        name: "JavaScript",
                        logo: javaScriptLogo
                    }
                ]
            }
        ]
    }
];

export const contactData = [
    {
        id: 1,
        name: "email",
        icon: contactEmail,
        username: "Boris",
        contact: "drb0r1sdev@gmail.com",
        avatar: contactB,
        link: "https://boris.ml"
    },

    {
        id: 2,
        name: "github",
        icon: contactGithub,
        username: "Boris",
        contact: "drb0r1s",
        avatar: contactB,
        link: "https://github.com/drb0r1s"
    },

    {
        id: 3,
        name: "discord",
        icon: contactDiscord,
        username: "boris",
        contact: "#1171",
        avatar: contactB,
        link: "https://discord.com/users/598129893397495823"
    },

    {
        id: 4,
        name: "settings",
        icon: contactSettings,
        special: true
    }
];

export const contactDataBg = [aboutBg, mainBg, projectsBg];
export const contactDataMode = ["light", "dark"];

export const seeMoreData = [
    {
        id: 1,
        name: "boris.ml",
        icon: bWhiteLogo,
        path: "https://boris.ml"
    },
    
    {
        id: 2,
        name: "github",
        icon: contactGithub,
        path: "https://github.com/drb0r1s"
    }
];