import React from "react";
import { Link, Outlet } from "react-router-dom";
const AboutPage = () => {
  return (
    <>
      <div className="li">
        <div className="p-3">
          <h1 className="font-bold mb-2 text-3xl">About us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
            voluptatem, itaque atque facere voluptas exercitationem rerum,
            fugiat distinctio nostrum totam animi? Inventore obcaecati fugiat
            quaerat accusamus non? Labore optio voluptatem harum cum? Qui
            commodi eos ab eius dolore? Non aliquam pariatur explicabo quo
            mollitia enim doloribus magnam excepturi, minus minima.
          </p>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default AboutPage;
