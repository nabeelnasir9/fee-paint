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
                My Paint Genie makes it easy for anyone to create beautiful
                paint-by-numbers kits from their own photos. The website uses
                smart technology to turn your pictures into fun painting
                projects. My Paint Genie makes art simple and fun for everyone
              </p>
              <h4 className="about-name font-semibold">Chris Y.</h4>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={1} sm={1} md={1} lg={1} xl={2}></Grid>
      </Grid>
    </div>
  );
};
export default About;
