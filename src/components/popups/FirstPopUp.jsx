import { useContext } from "react";
import { AuthContext } from "../../config/AuthContext";
const FirstPopup = () => {
  const { popupState, setPopupState, resetPopupState } =
    useContext(AuthContext);

  const handleAccept = () => {
    setPopupState({
      ...popupState,
      firstPopupVisible: false,
      secondPopupVisible: true,
    });
  };

  const handleDecline = () => {
    setPopupState({
      ...popupState,
      firstPopupVisible: false,
    });
  };
  const handleClose = () => {
    resetPopupState();
  };
  if (!popupState.firstPopupVisible) return null;

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
          <h2 className="text-xl font-semibold mb-4">Get a 15% discount!</h2>
          <p className="mb-6">Sign up now to receive your discount code.</p>
          <div className="flex justify-around">
            <button
              onClick={handleAccept}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Accept
            </button>
            <button
              onClick={handleDecline}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPopup;
