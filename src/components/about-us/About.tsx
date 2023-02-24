import React, {createRef, useEffect} from 'react';
import AboutItemComponent from "./AboutItemComponent";
import "./../../scss/about-us.css"

const About = () => {
    const firsElement = createRef<HTMLDivElement>(),
        secondElement = createRef<HTMLDivElement>(),
        thirdElement = createRef<HTMLDivElement>(),
        fourthElement = createRef<HTMLDivElement>(),
        title = createRef<HTMLHeadingElement>(),
        speed: number = 7;
    useEffect(() => {
        InitialAnimation()
    }, [])

    const animationMoveFromRight = [
        {transform: "translateX(500px)"},
        {transform: "translateX(0)"}
    ]
    const animationMoveFromLeft = [
        {transform: "translateX(-500px)"},
        {transform: "translateX(0)"}
    ]
    const animationMoveFromTop = [
        {transform: "translateY(800px)"},
        {transform: "translateY(0)"}
    ]
    const animationDuration = {
        duration: (speed * 100),
        iterations: 1,
    };

    function InitialAnimation() {
        if (firsElement.current && secondElement.current && thirdElement.current && fourthElement.current && title.current) {
            firsElement.current.animate(animationMoveFromLeft, animationDuration)
            secondElement.current.animate(animationMoveFromRight, animationDuration)
            thirdElement.current.animate(animationMoveFromLeft, animationDuration)
            fourthElement.current.animate(animationMoveFromRight, animationDuration)
            title.current.animate(animationMoveFromTop, animationDuration)
        }

    }

    return (
        <div className={"about__content"}>
            <div className="about__title">
                <h1 className={"title"} ref={title}>About Us</h1>
            </div>
            <div className="about__main">
                <div className="left-side" ref={firsElement}>
                    <AboutItemComponent name={"Olga"}
                                        image={"src/assets/about/olga.png"}
                                        profession={"Company director"}
                                        description={"Will tell you everything about \n" +
                                            "our company and help you choose \n" +
                                            "the type of service for your needs and solve any problem with the project."}
                                        position={"left"}/>
                </div>
                <div className="right-side" ref={secondElement}>
                    <AboutItemComponent name={"Eva"}
                                        image={"src/assets/about/eva.png"}
                                        profession={"Chief designer"}
                                        description={"It is Eve who will walk the path with you from your idea and dream \n" +
                                            "to the last nail in your house. She will help you decide on the style and colors, as well as always has \n" +
                                            "a lot of ideas in her head to improve your space."}
                                        position={"right"}/>
                </div>
                <div className="left-side" ref={thirdElement}>
                    <AboutItemComponent name={"Mary"}
                                        image={"src/assets/about/mary.png"}
                                        profession={"Designer"}
                                        description={"It will make your dreams come true and fill your home with new colors so that it sparkles for you every day."}
                                        position={"left"}/>
                </div>
                <div className="right-side" ref={fourthElement}>
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