import React, {createRef, useEffect} from 'react';
import './../../scss/home.css'

const Home = () => {
    let titleRef = createRef<HTMLSpanElement>()
    let titleCircle = createRef<HTMLDivElement>()
    let signRef = createRef<HTMLSpanElement>()
    let signCircle = createRef<HTMLDivElement>()
    let leftSide = createRef<HTMLDivElement>()
    let rightSide = createRef<HTMLDivElement>()
    let bottomCircle = createRef<HTMLDivElement>()

    let id: number | undefined = undefined
    let id2: number | undefined = undefined
    const speed: number = 7;

    useEffect(() => {addCircle(); initialAnimation()}, [])

    function addCircle() {
        let posSignTop = 0
        let posSignLeft = titleRef.current?.getBoundingClientRect().left
        let posTitle = titleRef.current
        let posSign = signRef.current
        if (signCircle.current && posSign) {
            posSignTop = posSign.getBoundingClientRect().top - document.body.getBoundingClientRect().top
            signCircle.current.style.left = posSignLeft + "px"
            signCircle.current.style.top = posSignTop / 1.4 + "px"
        }

    }

    function initialAnimation() {
        const animateLeftSideElement = leftSide.current,
            animateRightSideElement = rightSide.current,
            animateTitleCircle = titleCircle.current,
            animateBottomCircle = bottomCircle.current;
        let currentPositionLeftSide = 300,
            currentPositionRightSide = 300,
            currentPositionTitleCircle = 0,
            currentPositionBottomCircle = 200;
        clearInterval(id);
        id = setInterval(frame, speed);

        function frame() {
            if (currentPositionLeftSide === 25 && currentPositionRightSide === 25) {
                clearInterval(id);
            } else {
                currentPositionRightSide -= 5;
                currentPositionLeftSide -= 5;
                currentPositionBottomCircle -= 5
                if (animateTitleCircle && animateLeftSideElement && animateRightSideElement && animateBottomCircle){
                    animateLeftSideElement.style.left = currentPositionLeftSide + "px"
                    animateRightSideElement.style.right = currentPositionLeftSide + "px"
                    animateBottomCircle.style.left = currentPositionBottomCircle + "px"
                    animateTitleCircle.style.left = currentPositionLeftSide + "px"
                }
            }
        }
    }

    return (
        <div className={"home__content"}>
            <div className={"left"} ref={leftSide}>
                <h1 className={"title"}>G<span ref={titleRef}>l</span>aze</h1>
                <img src="src/assets/home/bcg4.png" alt="design" className="image"/>
                <img src="src/assets/home/bcg1.png" alt="design" className="image"/>
            </div>
            <div className={"right"} ref={rightSide}>
                <img src="src/assets/home/bcg2.png" alt="design" className="image"/>
                <span className={"title subtitle"}>De <br/> sign<span ref={signRef} className={"e"}>e</span>r</span>
                <img src="src/assets/home/bcg3.png" alt="design" className="image"/>
                <div className="bcg-circle signer" ref={signCircle}></div>

            </div>
            <div>
                <div className="bcg-circle bottom-left" ref={bottomCircle}></div>
                <div className="bcg-circle Glaze" ref={titleCircle}></div>
            </div>
        </div>
    );

};

export default Home;