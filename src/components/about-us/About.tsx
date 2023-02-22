import React, {createRef, useEffect} from 'react';
import AboutItemComponent from "./AboutItemComponent";
import "./../../scss/about-us.css"

const store = [
    {
        name: "Olga",
        image: "src/assets/about/olga.png",
        profession: "Company director",
        description: "Will tell you everything about our company and help you choose the type of service for your needs and solve any problem with the project.",
        position: "left",
        id: 1,
    },
    {
        name: "Eva",
        image: "src/assets/about/eva.png",
        profession: "Chief designer",
        description: "It is Eve who will walk the path with you from your idea and dream \n" +
            "to the last nail in your house. She will help you decide on the style and colors, as well as always has \n" +
            "a lot of ideas in her head to improve your space.",
        position: "right",
        id: 2,
    },
    {
        name: "Mary",
        image: "src/assets/about/mary.png",
        profession: "Designer",
        description: "It will make your dreams come true and fill your home with new colors so that it sparkles for you every day.",
        position: "left",
        id: 3,
    },
    {
        name: "Jacob",
        image: "src/assets/about/jacob.png",
        profession: "Engineer",
        description: "Our engineer, who will be happy \n" +
            "to tell you how to do the wiring correctly and lead all communications to the created design. Answer any technical question and find the best solution\n" +
            "to your problem",
        position: "right",
        id: 4,
    }

]

const About = () => {
    const firsElement = createRef<HTMLDivElement>(),
        secondElement = createRef<HTMLDivElement>(),
        thirdElement = createRef<HTMLDivElement>(),
        fourthElement = createRef<HTMLDivElement>(),
        title = createRef<HTMLHeadingElement>()
    let id: number | undefined = undefined

    useEffect(() => {
        InitialAnimation()
    }, [])

    function InitialAnimation() {
        let startPosition = 500,
            titleStartPosition = 300

        clearInterval(id);
        id = setInterval(frame);


        function frame() {
            if (startPosition === 0) {
                clearInterval(id);
            } else if (firsElement.current && secondElement.current && thirdElement.current && fourthElement.current && title.current) {
                startPosition -= 5;
                titleStartPosition -= 2.8
                firsElement.current.style.left = startPosition + "px"
                secondElement.current.style.left = -startPosition + "px"
                thirdElement.current.style.left = startPosition + "px"
                fourthElement.current.style.left = -startPosition + "px"
                title.current.style.bottom = titleStartPosition + "px"
            }
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