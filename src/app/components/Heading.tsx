import React from "react";

interface PropsType {
    title: string;
}

const Heading: React.FC<PropsType> = ({ title }) => {
    return (
        <div className="heading-container" data-aos="bounce-top">
            <p>{title}</p>
        </div>
    );
};

export default Heading;