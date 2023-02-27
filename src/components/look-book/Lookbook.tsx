import React from 'react';
import "./../../scss/lookbook.css"
import DesignSlider from "./DesignSlider";

const Lookbook = () => {

    return (
        <div className={"lookBook"}>
            <div className={"slider__wrapper"}>
                <DesignSlider/>
            </div>
        </div>
    );
};

export default Lookbook;