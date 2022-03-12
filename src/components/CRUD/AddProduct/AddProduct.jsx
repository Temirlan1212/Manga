import { Box, Button, Grid, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../../contexts/ProductContext";

const AddProduct = () => {
  const { addProduct } = useProducts();

  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
    picture: "",
    picture2: "",
    type: "",
    mainType: "",
  });

  const handleInp = (e) => {
    if (e.target.name === "price") {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };

      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };

      setProduct(obj);
    }
  };

  return (
    <Box sx={{ height: "100vh", padding: "20vh auto" }}>
      <center variant="h6" gutterBottom>
        <h2 sx={{ fontFamily: "Monospace" }}>WELCOME, ADMIN!</h2>
      </center>

      <Grid
        item
        xs={12}
        md={6}
        sx={{
          margin: "10vh auto",
          boxShadow: 3,
          borderRadius: 3,
        }}
      >
        <form>
          <TextField
            fullWidth
            id="outlined-basic"
            label="NAME"
            variant="outlined"
            name="name"
            onChange={handleInp}
          />
          <TextField
            fullWidth
            id="outlined-basic"
            label="DESCRIPTION"
            variant="outlined"
            name="description"
            onChange={handleInp}
          />{" "}
          <TextField
            fullWidth
            id="outlined-basic"
            label="PRICE"
            variant="outlined"
            name="price"
            onChange={handleInp}
          />{" "}
          <TextField
            fullWidth
            id="outlined-basic"
            label="PICTURE"
            variant="outlined"
            name="picture"
            onChange={handleInp}
          />
          <TextField
            fullWidth
            id="outlined-basic"
            label="background"
            variant="outlined"
            name="picture2"
            onChange={handleInp}
          />
          <TextField
            fullWidth
            id="outlined-basic"
            label="main-type"
            variant="outlined"
            name="mainType"
            onChange={handleInp}
          />
          <TextField
            fullWidth
            id="outlined-basic"
            label="TYPE"
            variant="outlined"
            name="type"
            onChange={handleInp}
          />
          <Stack direction="row" spacing={2} sx={{ bgcolor: "#880e4f" }}>
            <Button
              id="button"
              sx={{
                bgcolor: "#263238",
                borderColor: "error.main",
                fontFamily: "Monospace",
              }}
              variant="outlined"
              color="error"
              size="large"
              fullWidth
              onClick={() => {
                addProduct(product);

                navigate("/products");
              }}
            >
              CREATE PRODUCT
            </Button>
          </Stack>
        </form>
      </Grid>
    </Box>
  );
};

export default AddProduct;
