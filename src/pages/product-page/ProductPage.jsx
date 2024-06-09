import { Layout } from "../../components";
import Slider from "react-slick";
import { useLocation } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../config/AuthContext";
import img2 from "../../assets/prod-shit.webp";
import img3 from "../../assets/prod-shit2.webp";
import { Box, Button, Typography } from "@mui/material";

const ProductPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [selectedIndex, setSelectedIndex] = useState(0);
  const location = useLocation();
  const { results } = useContext(AuthContext);

  const selectedImage =
    results && results.length > 0 && selectedIndex < results.length
      ? results[selectedIndex].uri
      : "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQSqC1w7juXyqLMMZ5zuUO5UqduW9xxfOfpANgUqLhfWFKj4D0W";

  useEffect(() => {
    if (location.state && location.state.index !== undefined) {
      setSelectedIndex(location.state.index);
    }
  }, [location.state]);

  return (
    <Layout>
      <Box
        display="flex"
        minHeight="100vh"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        px={2}
        py={6}
        className="gradient-bg-img"
      >
        <Box
          maxWidth="lg"
          width="100%"
          bgcolor="white"
          boxShadow={3}
          borderRadius={5}
          p={4}
        >
          <Box display="flex" flexDirection={{ xs: "column", md: "row" }}>
            <Box flexShrink={0} width={{ xs: "100%", md: "50%" }}>
              <Slider {...settings}>
                <Box className="relative w-full pt-[75%] overflow-hidden">
                  <Box
                    component="img"
                    src={selectedImage}
                    alt="Hills of the Golden City"
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-md"
                  />
                </Box>
                <Box className="relative w-full pt-[75%] overflow-hidden">
                  <Box
                    component="img"
                    src={img2}
                    alt="Detail 1"
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-md"
                  />
                </Box>
                <Box className="relative w-full pt-[75%] overflow-hidden">
                  <Box
                    component="img"
                    src={img3}
                    alt="Detail 2"
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-md"
                  />
                </Box>
              </Slider>
            </Box>
            <Box mt={{ xs: 4, md: 8 }} ml={{ md: 4 }} flexGrow={1}>
              <Typography variant="h4" fontWeight="bold">
                My Paint-By-Numbers Kit
              </Typography>
              <Box mt={4}>
                <Typography variant="h6" fontWeight="bold">
                  <span role="img" aria-label="Warranty">
                    👍
                  </span>{" "}
                  Enjoy one-year Warranty
                </Typography>
                <Typography variant="h6" fontWeight="bold">
                  <span role="img" aria-label="Quality">
                    ✔️
                  </span>{" "}
                  Confidence in quality
                </Typography>
                <Typography variant="h6" fontWeight="bold">
                  <span role="img" aria-label="Artistic">
                    🎨
                  </span>{" "}
                  Artistic Expression
                </Typography>
                <Typography variant="h6" fontWeight="bold">
                  <span role="img" aria-label="Gift">
                    🎁
                  </span>{" "}
                  Thoughtful Gift
                </Typography>
              </Box>
              <Box mt={4}>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ width: "100%" }}
                >
                  Add to Cart
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default ProductPage;
