/* eslint-disable react/prop-types */
import { StyleList } from "../../utils/Utils";
import { AuthContext } from "../../config/AuthContext";
import { useContext } from "react";
import HelpIcon from "../../assets/svg/help.svg";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
const PaintGeneration = ({ handleGenerate }) => {
  const {
    selectedStyle,
    setSelectedStyle,
    imagesToMake,
    isPending,
    textAreaValue,
    setTextAreaValue,
    setImagesToMake,
    selectedDimension,
    setSelectedDimension,
  } = useContext(AuthContext);

  const handleTextAreaChange = (event) => {
    setTextAreaValue(event.target.value);
  };

  const handleChangeImages = (event) => {
    let inputValue = event.target.value;
    inputValue = inputValue.replace(/\D/g, "");
    if (
      inputValue !== "" &&
      (parseInt(inputValue) < 1 || parseInt(inputValue) > 8)
    ) {
      inputValue = "";
    }
    setImagesToMake(inputValue);
  };
  return (
    <div className="font-inter">
      <div className="generate-textarea">
        <textarea
          placeholder="What should AI paint?"
          value={textAreaValue}
          onChange={handleTextAreaChange}
        ></textarea>
      </div>
      <div className="generate-style-header">
        <Button variant="text" className="generate-style-header-btn">
          Choose Style
        </Button>
      </div>
      <Grid container spacing={1.5} className="flex gap-5 ml-1">
        {/* <div className="flex gap-10 ml-1"> */}
        {StyleList.map((v) => {
          return (
            <Grid item key={v.id} xs={4} sm={3} md={3} lg={3} xl={3}>
              <Button
                variant="text"
                onClick={() => setSelectedStyle(v.id)}
                className={
                  selectedStyle === v.id
                    ? "generate-selected-style"
                    : "generate-un-selected-style"
                }
              >
                <img src={v.img} className="object-cover" alt={v.title} />
              </Button>
              <p className="generate-selected-style-title">{v.title}</p>
            </Grid>
          );
        })}
        {/* </div> */}
      </Grid>
      <div className="generate-make-main">
        <p>Images To Make</p>
        <div>
          <input
            placeholder="max 8"
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
        disabled={isPending}
        className="generate-left-gen-btn"
        onClick={handleGenerate}
      >
        Generate
      </Button>
    </div>
  );
};

export default PaintGeneration;
