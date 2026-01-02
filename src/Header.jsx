import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import {
  FaEnvelope,
  FaHome,
  FaInfoCircle,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const navItems = [
    { id: "home", label: "Home", icon: <FaHome />, to: "/" },
    { id: "about", label: "About", icon: <FaInfoCircle />, to: "/about" },
    { id: "contact", label: "Contact", icon: <FaEnvelope />, to: "/contact" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((open) => !open);
    console.log(String(isMenuOpen));
  };

  return (
    <header className="bg-gray-800 text-white px-4 sticky top-0">
      <div className="container mx-auto flex justify-between items-center h-14">
        <Link to="/" className="text-xl font-bold">
          Lean Canvas
        </Link>
        {/* breakPoint 활용하여 768px(md) 이상이면 flex, 미만이면 hidden */}
        <nav className="space-x-4 hidden md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.to}
              className={({ isActive }) =>
                `${isActive ? "text-blue-300" : "text-white"} hover:text-gray-300 `
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <button
          // md미만일때는 보이고, 768px 이상부터는 안보임
          className="md:hidden"
          onClick={toggleMenu}
        >
          <FaBars />
        </button>
        <button
          // md에서는 block으로 보이고, 그 미만은 hidden
          className="hidden md:block
         bg-blue-500 hover:bg-blue-600 text-white font-bold py-1.5 px-4 rounded transition-colors"
        >
          짐코딩 강의
        </button>
      </div>

      {/* Mobile Menu */}
      <aside
        className={`fixed top-0 left-0 w-64 h-full bg-gray-800 z-50 
        ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
        md:hidden transform transition-transform duration-300 ease-in-out
        `}
      >
        <div className="flex justify-end p-4">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <FaTimes className="h-4 w-6" />
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-4">
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.to}
              className="
            hover:text-gray-300"
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>
    </header>
  );
}
