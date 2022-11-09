import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/icon.png";

const Footer = () => {
  return (
    <div>
      <footer className="px-4 py-8 dark:bg-gray-800 dark:text-gray-400 bg-gradient-to-tl from-teal-500 via-teal-600 to-amber-800">
        <div className="container  flex flex-wrap items-center justify-center md:justify-between mx-auto space-y-4 ">
          <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full dark:bg-violet-400 md:mr-40">
              <Link to="/" className="flex items-center text-3xl ">
                {" "}
                <img src={logo} alt="" className="h-12" />
                Interior
              </Link>
            </div>
            <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8 ">
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>
          copyright 2023 @kS Interior...
        </div>
      </footer>
    </div>
  );
};

export default Footer;
