import { Box } from "@mui/system";
import React from "react";

import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";

import Section0 from "./Section0/Section0";
import Slider1 from "../Home/Slider/Slider";
import { Divider } from "@mui/material";
import pic1 from "../../assets/konoha1.jpg";
import List2section from "../CRUD/ProductList/List2section/List2section";

const Home = () => {
  return (
    <div>
      <Section0 />
      <Divider
        sx={{
          border: "1px solid rgba(169, 54, 0)",
          margin: "30px auto",
          maxWidth: "1000px",
          height: "5px",
          background:
            "linear-gradient(94deg, rgba(255,184,206,1) 0%, rgba(227,219,89,1) 34%, rgba(235,50,138,1) 69%, rgba(205,255,0,1) 100%)",
        }}
      />
      <Slider1 />
      <Section1 />

      {/* <Section2 /> */}
    </div>
  );
};

export default Home;
