import React from "react";
import Grid from "@mui/material/Grid";
import "./index.css";
import GenerateImage1 from "./../../../assets/svg/generate-image-1.svg";
import GenerateImage2 from "./../../../assets/svg/generate-image-2.svg";
const GenerateImagesFromText = () => {
  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={1} sm={1} md={2} lg={3} xl={3}></Grid>
        <Grid xs={10} sm={10} md={8} lg={6} xl={6}>
          <p className="gen-img-from-txt-heading">
            How to generate images from text:
          </p>
          <Grid container spacing={10}>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <div className="gen-img-from-txt-card">
                <img src={GenerateImage1} className="gen-img-from-txt-img" />
                <h1>Type a prompt</h1>
                <p>
                  Type a word or set of words on the text field. You can combine
                  several words with or without commas.
                </p>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <div className="gen-img-from-txt-card">
                <img src={GenerateImage2}  className="gen-img-from-txt-img"/>
                <h1>Generate image</h1>
                <p>
                  Click on ‘Generate Image’ and watch pictures appear on your
                  screen based on your text!
                </p>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1} sm={1} md={2} lg={3} xl={3}></Grid>
      </Grid>
    </div>
  );
};
export default GenerateImagesFromText;
