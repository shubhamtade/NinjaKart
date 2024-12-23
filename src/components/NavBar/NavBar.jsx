import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Other from "./Other";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import InfoIcon from "@mui/icons-material/Info";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import CallIcon from "@mui/icons-material/Call";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ThemeController from "../ThemeController";
import { MyContext } from "../../Context";

const NavBar = () => {
  const { itemCount } = useContext(MyContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex justify-between px-4 md:justify-around items-center md:py-3 py-2">
      <Logo />
      <div className="block md:hidden" onClick={toggleMenu}>
        {menuOpen ? null : <MenuIcon />}
      </div>
      <nav
        className={`z-50 fixed md:static top-0 left-0 w-[50%] h-full md:w-auto bg-white  md:bg-transparent  transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:transform-none`}
      >
        <div className="flex justify-end p-4 md:hidden">
          <button onClick={toggleMenu}>
            <CloseIcon />
          </button>
        </div>
        <ul className=" flex flex-col md:flex-row justify-between gap-4 p-4 md:p-0">
          <li>
            <Link
              to="/"
              onClick={toggleMenu}
              className="flex items-center gap-2"
            >
              <HomeIcon className="md:text-white md:opacity-0" />
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              onClick={toggleMenu}
              className="flex items-center gap-2"
            >
              <ShoppingBasketIcon className="md:text-white md:opacity-0" />
              Products <KeyboardArrowDownIcon />
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={toggleMenu}
              className="flex items-center gap-2"
            >
              <InfoIcon className="md:text-white md:opacity-0" />
              About
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              onClick={toggleMenu}
              className="flex items-center gap-2"
            >
              <RssFeedIcon className="md:text-white md:opacity-0" />
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={toggleMenu}
              className="flex items-center gap-2"
            >
              <CallIcon className="md:text-white md:opacity-0" />
              Contact
            </Link>
          </li>
          <li className="md:hidden ">
            <Link to="/Cart" onClick={toggleMenu} className="flex items-center">
              <ShoppingBagOutlinedIcon className="md:text-white" />
              Cart
              {itemCount > 0 && (
                <span className="ml-2 right-[-15px] bg-[#1a76d2] text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </li>

          <li className="md:hidden ">
            <ThemeController />
          </li>
        </ul>
        <div className="md:hidden fixed bottom-0 left-0 w-[100%] bg-white flex flex-col sm:flex-row justify-around text-[12px]  text-white">
          <div className="w-[100%] sm:w-[50%] text-center cursor-pointer bg-red-400 hover:bg-red-500 p-2">
            <p className="font-bold">Email</p>
            <p className="text-[10px]">shubham.tade@gmail.com</p>
          </div>
          <div className="w-[100%] sm:w-[50%] text-center cursor-pointer bg-red-400 hover:bg-red-500 p-2">
            <p className="font-bold">Call</p>
            <p className="text-[10px]">+91 9876543210</p>
          </div>
        </div>
      </nav>
      <Other />
    </div>
  );
};

export default NavBar;
