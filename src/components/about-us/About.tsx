import React, {createRef, useEffect, useState} from 'react';
import AboutItemComponent from "./AboutItemComponent";
import "./../../scss/about-us.css"

const About = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () =>
            window.removeEventListener("resize", updateDimensions);
    }, [])
    const updateDimensions = () => {
        const width = window.innerWidth
        setWidth(width)
    }

    function isDesk() {
        return width > 1024;
    }

    return (<div className={"about__content"}>
            {!isDesk() && (
                <>
                    <div className="about__title">
                        <h1 className={"title fromBottom"}>About Us</h1>
                        <h1 className={"title__desktop"}>About</h1>
                    </div>
                    <div className="about__main">
                        <div className="left-side fromLeft">
                            <AboutItemComponent name={"Olga"}
                                                image={"src/assets/about/olga.png"}
                                                profession={"Company director"}
                                                description={"Will tell you everything about \n" +
                                                    "our company and help you choose \n" +
                                                    "the type of service for your needs and solve any problem with the project."}
                                                position={"left"}/>
                        </div>
                        <span className={"title__desktop"}>Us</span>
                        <div className="right-side fromRight">
                            <AboutItemComponent name={"Eva"}
                                                image={"src/assets/about/eva.png"}
                                                profession={"Chief designer"}
                                                description={"It is Eve who will walk the path with you from your idea and dream \n" +
                                                    "to the last nail in your house. She will help you decide on the style and colors, as well as always has \n" +
                                                    "a lot of ideas in her head to improve your space."}
                                                position={"right"}/>
                        </div>
                        <div className="left-side fromLeft">
                            <AboutItemComponent name={"Mary"}
                                                image={"src/assets/about/mary.png"}
                                                profession={"Designer"}
                                                description={"It will make your dreams come true and fill your home with new colors so that it sparkles for you every day."}
                                                position={"left"}/>
                        </div>
                        <div className="right-side fromRight">
                            <AboutItemComponent name={"Jacob"}
                                                image={"src/assets/about/jacob.png"}
                                                profession={"Engineer"}
                                                description={"Our engineer, who will be happy \n" +
                                                    "to tell you how to do the wiring correctly and lead all communications to the created design. Answer any technical question and find the best solution\n" +
                                                    "to your problem"}
                                                position={"right"}/>
                        </div>
                    </div>
                </>)
            }
            {isDesk() && (<div className={"about"}>
                <h1 className="title title__desktop fromLeft">About</h1>
                <div className="about-desktop_content main__title fromRight">
                    <img src="src/assets/about/olga.png" alt="our specialist" className={"mb"}/>
                    <div className="about__main-item-info-name">
                        <h3>Olga</h3>
                        <h4>Company
                            director</h4>
                    </div>
                    <p className="about_main-item-description">
                        Will tell you everything about our company and help you choose the type of service for your
                        needs and solve any problem with the project.
                    </p>
                </div>

                <div className="about-desktop_content fromLeft">
                    <img src="src/assets/about/eva.png" alt="our specialist" className={"mb"}/>
                    <div className="about__main-item-info-name">
                        <h3>Eva</h3>
                        <h4>Chief Designer</h4>
                    </div>
                    <p className="about_main-item-description">
                        It is Eve who will walk the path with you from your idea and dream to the last nail in your
                        house. She will help you decide on the style and colors, as well as always has a lot of ideas in
                        her head to improve your space.
                    </p>
                </div>
                <span className="subtitle title title__desktop fromRight">US</span>

                <div className="about-desktop_content fromRight">
                    <img src="src/assets/about/mary.png" alt="our specialist" className={"mb"}/>
                    <div className="about__main-item-info-name">
                        <h3>Mary</h3>
                        <h4>Designer</h4>
                    </div>
                    <p className="about_main-item-description">
                        It will make your dreams come true and fill your home with new colors so that it sparkles for
                        you every day.
                    </p>
                </div>
                <div className="about-desktop_content fromLeft">
                    <img src="src/assets/about/jacob.png" alt="our specialist" className={"mb"}/>
                    <div className="about__main-item-info-name">
                        <h3>Jacob</h3>
                        <h4>Engineer</h4>
                    </div>
                    <p className="about_main-item-description">
                        Our engineer, who will be happy to tell you how to do the wiring correctly and lead all
                        communications to the created design. Answer any technical question and find the best solution
                        to your problem
                    </p>
                </div>

            </div>)}

        </div>
    );
};

export default About;