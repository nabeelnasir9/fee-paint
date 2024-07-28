import "./index.css";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import ScreenImage from "./../../../assets/screen.png";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const ImageArtGenerator = () => {
  const navigate = useNavigate();
  return (
    <div className="img-art-gen-container">
      <Grid container spacing={0}>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={2}></Grid>
        <Grid xs={10} sm={10} md={10} lg={10} xl={8}>
          <h1 className="img-art-gen-heading">Turn Images Into Cartoons!</h1>
          <p className="img-art-gen-text">
            When we said your ideas will come to life, we really meant it. You
            can upload your images and turn them into videos! My Paint Genie is
            more than an AI picture generator. Turn photos into cartoon versions
            or animated masterpieces. No experience is needed! Add effects,
            music, and transitions. In other words, it's so easy to use that
            even a 5-year-old or an 80-year-old grandma can have fun with it –
            true story: there's an 80-year-old grandma who loves generating
            images of her grandchildren in funny poses! Want to have a blast
            with friends by making unforgettable visuals or create hilarious
            images of your family in dinosaur costumes? It's all just one click
            away with My Paint Genie!
          </p>
          <div className="img-art-gen-btn-main">
            <Button variant="contained" onClick={() => navigate("/generate")}>
              Create Your First Cartoon !
            </Button>
          </div>
          <img src={ScreenImage} className="img-art-gen-img" />
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={2}></Grid>
      </Grid>
    </div>
  );
};
export default ImageArtGenerator;
