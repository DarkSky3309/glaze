import React, {createRef, useEffect} from 'react';
import './../../scss/home.css'

const Home = () => {

    return (
        <div className={"home__content"}>
            <div className={"left fromRight"} >
                <h1 className={"title"}>G<span >l</span>aze</h1>
                <img src="src/assets/home/bcg4.png" alt="design" className="image"/>
                <img src="src/assets/home/bcg1.png" alt="design" className="image"/>
            </div>
            <div className={"right fromLeft"} >
                <img src="src/assets/home/bcg2.png" alt="design" className="image"/>
                <span className={"title subtitle"}>De <br/> signer</span>
                <img src="src/assets/home/bcg3.png" alt="design" className="image"/>
                <span className={"tablet-title title"}>De <br/> signer</span>
                <div className="signer title">Signer</div>
            </div>
            <div className="bcg-circle bottom-left fromRight" ></div>
            <div className="de title">De</div>
        </div>
    );

};

export default Home;