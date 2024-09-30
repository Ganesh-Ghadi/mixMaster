import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Landing,
  AboutPage,
  HomeLayout,
  Cocktail,
  Error,
  Newsletter,
} from "./Pages";

import { loader as landingLoader } from "./Pages/Landing";
import { loader as cocktailPageLoader } from "./Pages/Cocktail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "about",
          element: <AboutPage />,
          children: [
            {
              index: true,
              element: <h1>company</h1>,
            },
            {
              path: "person",
              element: <h1>person</h1>,
            },
          ],
        },
        {
          index: true,
          element: <Landing />,
          loader: landingLoader,
        },
        {
          path: "newsletter",
          element: <Newsletter />,
        },
        {
          path: "cocktail/:id",
          element: <Cocktail />,
          loader: cocktailPageLoader,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
