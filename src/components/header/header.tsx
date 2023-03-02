import React, {createRef, useEffect, useRef, useState} from 'react';
import "../../scss/header.css"
import {Link, useLocation} from "react-router-dom";

const Header = () => {
    const [visibility, setVisibility] = useState(false)
    let logo = createRef<HTMLHeadingElement>()
    let menu = createRef<HTMLDivElement>()
    let id: number | undefined = undefined
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () =>
            window.removeEventListener("resize", updateDimensions);
    }, [])
    const updateDimensions = () => {
        const width = window.innerWidth
        setWidth(width)
    }
    function showMenu() {
        setVisibility(!visibility)
        if(!visibility && width < 550){
            openMenuAnimation()
        } else if (width < 550){
            closeMenuAnimation()
        }

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
    const square = useRef() as React.MutableRefObject<HTMLDivElement>
    const circle = useRef() as React.MutableRefObject<HTMLDivElement>
    const url = useLocation();

    return (
        <header className={"header"}>
            <div className={`circle fromLeft ${url.pathname !== "/home" ? "invisible" : "visible"}`} ref={circle}></div>
            <h2 className={"logo fromRight"} ref={logo}>Glaze Designer</h2>
            <div className="menu__desktop fromTop">
                <ul>
                    <li><Link to={"/services"} className={url.pathname === "/services" ? "active" : " "}>Services</Link></li>
                    <li><Link to={"/look-book"} className={url.pathname === "/look-book" ? "active" : " "}>LookBook</Link></li>
                    <li><Link to={"/home"} className={`logo__desktop`}>Glaze Designer</Link></li>
                    <li><Link to={"/about-us"} className={url.pathname === "/about-us" ? "active" : " "}>About Us</Link></li>
                    <li><Link to={"/contact"} className={url.pathname === "/contact" ? "active" : " "}>Contact</Link></li>
                </ul>
            </div>
            <div className={"menu fromTop"} ref={menu}>
                <i onClick={() => showMenu()} className="ri-menu-line"/>
                {visibility && <div className={"menu__links"} id={"myLinks"}>
                    <ul>
                        <li onClick={() => {setVisibility(false); width < 550 ? closeMenuAnimation() : ""}} className={"menu-item"}><Link to="/home">Home</Link></li>
                        <li onClick={() => {setVisibility(false); width < 550 ? closeMenuAnimation() : ""}} className={"menu-item"}><Link to="/services">Services</Link></li>
                        <li onClick={() => {setVisibility(false); width < 550 ? closeMenuAnimation() : ""}} className={"menu-item"}><Link to="/look-book">LookBook</Link></li>
                        <li onClick={() => {setVisibility(false); width < 550 ? closeMenuAnimation() : ""}} className={"menu-item"}><Link to="/about-us">About Us</Link></li>
                        <li onClick={() => {setVisibility(false); width < 550 ? closeMenuAnimation() : ""}} className={"menu-item"}><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>}
            </div>
            <div className={`animateObject fromBottomTitle visible ${url.pathname !== "/home" ? "invisible" : "visible"}`} ref={square}></div>
        </header>
    );
};

export default Header;