import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";

import logo from "../../../assets/icon.png";
import { FaUser } from "react-icons/fa";
import { AuthContext } from "../../../routes/AuthProvider";
import { toast } from "react-toastify";

const Header = () => {
  const { user, handleLogout } = useContext(AuthContext);
  const menuItem = (
    <>
      <li>
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive ? "text-green-500" : undefined
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive ? "text-green-500" : undefined
          }
        >
          Services
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/reviews"
              className={({ isActive }) =>
                isActive ? "text-green-500" : undefined
              }
            >
              My Reviews
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/addservices"
              className={({ isActive }) =>
                isActive ? "text-green-500" : undefined
              }
            >
              Add Service
            </NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive ? "text-green-500" : undefined
          }
        >
          Blog
        </NavLink>
      </li>
    </>
  );
  const handleSignout = () => {
    handleLogout()
      .then((result) => {
        toast.info("Sign out successfull");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
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
          <div className="userInfo text-white">
            {user ? (
              <img
                src={user.photoURL}
                title={user.displayName}
                className="h-8 w-8 rounded-full"
              />
            ) : (
              <FaUser />
            )}
          </div>
          {user && user?.uid ? (
            <button
              className="btn btn-outline btn-accent btn-sm mx-2"
              onClick={handleSignout}
            >
              LogOut
            </button>
          ) : (
            <div className="login-regis-btn">
              <Link to="/login">
                <button className=" px-2 py-2 bg-gradient-to-br from-black via-orange-500 to-white rounded-lg hover:bg-gradient-to-tl from-blue-200 via-red-500 to-cyan-500 ml-3 text-white">
                  Login
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
