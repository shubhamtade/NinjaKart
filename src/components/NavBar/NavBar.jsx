import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Other from "./Other";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex justify-between px-4 md:justify-around items-center md:py-3 py-2">
      <Logo />
      <div className="block md:hidden" onClick={toggleMenu}>
        {menuOpen ? <CloseIcon /> : <MenuIcon />}
      </div>
      <nav
        className={`md:block ${
          menuOpen ? "block" : "hidden"
        } absolute md:static top-0 left-0 w-full md:w-auto bg-white md:bg-transparent`}
      >
        <div className="flex justify-end p-4 md:hidden">
          <button onClick={toggleMenu}>
            <CloseIcon />
          </button>
        </div>
        <ul className="bg-white text-black flex flex-col md:flex-row justify-between gap-4 p-4 md:p-0">
          <li>
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" onClick={toggleMenu}>
              Products <KeyboardArrowDownIcon />
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/blog" onClick={toggleMenu}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <Other />
    </div>
  );
};

export default NavBar;
