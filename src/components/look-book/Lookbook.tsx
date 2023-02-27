import React from 'react';
import "./../../scss/lookbook.css"
import DesignSlider from "./DesignSlider";

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
    return (
        <div className={"lookBook"}>
            <div className={"slider__wrapper"}>
                <DesignSlider slides={slides}/>
            </div>
        </div>
    );
};

export default Lookbook;