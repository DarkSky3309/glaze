import React, {createRef} from 'react';

const Contact = () => {
    const title = createRef<HTMLHeadingElement>()
    return (
        <div className={"contact__content"}>
            <div className="contact__title">
                <h1 className={"title"} ref={title}>About Us</h1>
            </div>
            <div className="contact__main-wrapper">
                <div className="contact__info">
                    <div className="contact__info-phone">
                        <i className="ri-phone-line"></i>
                        <h3>Tel.</h3>
                        <p>+380 95 567 43 56</p>
                    </div>
                    <div className="contact__info-mail">
                        <i className="ri-mail-line"></i>
                        <h3>E-mail</h3>
                        <p>glaze.designer@gmail.com</p>
                    </div>
                    <div className="contact__info-location">
                        <i className="ri-map-pin-2-line"></i>
                        <h3>Location</h3>
                        <p>st. Victory 45 of. 6, Kyiv, Ukraine</p>
                    </div>
                </div>
                <form action="#">
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder={"Your Name"}/>
                    <label htmlFor="phone">Tel.</label>
                    <input type="text" name="phone" id="2" placeholder="+380 95 000 00 00"/>
                    <label htmlFor="email">E-mail</label>
                    <input type="text" name="email" id="3" placeholder={"yourname@gmail.com"}/>
                    <label htmlFor="message">Your Message</label>
                    <input type="text" name="message" id="4" placeholder={"Hello, I want to know ... "}/>
                    <input type="submit" name="submit" id="5" value={"Send"}/>
                </form>
            </div>
        </div>
    );
};

export default Contact;