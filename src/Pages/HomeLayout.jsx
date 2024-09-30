import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  const navigation = useNavigation();

  return (
    <>
      <Navbar />
      {navigation.state === "loading" ? (
        <h1 className="text-center m-5">loading...</h1> // we are doing isLoading and isError like this cause we are using loader i guess
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default HomeLayout;
