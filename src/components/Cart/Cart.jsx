import { Button } from "@mui/material";
import * as React from "react";
import { Link } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContext";
import "./Cart.css";

export default function Cart() {
  const { cart, getCart, changeProductCount, deleteCartProducts } =
    useProducts();

  return (
    <>
      {cart.products.map((row) => (
        <>
          <main style={{ minHeight: "800px" }}>
            <div class="card">
              <div class="card-left">
                <div>
                  {" "}
                  <img
                    src={row.item.picture}
                    alt=""
                    style={{ maxWidth: "300px", maxHeight: "500px" }}
                  />
                </div>
              </div>
              <div class="card-right">
                <div class="card-title fw-7">{row.item.name}</div>
                <div class="card-text fw-5">{row.item.description}</div>
                <div class="card-right-body">
                  <div class="card-rb-1">
                    <img src={row.item.picture} alt="" />
                  </div>
                  <div class="card-rb-2">
                    <div class="card-rb-2-title fw-7">
                      {" "}
                      <Button
                        onClick={() => deleteCartProducts(row.item.id)}
                        sx={{ color: "hsl(217, 19%, 35%)", fontWeight: 600 }}
                      >
                        Delete
                      </Button>
                      <Link to="/products">
                        <Button
                          onClick={() => deleteCartProducts(row.item.id)}
                          sx={{ color: "hsl(217, 19%, 35%)", fontWeight: 600 }}
                        >
                          read
                        </Button>
                      </Link>
                    </div>
                    <div class="card-rb-2-text fw-5">{row.item.price}</div>
                  </div>
                  <div class="card-rb-3">
                    <div class="card-rb-3-inner"></div>
                    <div class="card-rb-3-inner-before">
                      <div class="before-1">SHARE</div>
                      <div class="before-2">
                        <a src="https://ru-ru.facebook.com/">
                          <img
                            src="https://rvs-article-preview-component.netlify.app/images/icon-facebook.svg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div class="before-3">
                        <img
                          src="https://rvs-article-preview-component.netlify.app/images/icon-twitter.svg"
                          alt=""
                        />
                      </div>
                      <div class="before-4">
                        <img
                          src="https://rvs-article-preview-component.netlify.app/images/icon-pinterest.svg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </>
      ))}
    </>
  );
}
