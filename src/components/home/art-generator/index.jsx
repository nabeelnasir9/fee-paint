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
              Here Are The 3 Main Reasons Why Everyone Loves Paint Genie
            </p>
            <Grid container spacing={5}>
              <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <div className="flex flex-col gap-2">
                  <h4 className=" text-2xl">Instant Results</h4>
                  <p className="art-generator-text">
                    Forget about waiting hours for your artwork to be ready.
                    With Paint Genie, you get professional-quality images
                    instantly. This means more time for creating and less time
                    for waiting
                  </p>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <div className="flex flex-col gap-2">
                  <h4 className=" text-2xl">Browser-Based Convenience</h4>
                  <p className="art-generator-text">
                    {" "}
                    No need for cumbersome downloads or additional software.
                    Paint Genie works directly from your browser, making it
                    accessible and convenient. You can create art anytime,
                    anywhere, without worrying about compatibility issues.
                  </p>
                </div>
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
