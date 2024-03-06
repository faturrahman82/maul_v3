import { NavLink } from "react-router-dom";
import { INavLink } from "../../types/common";

export default function Navbar() {
  const navLink: INavLink[] = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/project" },
  ];

  return (
    <div className="w-full flex gap-8 mb-16 justify-center sm:justify-start">
      {navLink.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `text-gray-500/60 text-lg ${
              isActive
                ? "font-bold text-white"
                : "font-normal hover:text-slate-400/80 text-gray-500 hover:text-neutral-600 "
            }`
          }
        >
          {item.name}
        </NavLink>
      ))}
    </div>
  );
}
