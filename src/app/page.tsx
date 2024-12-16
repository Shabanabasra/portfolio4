"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "@/components/hero";
import Project from "@/components/project";
import Skills from "@/components/skill";
import Contact from "@/components/contact";
import About from "@/components/about";
import Footer from "@/components/footer"

export default function Home() {
    useEffect(() => {
        AOS.init({
            easing: "ease-out-back",
            duration: 1200,
            delay: 100,
            mirror: true,
            anchorPlacement: "bottom-bottom",
            offset: 160,
        });
        AOS.refresh();
    }, []);

    return (
        <main className="home-main">
            <section className="hero-section">
                <Hero />
            </section>
            <section className="projects-section">
                <Project />
            </section>
            <section className="skills-section">
                <Skills />
            </section>
            <section className="contact-section">
                <Contact />
            </section>
            <section className="about-section">
                <About />
            </section>
            <section className="footer-section">
             <Footer/>
            </section>
        </main>
    );
}