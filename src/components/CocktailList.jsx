import React from "react";
import Cocktail from "./Cocktail";

const CocktailList = ({ drinks }) => {
  if (!drinks) {
    return <h1 className="text-center m-5">drinks not found</h1>;
  }

  const formattedDrinks = drinks.map((item) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;

    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    };
  });

  return (
    <>
      <div className="flex w-full flex-col  m-5 justify-center items-center">
        <h1>list</h1>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {formattedDrinks.map((item) => {
            return <Cocktail key={item.id} {...item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default CocktailList;
