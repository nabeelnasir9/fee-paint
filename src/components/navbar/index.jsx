/* eslint-disable react/prop-types */
import { IoCartOutline } from "react-icons/io5";
import Logo from "./../../assets/logo.png";
import Grid from "@mui/material/Grid";
import "./index.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Navbar = ({ contact }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-main">
          <Grid container spacing={0}>
            <Grid item xs={1} sm={1} md={1} lg={1} xl={2}></Grid>
            <Grid item xs={10} sm={10} md={10} lg={10} xl={8}>
              <div className="navbar-inner">
                <Button
                  variant="text"
                  className="navbar-logo-main"
                  onClick={() => navigate("/")}
                >
                  <img src={Logo} className="navbar-logo" alt="Logo" />
                </Button>
                <div className="flex gap-4 items-center justify-center">
                  <Button
                    variant="text"
                    className="home-generate-btn gap-2"
                    onClick={() => navigate("/track-your-order")}
                  >
                    Track Order
                  </Button>
                  {contact ? (
                    <Button
                      variant="text"
                      className="home-generate-btn"
                      onClick={() => navigate("/contact-us")}
                    >
                      Contact
                    </Button>
                  ) : (
                    <Button
                      variant="text"
                      className="home-generate-btn gap-2"
                      onClick={() => navigate("/cart")}
                    >
                      <IoCartOutline size={20} />
                      Cart
                    </Button>
                  )}
                </div>
              </div>
            </Grid>
            <Grid item xs={1} sm={1} md={1} lg={1} xl={2}></Grid>
          </Grid>
        </div>
      </div>

      {/* Announcement Banner */}
      <div className="bg-[#587CDD] px-4 py-3 text-white mt-[75px]">
        <p className="text-center text-md font-bold">
          Hurry! First 100 Orders Get a Premium Paint Brush Free – Don’t Miss Out!
        </p>
      </div>
    </>
  );
};

export default Navbar;
