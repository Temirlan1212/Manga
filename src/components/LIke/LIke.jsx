// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";

// import * as React from "react";
// import { useTheme } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";

// import CardMedia from "@mui/material/CardMedia";
// import { Button, TextField } from "@mui/material";
// import { useAuth } from "../../contexts/AuthContext";

// import { useProducts } from "../../contexts/ProductContext";

// const ProductDetails = () => {
//   const [com, setCom] = useState(0);
//   const {
//     getProductDetails,
//     productDetails,
//     saveEditedProduct,
//     addComment,
//     addProduct,
//   } = useProducts();

//   console.log(com);

//   const {
//     user: { email },
//   } = useAuth();

//   const { id } = useParams();

//   useEffect(() => {
//     getProductDetails(id);
//   }, []);

//   useEffect(() => {
//     getProductDetails(id);
//   }, [id]);

//   ///!

//   const sendComment = async (productos) => {
//     let newLike = [...productDetails.like];
//     newLike.push(com);
//     let productWithLike = {
//       ...productos,

//       like: newLike,
//     };
//     const data = await addProduct(productWithLike);
//   };

//   console.log(productDetails);

//   return (
//     <div>
//       <div
//         style={{
//           display: "flex",
//           flexWrap: "wrap-reverse",
//           justifyContent: "space-around",
//           padding: "50px",
//           justifyContent: "center",
//           backgroundColor: "#E2EAEC",
//           marginTop: "10px",
//         }}
//       >
//         {/* <AddChapter />
//       <Upload /> */}

//         <Button
//           fullWidth
//           value="1"
//           id="outlined-basic"
//           label="comments"
//           variant="outlined"
//           name="comments"
//           onClick={() => setCom(com + 1)}
//         >
//           like
//         </Button>

//         <Button
//           id="button"
//           variant="outlined"
//           size="large"
//           fullWidth
//           onClick={(e) => sendComment(productDetails)}
//         >
//           send
//         </Button>
//       </div>

//       {/* <Like /> */}
//     </div>
//   );
// };

// export default ProductDetails;
