import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

import CardMedia from "@mui/material/CardMedia";
import { Button, TextField } from "@mui/material";
import { useAuth } from "../../../contexts/AuthContext";
import AddChapter from "./AddChapter";

import { useProducts } from "../../../contexts/ProductContext";
import Upload from "./Upload";

import "./ProductDetails.css";

import Like from "../../LIke/LIke";
import Slider2 from "../../Slider2/Slider2";

const ProductDetails = () => {
  const [com, setCom] = useState({});
  const { getProductDetails, productDetails, saveEditedProduct, addComment } =
    useProducts();

  const { user } = useAuth();

  // const handleInput = (e) => {
  //   setCom(e.target.value);
  // };
  // const theme = useTheme();

  const handleInput = (e) => {
    // if (productDetails) {
    let d = new Date(Date.now());
    d.toString();
    setCom({
      email: user.email,
      comment: e.target.value,
      date: new Date().toLocaleString(),
    });
    // console.log(com);
    // }
  };
  const theme = useTheme();

  const {
    user: { email },
  } = useAuth();

  const { id } = useParams();

  const [productComment, setProductComment] = React.useState({
    comments: "",
  });

  useEffect(() => {
    getProductDetails(id);
  }, []);

  useEffect(() => {
    getProductDetails(id);
  }, [id]);

  useEffect(() => {
    setProductComment(productDetails);
  }, [productDetails]);

  console.log(productDetails, "from Details");

  //   productDetails.map((com) => {
  //     console.log(com, "comment@!!");
  //   });
  // });

  ///!

  const sendComment = async (e, id, productos) => {
    let newComment = [...productos.comments];
    newComment.push(com);
    let productWithComment = {
      ...productos,

      comments: newComment,
    };
    const data = await saveEditedProduct(productWithComment);
  };

  console.log(productDetails.comments);

  productDetails && productDetails.comments
    ? productDetails.comments.map((com) => {
        console.log(com, "comment@!!");
      })
    : console.log("did not work");

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap-reverse",
          justifyContent: "space-around",
          padding: "50px",
          justifyContent: "center",
          backgroundColor: "#E2EAEC",
          marginTop: "10px",
        }}
      >
        {/* <AddChapter />
      <Upload /> */}

        <TextField
          fullWidth
          id="outlined-basic"
          label="comments"
          variant="outlined"
          name="comments"
          onChange={(e) => handleInput(e)}
        />

        <Button
          id="button"
          variant="outlined"
          size="large"
          fullWidth
          onClick={(e) => sendComment(e, productComment.id, productComment)}
        >
          add comment
        </Button>
      </div>
      <Slider2 />

      {productDetails && productDetails.comments ? (
        productDetails.comments.map((com) => (
          <div>
            <p>{com.comment}</p>
          </div>
        ))
      ) : (
        <p>Comments are loading</p>
      )}

      {/* <Like /> */}
    </div>
  );
};

export default ProductDetails;
