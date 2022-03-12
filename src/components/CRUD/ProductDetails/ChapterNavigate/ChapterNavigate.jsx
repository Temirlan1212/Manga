import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../../../contexts/ProductContext";

const ChapterNavigate = () => {
  const {
    addProduct,
    addChapter,
    chapter,
    products,
    deleteChapter,
    addProductToCart,
    checkProductInCart,
  } = useProducts();

  const navigate = useNavigate();

  return (
    <div>
      {chapter.map((item) => (
        <ul>
          <li
            onClick={() => {
              navigate(`/chapter/${item.id}`);
            }}
          >
            {item.chapter}
          </li>
          <Button
            size="small"
            onClick={() => deleteChapter(item.id)}
            variant="h6"
            color="#616161"
            sx={{ fontWeight: 900, color: "#616161" }}
          >
            DELETE
          </Button>
          <Button
            size="small"
            onClick={() => navigate(`/edit/${item.id}`)}
            sx={{ fontWeight: 900, color: "#616161" }}
          >
            EDIT
          </Button>
        </ul>
      ))}
    </div>
  );
};

export default ChapterNavigate;
