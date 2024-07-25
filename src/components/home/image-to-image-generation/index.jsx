import React from "react";
import Grid from "@mui/material/Grid";
import ImageToImageGenerationImage from "./../../../assets/image-to-image-generation-img.png";
const ImageToImageGeneration = () => {
  return (
    <div className="genie-generator-container">
      <Grid container spacing={0}>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={2}></Grid>
        <Grid item xs={10} sm={10} md={10} lg={10} xl={8}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={5} lg={4} xl={4}>
              <img
                src={ImageToImageGenerationImage}
                className="genie-generator-img"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={1} lg={1} xl={1}></Grid>
            <Grid item xs={12} sm={12} md={6} lg={7} xl={7}>
              <h1 className="genie-generator-heading">
                Image-to-image generation
              </h1>
              <p className="genie-generator-text">
                You don’t need to figure out complicated settings to use My
                Paint Genie generator. Just start typing and download your AI
                image once it’s generated. It’s that simple! The words can be as
                varied as you want. Paint Genie uses machine learning to refine results
                so you can keep typing different prompts until you’re happy with
                the image.
              </p>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={1} sm={1} md={1} lg={1} xl={2}></Grid>
      </Grid>
    </div>
  );
};
export default ImageToImageGeneration;
