import React from "react";

interface PropsType {
    title: string;
}

const Heading: React.FC<PropsType> = ({ title }) => {
    return (
        <div className="heading-container" data-aos="zoom-in-up">
            <p>{title}</p>
        </div>
    );
};

export default Heading;