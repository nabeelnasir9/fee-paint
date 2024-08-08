import { useState, useContext } from "react";
import ImageToImage from "../../components/generate/ImageToImage";
import PaintGeneration from "../../components/generate/PaintGeneration";
import Loader from "../../components/loader";
import { Layout } from "../../components";
import Grid from "@mui/material/Grid";
import toast from "react-hot-toast";
import "./index.css";
import { Button } from "@mui/material";
import HelpIcon from "./../../assets/svg/help.svg";
import BlubIcon from "./../../assets/svg/blub.svg";
import { BsCart } from "react-icons/bs";
import { AuthContext } from "../../config/AuthContext";
import { StyleList } from "../../utils/Utils";
import MysteryPaintModal from "../../components/MysteryPaintModal/MysteryPaintModal";
import { useNavigate } from "react-router-dom";
import ReactGA from "react-ga4";
import mixpanel from "mixpanel-browser";
import {
  trackAddToCart,
  trackGenerateButtonClicked,
} from "../../tracking/MetaEvents.js";
// import { fetchData } from "./apiService.js";

const Generate = () => {
  const {
    selectedType,
    setSelectedType,
    selectedStyle,
    setOrders,
    mutate,
    // setResults,
    // setResults2,
    isPending,
    results,
    textAreaValue,
    selectedDimension,
    imgtoImgMutation,
    imagesToMake,
    results2,
    selectedItem,
    setSelectedItem,
    setMysteryPaintKit,
  } = useContext(AuthContext);

  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {
  //   fetchData().then((data) => {
  //     if (selectedType === "Paint Generation") {
  //       setResults(data);
  //     } else {
  //       setResults2(data);
  //     }
  //   });
  // }, [selectedType, setResults, setResults2]);

  const handleGenerate = () => {
    ReactGA.event({
      category: "Generate Button Click",
      action: "Generate Button Click",
      label: "Generate Button",
    });
    // Track meta generate button
    trackGenerateButtonClicked();

    // Track in mixpanel
    mixpanel.track("Generate Button Clicked");

    const selectedStyles = StyleList.filter((style) =>
      selectedStyle.includes(style.id),
    );
    const selectedStyleTitles =
      selectedStyles.length > 0 ? selectedStyles[0].title : "";
    mutate({
      selectedstyle: selectedStyleTitles,
      prompt: textAreaValue,
      dimensions: selectedDimension,
      images: imagesToMake,
    });
  };

  const addToCart = (v, i) => {
    // Track add to cart for meta pixel
    trackAddToCart();
    // track add to cart in mixpanel
    mixpanel.track("Add to cart");

    setSelectedItem(v);
    setModalOpen(true);
    navigate("/product", {
      state: { index: i },
    });
  };

  const handleModalConfirm = (size, updateMysteryKit) => {
    if (selectedItem) {
      setOrders((prevOrders) => {
        const alreadyInCart = prevOrders.some(
          (item) => item.uri === selectedItem.uri,
        );

        if (alreadyInCart) {
          // toast.error("Already in cart");
          return prevOrders;
        }
        toast.success("Added to cart!");
        return [
          ...prevOrders,
          { uri: selectedItem.uri, size: selectedItem.size },
        ];
      });
      if (updateMysteryKit) {
        setMysteryPaintKit(size);
      }
    }
    setModalOpen(false);
  };

  return (
    <Layout>
      <div className="gradient-bg-img font-inter">
        <Grid container spacing={0}>
          <Grid item xs={1} sm={1} md={1} lg={1} xl={2}></Grid>
          <Grid xs={10} sm={10} md={10} lg={10} xl={8}>
            <div className="pages-data-container animate-fade-up">
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
                          <img src={HelpIcon} alt="Help Icon" />
                        </Button>
                      </div>
                      <Button variant="text" className="generate-idea-btn">
                        <img
                          src={BlubIcon}
                          alt="Blub Icon"
                          style={{ marginRight: "5px" }}
                        />
                        AI ideas
                      </Button>
                    </div>

                    {selectedType === "Paint Generation" ? (
                      <PaintGeneration handleGenerate={handleGenerate} />
                    ) : (
                      <ImageToImage />
                    )}
                  </div>
                </Grid>
                {selectedType === "Paint Generation" ? (
                  <Grid item xs={12} sm={12} md={7} lg={8} xl={8}>
                    <div className="generate-right-sec">
                      {isPending ? (
                        <Loader />
                      ) : (
                        <Grid container spacing={2}>
                          {results?.map((v, i) => {
                            return (
                              <Grid
                                className="animate-fade animate-duration-500"
                                item
                                key={i}
                                xs={6}
                                sm={4}
                                md={4}
                                lg={3}
                                xl={3}
                              >
                                <div className="generate-right-card">
                                  <img
                                    src={v?.uri}
                                    className="gallery-image cursor-pointer"
                                    onContextMenu={(e) => e.preventDefault()}
                                    alt="Gallery"
                                  />
                                  <div className="generate-right-card-inner">
                                    <Button
                                      variant="text"
                                      className="generate-add-cart-btn"
                                      onClick={() => addToCart(v, i)}
                                    >
                                      <BsCart style={{ marginRight: "5px" }} />
                                      Add to Cart
                                    </Button>
                                  </div>
                                </div>
                              </Grid>
                            );
                          })}
                        </Grid>
                      )}
                    </div>
                  </Grid>
                ) : (
                  <Grid item xs={12} sm={12} md={7} lg={8} xl={8}>
                    <div className="generate-right-sec animate-fade animate-duration-500">
                      {imgtoImgMutation.isPending ? (
                        <Loader />
                      ) : (
                        <Grid container spacing={2}>
                          {results2?.map((v, i) => {
                            return (
                              <Grid
                                className="animate-fade animate-duration-500"
                                item
                                key={i}
                                xs={6}
                                sm={4}
                                md={4}
                                lg={3}
                                xl={3}
                              >
                                <div className="generate-right-card">
                                  <img
                                    src={v?.uri}
                                    className="gallery-image cursor-pointer"
                                    alt="Gallery"
                                    onContextMenu={(e) => e.preventDefault()}
                                  />
                                  <div className="generate-right-card-inner">
                                    <Button
                                      variant="text"
                                      className="generate-add-cart-btn"
                                      onClick={() => addToCart(v, i)}
                                    >
                                      <BsCart style={{ marginRight: "5px" }} />
                                      Add to Cart
                                    </Button>
                                  </div>
                                </div>
                              </Grid>
                            );
                          })}
                        </Grid>
                      )}
                    </div>
                  </Grid>
                )}
              </Grid>
            </div>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1} xl={2}></Grid>
        </Grid>
      </div>
      <MysteryPaintModal
        open={modalOpen}
        handleClose={() => setModalOpen(false)}
        onConfirm={handleModalConfirm}
      />
    </Layout>
  );
};

export default Generate;
