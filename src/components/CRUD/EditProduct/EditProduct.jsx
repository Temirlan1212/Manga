import { Box, Button, Grid, Stack, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../../contexts/ProductContext";

const EditProduct = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const { saveEditedProduct, getProductDetails, productDetails } =
    useProducts();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
    picture: "",
    picture2: "",
    type: "",
  });
  console.log(product.name);

  useEffect(() => {
    getProductDetails(id);
  }, []);

  useEffect(() => {
    setProduct(productDetails);
  }, [productDetails]);

  const handleInput = (e, product, setProduct) => {
    let obj = {
      ...product,
      [e.target.name]: e.target.value,
    };
    setProduct(obj);
  };

  return (
    <div>
      <Box>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            margin: "10vh auto",
            boxShadow: 3,
            borderRadius: 3,
            bgcolor: "#ffcc80",
          }}
        >
          <form>
            <TextField
              value={product.name}
              fullWidth
              id="outlined-basic"
              label="NAME"
              variant="outlined"
              name="name"
              onChange={(e) => handleInput(e, product, setProduct)}
            />
            <TextField
              value={product.description}
              fullWidth
              id="outlined-basic"
              label="DESCRIPTION"
              variant="outlined"
              name="description"
              onChange={(e) => handleInput(e, product, setProduct)}
            />{" "}
            <TextField
              value={product.price}
              fullWidth
              id="outlined-basic"
              label="PRICE"
              variant="outlined"
              name="price"
              onChange={(e) => handleInput(e, product, setProduct)}
            />{" "}
            <TextField
              value={product.picture}
              fullWidth
              id="outlined-basic"
              label="PICTURE"
              variant="outlined"
              name="picture"
              onChange={(e) => handleInput(e, product, setProduct)}
            />
            <TextField
              value={product.picture2}
              fullWidth
              id="outlined-basic"
              label="background"
              variant="outlined"
              name="picture2"
              onChange={(e) => handleInput(e, product, setProduct)}
            />
            <TextField
              value={product.type}
              fullWidth
              id="outlined-basic"
              label="TYPE"
              variant="outlined"
              name="type"
              onChange={(e) => handleInput(e, product, setProduct)}
            />
            <Stack direction="row" spacing={2} sx={{ bgcolor: "#000" }}>
              <Button
                id="button"
                variant="outlined"
                size="large"
                fullWidth
                onClick={() => {
                  saveEditedProduct(product);

                  navigate("/products");
                }}
              >
                EDIT manga/products
              </Button>
              <Button
                id="button"
                variant="outlined"
                size="large"
                fullWidth
                onClick={() => {
                  saveEditedProduct(product);

                  navigate("/");
                }}
              >
                EDIT manga/home
              </Button>
            </Stack>
          </form>
        </Grid>
      </Box>
    </div>
  );
};

export default EditProduct;
