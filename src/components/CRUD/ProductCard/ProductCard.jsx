import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useProducts } from "../../../contexts/ProductContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import { ADMIN } from "../../../helpers/consts";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IconButton } from "@mui/material";
import classes from "../ProductCard/ProductCard.module.css";

export default function MediaCard({ item }) {
  const {
    deleteProduct,
    addProductToCart,
    checkProductInCart,
    changeProductCount,
    cart,
  } = useProducts();
  const {
    user: { email },
  } = useAuth();

  const navigate = useNavigate();

  return (
    <Card
      sx={{
        maxWidth: 400,
        marginTop: 5,
        boxShadow: "none",
        background: "rgba(255, 255, 255, 0.9)",
        border: "1px solid #616161",
      }}
    >
      <CardMedia
        onClick={() => navigate(`/products/${item.id}`)}
        className={classes.CardMedia}
        component="img"
        height="250px"
        image={item.picture}
        sx={{ opacity: "90%", width: "250px" }}
      />
      <CardContent sx={{ background: "" }}>
        <Typography gutterBottom variant="h4" component="div" color="#616161">
          {item.name}
        </Typography>
        <Typography variant="h6" color="#616161">
          {/* {item.description} */}
        </Typography>
        <Typography variant="h6" color="#616161">
          {item.phone}
        </Typography>
      </CardContent>
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
          <IconButton onClick={() => addProductToCart(item)}>
            <ShoppingCartIcon
              sx={{ color: "black" }}
              color={checkProductInCart(item.id) ? "secondary" : ""}
            />
          </IconButton>
        )}
      </CardActions>
    </Card>
  );
}
