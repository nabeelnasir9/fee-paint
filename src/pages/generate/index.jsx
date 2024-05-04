import { useState, useContext } from "react";
import Loader from "../../components/loader";
import axios from "axios";
import { Layout } from "../../components";
import toast from "react-hot-toast";
import Grid from "@mui/material/Grid";
import "./index.css";
import { Button } from "@mui/material";
import HelpIcon from "./../../assets/svg/help.svg";
import BlubIcon from "./../../assets/svg/blub.svg";
import { useMutation } from "@tanstack/react-query";

import { BsImageAlt } from "react-icons/bs";
import { BsCart } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../config/AuthContext";
import { StyleList, chooseStyleList, List } from "../../utils/Utils";

const Generate = () => {
  const navigate = useNavigate();
  const {
    selectedType,
    setSelectedType,
    selectedStyle,
    setSelectedStyle,
    imageStyle,
    setImageStyle,
    results,
    setResults,
  } = useContext(AuthContext);
  const [textAreaValue, setTextAreaValue] = useState("");
  const [imagesToMake, setImagesToMake] = useState(1);
  const [selectedDimension, setSelectedDimension] = useState("8:11");

  const handleTextAreaChange = (event) => {
    setTextAreaValue(event.target.value);
  };
  const { mutate, isPending } = useMutation({
    mutationKey: ["generate"],
    mutationFn: (data) => {
      return axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/generate/multi`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    },
    onSuccess: (data) => {
      setResults((prevData) => [...prevData, ...data.data]);
      toast.success("Image Generated Successfully");
    },
    onError: (error) => {
      console.error("Mutation error:", error);
    },
  });

  const handleGenerate = () => {
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
  // const handleGenerate = () => {
  //   const selectedStyles = StyleList.filter((style) =>
  //     selectedStyle.includes(style.id),
  //   );
  //   const selectedStyleTitles =
  //     selectedStyles.length > 0 ? selectedStyles[0].title : "";
  //   axios
  //     .post(
  //       `${import.meta.env.VITE_SERVER_URL}/api/generate/multi`,
  //       {
  //         selectedstyle: selectedStyleTitles,
  //         prompt: textAreaValue,
  //         dimensions: selectedDimension,
  //         images: imagesToMake,
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       },
  //     )
  //     .then((response) => {
  //       console.log("Response from server:", response.data);
  //       setResults(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // };

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
                      <>
                        <div className="generate-textarea">
                          <textarea
                            placeholder="What should AI paint?"
                            value={textAreaValue}
                            onChange={handleTextAreaChange}
                          ></textarea>
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
                          {StyleList.map((v) => {
                            return (
                              <Grid
                                item
                                key={v.id}
                                xs={4}
                                sm={3}
                                md={3}
                                lg={3}
                                xl={3}
                              >
                                <Button
                                  variant="text"
                                  onClick={() => setSelectedStyle(v.id)}
                                  className={
                                    selectedStyle === v.id
                                      ? "generate-selected-style"
                                      : "generate-un-selected-style"
                                  }
                                >
                                  <img src={v.img} alt={v.title} />
                                </Button>
                                <p className="generate-selected-style-title">
                                  {v.title}
                                </p>
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
                              onChange={(e) => setImagesToMake(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="generate-dimensions-main">
                          <div>
                            <p>Dimensions</p>
                            <Button
                              variant="text"
                              className="generate-help-btn"
                            >
                              <img src={HelpIcon} alt="Help Icon" />
                            </Button>
                          </div>
                          <select
                            value={selectedDimension}
                            onChange={(e) =>
                              setSelectedDimension(e.target.value)
                            }
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
                          {chooseStyleList.map((v) => {
                            return (
                              <Grid
                                item
                                key={v.id}
                                xs={6}
                                sm={3}
                                md={3}
                                lg={3}
                                xl={3}
                              >
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
                              onChange={(e) => setImagesToMake(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="generate-dimensions-main">
                          <div>
                            <p>Dimensions</p>
                            <Button
                              variant="text"
                              className="generate-help-btn"
                            >
                              <img src={HelpIcon} alt="Help Icon" />
                            </Button>
                          </div>
                          <select
                            value={selectedDimension}
                            onChange={(e) =>
                              setSelectedDimension(e.target.value)
                            }
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
                                    className="gallery-image"
                                    alt="Gallery"
                                  />
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
                      )}
                    </div>
                  </Grid>
                ) : (
                  <Grid item xs={12} sm={12} md={7} lg={8} xl={8}>
                    <div className="generate-right-sec">
                      <Grid container spacing={2}>
                        {List.map((v, i) => {
                          return (
                            <Grid
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
                                  src={v}
                                  className="gallery-image"
                                  alt="Gallery"
                                />
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
                )}
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
