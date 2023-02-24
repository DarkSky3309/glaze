import React, {createRef, useEffect, useState} from 'react';
import "../../scss/header.css"
import {Link} from "react-router-dom";

const Header = () => {
    const [visibility, setVisibility] = useState(false)
    let logo = createRef<HTMLHeadingElement>()
    let menu = createRef<HTMLDivElement>()
    let id: number | undefined = undefined

    function showMenu() {
        setVisibility(!visibility)
        !visibility ?
            openMenuAnimation() :
            closeMenuAnimation()
    }

    function closeMenuAnimation() {
        let elem = logo.current
        let left = 10
        clearInterval(id);
        id = setInterval(frame);

        function frame() {
            if (left === 80)
                clearInterval(id);
            else {
                left += 5
                if (elem)
                    elem.style.left = left + "px"
            }
        }
    }

    function openMenuAnimation() {
        let elem = logo.current
        let left = 80
        clearInterval(id);
        id = setInterval(frame);

        function frame() {
            if (left === 10)
                clearInterval(id);
            else {
                left -= 5
                if (elem)
                    elem.style.left = left + "px"
            }
        }
    }

    return (
        <header className={"header"}>
            <div className={"circle fromLeft"}></div>
            <h2 className={"logo fromRight"} ref={logo}>Glaze Designer</h2>
            <div className={"menu fromRight"} ref={menu}>
                <i onClick={() => showMenu()} className="ri-menu-line"/>
                {visibility && <div className={"menu__links"} id={"myLinks"}>
                    <ul>
                        <li onClick={() => {setVisibility(false); closeMenuAnimation()}} className={"menu-item"}><Link to="/home">Home</Link></li>
                        <li onClick={() => {setVisibility(false); closeMenuAnimation()}} className={"menu-item"}><Link to="/services">Services</Link></li>
                        <li onClick={() => {setVisibility(false); closeMenuAnimation()}} className={"menu-item"}><Link to="/look-book">LookBook</Link></li>
                        <li onClick={() => {setVisibility(false); closeMenuAnimation()}} className={"menu-item"}><Link to="/about-us">About Us</Link></li>
                        <li onClick={() => {setVisibility(false); closeMenuAnimation()}} className={"menu-item"}><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>}
            </div>
            <div className={"animateObject fromBottomTitle"}></div>
        </header>
    );
};

export default Header;