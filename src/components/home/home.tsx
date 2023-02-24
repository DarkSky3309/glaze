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
    const speed: number = 7;



    return (
        <div className={"home__content"}>
            <div className={"left fromRight"} ref={leftSide}>
                <h1 className={"title"}>G<span ref={titleRef}>l</span>aze</h1>
                <img src="src/assets/home/bcg4.png" alt="design" className="image"/>
                <img src="src/assets/home/bcg1.png" alt="design" className="image"/>
            </div>
            <div className={"right fromLeft"} ref={rightSide}>
                <img src="src/assets/home/bcg2.png" alt="design" className="image"/>
                <span className={"title subtitle"}>De <br/> signer</span>
                <img src="src/assets/home/bcg3.png" alt="design" className="image"/>
            </div>
            <div className="bcg-circle bottom-left fromRight" ref={bottomCircle}></div>
        </div>
    );

};

export default Home;