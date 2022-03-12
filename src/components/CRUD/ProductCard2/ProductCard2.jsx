import React from "react";
import "./ProductCard2.css";
import pic1 from "../../../assets/Saskecomeback.jpg";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import { useProducts } from "../../../contexts/ProductContext";
import { Button, CardActions } from "@mui/material";
import { ADMIN } from "../../../helpers/consts";

const ProductCard2 = ({ item }) => {
  const { deleteProduct, addProductToCart, checkProductInCart } = useProducts();
  const {
    user: { email },
  } = useAuth();

  const navigate = useNavigate();

  return (
    <div>
      <div class="card">
        <img src={item.picture2} style={{ width: "200px", height: "200px" }} />
        <a href="#">
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
                    DELETE
                  </Button>
                  <Button
                    size="small"
                    onClick={() => navigate(`/edit/${item.id}`)}
                    sx={{ fontWeight: 900, color: "#616161" }}
                  >
                    EDIT
                  </Button>
                </>
              ) : (
                ""
                // <IconButton onClick={() => addProductToCart(item)}>
                //   <ShoppingCartIcon
                //     color={checkProductInCart(item.id) ? "secondary" : ""}
                //   />
                // </IconButton>
              )}
            </CardActions>
          </div>
          <div class="text">{item.description}</div>
          <p className="title_div">{item.name}</p>
          <a href="#">
            <div
              class="catagory"
              onClick={() => navigate(`/products/${item.id}`)}
            >
              READ <i class="fas fa-film"></i>
            </div>
          </a>
          <a href="#">
            <div class="views">
              20211 <i class="far fa-eye"></i>{" "}
            </div>
          </a>
        </a>
      </div>
    </div>
  );
};

export default ProductCard2;
