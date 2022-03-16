import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

import CardMedia from "@mui/material/CardMedia";
import { Button, TextField } from "@mui/material";
import { useAuth } from "../../../contexts/AuthContext";
import AddChapter from "./AddChapter";

import { productContext, useProducts } from "../../../contexts/ProductContext";
import Upload from "./Upload";

import "./ProductDetails.css";

import Like from "../../LIke/LIke";
import Slider2 from "../../Slider2/Slider2";

import "./ProductDetails.css";
import Chapter from "../../Chapter/Chapter";

const ProductDetails = () => {
  const [com, setCom] = useState({});
  const {
    getProductDetails,
    productDetails,
    saveEditedProduct,
    addComment,
    getProducts,
  } = useProducts();

  const { addAndDeleteLikes, addComments, chapter } = useProducts();

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
    getProducts();
  }, [com]);

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

  console.log(productDetails.likes);

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
        }}
      >
        <Link to="/products/:id">
          <p onClick={() => addAndDeleteLikes(productDetails)}>
            LIKE {productDetails.likes}
          </p>
        </Link>

        <div style={{ background: "" }}>
          <div class="movie-card">
            <div class="container">
              <a href="#">
                <img src={productDetails.picture} alt="cover" class="cover" />
              </a>

              <div class="hero">
                <div class="details">
                  <div class="title1">
                    The Hobbit <span>PG-13</span>
                  </div>

                  <div class="title2">The Battle of the Five Armies</div>

                  <fieldset class="rating">
                    <input type="radio" id="star5" name="rating" value="5" />
                    <label
                      class="full"
                      for="star5"
                      title="Awesome - 5 stars"
                    ></label>
                    <input
                      type="radio"
                      id="star4half"
                      name="rating"
                      value="4 and a half"
                    />
                    <label
                      class="half"
                      for="star4half"
                      title="Pretty good - 4.5 stars"
                    ></label>
                    <input
                      type="radio"
                      id="star4"
                      name="rating"
                      value="4"
                      checked
                    />
                    <label
                      class="full"
                      for="star4"
                      title="Pretty good - 4 stars"
                    ></label>
                    <input
                      type="radio"
                      id="star3half"
                      name="rating"
                      value="3 and a half"
                    />
                    <label
                      class="half"
                      for="star3half"
                      title="Meh - 3.5 stars"
                    ></label>
                    <input type="radio" id="star3" name="rating" value="3" />
                    <label
                      class="full"
                      for="star3"
                      title="Meh - 3 stars"
                    ></label>
                    <input
                      type="radio"
                      id="star2half"
                      name="rating"
                      value="2 and a half"
                    />
                    <label
                      class="half"
                      for="star2half"
                      title="Kinda bad - 2.5 stars"
                    ></label>
                    <input type="radio" id="star2" name="rating" value="2" />
                    <label
                      class="full"
                      for="star2"
                      title="Kinda bad - 2 stars"
                    ></label>
                    <input
                      type="radio"
                      id="star1half"
                      name="rating"
                      value="1 and a half"
                    />
                    <label
                      class="half"
                      for="star1half"
                      title="Meh - 1.5 stars"
                    ></label>
                    <input type="radio" id="star1" name="rating" value="1" />
                    <label
                      class="full"
                      for="star1"
                      title="Sucks big time - 1 star"
                    ></label>
                    <input
                      type="radio"
                      id="starhalf"
                      name="rating"
                      value="half"
                    />
                    <label
                      class="half"
                      for="starhalf"
                      title="Sucks big time - 0.5 stars"
                    ></label>
                  </fieldset>

                  <span class="likes">109 likes</span>
                </div>
              </div>

              <div class="description">
                <div class="column1">
                  <span class="tag">action</span>
                  <span class="tag">fantasy</span>
                  <Link to="/peyment">Buy</Link>
                </div>

                <div class="column2">
                  <p>
                    Bilbo Baggins is swept into a quest to reclaim the lost
                    Dwarf Kingdom of Erebor from the fearsome dragon Smaug.
                    Approached out of the blue by the wizard Gandalf the Grey,
                    Bilbo finds himself joining a company of thirteen dwarves
                    led by the legendary warrior, Thorin Oakenshield. Their
                    journey will take them into the Wild; through...{" "}
                    <a href="#">read more</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AddChapter />
      <Upload />

      <center>
        <Slider2 />
        <TextField
          fullWidth
          id="outlined-basic"
          label="comments"
          variant="outlined"
          name="comments"
          sx={{ maxWidth: "800px", margin: "0 auto" }}
          onChange={(e) => handleInput(e)}
        />

        <Button
          id="button"
          variant="outlined"
          size="large"
          fullWidth
          sx={{ maxWidth: "800px", margin: "0 auto" }}
          onClick={(e) => sendComment(e, productComment.id, productComment)}
        >
          add comment
        </Button>
      </center>

      {productDetails && productDetails.comments ? (
        productDetails.comments.map((com) => (
          <div className="main_com">
            <div>
              <p>{com.email}</p>
              <p>{com.date}</p>
            </div>
            <p className="com_comment">{com.comment}</p>
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
