import React from "react";
import { NavLink } from "react-router-dom";
import { INavLink } from "../../types/common";

export default function Navbar() {
  const [activePage, setActivePage] = React.useState(0);

  const navLink: INavLink[] = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/project" },
  ];

  React.useEffect(() => {
    const foundIndex = navLink.findIndex(item => item.path === location.pathname);
    if (foundIndex !== -1) {
      setActivePage(foundIndex);
    }
  }, [location.pathname, navLink]);

  return (
    <div className="w-full flex gap-8 mb-16">
    {navLink.map((item, index) => (
      <NavLink
        key={item.path}
        to={item.path}
        className={`text-gray-500/60 text-lg   ${
          activePage === index
            ? "font-bold text-white"
            : "font-normal text-gray-500 hover:text-neutral-600 "
        }`}
        onClick={() => setActivePage(index)}
      >
        {item.name}
      </NavLink>
    ))}
  </div>
  );
}
