import React from "react";
import "./index.css";
import Grid from "@mui/material/Grid";
import Logo from "./../../assets/logo.png";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Payment1 from "./../../assets/svg/footer-payment-1.svg";
import Payment2 from "./../../assets/svg/apple-pay.svg";
import Payment3 from "./../../assets/svg/diners-club.svg";
import Payment4 from "./../../assets/svg/discover.svg";
import Payment5 from "./../../assets/svg/paypal-2.svg";
import Payment6 from "./../../assets/svg/google-pay.svg";
import Payment7 from "./../../assets/svg/mastercard.svg";
import Payment8 from "./../../assets/svg/paypal.svg";
import Payment9 from "./../../assets/svg/shop.svg";
import Payment10 from "./../../assets/svg/v.svg";
import Payment11 from "./../../assets/svg/visa-footer.svg";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="footer-container">
      <div className="footer-container-inner">
        <Grid container spacing={0}>
          <Grid item xs={1} sm={1} md={1} lg={1} xl={2}></Grid>
          <Grid xs={10} sm={10} md={10} lg={10} xl={8}>
            <Grid container spacing={5}>
              <Grid item xs={12} sm={8} md={4} lg={4} xl={4}>
                <Button
                  variant="text"
                  className="footer-logo"
                  onClick={() => navigate("/")}
                >
                  <img src={Logo} />
                </Button>
                <p className="footer-text">
                  Step into <span>My Paint Genie</span>, where we turn memories
                  into paint-by-numbers magic. Experience art's enchantment for
                  all, from novice to expert.
                </p>
                <a href="mailto:info@mypaintgenie.com" className="footer-email">
                  <MdEmail style={{ marginRight: "5px" }} />{" "}
                  info@mypaintgenie.com
                </a>
              </Grid>
              <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                <h4 className="footer-heading">QUICK LINKS</h4>
                <Link to='/faqs' className="footer-link">FAQs</Link>
                <Link to='/contact-us' className="footer-link">CONTACT US</Link>
                <Link to="/refund-policy" className="footer-link">
                  REFUND POLICY
                </Link>
                <Link to="/privacy-policy" className="footer-link">
                  PRIVACY POLICY
                </Link>
                <Link to="/terms-conditions" className="footer-link">
                  TERMS OF SERVICE
                </Link>
              </Grid>
              <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                <h4 className="footer-heading">LET'S STAY IN TOUCH</h4>
                <p className="footer-form-text">
                  Signup for our newsletter and get the latest news, updatesand
                  special offers.
                </p>
                <form>
                  <div className="footer-input-main">
                    <input
                      type="text"
                      name="name"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div className="footer-input-main">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your email"
                      required
                    />
                  </div>
                  <button className="footer-subscribe-btn">
                    <MdEmail style={{ marginRight: "5px" }} />
                    Subscribe
                  </button>
                </form>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1} xl={2}></Grid>
        </Grid>
      </div>
      <div className="sub-footer">
        <Grid container spacing={0}>
          <Grid item xs={1} sm={1} md={1} lg={1} xl={2}></Grid>
          <Grid xs={10} sm={10} md={10} lg={10} xl={8}>
            <div className="sub-footer-inner">
              <p>Copyright © 2024 MyPaintGenie | All Rights Reserved</p>
              <div>
                <Button variant="text" className="footer-payment-btn">
                  <img src={Payment1} />
                </Button>
                <Button variant="text" className="footer-payment-btn">
                  <img src={Payment2} />
                </Button>
                {/* <Button variant="text" className="footer-payment-btn">
                  <img src={Payment3} />
                </Button> */}
                {/* <Button variant="text" className="footer-payment-btn">
                  <img src={Payment4} />
                </Button> */}
                {/* <Button variant="text" className="footer-payment-btn">
                  <img src={Payment5} />
                </Button> */}
                {/* <Button variant="text" className="footer-payment-btn">
                  <img src={Payment6} />
                </Button> */}
                <Button variant="text" className="footer-payment-btn">
                  <img src={Payment7} />
                </Button>
                <Button variant="text" className="footer-payment-btn">
                  <img src={Payment8} />
                </Button>
                {/* <Button variant="text" className="footer-payment-btn">
                  <img src={Payment9} />
                </Button> */}
                {/* <Button variant="text" className="footer-payment-btn">
                  <img src={Payment10} />
                </Button> */}
                <Button variant="text" className="footer-payment-btn">
                  <img src={Payment11} />
                </Button>
              </div>
            </div>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1} xl={2}></Grid>
        </Grid>
      </div>
    </div>
  );
};
export default Footer;
