import React from "react";
import { Link, Outlet } from "react-router-dom";
import Notification from "../components/Notification";
import NavBar from "../components/NavBar/NavBar";

const Layout = () => {
  return (
    <div>
      <Notification />
      <NavBar />
      <Outlet />
      <footer className="w-[100%] bg-black text-white p-2">
        <ul className="flex justify-evenly">
          <li className="hover:text-yellow-400">
            <Link to="/privacy">Privacy Policy</Link>
          </li>
          <li className="hover:text-yellow-400">
            <Link to="/terms">Terms of Service</Link>
          </li>
          <li className="hover:text-yellow-400">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
        <p className="text-center mt-2">&copy; 2024 Your Company</p>
      </footer>
    </div>
  );
};

export default Layout;
