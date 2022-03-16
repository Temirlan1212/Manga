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
        <p className="theMain_div-p">Take a rest</p>{" "}
      </div>

      <div
        style={{
          border: "1px solid rgba(169, 54, 0)",
          margin: "40px 0 20px 0",
          maxWidth: "1000px",
          height: "2px",
          background: "red",
        }}
      ></div>

      <div className="main_dv">
        <a href="#category">
          <div
            className="dv2"
            id="manhua"
            onClick={(e) => fetchByParams("mainType", e.target.id)}
          >
            <p className="main_div-p">manhua</p>
          </div>
        </a>

        <a href="#category" onClick={() => setBackground("black")}>
          <div
            className="dv1"
            id="manga"
            onClick={(e) => fetchByParams("mainType", e.target.id)}
          >
            <p className="main_div-p">manga</p>
          </div>
        </a>

        <a href="#category">
          <div
            className="dv3"
            id="comics"
            onClick={(e) => fetchByParams("mainType", e.target.id)}
          >
            <p className="main_div-p">comics</p>
          </div>
        </a>

        <a href="#category">
          <div
            className="dv4"
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
