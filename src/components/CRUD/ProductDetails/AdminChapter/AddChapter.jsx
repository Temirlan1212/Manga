import { Button, TextField } from "@mui/material";
import React from "react";
import { useProducts } from "../../../../contexts/ProductContext";

const AddChapter = () => {
  const { addChapter, selectedFiles } = useProducts();

  const [product, setProduct] = React.useState({
    chapter: "",
    selectedFiles: selectedFiles,
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
        <TextField
          fullWidth
          id="outlined-basic"
          label="chapter"
          variant="outlined"
          name="chapter"
          onChange={handleInp}
        />
        <Button
          id="button"
          onClick={() => {
            addChapter(product);

            // navigate(`/products/${item.id}`);
          }}
        >
          add chapter
        </Button>
      </div>
    </div>
  );
};

export default AddChapter;
