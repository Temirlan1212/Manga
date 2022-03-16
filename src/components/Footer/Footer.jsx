import React from "react";
import "./Footer.css";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";

const Footer = () => {
  return (
    <div>
      <footer>
        <div class="top_header">
          <section>
            <a href="https://goo.gl/maps/1bMA68zYPmJnqgA68">
              <span>
                <LocationOnIcon sx={{ color: "white" }} />
              </span>
              <span style={{ color: "white" }}>Adress</span>
            </a>
          </section>
          <section>
            <span>
              <LocalPhoneIcon sx={{ color: "white" }} />
            </span>
            <span style={{ color: "white" }}>0 771 53 96 10</span>
          </section>
          <section>
            <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">
              <span>
                <MailIcon sx={{ color: "white" }} />
              </span>
              <span style={{ color: "white" }}>info@websitename.com</span>
            </a>
          </section>
        </div>
        <span class="border-shape"></span>
        <div class="bottom_content">
          <section>
            <a href="https://ru-ru.facebook.com/">
              <FacebookIcon />
            </a>
            <a href="https://www.instagram.com/">
              <InstagramIcon />
            </a>
            <a href="https://twitter.com/?lang=ru">
              <TwitterIcon />
            </a>
            <a href="https://web.telegram.org/">
              <TelegramIcon />
            </a>
          </section>
          <section>
            <a href="#">Home</a>
            <a href="#">About us</a>
            <a href="#">Order</a>
            <a href="#">Retail</a>
            <a href="#">Member</a>
            <a href="#">Contact Us</a>
          </section>
        </div>
        <div class="copyright">
          Copyright © 2021 websitename - All rights reserved
        </div>
      </footer>
    </div>
  );
};

export default Footer;
