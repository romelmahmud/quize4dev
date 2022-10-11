import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/solid";

const NavBar = () => {
  let activeStyle = {
    color: "#22c55e",
  };
  return (
    <div className="bg-slate-900 h-24 text-white ">
      <div className="mx-auto max-w-6xl px-4 flex justify-between items-center h-full">
        <Link to="/home" className="font-extrabold text-3xl text-green-500 ">
          Quiz 4 Dev
        </Link>
        <div>
          <Bars3Icon className="h-8 w-8 hover:text-green-500 cursor-pointer md:hidden" />
        </div>
        <nav className="hidden md:block">
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className="ml-6 text-xl  font-semibold hover:text-green-500 transition-all delay-100 ease-in-out"
            to={"home"}
          >
            Home
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className="ml-6 text-xl font-semibold hover:text-green-500 transition-all delay-100 ease-in-out"
            to={"topics"}
          >
            Topics
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className="ml-6 text-xl font-semibold hover:text-green-500 transition-all delay-100 ease-in-out"
            to={"statistics"}
          >
            Statistics
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className="ml-6 text-xl font-semibold hover:text-green-500 transition-all delay-100 ease-in-out"
            to={"blog"}
          >
            Blog
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
