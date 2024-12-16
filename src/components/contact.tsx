import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
    return (
        <div id="contact" className="contact-container"data-aos="zoom-in-up">
            <div className="contact-grid">
                {/* Left Section: Contact Info */}
                <div>
                    <h2 className="contact-heading" data-aos="zoom-in-up" >Get in Touch</h2>
                    <p className="contact-text" data-aos="zoom-in-up">
                        Drop me a line, give me a call, or send a message by filling out the form below.
                    </p>
                    <div className="contact-info" data-aos="zoom-in-up">
                    <AiOutlineMail size={30} />
                        <span>xyz@gmail.com</span>
                    </div>
                    <div className="contact-info" data-aos="zoom-in-up">
                        <BsTelephone size={30} />
                        <span>(03442046533)</span>
                    </div>
                </div>

                {/* Right Section: Contact Form */}
                <div>
                    <form className="contact-form" data-aos="zoom-in-up">
                    <div className="form-field">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="form-input"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="form-field">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="form-input"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="form-field">
                        <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                rows={5}
                                className="form-textarea"
                                placeholder="Enter your message"
                            ></textarea>
                        </div>
                        <button type="submit" className="form-button">
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
        );
      };
      
      export default Contact;