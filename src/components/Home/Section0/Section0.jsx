import React, { useEffect, useState } from "react";
import pic1 from "../../../assets/konoha1.jpg";
import pic2 from "../../../assets/Saskecomeback.jpg";
import pic3 from "../../../assets/konoha3.webp";
import pic4 from "../../../assets/back3.jpg";

const Section0 = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${pic4})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "60vh",
        maxWidth: "100vw",
        backgroundSize: "cover",
      }}
    ></section>
  );
};

export default Section0;
