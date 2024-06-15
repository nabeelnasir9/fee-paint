import { useContext } from "react";
import DiscountIcon from "@mui/icons-material/Discount";
import toast from "react-hot-toast";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useNavigate } from "react-router-dom";
import { PopupContext } from "../../config/PopupContext";
import logo from "../../assets/logo.png";
import img from "../../assets/popups/ThirdandFourthImage.png";

const ThirdPopup = () => {
  const { popupState, resetPopupState, popupMutation } =
    useContext(PopupContext);
  const navigate = useNavigate();

  const handleClose = () => {
    resetPopupState();
  };

  const handleCopyCode = () => {
    const discountCode = popupMutation.data ? popupMutation.data.code : "";
    navigator.clipboard.writeText(discountCode);
    toast.success("Copied to clipboard!");
  };

  const handleNavigateToCart = () => {
    handleClose(); // Close the popup before navigating
    navigate("/cart");
  };

  if (!popupState.thirdPopupVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 animate-fade animate-duration-150">
      <div
        className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm md:max-w-lg lg:max-w-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
        >
          &times;
        </button>
        <div className="flex flex-col lg:flex-row items-center justify-center mb-4 gap-6">
          <div className="flex-1">
            <img
              src={img}
              alt="Wolf"
              className="lg:w-full lg:h-auto w-40 h-auto"
            />
          </div>
          <div className="flex flex-col flex-1 gap-4 items-center">
            <img src={logo} alt="" className="w-40 h-auto" />
            <div className="flex flex-col flex-1 text-center gap-4">
              <p className="text-2xl font-bold">Thank You for Subscribing!</p>
              <p className="">Here is your discount code:</p>
              <strong className="font-semibold text-xl bg-blue-300 p-4">
                {popupMutation.isLoading
                  ? "Processing..."
                  : popupMutation.isError
                    ? popupMutation.error.response.data.error
                    : popupMutation.data
                      ? popupMutation.data.code
                      : ""}
              </strong>
              <button
                className="bg-blue-500 w-full rounded text-white px-4 py-2 hover:bg-blue-600 items-center flex justify-center gap-2"
                onClick={handleNavigateToCart}
              >
                <DiscountIcon />
                Apply Discount
              </button>
              <button
                onClick={handleCopyCode}
                className="bg-blue-500 w-full rounded text-white px-4 py-2 hover:bg-blue-600 items-center flex justify-center gap-2"
              >
                <ContentCopyIcon />
                Copy Code
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdPopup;
