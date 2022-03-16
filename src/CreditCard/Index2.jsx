import React from "react";
import { render } from "react-dom";
import Card from "react-credit-cards";

import SupportedCards from "../CreditCard/Cards";
import { FormControl } from "@mui/material";

import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
  formatFormData,
} from "../CreditCard/utils";
import styles from "../CreditCard/styles.css";

import "react-credit-cards/es/styles-compiled.css";
import { Button, FormGroup, TextField } from "@mui/material";
import { Box } from "@mui/system";

import Input from "@mui/material/Input";

export default class App extends React.Component {
  state = {
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    issuer: "",
    focused: "",
    formData: null,
  };

  handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      this.setState({ issuer });
    }
  };

  handleInputFocus = ({ target }) => {
    this.setState({
      focused: target.name,
    });
  };

  handleInputChange = ({ target }) => {
    if (target.name === "number") {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === "expiry") {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === "cvc") {
      target.value = formatCVC(target.value);
    }

    this.setState({ [target.name]: target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { issuer } = this.state;
    const formData = [...e.target.elements]
      .filter((d) => d.name)
      .reduce((acc, d) => {
        acc[d.name] = d.value;
        return acc;
      }, {});

    this.setState({ formData });
    this.form.reset();
  };

  render() {
    const { name, number, expiry, cvc, focused, issuer, formData } = this.state;

    return (
      <center>
        <Box
          className="App-payment"
          sx={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "500px",
            border: "1px solid grey",
            maxHeight: "500px",
            margin: "auto 0",
          }}
        >
          <Card
            number={number}
            name={name}
            expiry={expiry}
            cvc={cvc}
            focused={focused}
            callback={this.handleCallback}
          />
          <FormControl
            ref={(c) => (this.form = c)}
            onSubmit={this.handleSubmit}
          >
            <Input
              type="tel"
              name="number"
              className="form-control"
              placeholder="Card Number"
              pattern="[\d| ]{16,22}"
              required
              variant="standard"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />

            <TextField
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
              required
              variant="standard"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />

            <TextField
              type="tel"
              name="expiry"
              className="form-control"
              placeholder="Valid Thru"
              pattern="\d\d/\d\d"
              required
              variant="standard"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />

            <TextField
              type="tel"
              name="cvc"
              className="form-control"
              placeholder="CVC"
              pattern="\d{3,4}"
              required
              variant="standard"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />

            <input type="hidden" name="issuer" value={issuer} />

            <Button variant="outlined" className="btn btn-primary btn-block">
              PAY
            </Button>
          </FormControl>
          {formData && (
            <div className="App-highlight">
              {formatFormData(formData).map((d, i) => (
                <div key={i}>{d}</div>
              ))}
            </div>
          )}

          <hr style={{ margin: "60px 0 30px" }} />
          <div className="App-badges">
            {/* <a
              href="https://github.com/amarofashion/react-credit-cards"
              className="github__btn"
            >
              <img
                alt="View on GitHub"
                src="https://cdn.jsdelivr.net/gh/gilbarbara/logos@2017.12/logos/github-icon.svg"
              />
              <span>View on GitHub</span>
            </a> */}
          </div>
        </Box>
      </center>
    );
  }
}
