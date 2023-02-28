import React, {useEffect, useState} from 'react';
import "./../../scss/lookbook.css"
import DesignSlider from "./DesignSlider";
import Review from "./Review";

const Lookbook = () => {
    const slides = [
        {
            term: "Desig. in 1 m.",
            area: "56 m2",
            price: "1 m2 - 17$"
        },
        {
            term: "Desig. in 3 weeks",
            area: "32 m2",
            price: "1 m2 - 19$"
        },
        {
            term: "Desig. in 2 weeks",
            area: "27 m2",
            price: "1 m2 - 15$"
        },
        {
            term: "Desig. in 6 weeks",
            area: "98 m2",
            price: "1 m2 - 20$"
        },
        {
            term: "Desig. in 5 weeks",
            area: "48 m2",
            price: "1 m2 - 17$"
        },
        {
            term: "Desig. in 2 weeks",
            area: "25 m2",
            price: "1 m2 - 20$"
        }]
    const reviews = [
        {
            img: "src/assets/loockBook/face_3.png",
            name: "Anna",
            review: "I was pleasantly surprised by the price and the quality of the work. Fast, high quality and beautiful. At the beginning, I did not know what I wanted, but the team helped me. I am delighted with the result.",
            id: 0
        }, {
            img: "src/assets/loockBook/face.png",
            name: "Oliver",
            review: "My wife and I ordered a design here for our daughter in her rooms. To say that my daughter was happy with the result is an understatement. My daughter won't leave the room anymore.",
            id: 1
        }, {
            img: "src/assets/loockBook/face_3.png",
            name: "Diana",
            review: "At first there were some misunderstandings with \n" +
                "the team, but we quickly resolved them and worked out very fruitfully. Satisfied with the result.",
            id: 2
        }, {
            img: "src/assets/loockBook/face_6.png",
            name: "Tom",
            review: "I really enjoyed working with the designers of this firm. They answer any questions and with my captiousness withstood all my edits. And the result is simply amazing.",
            id: 3
        }, {
            img: "src/assets/loockBook/face.png",
            name: "Joi",
            review: "Low prices I was completely satisfied with the design. Real professionals work.",
            id: 4
        }, {
            img: "src/assets/loockBook/face_4.png",
            name: "Victoria",
            review: "I did not expect to get such \n" +
                "a fast and high-quality result. I really liked Olga, who manages the company. All the questions and minor troubles that arose were easily resolved with her.",
            id: 5
        }]
    const [width, setWidth] = useState(window.innerWidth);
    const updateDimensions = () => {
        const width = window.innerWidth
        setWidth(width)
    }
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () =>
            window.removeEventListener("resize", updateDimensions);
    }, [])
    function isTablet(): boolean {
        if (width > 500)
            return true
        return false;
    }
    return (
        <div className={"lookBook"}>
            <h1 className={"title"}>LookBook</h1>
            <div className={"slider__wrapper"}>
                <DesignSlider slides={slides} isTablet={isTablet}/>
            </div>
            <Review reviews={reviews} isTablet={isTablet}/>
            <div className="square fromLeft"></div>
        </div>
    );
};

export default Lookbook;