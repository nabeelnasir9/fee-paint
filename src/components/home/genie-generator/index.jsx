import Grid from "@mui/material/Grid";
import GenieGeneratorImage from "./../../../assets/genie-generator-img.png";
import "./index.css";
const GenieGenerator = () => {
  return (
    <div className="genie-generator-container">
      <Grid container spacing={0}>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={2}></Grid>
        <Grid item xs={10} sm={10} md={10} lg={10} xl={8}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={7} xl={7}>
              <h1 className="genie-generator-heading">
                Free online My Paint Genie generator
              </h1>
              <p className="genie-generator-text">
                My Paint Genie image creator works straight from your browser;
                no need to download or install an app! Type a word or a set of
                words and watch an AI-generated image appear on your screen.
                It’s free to use; no credit card or subscription is required.
                Let Paint Genie automatically create images for you. Get as
                creative as you want and post them on social media! Share with
                your friends or use them for your own art.
              </p>
            </Grid>
            <Grid item xs={12} sm={12} md={1} lg={1} xl={1}></Grid>
            <Grid item xs={12} sm={12} md={5} lg={4} xl={4}>
              <img src={GenieGeneratorImage} className="genie-generator-img" />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={1} sm={1} md={1} lg={1} xl={2}></Grid>
      </Grid>
    </div>
  );
};
export default GenieGenerator;
