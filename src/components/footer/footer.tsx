import React from 'react';
import "./../../scss/footer.css"
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
                <a href="#">LookBook</a>
                <a href="#">About Us</a>
                <a href="#">Services</a>
                <a href="#">Contacts</a>
            </div>
            <h4 className={"privacy"}>Privacy policy</h4>
        </footer>
    );
};

export default Footer;