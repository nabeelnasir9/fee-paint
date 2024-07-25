import React from "react";
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
          <h1 className="img-art-gen-heading">
            More than an AI image and art generator
          </h1>
          <p className="img-art-gen-text">
            My Paint Genie is much more than just an AI picture generator. Apart
            from letting you download AI generated images in seconds, you can
            use our built-in video editing app to create videos from your
            photos. You can even edit audio content. It’s a complete
            professional video-editing software that lets you create stunning
            videos in just minutes. You don’t need any video editing experience.
            Plus, you can make use of our video templates; create videos for
            your business or personal use. Try Paint Genie today and experience the
            power of AI—for images, videos, and audio!
          </p>
          <div className="img-art-gen-btn-main">
            <Button variant="text" className="img-art-gen-btn" onClick={()=> navigate("/generate")}>
              Generate
              <IoArrowForwardCircleSharp className="img-art-gen-btn-icon" />
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
