/* eslint-disable react/prop-types */
import { useState } from "react";
import img from "../../assets/MysteryPaintByNumber.webp";
import {
  Box,
  Button,
  Modal,
  Typography,
  IconButton,
  Select,
  MenuItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const MysteryPaintModal = ({ open, handleClose, onConfirm }) => {
  const [size, setSize] = useState("Small");
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClaimOffer = () => {
    onConfirm(size, true);
  };

  const handleAddToCart = () => {
    onConfirm(size, false);
  };

  const handleAddToCart2 = () => {
    onConfirm(size, false);
    navigate("/cart");
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: isMobile ? "90%" : 600,
    bgcolor: "background.paper",
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={style}>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <Typography id="modal-title" variant="h6" component="h2">
          Mystery Paint By Numbers Kit
        </Typography>
        <Box
          display="flex"
          flexDirection={isMobile ? "column" : "row"}
          alignItems="center"
          mt={2}
        >
          <Box
            component="img"
            src={img}
            alt="Mystery Paint By Number"
            sx={{
              width: isMobile ? "100%" : "150px",
              height: "auto",
              marginRight: isMobile ? 0 : 2,
              mb: isMobile ? 2 : 0,
            }}
          />
          <Box>
            <Typography variant="h6" component="h2">
              Special Offer!
            </Typography>
            <Typography>
              Add this product to your cart and get 10% OFF your entire order.
            </Typography>
          </Box>
        </Box>
        <Select
          value={size}
          onChange={(e) => setSize(e.target.value)}
          fullWidth
          sx={{ mt: 2 }}
        >
          <MenuItem value="Small">Small - $24.99</MenuItem>
          <MenuItem value="Medium">Medium - $29.99</MenuItem>
          <MenuItem value="Large">Large - $34.99</MenuItem>
        </Select>
        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2 }}
          onClick={handleClaimOffer}
        >
          CLAIM OFFER!
        </Button>
        <Accordion sx={{ mt: 2 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>See product details</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" component="div">
              <p>
                - 🎨 Mystery Canvas: Each kit is a surprise—could be wildlife,
                landscapes, or fantasy.
              </p>
              <p>
                - 🖌️ Complete Set: Includes numbered canvas, acrylic paint pots,
                and brushes.
              </p>
              <p>
                - 🌈 Vibrant Colors: High-quality, non-toxic paints in a wide
                color spectrum.
              </p>
              <p>
                - 🔍 Easy-to-Follow: Numbered sections for a straightforward
                painting experience.
              </p>
              <p>
                - ✅ Satisfaction Guaranteed: Love your creation or contact us
                for support!
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Box
          display="flex"
          flexDirection={isMobile ? "column" : "row"}
          justifyContent="space-between"
          mt={2}
        >
          <Button
            onClick={handleAddToCart}
            color="primary"
            sx={{ mb: isMobile ? 2 : 0 }}
          >
            No thanks
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddToCart2}
          >
            Go to checkout →
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default MysteryPaintModal;
