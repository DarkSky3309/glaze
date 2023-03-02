import React, {createRef, useEffect} from 'react';
import AboutItemComponent from "./AboutItemComponent";
import "./../../scss/about-us.css"

const About = () => {
    return (
        <div className={"about__content"}>
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
        </div>
    );
};

export default About;