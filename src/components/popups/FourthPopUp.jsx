import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PopupContext } from "../../config/PopupContext";
import img from "../../assets/gallery-6.png";
import img2 from "../../assets/gallery-5.png";
import img3 from "../../assets/gallery-4.png";

const FourthPopup = () => {
  const { popupState, resetPopupState, popupMutation } =
    useContext(PopupContext);
  const navigate = useNavigate();

  const handleClose = () => {
    resetPopupState();
  };

  const handleCopyCode = () => {
    // Logic to copy the discount code to clipboard
    const discountCode = popupMutation.data ? popupMutation.data.code : "";
    navigator.clipboard.writeText(discountCode);
    // Optional: Show a confirmation message or feedback to the user
  };

  if (!popupState.fourthPopupVisible) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={handleClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-center mb-4">
          <img
            src={img}
            className="bg-contain w-auto h-32 object-cover mr-2"
            alt="first popup"
          />
          <img
            src={img2}
            className="bg-contain w-auto h-32 object-cover mr-2"
            alt="first popup"
          />
          <img
            src={img3}
            className="bg-contain w-auto h-32 object-cover"
            alt="first popup"
          />
        </div>
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
        >
          &times;
        </button>
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-4">Thank You!</h2>
          <div className="flex justify-center flex-col">
            <p className="">
              Here is your discount code: <br />
            </p>
            <strong className="font-semibold text-xl mb-5 bg-blue-300 p-4">
              {popupMutation.isLoading
                ? "Processing..."
                : popupMutation.isError
                  ? popupMutation.error.response.data.error
                  : popupMutation.data
                    ? popupMutation.data.code
                    : ""}
            </strong>
          </div>
          <button
            onClick={handleCopyCode}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2"
          >
            Copy Code
          </button>
          <button
            onClick={() => navigate("/cart")}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Apply Discount
          </button>
        </div>
      </div>
    </div>
  );
};

export default FourthPopup;
