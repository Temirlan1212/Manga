import { useScrollTrigger } from "@mui/material";
import React from "react";

const ScrollHandler = (props) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: props.window ? window() : undefined,
  });

  return React.cloneElement(props.children, {
    style: {
      backgroundColor: trigger ? "rgb(116, 40, 4)" : "rgb(116, 40, 4)",
      color: trigger ? "white" : "black",
      transition: trigger ? "0.3s" : "0.5s",
      boxShadow: "none",
      padding: "",
    },
  });
};

const ScrollToColor01 = (props) => {
  return <ScrollHandler {...props}>{props.children}</ScrollHandler>;
};

export default ScrollToColor01;
