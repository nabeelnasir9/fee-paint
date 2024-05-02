import { useEffect, useState } from "react";
import { Layout } from "../../components";
import Grid from "@mui/material/Grid";
import "./index.css";
import { Button } from "@mui/material";
import HelpIcon from "./../../assets/svg/help.svg";
import BlubIcon from "./../../assets/svg/blub.svg";
import StyleImage1 from "./../../assets/style-1.png";
import StyleImage2 from "./../../assets/style-2.png";
import StyleImage3 from "./../../assets/style-3.png";
import GalleryImage1 from "./../../assets/gallery-1.png";
import GalleryImage2 from "./../../assets/gallery-2.png";
import GalleryImage3 from "./../../assets/gallery-3.png";
import GalleryImage4 from "./../../assets/gallery-4.png";
import GalleryImage5 from "./../../assets/gallery-5.png";
import GalleryImage6 from "./../../assets/gallery-6.png";
import GalleryImage7 from "./../../assets/gallery-7.png";
import GalleryImage8 from "./../../assets/gallery-8.png";
import { BsImageAlt } from "react-icons/bs";
import { BsCart } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const Generate = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState("Paint Generation");
  const [selectedStyle, setSelectedStyle] = useState(0);
  const [imageStyle, setImageStyle] = useState(0);
  useEffect(() => {
    console.log("selectedStyle LOG:", selectedStyle);
    console.log("imageStyle LOG:", imageStyle);
  }, [selectedStyle, imageStyle]);

  const StyleList = [
    {
      img: StyleImage1,
      title: "Realistic",
    },
    {
      img: StyleImage2,
      title: "Cartoonish",
    },
    {
      img: StyleImage3,
      title: "Abstract",
    },
  ];
  const List = [
    GalleryImage1,
    GalleryImage2,
    GalleryImage3,
    GalleryImage4,
    GalleryImage5,
    GalleryImage6,
    GalleryImage7,
    GalleryImage8,
    GalleryImage5,
    GalleryImage6,
    GalleryImage7,
    GalleryImage8,
  ];
  const chooseStyleList = [
    {
      title: "Cartoon",
      url: "https://img.freepik.com/free-photo/people-making-hands-heart-shape-silhouette-sunset_53876-15987.jpg?size=626&ext=jpg&ga=GA1.1.1488620777.1712534400&semt=sph",
    },
    {
      title: "Anime",
      url: "https://static.vecteezy.com/system/resources/thumbnails/022/385/025/small_2x/a-cute-surprised-black-haired-anime-girl-under-the-blooming-sakura-ai-generated-photo.jpg",
    },
    {
      title: "Vintage",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ48n_iZbblN-8miARuLvlgpE95nQAn97t67PCS7cVwmg&s",
    },
    {
      title: "Comic Book",
      url: "https://preview.redd.it/seek-hyperreal-a-custom-model-for-hyper-realistic-v0-71k65ddlam3a1.jpg?width=640&crop=smart&auto=webp&s=75a5f53bd0943737db86fe0c7aede38cafc220e1",
    },
    {
      title: "Cyberpunk",
      url: "https://vradenburg.net/wp-content/uploads/2017/01/P1220026.jpg",
    },
    {
      title: "Fairy Tale",
      url: "https://thumbs.dreamstime.com/b/cinema-22717238.jpg",
    },
    {
      title: "Elf",
      url: "https://thumbs.dreamstime.com/b/cinema-22717238.jpg",
    },
    {
      title: "Oil Painting",
      url: "https://thumbs.dreamstime.com/b/cinema-22717238.jpg",
    },
  ];
  return (
    <Layout>
      <div className="gradient-bg-img">
        <Grid container spacing={0}>
          <Grid item xs={1} sm={1} md={1} lg={1} xl={2}></Grid>
          <Grid xs={10} sm={10} md={10} lg={10} xl={8}>
            <div className="pages-data-container">
              <Grid container spacing={5}>
                <Grid item xs={12} sm={12} md={5} lg={4} xl={4}>
                  <h1 className="generate-heading">My Paint Genie</h1>
                  <p className="generate-text">
                    My Paint Genie and images from text straight from your
                    browser
                  </p>
                  <div className="generate-left-box">
                    <div className="generate-left-btn-main">
                      <Button
                        variant="text"
                        className={
                          selectedType === "Paint Generation"
                            ? "generate-left-btn-sel"
                            : "generate-left-btn-un-sel"
                        }
                        onClick={() => setSelectedType("Paint Generation")}
                      >
                        Paint Generation
                      </Button>
                      <Button
                        variant="text"
                        className={
                          selectedType === "Image to Image"
                            ? "generate-left-btn-sel"
                            : "generate-left-btn-un-sel"
                        }
                        onClick={() => setSelectedType("Image to Image")}
                      >
                        Image to Image
                      </Button>
                    </div>
                    <div className="generate-idea-main">
                      <div>
                        <p>
                          {selectedType === "Paint Generation"
                            ? "What To Paint"
                            : "Upload Image"}
                        </p>
                        <Button variant="text" className="generate-help-btn">
                          <img src={HelpIcon} />
                        </Button>
                      </div>
                      <Button variant="text" className="generate-idea-btn">
                        <img src={BlubIcon} style={{ marginRight: "5px" }} />
                        AI ideas
                      </Button>
                    </div>

                    {selectedType === "Paint Generation" ? (
                      <>
                        <div className="generate-textarea">
                          <textarea placeholder="What should AI paint?"></textarea>
                        </div>
                        <div className="generate-style-header">
                          <Button
                            variant="text"
                            className="generate-style-header-btn"
                          >
                            Choose Style
                          </Button>
                        </div>
                        <Grid container spacing={1.5}>
                          {StyleList.map((v, i) => {
                            return (
                              <Grid
                                item
                                key={i}
                                xs={4}
                                sm={3}
                                md={3}
                                lg={3}
                                xl={3}
                              >
                                <Button
                                  variant="text"
                                  onClick={() => setSelectedStyle(i)}
                                  className={
                                    selectedStyle === i
                                      ? "generate-selected-style"
                                      : "generate-un-selected-style"
                                  }
                                >
                                  <img src={v.img} />
                                </Button>
                                <p className="generate-selected-style-title">
                                  {v.title}
                                </p>
                              </Grid>
                            );
                          })}
                        </Grid>
                      </>
                    ) : (
                      <>
                        <label className="generate-upload-button">
                          <input type="file" hidden />

                          <BsImageAlt />
                        </label>
                        <div className="generate-style-header">
                          <Button
                            variant="text"
                            className="generate-style-header-btn"
                          >
                            Choose Style
                          </Button>
                        </div>
                        <Grid container spacing={1.5}>
                          {chooseStyleList.map((v, i) => {
                            return (
                              <Grid
                                item
                                key={i}
                                xs={6}
                                sm={3}
                                md={3}
                                lg={3}
                                xl={3}
                              >
                                <div className="generate-photo-general-1-main">
                                  <Button
                                    variant="text"
                                    onClick={() => setImageStyle(i)}
                                    className={
                                      imageStyle === i
                                        ? "generate-selected-style"
                                        : "generate-un-selected-style"
                                    }
                                  >
                                    <img src={v.url} />
                                  </Button>
                                  <p>{v.title}</p>
                                </div>
                              </Grid>
                            );
                          })}
                        </Grid>
                      </>
                    )}
                    <div className="generate-make-main">
                      <p>Images To Make</p>
                      <div>
                        <input placeholder="12" />
                      </div>
                    </div>
                    <div className="generate-dimensions-main">
                      <div>
                        <p>Dimensions</p>
                        <Button variant="text" className="generate-help-btn">
                          <img src={HelpIcon} />
                        </Button>
                      </div>
                      <select>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                      </select>
                    </div>
                    <Button
                      variant="text"
                      className="generate-left-gen-btn"
                      onClick={() => navigate("/payment")}
                    >
                      Generate
                    </Button>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={7} lg={8} xl={8}>
                  <div className="generate-right-sec">
                    <Grid container spacing={2}>
                      {List.map((v, i) => {
                        return (
                          <Grid item key={i} xs={6} sm={4} md={4} lg={3} xl={3}>
                            <div className="generate-right-card">
                              <img src={v} className="gallery-image" />
                              <div className="generate-right-card-inner">
                                <Button
                                  variant="text"
                                  className="generate-add-cart-btn"
                                  onClick={() => navigate("/payment")}
                                >
                                  <BsCart style={{ marginRight: "5px" }} />
                                  Add Cart
                                </Button>
                              </div>
                            </div>
                          </Grid>
                        );
                      })}
                    </Grid>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1} xl={2}></Grid>
        </Grid>
      </div>
    </Layout>
  );
};
export default Generate;
