import React, {createRef, useEffect} from 'react';
import "./../../scss/contact.css"

const Contact = () => {

    return (
        <div className={"contact__content"}>
            <div className="contact__title fromBottomTitle">
                <h1 className={"title"} >Contact</h1>
            </div>
            <div className="contact__main-wrapper">
                <div className="contact__info">
                    <div  className="contact__info-phone contact__container fromLeft">
                        <i className="ri-phone-line"></i>
                        <h3>Tel.</h3>
                        <p>+380 95 567 43 56</p>
                    </div>
                    <div  className="contact__info-mail contact__container fromRight">
                        <i className="ri-mail-line"></i>
                        <h3>E-mail</h3>
                        <p>glaze.designer@gmail.com</p>
                    </div>
                    <div  className="contact__info-location contact__container fromLeft">
                        <i className="ri-map-pin-2-line"></i>
                        <h3>Location</h3>
                        <p>st. Victory 45 of. 6, Kyiv, Ukraine</p>
                    </div>
                </div>
                <div  className="circle fromBottomTitle"></div>
                <form action="#" className={"fromRight"}>
                    <label className={"title"} htmlFor="title">Feedback</label>
                    <div className="name">
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder={"Your Name"}/>
                    </div>
                    <div className="tel">
                        <label htmlFor="phone">Tel.</label>
                        <input type="text" name="phone" id="2" placeholder="+380 95 000 00 00"/>
                    </div>
                    <div className="email">
                        <label htmlFor="email">E-mail</label>
                        <input type="text" name="email" id="3" placeholder={"yourname@gmail.com"}/>
                    </div>
                    <div className="message">
                        <label htmlFor="message">Your Message</label>
                        <textarea name="message" rows={4} id="4" placeholder={"Hello, I want to know ... "}/>
                    </div>
                    <input className={"submit"} type="submit" name="submit" id="5" value={"Send"}/>
                </form>
            </div>
        </div>
    )
};

export default Contact;