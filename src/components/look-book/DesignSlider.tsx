import React, {FC, MutableRefObject, useEffect, useRef, useState} from 'react';
import {motion} from "framer-motion";
import images from "./images";

interface SliderProps{
    slides: {term: string, area: string, price: string}[]
}

const DesignSlider:FC<SliderProps> = ({slides}) => {
    const [width, setWidth] = useState(0);
    const carousel = useRef() as React.MutableRefObject<HTMLDivElement>

    useEffect(() => {setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, [])

    return (
        <div className={"slider fromRight"}>
            <motion.div ref={carousel} className={"carousel"} whileTap={{cursor: "grabbing"}}>
                <motion.div drag={"x"} dragConstraints={{right:0, left: -width}} className={"carousel__inner"}>
                    {images.map((image, index) => {
                        return(
                            <motion.div key={image} className={"slide"}>
                                <img src={image} alt={"design"}/>
                                <div className={"slide-info fromLeft"}>{slides[index].term}</div>
                                <div className={"slide-info  fromLeft"}>{slides[index].area}</div>
                                <div className={"slide-info  fromLeft"}>{slides[index].price}</div>
                            </motion.div>
                        )})
                    }
                </motion.div>
            </motion.div>
        </div>
    );
};

export default DesignSlider;