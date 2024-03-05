
import React from "react";

interface PortoProps {
  icon: React.ReactElement;
  link: string;
}
export default function SocialIcon({ icon, link }: PortoProps) {
  return (
    <div>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button
          type="button"
          className="rounded-full py-2 px-2 bg-gray-600/40 transition duration-300 ease-in-out hover:bg-gray-500"
        >
          {icon}
        </button>
      </a>
    </div>
  );
}
