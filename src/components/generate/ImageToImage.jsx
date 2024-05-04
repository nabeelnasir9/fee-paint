import { BsImageAlt } from "react-icons/bs";
import HelpIcon from "../../assets/svg/help.svg";
import { useState, useContext } from "react";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import { chooseStyleList } from "../../utils/Utils";
import { AuthContext } from "../../config/AuthContext";

const ImageToImage = () => {
  const [imagesToMake, setImagesToMake] = useState(1);
  const [selectedDimension, setSelectedDimension] = useState("8:11");
  const { imageStyle, setImageStyle } = useContext(AuthContext);
  const handleChangeImages = (event) => {
    let inputValue = event.target.value;
    inputValue = inputValue.replace(/\D/g, "");
    if (
      inputValue !== "" &&
      (parseInt(inputValue) < 1 || parseInt(inputValue) > 10)
    ) {
      inputValue = "";
    }
    setImagesToMake(inputValue);
  };
  return (
    <>
      <label className="generate-upload-button">
        <input type="file" hidden />

        <BsImageAlt />
      </label>
      <div className="generate-style-header">
        <Button variant="text" className="generate-style-header-btn">
          Choose Style
        </Button>
      </div>
      <Grid container spacing={1.5}>
        {chooseStyleList.map((v) => {
          return (
            <Grid item key={v.id} xs={6} sm={3} md={3} lg={3} xl={3}>
              <div className="generate-photo-general-1-main">
                <Button
                  variant="text"
                  onClick={() => setImageStyle(v.id)}
                  className={
                    imageStyle === v.id
                      ? "generate-selected-style"
                      : "generate-un-selected-style"
                  }
                >
                  <img src={v.url} alt={v.title} />
                </Button>
                <p>{v.title}</p>
              </div>
            </Grid>
          );
        })}
      </Grid>
      <div className="generate-make-main">
        <p>Images To Make</p>
        <div>
          <input
            placeholder="max 10"
            value={imagesToMake}
            onChange={handleChangeImages}
          />
        </div>
      </div>
      <div className="generate-dimensions-main">
        <div>
          <p>Dimensions</p>
          <Button variant="text" className="generate-help-btn">
            <img src={HelpIcon} alt="Help Icon" />
          </Button>
        </div>
        <select
          value={selectedDimension}
          onChange={(e) => setSelectedDimension(e.target.value)}
        >
          <option value="8:11">Small</option>
          <option value="15:19">Medium</option>
          <option value="1:2">Large</option>
        </select>
      </div>
      <Button
        variant="text"
        className="generate-left-gen-btn"
        onClick={() => {}}
      >
        Generate
      </Button>
    </>
  );
};

export default ImageToImage;
