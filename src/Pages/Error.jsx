import React from "react";
import notfound from "../images/notfound.svg";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);

  if (error.status === 404) {
    return (
      <>
        <div className="flex gap-2 flex-col justify-center items-center w-full h-screen">
          <img className="w-3/4 md:w-2/4 " src={notfound} alt="" />
          <p>We cant seem to find page you are looking for.</p>
          <Link className="text-green-500 font-bold underline" to="/">
            Back Home
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <h1>{error.message}</h1>
    </>
  );
};

export default Error;
