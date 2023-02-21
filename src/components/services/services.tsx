import React, {createRef, useEffect} from 'react';
import "./../../scss/services.css"

const Services = () => {
    const left = createRef<HTMLDivElement>()
    const last = createRef<HTMLDivElement>()
    const title = createRef<HTMLHeadingElement>()
    const right = createRef<HTMLDivElement>()
    let id: number | undefined = undefined

    useEffect(() => initialAnimation, [])
    function initialAnimation(){
        const animateLeft = left.current,
            animateRight = right.current,
            animateTitle = title.current,
            animateLast = last.current;
        let currentPositionLeft = 450,
            currentPositionRight= 450,
            currentPositionTitle = -1000,
            currentPositionLast = 450;
        clearInterval(id);
        id = setInterval(frame);
        function frame() {
            if (currentPositionLeft === 0 && currentPositionRight === 0) {
                clearInterval(id);
            } else {
                currentPositionRight -= 5;
                currentPositionLeft -= 5;
                currentPositionLast -= 5;
                currentPositionTitle += 11;
                if (animateLeft && animateRight && animateLast && animateTitle){
                    animateLeft.style.left = currentPositionLeft + "px"
                    animateRight.style.right = currentPositionRight + "px"
                    animateLast.style.left = currentPositionLast  + "px"
                    animateTitle.style.bottom = currentPositionTitle + "px"
                }
            }
        }
    }

    return (
        <div className={"services__content"}>
            <div className="services__title">
                <h1 className={"title"} ref={title}>Servic<span className="aftercircle">e</span>s</h1>
            </div>
            <div className="services__main">
                <div className="services__main-item" ref={left}>
                    <h3 className="first-item-title">From scratch</h3>
                    <img src="src/assets/service/service1.png" alt="example of design"/>
                    <p>Full preparation of communications for design. Accompaniment from white walls to modern design is all included in the service from scratch.</p>
                </div>
                <div className="services__main-item" ref={right}>
                    <img src="src/assets/service/service2.png" alt="example of design"/>
                    <h3 className="second-item-title">Replacement</h3>
                    <p>Full or partial dismantling of the existing design and replacing it with a new, fresh, up-to-date interior design.</p>
                </div>
                <div className="services__main-item" ref={last}>
                    <h3 className="third-item-title">Correction</h3>
                    <img src="src/assets/service/service3.png" alt="example of design"/>
                    <p>Adding detail to an existing design makes it look fresher, more relevant, and more attractive with minimal change and expense.</p>
                </div>
                </div>
        </div>
    );
};

export default Services;