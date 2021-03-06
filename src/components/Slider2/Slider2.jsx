import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import { ADMIN } from "../../helpers/consts";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useProducts } from "../../contexts/ProductContext";
import Item from "./Item2";
import "./Slider2.css";

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const itemsToShow = 5;
const getMid = () => Math.ceil(itemsToShow / 2) - 1; // 0 based
function Slider2() {
  const {
    user: { email },
  } = useAuth();

  const navigate = useNavigate();

  const [midItemIndex, setMidItemIndex] = useState(getMid);
  const { products, handleEdit, setDef, productDetails } = useProducts();

  const [prod, setProd] = useState(products);

  const onChange = (_, next) => {
    const mid = getMid();
    setMidItemIndex(mid + next.index);
  };

  const handleRec = (id, type) => {
    let newProduct = products.filter((item) => {
      return item.id !== id;
    });

    setProd(newProduct);
  };

  return (
    <Box
      sx={{
        maxWidth: { lg: "1300px", sm: "1000px", md: "1200px" },

        margin: "0 auto",
      }}
    >
      <center>
        <Button
          onClick={() => handleRec(productDetails.id, productDetails.mainType)}
        >
          show the reccomandation
        </Button>
      </center>

      <Carousel
        itemsToShow={itemsToShow}
        onNextStart={onChange}
        onPrevStart={onChange}
      >
        {prod.map((item, index) => (
          <Item
            onClick={() => handleEdit(index)}
            className="Slider_Item"
            style={{
              background: "transparent",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              borderRadius: "10px",
            }}
            key={item}
          >
            <img
              src={item.picture}
              style={{
                width: "210px",
                height: "200px",
                display: "flex",
                margin: "0 auto",
              }}
            />
            {email === ADMIN ? (
              <center>
                {" "}
                <Button
                  onClick={() => setDef(true)}
                  sx={{ fontWeight: 900, color: "#616161" }}
                >
                  read
                </Button>
                <Button
                  size="small"
                  onClick={() => navigate(`/edit/${item.id}`)}
                  sx={{ fontWeight: 900, color: "#616161" }}
                >
                  EDIT
                </Button>
              </center>
            ) : (
              ""
              // <IconButton onClick={() => addProductToCart(item)}>
              //   <ShoppingCartIcon
              //     color={checkProductInCart(item.id) ? "secondary" : ""}
              //   />
              // </IconButton>
            )}
          </Item>
        ))}
      </Carousel>
    </Box>
  );
}

const rootElement = document.getElementById("root");

export default Slider2;
