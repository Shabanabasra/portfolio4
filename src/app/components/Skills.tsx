import React from "react";

const Skills = () => {
    return (
        <div id="skills" className="skills-container">
            <div className="skills-grid">
                {/* Left Section: Text */}
                <div data-aos="zoom-in-up">
                    <h2 className="skills-heading">Technologies I Work With</h2>
                    <p className="skills-text">
                        I have a solid foundation in web development, specializing in HTML, CSS, and TypeScript. 
                        My experience extends to using frameworks like React and Next.js to create dynamic and user-friendly applications. 
                        I am also proficient in Tailwind CSS for efficient styling and design. With a passion for learning, I stay updated 
                        on the latest technologies to enhance my skill set and contribute effectively to projects.
                    </p>
                </div>
                {/* Right Section: Skills */}
                <div>
                    <div className="skills-list">
                        <div>
                            <p className="skills-item" data-aos="zoom-in-up">TypeScript</p>
                            <p className="skills-item" data-aos="zoom-in-up">React.js</p>
                            <p className="skills-item" data-aos="zoom-in-up">Next.js</p>
                        </div>
                        <div>
                            <p className="skills-item" data-aos="zoom-in-up">Tailwind</p>
                            <p className="skills-item" data-aos="zoom-in-up">CSS</p>
                            <p className="skills-item" data-aos="zoom-in-up">Node.js</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;