import React from "react";
import { useState } from "react";
import Select from "react-select";
import "./BgColor.css";

const BgColor = () => {
  let [bgColor, setBgColor] = useState("none");
  let colors = [
    { value: 1, label: "black" },
    { value: 1, label: "pink" },
    { value: 1, label: "rgba(255, 164, 139)" },
    { value: 1, label: "aquamarine" },
    { value: 1, label: "purple" },
    { value: 1, label: "none" },
  ];

  let bgHandler = (e) => {
    console.log(e);
    setBgColor(e.label);
  };

  return (
    <div style={{ zIndex: "99" }}>
      <style>{"body {background-color:" + bgColor + ";}"}</style>
      <Select options={colors} onChange={bgHandler} className="select" />
    </div>
  );
};

export default BgColor;
