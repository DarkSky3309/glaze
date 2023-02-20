import React, {createRef, useState} from 'react';
import "../../scss/header.css"

const Header = () => {
        const [visibility, setVisibility] = useState(false)
        let logo = createRef<HTMLHeadingElement>()
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

                <div className={"circle"}></div>
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

            </header>
        );
    }
;

export default Header;