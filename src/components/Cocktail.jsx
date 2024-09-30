import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ id, name, image, info, glass }) => {
  return (
    <>
      <div className="bg-slate-200 flex flex-col m-5  pb-5 ">
        <img src={image} className="w-80 rounded-lg h-auto" alt="" />
        <p className="mx-3 my-1">{name}</p>
        <p className=" m-3 my-1">{info}</p>
        <p className=" m-3 my-1">{glass}</p>
        <Link to={`cocktail/${id}`} className=" px-4 py-1 m-3 bg-green-500 rounded text-white">
          Detail
        </Link>
      </div>
    </>
  );
};

export default Cocktail;
