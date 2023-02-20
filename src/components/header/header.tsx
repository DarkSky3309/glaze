import React, {createRef, useEffect, useState} from 'react';
import "../../scss/header.css"

const Header = () => {
    const [visibility, setVisibility] = useState(false)
    let logo = createRef<HTMLHeadingElement>()
    let menu = createRef<HTMLDivElement>()
    let animateObject = createRef<HTMLDivElement>()
    let circle = createRef<HTMLDivElement>()
    let id: number | undefined = undefined
    let id2: number | undefined = undefined
    const speed: number = 8

    function initAnimation() {
        let animElementLogo = logo.current
        let animElementMenu = menu.current
        let animElementCircle = circle.current
        let currentMenuPosition = -270
        let currentCirclePosition = -182
        let currentLogoPosition = 350
        clearInterval(id);
        id = setInterval(frame, speed);
        function frame() {
            if (currentLogoPosition === 80 && currentMenuPosition === 0) {
                clearInterval(id)
            } else {
                currentLogoPosition -= 5
                currentMenuPosition += 5
                currentCirclePosition += 2
                if (animElementLogo && animElementMenu && animElementCircle){
                    animElementCircle.style.left = currentCirclePosition + "px"
                    animElementLogo.style.left = currentLogoPosition + "px"
                    animElementMenu.style.right = currentMenuPosition + "px"
                }
            }
        }
    }

    function animatingObject(){
        let animObject = animateObject.current
        let currentPosition = 600
        clearInterval(id2);
        id2 = setInterval(frame, 7);
        function frame(){
            if (currentPosition <= 0){
                clearInterval(id2)
                animObject?.remove()
                menu.current?.classList.add("menu-bcg")
            }
            currentPosition -=10;
            if (animObject)
                animObject.style.top = currentPosition + "px"
        }
    }

    useEffect(() => {initAnimation(); animatingObject()}, [])

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
            <div className={"circle"} ref={circle}></div>
            <h2 className={"logo"} ref={logo}>Glaze Designer</h2>
            <div className={"menu"} ref={menu}>
                <i onClick={() => showMenu()} className="ri-menu-line"/>
                {visibility && <div className={"menu__links"} id={"myLinks"}>
                    <ul>
                        <li className={"menu-item"}><a href="src/components#">Services</a></li>
                        <li className={"menu-item"}><a href="src/components#">LookBook</a></li>
                        <li className={"menu-item"}><a href="src/components#">About Us</a></li>
                        <li className={"menu-item"}><a href="src/components#">Contact</a></li>
                    </ul>
                </div>}
            </div>
            <div className={"animateObject"} ref={animateObject}></div>
        </header>
    );
};

export default Header;