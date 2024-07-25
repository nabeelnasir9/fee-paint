import {
  Layout,
  ArtGenerator,
  GenerateImagesFromText,
  GenieGenerator,
  ImageToImageGeneration,
  About,
  ImageArtGenerator,
} from "../../components";
import "./index.css";
import Grid from "@mui/material/Grid";
import { BsStars } from "react-icons/bs";
import { Button } from "@mui/material";
import Logo from "../../assets/logo.png";
import GalleryImage1 from "./../../assets/gallery-1.png";
import GalleryImage2 from "./../../assets/gallery-2.png";
import GalleryImage3 from "./../../assets/gallery-3.png";
import GalleryImage4 from "./../../assets/gallery-4.png";
import GalleryImage5 from "./../../assets/gallery-5.png";
import GalleryImage6 from "./../../assets/gallery-6.png";
import GalleryImage7 from "./../../assets/gallery-7.png";
import GalleryImage8 from "./../../assets/gallery-8.png";
import Facebook from "./../../assets/svg/facebook.svg";
import Visa from "./../../assets/svg/visa.svg";
import Pg from "./../../assets/svg/pg.svg";
import Pinterest from "./../../assets/svg/pinterest.svg";
import Booking from "./../../assets/svg/booking.svg";
import Hublot from "./../../assets/svg/hublot.svg";
import { useNavigate } from "react-router-dom";
import Testimonial from "../../components/home/testimonial";
import FAQS from "../../components/home/faqs";
import Content from "../content/content";
const Home = () => {
  const navigate = useNavigate();
  const List = [
    GalleryImage1,
    GalleryImage2,
    GalleryImage3,
    GalleryImage4,
    GalleryImage5,
    GalleryImage6,
    GalleryImage7,
    GalleryImage8,
  ];
  return (
    <Layout>
      <div className="gradient-bg-img">
        <Grid container spacing={0}>
          <Grid item xs={1} sm={1} md={1} lg={2} xl={3}></Grid>
          <Grid xs={10} sm={10} md={10} lg={8} xl={6}>
            <div className="flex items-center justify-center">
              {/* <BsStars style={{ marginRight: "5px" }} />
                MY PAINT GENIE */}
              <img src={Logo} className="w-44 h-auto mt-32 " />
            </div>
            <h1 className="home-heading leading-tight">
              Instantly Transform Words Into Stunning Art
            </h1>
            <h2 className="text-2xl text-center font-semibold font-sans mt-2">
              Become a Digital Picasso in Seconds!
            </h2>
            <p className="home-txt">
              Are you looking to have fun by creating cool images to paint
              without the hassle of messy cleanups and uneven finishes? With
              Paint Genie, you can achieve flawless, professional-quality
              results effortlessly in seconds.
              <br />
              <br />
              Forget about dull, fixed paint-by-number designs. With Paint
              Genie, you can create stunning and captivating images that
              transform into beautiful works of art, achieving flawless,
              professional-quality finishes every time you paint
            </p>
            <div className="home-generate-btn-main mb-20 mt-10">
              <Button variant="contained" onClick={() => navigate("/generate")}>
                Generate Your First Masterpiece
              </Button>
            </div>
            <Grid container spacing={3}>
              {List.map((v, i) => {
                return (
                  <Grid item key={i} xs={4} sm={3} md={3} lg={3} xl={3}>
                    <img src={v} className="gallery-image" />
                  </Grid>
                );
              })}
            </Grid>
            <div className="home-icon-main">
              <img src={Facebook} />
              <img src={Visa} />
              <img src={Pg} />
              <img src={Pinterest} />
              <img src={Booking} />
              <img src={Hublot} />
            </div>
          </Grid>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={2} xl={3}></Grid>
      </div>
      <ArtGenerator />
      <GenerateImagesFromText />
      <GenieGenerator />
      <ImageToImageGeneration />
      <div className="mt-28">
      <Content/>
      </div>
      <About />
      <div className="mt-28">
        <Testimonial />
      </div>
      <div className="mt-28 mb-20">
        <FAQS />
      </div>
      <ImageArtGenerator />
    </Layout>
  );
};
export default Home;
