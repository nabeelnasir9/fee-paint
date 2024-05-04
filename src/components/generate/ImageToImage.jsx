import Accept from "../dropzone";
import HelpIcon from "../../assets/svg/help.svg";
import { useContext } from "react";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import { chooseStyleList } from "../../utils/Utils";
import { AuthContext } from "../../config/AuthContext";

const ImageToImage = () => {
  const {
    imageStyle,
    setImageStyle,
    selectedDimension2,
    setSelectedDimension2,
    imagesToMake2,
    imgtoImgMutation,
    setImagesToMake2,
    uploadImage,
  } = useContext(AuthContext);

  const handleGenerate = () => {
    try {
      const imageStyles = chooseStyleList.filter((style) =>
        imageStyle.includes(style.id),
      );
      const imageStylesTitle =
        imageStyles.length > 0 ? imageStyles[0].title : "";

      imgtoImgMutation.mutate({
        imgUrl: uploadImage,
        style: imageStylesTitle,
      });
    } catch (error) {
      console.log(error);
    }
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
    setImagesToMake2(inputValue);
  };
  return (
    <>
      <Accept />
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
                  <img src={v.url} alt={v.title} className="object-cover" />
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
            placeholder="max 8"
            value={imagesToMake2}
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
          value={selectedDimension2}
          onChange={(e) => setSelectedDimension2(e.target.value)}
        >
          <option value="8:11">Small</option>
          <option value="15:19">Medium</option>
          <option value="1:2">Large</option>
        </select>
      </div>
      <Button
        variant="text"
        className="generate-left-gen-btn"
        onClick={handleGenerate}
      >
        Generate
      </Button>
    </>
  );
};

export default ImageToImage;
