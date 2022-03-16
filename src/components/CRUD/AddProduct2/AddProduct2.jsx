import React from "react";
import { Box, Button, Grid, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../../contexts/ProductContext";
import Upload from "../ProductDetails/Upload";

const AddProduct2 = () => {
  const { addChapter, selectedFiles } = useProducts();
  const { addProduct } = useProducts();

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescr] = useState("");
  const [data, setData] = useState("");
  const [picture, setPicture] = useState("");
  const [picture2, setPicture2] = useState("");
  const [type, setType] = useState("");
  const [mainType, setMainType] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleDescr = (e) => {
    setDescr(e.target.value);
  };

  const handleData = (e) => {
    setData(e.target.value);
  };

  const handlePicture = (e) => {
    setPicture(e.target.value);
  };

  const handlePicture2 = (e) => {
    setPicture2(e.target.value);
  };

  const handleType = (e) => {
    setType(e.target.value);
  };

  const handleMainType = (e) => {
    setMainType(e.target.value);
  };

  const handleAdd = () => {
    const newTask = {
      name,
      description,
      data,
      picture,
      picture2,
      type,
      mainType,
      selectedFiles,
    };
    addProduct(newTask);
    console.log(newTask);
  };

  return (
    <div>
      <Box sx={{ height: "100vh", padding: "20vh auto" }}>
        <center variant="h6" gutterBottom>
          <h2 sx={{ fontFamily: "Monospace" }}>WELCOME, ADMIN!</h2>
        </center>
        {/* <input type="text" onChange={handleInput} value={task} /> */}
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
            <Upload />
            <TextField
              fullWidth
              id="outlined-basic"
              label="NAME"
              variant="outlined"
              name="name"
              value={name}
              onChange={handleName}
            />
            <TextField
              fullWidth
              value={description}
              id="outlined-basic"
              label="DESCRIPTION"
              variant="outlined"
              name="description"
              onChange={handleDescr}
            />{" "}
            <TextField
              fullWidth
              value={data}
              id="outlined-basic"
              label="PRICE"
              variant="outlined"
              name="price"
              onChange={handleData}
            />{" "}
            <TextField
              value={picture}
              fullWidth
              id="outlined-basic"
              label="PICTURE"
              variant="outlined"
              name="picture"
              onChange={handlePicture}
            />
            <TextField
              value={picture2}
              fullWidth
              id="outlined-basic"
              label="background"
              variant="outlined"
              name="picture2"
              onChange={handlePicture2}
            />
            <TextField
              fullWidth
              id="outlined-basic"
              label="main-type"
              variant="outlined"
              name="mainType"
              onChange={handleType}
            />
            <TextField
              fullWidth
              id="outlined-basic"
              label="TYPE"
              variant="outlined"
              name="type"
              onChange={handleMainType}
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
                onClick={handleAdd}
              >
                CREATE PRODUCT
              </Button>
            </Stack>
          </form>
        </Grid>
      </Box>
    </div>
  );
};

export default AddProduct2;
