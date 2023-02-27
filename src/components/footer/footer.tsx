import React from 'react';
import "./../../scss/footer.css"
import {Link} from "react-router-dom";
const Footer = () => {
    return (
        <footer>
            <h2 className={"footer__logo"}>Glaze Designer</h2>
            <div className="social">
                <h3>Social Networks</h3>
                <div className="links">
                    <a href="#">
                        <i className="ri-facebook-fill"></i>
                    </a>
                    <a href="#">
                        <i className="ri-telegram-fill"></i>
                    </a>
                    <a href="#">
                        <i className="ri-instagram-fill"></i>
                    </a>
                </div>
            </div>
            <h3 className={"term"}>Terms of use</h3>
            <h4 className={"conditions"}>Condition for using <br/> the site</h4>
            <div className="footer__menu">
                <h4>Menu</h4>
                <Link to="/home">Home</Link>
                <Link to="/about-us">About Us</Link>
                <Link to="/services">Services</Link>
                <Link to="/look-book">LookBook</Link>
                <Link to="/contact">Contacts</Link>
            </div>
            <h4 className={"privacy"}>Privacy policy</h4>
        </footer>
    );
};

export default Footer;