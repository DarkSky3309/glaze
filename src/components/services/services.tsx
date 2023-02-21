import React from 'react';
import "./../../scss/services.css"

const a = () => {
    return (
        <div className={"services__content"}>
            <div className="services__title">
                <h1 className={"title"}>Servic<span className="aftercircle">e</span>s</h1>
            </div>
            <div className="services__main">
                <div className="services__main-item left-item">
                    <h3 className="first-item-title">From scratch</h3>
                    <img src="src/assets/service/service1.png" alt="example of design"/>
                    <p>Full preparation of communications for design. Accompaniment from white walls to modern design is all included in the service from scratch.</p>
                </div>
                <div className="services__main-item right-item">
                    <img src="src/assets/service/service2.png" alt="example of design"/>
                    <h3 className="second-item-title">Replacement</h3>
                    <p>Full or partial dismantling of the existing design and replacing it with a new, fresh, up-to-date interior design.</p>
                </div>
                <div className="services__main-item left-item">
                    <h3 className="third-item-title">Correction</h3>
                    <img src="src/assets/service/service3.png" alt="example of design"/>
                    <p>Adding detail to an existing design makes it look fresher, more relevant, and more attractive with minimal change and expense.</p>
                </div>
                </div>
        </div>
    );
};

export default a;