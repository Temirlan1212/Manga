import React, { useState } from "react";
import { Link } from "react-router-dom";
import pic1 from "../../../../assets/comicsback.jpg";
import { useProducts } from "../../../../contexts/ProductContext";

import back1 from "../../../../assets/mangaback.jpg";

import "./List1section.css";

const List1section = () => {
  const { fetchByParams, setBackground } = useProducts();

  return (
    <>
      <div className="theMain_div">
        {" "}
        <p>Take a rest</p>{" "}
      </div>

      <div className="main_dv">
        <a href="#category" onClick={() => setBackground(`${back1}`)}>
          <div
            className="dv"
            id="manga"
            onClick={(e) => fetchByParams("mainType", e.target.id)}
          >
            <p className="main_div-p">manga</p>
          </div>
        </a>

        <a href="#category">
          <div
            className="dv"
            id="manhua"
            onClick={(e) => fetchByParams("mainType", e.target.id)}
          >
            <p className="main_div-p">manhua</p>
          </div>
        </a>

        <a href="#category">
          <div
            className="dv"
            id="comics"
            onClick={(e) => fetchByParams("mainType", e.target.id)}
          >
            <p className="main_div-p">comics</p>
          </div>
        </a>

        <a href="#category">
          <div
            className="dv"
            id="manhwa"
            onClick={(e) => fetchByParams("mainType", e.target.id)}
          >
            <p className="main_div-p">manhwa</p>
          </div>
        </a>
      </div>
    </>
  );
};

export default List1section;
