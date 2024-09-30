import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeLink = ({ isActive }) => {
    return isActive ? "text-green-500" : "text-black";
  };
  return (
    <>
      <div className="li">
        <div className=" bg-slate-100 flex p-8 md:p-4 md:flex-row md:justify-between md:items-center flex-col">
          <h1 className="text-3xl mb-3 md:mb-0 text-green-500 font-bold ">
            MixMaster
          </h1>
          <div className="flex md:flex-row flex-col gap-4">
            <NavLink className={activeLink} to="/">
              Home
            </NavLink>
            <NavLink className={activeLink} to="/about">
              About
            </NavLink>
            <NavLink className={activeLink} to="/newsletter">
              News Letter
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
