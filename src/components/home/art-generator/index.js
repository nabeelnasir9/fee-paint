import React from "react";
import Grid from "@mui/material/Grid";
import "./index.css";
const ArtGenerator = () => {
  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={2}></Grid>
        <Grid xs={10} sm={10} md={10} lg={10} xl={8}>
          <div className="art-generator-container">
            <p className="art-generator-heading">
              Get AI-generated images with My Paint Genie art generator
            </p>
            <Grid container spacing={5}>
              <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <p className="art-generator-text">
                  Automatically generate images from text online using VMy Paint
                  Genie’s powerful AI Image Generator! My Paint Genie uses
                  artificial intelligence software to produce images from text
                  straight from your browser. Just type a text prompt, click on
                  ‘Generate Image’, and watch images appear on your screen based
                  on your text!
                </p>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <p className="art-generator-text">
                  Get AI generated art, drawings, and text art in seconds. You
                  can keep refining your prompts until you get the art style
                  that you want. If you want, you can even{" "}
                  <span>create videos from the images you’ve created</span>{" "}
                  using My Paint Genie’s free built-in video editor; no need to
                  use a third-party app! Do everything on My Paint
                  Genie—straight from your browser. Our AI picture generator can
                  do it all!
                </p>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={2}></Grid>
      </Grid>
    </div>
  );
};
export default ArtGenerator;
