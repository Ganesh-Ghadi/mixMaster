import React from "react";
import axios from "axios";
import { Link, useLoaderData, Navigate } from "react-router-dom";
export const loader = async (data) => {
  //this data is like event provided by loader

  // console.log(data);
  const singleCocktailUrl =
    "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

  const response = await axios.get(`${singleCocktailUrl}${data.params.id}`);
  const Data = await response.data.drinks;
  const id = data.params.id;
  return { id, Data }; //sending all drink data in data variable
};

const Cocktail = () => {
  //to get the id of the current drink u have to use useParams
  const { id, Data } = useLoaderData();

  if (!Data) {
    return <Navigate to="/" />;
  }

  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = Data[0];
  return (
    <>
      <Link className=" bg-green-500 px-4 py-1 text-white rounded" to="/">
        Back Home
      </Link>

      <div className="w-full flex justify-center items-center">
        <div className="flex md:flex-row w-3/4 md:w-[80%] mb-5 flex-col gap-4 justify-center mt-20 items-center">
          <img src={image} className="rounded-xl w-96 h-96" alt="" />
          <div className="flex flex-col w-full justify-start ">
            <div className="flex justify-start  items-start">
              <p className="bg-green-500 px-3 py-1 rounded-lg mb-1 text-white ml-2">
                Name:
              </p>
              <p>{name}</p>
            </div>
            <div className="flex justify-start  items-start">
              <p className="bg-green-500 px-3 py-1 rounded-lg mb-1 text-white ml-2">
                Info:
              </p>
              <p>{info}</p>
            </div>
            <div className="flex justify-start  items-start">
              <p className="bg-green-500 px-3 py-1 rounded-lg mb-1 text-white ml-2">
                Category:
              </p>
              <p>{category}</p>
            </div>
            <div className="flex justify-start  items-start">
              <p className="bg-green-500 px-3 py-1 rounded-lg mb-1 text-white ml-2">
                {" "}
                Glass:
              </p>
              <p>{glass}</p>
            </div>
            <div className="flex justify-start  items-start">
              <p className="bg-green-500 px-3 py-1 rounded-lg mb-1 text-white ml-2">
                Instructions:
              </p>
              <p>{instructions}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cocktail;
