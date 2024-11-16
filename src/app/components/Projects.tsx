import React from "react";
import Heading from "./Heading";
import Card from "./Card";

const data = [
    {
        id: 0,
        title: "Figma Assignment",
        desc: "A Next.js-based assignment for managing and organizing tasks in Figma",
        img: "/images/project_0.jpg",
        tags: ["Next.Js", "CSS"],
    },
    {
        id: 1,
        title: "Countdown Timer",
        desc: "A Next.js and TypeScript-powered website to track time with a customizable countdown timer.",
        img: "/images/project_1.jpg",
        tags: ["Nest.Js", "Node", "CSS", "TypeScript"],
    },
    {
        id: 2,
        title: "Static Interactive Resume",
        desc: "A TypeScript-based interactive resume built with HTML and CSS, showcasing skills and experience in a dynamic format.",
        img: "/images/project_2.jpg",
        tags: ["TypeScript", "HTML", "CSS"],
    },
    {
        id: 3,
        title: "Weather Widget",
        desc: "A real-time weather widget built with JavaScript to display current weather conditions and forecasts.",
        img: "/images/project_3.jpg",
        tags: ["Nest.Js", "Node", "CSS", "TypeScript"],
    },
    {
        id: 4,
        title: "Pana Cloud",
        desc: "A cloud-based platform by Pana for managing and deploying scalable web applications.",
        img: "/images/project_4.jpg",
        tags: ["HTML", "CSS"],
    },
    {
        id: 5,
        title: "Responsive Website HTML/CSS",
        desc: "A responsive website built with HTML and CSS, designed to adapt seamlessly to various screen sizes.",
        img: "/images/project_5.jpg",
        tags: ["HTML", "CSS"],
    },
];

const Projects = () => {
    return (
        <div id="projects" className="projects-container">
            <Heading title="My Projects" />
            <div className="projects-grid">
                {data.map((project) => (
                    <Card
                        key={project.id}
                        title={project.title}
                        desc={project.desc}
                        img={project.img}
                        tags={project.tags}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;