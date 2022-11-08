import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/icon.png";

const Header = () => {
  const menuItem = (
    <>
      <li>
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive ? "text-orange-700" : undefined
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive ? "text-orange-700" : undefined
          }
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/reviews"
          className={({ isActive }) =>
            isActive ? "text-orange-700" : undefined
          }
        >
          Reviews
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addservices"
          className={({ isActive }) =>
            isActive ? "text-orange-700" : undefined
          }
        >
          Add Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive ? "text-orange-700" : undefined
          }
        >
          BLog
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="">
      <div className="navbar bg-gradient-to-r from-green-400 via-cyan-900 to-blue-500 text-white px-8 md:px-24">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-gray-900"
            >
              {menuItem}
            </ul>
          </div>

          <Link to="/" className="flex items-center text-3xl ">
            {" "}
            <img src={logo} alt="" className="h-10" />
            Interior
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItem}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Get started</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
