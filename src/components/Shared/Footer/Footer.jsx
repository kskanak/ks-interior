import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/icon.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-gradient-to-tl from-teal-500 via-teal-600 to-amber-800 text-primary-content">
        <div>
          <img src={logo} alt="" className="h-16" />
          <p className="font-bold">
            KS Interior <br />
            Providing reliable Interior Design since 2018
          </p>
          <p>Copyright © 2022 - All right reserved</p>
        </div>
        <div className="md:w-3/4">
          "One of my strongest convictions, and one of the first canons of good
          taste, is that our Environments, like the fish’s shell and the bird’s
          nest, ought to represent our individual taste and habits.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
