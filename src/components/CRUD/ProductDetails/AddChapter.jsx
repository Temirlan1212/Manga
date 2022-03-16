import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useProducts } from "../../../contexts/ProductContext";

const AddChapter = () => {
  const { addChapter, selectedFiles } = useProducts();
  const [file, setFile] = useState("");

  console.log(file);
  const [product, setProduct] = React.useState({
    chapter: "",
  });

  const handleInp = (e) => {
    if (e.target.name === "chapter") {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };

      setProduct(obj);
    }
  };

  return (
    <div>
      <div>
        {/* <TextField
          fullWidth
          id="outlined-basic"
          label="chapter"
          variant="outlined"
          name="chapter"
          onChange={handleInp}
        /> */}
        <Button
          onClick={() => {
            addChapter({ selectedFiles: selectedFiles });

            // navigate(`/products/${item.id}`);
          }}
        >
          add photo
        </Button>
        {/* 
        <Button
          id="button"
          onClick={() => {
            addChapter(product);

            // navigate(`/products/${item.id}`);
          }}
        >
          add chapter
        </Button> */}
      </div>
    </div>
  );
};

export default AddChapter;
