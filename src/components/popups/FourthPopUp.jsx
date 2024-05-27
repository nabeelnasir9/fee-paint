import { useContext } from "react";
import { AuthContext } from "../../config/AuthContext";

const FourthPopup = () => {
  const { popupState, resetPopupState } = useContext(AuthContext);
  const handleClose = () => {
    resetPopupState();
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
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
        >
          &times;
        </button>
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-4">Thank You!</h2>
          <p className="mb-6">
            Here is your discount code: <strong>DISCOUNT2024</strong>
          </p>
          <button
            onClick={handleClose}
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
