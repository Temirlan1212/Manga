import React from "react";
import "./ProductCard2.css";
import pic1 from "../../../assets/Saskecomeback.jpg";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import { useProducts } from "../../../contexts/ProductContext";
import { Button, CardActions, IconButton } from "@mui/material";
import { ADMIN } from "../../../helpers/consts";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import FavoriteIcon from "@mui/icons-material/Favorite";

const ProductCard2 = ({ item }) => {
  const { deleteProduct, addProductToCart, checkProductInCart } = useProducts();
  const {
    user: { email },
  } = useAuth();

  const navigate = useNavigate();

  return (
    <div>
      <div class="card-product">
        <img src={item.picture2} style={{ width: "200px", height: "200px" }} />

        <div class="img1"></div>
        <div class="img2"></div>
        <div class="title">
          {" "}
          <CardActions sx={{ display: "flex", justifyContent: "center" }}>
            {email === ADMIN ? (
              <>
                {" "}
                <Button
                  size="small"
                  onClick={() => deleteProduct(item.id)}
                  variant="h6"
                  color="#616161"
                  sx={{ fontWeight: 900, color: "#616161" }}
                >
                  <DeleteIcon />
                </Button>
                <Button
                  size="small"
                  onClick={() => navigate(`/edit/${item.id}`)}
                  sx={{ fontWeight: 900, color: "#616161" }}
                >
                  <EditIcon />
                </Button>
              </>
            ) : (
              <>
                <IconButton onClick={() => addProductToCart(item)}>
                  <FavoriteIcon
                    color={checkProductInCart(item.id) ? "secondary" : ""}
                  />
                </IconButton>
              </>
            )}
          </CardActions>
        </div>
        <div class="text">{item.description}</div>
        <p className="title_div">{item.name}</p>

        <div class="catagory" onClick={() => navigate(`/products/${item.id}`)}>
          READ <i class="fas fa-film"></i>
        </div>

        <div class="views">
          20211 <i class="far fa-eye"></i>{" "}
        </div>
      </div>
    </div>
  );
};

export default ProductCard2;
