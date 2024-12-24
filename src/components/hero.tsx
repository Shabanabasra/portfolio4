import React from "react";
import Navbar from "@/components/Navbar";

const Hero = () => {
    return (
        <div id="hero" className="hero-container"data-aos="zoom-in-up">
            <Navbar />
            <div className="hero-content">
                <div className="hero-wrapper">
                    
                    <div
                        className="hero-image"
                        style={{
                            backgroundImage: "url('/images/banner_bg.PNG')",
                        }}
                    ></div>
                    <div className="hero-text">
                        <p >I am</p>
                        <p>Shabana</p>
                        <p>Basra</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;