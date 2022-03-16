import { Divider, Grid, Paper, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../../contexts/ProductContext";
import SideBar from "../../SideBar/SideBar";
import Top from "../../Top/Top";
import AddProduct from "../AddProduct/AddProduct";
import MediaCard from "../AddProduct/AddProduct";
import ProductCard from "../ProductCard/ProductCard";
import ProductCard2 from "../ProductCard2/ProductCard2";
import Upload from "../ProductDetails/Upload";
import List1section from "./List1section/List1section";
import List2section from "./List2section/List2section";
// import Slider1 from "../../Slider/Slider1";

const ProductList = ({ products }) => {
  const { getProducts, background } = useProducts();

  return (
    <>
      <div
        style={{
          minHeight: "600px",
          paddingBottom: "100px",
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <List1section />

        <div style={{}}>
          <div
            style={{
              border: "1px solid rgba(169, 54, 0)",
              margin: "40px 0 20px 0",
              maxWidth: "1400px",
              height: "2px",
              background: "red",
              boxShadow: "0px 0px 10px 0px red",
            }}
          ></div>

          <div
            id="category"
            style={{
              display: "flex",
              alignItems: "",
              alignItems: "center",
              flexDirection: "column",
              paddingBottom: "50px",
            }}
          >
            <SideBar />
          </div>
        </div>

        <Grid
          container
          spacing={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          {products ? (
            products.map((item) => (
              <Grid item>
                <ProductCard2 item={item} key={item} />
                {/* <ProductCard item={item} key={item} /> */}
              </Grid>
            ))
          ) : (
            <>
              <h2>..Loading</h2>
            </>
          )}
        </Grid>

        <Top />
      </div>
    </>
  );
};

export default ProductList;

// {
//   products ? (
//     products.map((item) => (
//       <Grid item>
//         <div>{item.name}</div>
//         <img src={item.selectedFiles}></img>
//         <ProductCard2 item={item} key={item} />
//         <ProductCard item={item} key={item} />
//       </Grid>
//     ))
//   ) : (
//     <>
//       <h2>..Loading</h2>
//     </>
//   );
// }
