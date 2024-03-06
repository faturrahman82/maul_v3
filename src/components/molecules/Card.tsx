import React from "react";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, link }) => {
  return (
    <div className="bg-gray-600/40 shadow-md rounded-lg hover:bg-slate-500/40">
      <div>
        <a href={link}>
          <img
            src={imageUrl}
            alt=""
            className="w-full h-40 object-cover rounded-lg "
          />
          <div className="p-4">
            <h2 className="text-gray-400 text-xl font-semibold mb-2">
              {title}
            </h2>
            <p className="text-white">{description}</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Card;
