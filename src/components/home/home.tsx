import React, {createRef, useEffect} from 'react';
import './../../scss/home.css'

const Home = () => {
    let titleRef = createRef<HTMLSpanElement>()
    let titleCircle = createRef<HTMLDivElement>()
    let signRef = createRef<HTMLSpanElement>()
    let signCircle = createRef<HTMLDivElement>()
    useEffect(() => addCircle(), [])

    function addCircle() {
        let posSignTop = 0
        let posSignLeft = titleRef.current?.getBoundingClientRect().left
        let posTitle = titleRef.current
        let posSign = signRef.current
        if (signCircle.current && posSign) {
            posSignTop = posSign.getBoundingClientRect().top - document.body.getBoundingClientRect().top
            signCircle.current.style.left = posSignLeft + "px"
            signCircle.current.style.top = posSignTop/1.4 + "px"
        }
        if (titleCircle.current && posTitle) {
            titleCircle.current.style.left = posTitle.style.left
            titleCircle.current.style.top = posTitle.style.top
        }
    }

    return (
        <div className={"home__content"}>
            <div className={"left"}>
                <h1 className={"title"}>G<span ref={titleRef}>l</span>aze</h1>
                <img src="src/assets/home/bcg4.png" alt="design" className="image"/>
                <img src="src/assets/home/bcg1.png" alt="design" className="image"/>
            </div>
            <div className={"right"}>
                <img src="src/assets/home/bcg2.png" alt="design" className="image"/>
                <span className={"title subtitle"}>De <br/> sign<span ref={signRef} className={"e"}>e</span>r</span>
                <img src="src/assets/home/bcg3.png" alt="design" className="image"/>
                <div className="bcg-circle signer" ref={signCircle}></div>

            </div>
            <div>
                <div className="bcg-circle bottom-left"></div>
                <div className="bcg-circle Glaze" ref={titleCircle}></div>
            </div>
        </div>
    );

};

export default Home;