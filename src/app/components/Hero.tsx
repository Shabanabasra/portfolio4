import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
    return (
        <div id="hero" className="hero-container"data-aos="bounce-top">
            <Navbar />
            <div className="hero-content">
                <div className="hero-wrapper">
                    {/* Circular Image */}
                    <div
                        className="hero-image"
                        style={{
                            backgroundImage: "url('/images/banner_bg.PNG')",
                        }}
                    ></div>

                    {/* Hero Text */}
                    <div className="hero-text">
                        <p >I'm</p>
                        <p>Shabana</p>
                        <p>Basra</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;