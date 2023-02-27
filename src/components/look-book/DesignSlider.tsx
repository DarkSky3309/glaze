import React, {FC, MutableRefObject, useEffect, useRef, useState} from 'react';
import {motion} from "framer-motion";
import images from "./images";
const DesignSlider = () => {
    const [width, setWidth] = useState(0);
    const carousel = useRef() as React.MutableRefObject<HTMLDivElement>

    useEffect(() => {setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, [])

    return (
        <div className={"slider"}>
            <motion.div ref={carousel} className={"carousel"} whileTap={{cursor: "grabbing"}}>
                <motion.div drag={"x"} dragConstraints={{right:0, left: -width}} className={"carousel__inner"}>
                    {images.map(image => {
                        return(
                            <motion.div key={image} className={"slide"}><img src={image} alt={"design"}/></motion.div>
                        )})
                    }
                </motion.div>
            </motion.div>
        </div>
    );
};

export default DesignSlider;