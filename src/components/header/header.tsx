import React, {createRef, useState} from 'react';
import "../../scss/header.css"

const Header = () => {
    const [visibility, setVisibility] = useState(false)
    let logo = createRef<HTMLHeadingElement>()
    let id: number | undefined = undefined
    let animation = createRef<HTMLDivElement>()

    function initAnimation() {
        let animElement = animation.current
        let curentPosition = -100
        clearInterval(id);
        id = setInterval(frame);

        function frame() {
            if (curentPosition === 10){
                clearInterval(id)
            } else {
                curentPosition += 5
                if (animElement)
                    animElement.style.left
            }
        }
    }

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
            <div className={"circle"}></div>
            <div ref={animation}>
                <h2 className={"logo"} ref={logo}>Glaze Designer</h2>
                <div className={"menu"}>
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
            </div>
        </header>
    );
};

export default Header;