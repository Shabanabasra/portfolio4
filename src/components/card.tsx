import React from "react";
import Image from "next/image";

interface PropsType {
    title: string;
    desc: string;
    img: string;
    tags: string[];
}

const Card: React.FC<PropsType> = ({ title, desc, img, tags }) => {
    return (
        <div className="card-container" data-aos="zoom-in-up">
            <Image
                className="card-image"
                src={img}
                width={350}
                height={350}
                alt={title}
            />
            <div className="card-content"data-aos= "zoom-in-up">
                <div className="card-title" data-aos="zoom-in-up">{title}</div>
                <p>{desc}</p>
                <div>
                    {tags.map((tag) => (
                        <span className="tags" key={tag}>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Card;
