import { Box } from "@mui/material";
import React from "react";
import { useState } from "react";
import Select from "react-select";
import "./BgColor.css";

const BgColor = () => {
  let [bgColor, setBgColor] = useState("none");
  let colors = [
    { value: 1, label: "black" },
    { value: 1, label: "none" },
  ];

  let bgHandler = (e) => {
    console.log(e);
    setBgColor(e.label);
  };

  return (
    <Box
      sx={{
        zIndex: "99",
        display: { xs: "none", md: "flex", lg: "flex", lx: "flex" },
      }}
    >
      <style>{"body {background-color:" + bgColor + ";}"}</style>
      <Select options={colors} onChange={bgHandler} className="select" />
    </Box>
  );
};

export default BgColor;
