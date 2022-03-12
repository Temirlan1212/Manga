import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../../contexts/ProductContext";
import "./Style.css";
import pic1 from "../../../assets/back2.avif";
import pic2 from "../../../assets/back2.avif";

const Section1 = () => {
  const [color, setColor] = useState("black");

  const { id } = useParams();
  const { getProductDetails, share, def } = useProducts();
  console.log(share);

  useEffect(() => {
    getProductDetails(id);
  }, [id]);

  return (
    <>
      <div
        class="movie_card"
        id="ave"
        style={{ marginBottom: "20px", marginTop: "20px", margin: "10px auto" }}
      >
        <div
          class="info_section"
          style={{
            // color
            //   ? {
            //       background:
            //         "linear-gradient(to right, #000000 50%, transparent 100%)",
            //     }
            //   : {
            //       background:
            //         "linear-gradient(to right, rgba(169, 54, 0 ) 50%, transparent 100%)",
            //     }

            background: `linear-gradient(to right, ${color} 3%,  transparent 100%)`,
          }}
        >
          <div class="movie_header">
            <img className="locandina" />
            <img
              class="locandina"
              src={
                def
                  ? share.picture2
                  : "https://www.nicepng.com/png/full/826-8266466_ykle-chibi-my-hero-academia-mangaka-drawing-chibi.png"
              }
            />
            <h1>Black Panther</h1>
            <h4>2018, Ryan Coogler</h4>
            <span class="minutes">134 min</span>
            <p class="type">Action, Adventure, Sci-Fi</p>
          </div>
          <div class="movie_desc">
            <p class="text">{share.description}</p>
          </div>
          <div class="movie_social">
            <ul>
              <li>
                <i class="material-icons">share</i>
              </li>
              <li>
                <i class="material-icons"></i>
              </li>
              <li>
                <i class="material-icons">chat_bubble</i>
              </li>

              <li>
                <Button
                  sx={{ color: "white" }}
                  onClick={() => setColor("rgba(169, 54, 0)")}
                >
                  brown
                </Button>
              </li>
              <li>
                <Button
                  sx={{ color: "white" }}
                  onClick={() => setColor("rgba(35, 87, 2)")}
                >
                  green
                </Button>
              </li>

              <li>
                <Button
                  sx={{ color: "white" }}
                  onClick={() => setColor("black")}
                >
                  black
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <div
          class="blur_back ave_back"
          style={{
            backgroundImage: def
              ? `url(${share.picture2})`
              : `url(https://www.nicepng.com/png/full/826-8266466_ykle-chibi-my-hero-academia-mangaka-drawing-chibi.png)`,

            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
    </>
  );
};

export default Section1;
