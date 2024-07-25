import React from "react";
import Grid from "@mui/material/Grid";
import SectionIcon from "./../../../assets/svg/section.svg";
import "./index.css";
const About = () => {
  return (
    <div className="genie-generator-container">
      <Grid container spacing={0}>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={2}></Grid>
        <Grid item xs={10} sm={10} md={10} lg={10} xl={8}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={5} lg={4} xl={4}>
              <img src={SectionIcon} />
              <p className="about-text">What they say about My Paint Genie</p>
            </Grid>
            <Grid item xs={12} sm={12} md={1} lg={1} xl={1}></Grid>
            <Grid item xs={12} sm={12} md={6} lg={7} xl={7}>
              <p className="genie-generator-text">
                Paint Genie is a great piece of browser software with the best team
                I've ever seen. My Paint Genie allows for subtitling, editing,
                effect/text encoding, and many more advanced features that other
                editors just can't compete with. The free version is wonderful,
                but the Pro version is beyond perfect. Keep in mind that this a
                browser editor we're talking about and the level of quality that
                My Paint Genie allows is stunning and a complete game changer at
                worst.
              </p>
              <h4 className="about-name">Chris Y.</h4>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={1} sm={1} md={1} lg={1} xl={2}></Grid>
      </Grid>
    </div>
  );
};
export default About;
