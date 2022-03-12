import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
} from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

import React, { useState } from "react";
import { useProducts } from "../../contexts/ProductContext";

const SideBar = () => {
  const [filter, setFilter] = useState(true);
  const { fetchByParams } = useProducts();
  return (
    <>
      {filter ? (
        <Grid>
          <Paper sx={{ background: "transparent", boxShadow: "none" }}>
            <Button
              value="fantasy"
              onClick={(e) => fetchByParams("type", e.target.value)}
              label="fantasy"
              sx={{ display: "inline-block", fontWeight: 900, color: "brown" }}
              variant="standard"
            >
              fantasy
            </Button>
            <Button
              value="comedian"
              onClick={(e) => fetchByParams("type", e.target.value)}
              label="comedian"
              sx={{ display: "inline-block", fontWeight: 900, color: "brown" }}
            >
              comedian
            </Button>
            <Button
              value="daily-life"
              onClick={(e) => fetchByParams("type", e.target.value)}
              label="юбки"
              sx={{ display: "inline-block", fontWeight: 900, color: "brown" }}
            >
              daily-life
            </Button>
            <Button
              value="sport"
              onClick={(e) => fetchByParams("type", e.target.value)}
              label="sport"
              sx={{ display: "inline-block", fontWeight: 900, color: "brown" }}
            >
              sport
            </Button>

            <Button
              value="romantic"
              onClick={(e) => fetchByParams("type", e.target.value)}
              label="romantic"
              sx={{ display: "inline-block", fontWeight: 900, color: "brown" }}
            >
              romantic
            </Button>
            <Button
              value="all"
              onClick={(e) => fetchByParams("type", e.target.value)}
              label="все"
              sx={{ display: "inline-block", fontWeight: 900, color: "brown" }}
            >
              all
            </Button>
          </Paper>
        </Grid>
      ) : (
        ""
        // <Button onClick={() => setFilter(true)} sx={{ position: "relative" }}>
        //   <FilterAltIcon color="secondary" sx={{ position: "absolute" }} />
        // </Button>
      )}
    </>
  );
};

export default SideBar;
