import React from "react";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-gray-600/40 shadow-md rounded-lg">
      <img
        src={imageUrl}
        alt=""
        className="w-full h-40 object-cover rounded-lg "
      />
      <div className="p-4">
        <h2 className="text-gray-400 text-xl font-semibold mb-2">{title}</h2>
        <p className="text-white">{description}</p>
      </div>
    </div>
  );
};

export default Card;
