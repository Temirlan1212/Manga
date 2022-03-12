import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../../contexts/ProductContext";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, TextField } from "@mui/material";
import { useAuth } from "../../../contexts/AuthContext";
import AddChapter from "./AdminChapter/AddChapter";
import ChapterNavigate from "./ChapterNavigate/ChapterNavigate";
import Upload from "./ChapterNavigate/Upload";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
// import PlayArrowIcon from "@mui/icons-material/PlayArrow";
// import SkipNextIcon from "@mui/icons-material/SkipNext";
// import CreditCard1 from "../../CreditCard/Cards";
// import Index2 from "../../CreditCard/Index2";
// import Cards from "../../CreditCard/Cards";

const ProductDetails = () => {
  const theme = useTheme();
  const {
    addProduct,
    addChapter,
    chapter,
    products,
    deleteChapter,
    addProductToCart,
    checkProductInCart,
  } = useProducts();

  const {
    user: { email },
  } = useAuth();

  const { id } = useParams();
  const { getProductDetails, productDetails } = useProducts();

  useEffect(() => {
    getProductDetails(id);
  }, [id]);

  return (
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
      <AddChapter />
      <Upload />

      <ChapterNavigate />

      {/* 
      <Card sx={{ margin: "auto 0", maxHeight: "500px" }}>
        <CardMedia
          component="img"
          sx={{ width: 400, border: "1px solid #616161", height: "500px" }}
          image={productDetails.picture}
          alt="Live from space album cover"
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: 10,
          }}
        ></Box>
      </Card> */}
      {/* <Cards />
      <Index2 /> */}
    </div>
  );
};

export default ProductDetails;
