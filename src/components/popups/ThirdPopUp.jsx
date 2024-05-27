import { useContext, useState } from "react";
import { AuthContext } from "../../config/AuthContext";

const ThirdPopup = () => {
  const { popupState, setPopupState, resetPopupState } =
    useContext(AuthContext);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleAccept = () => {
    setPopupState({
      ...popupState,
      thirdPopupVisible: false,
      fourthPopupVisible: true,
    });
  };

  const handleDecline = () => {
    setPopupState({
      ...popupState,
      thirdPopupVisible: false,
      fourthPopupVisible: true,
    });
  };
  const handleClose = () => {
    resetPopupState();
  };

  if (!popupState.thirdPopupVisible) return null;

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
          <h2 className="text-xl font-semibold mb-4">Get a 20% discount!</h2>
          <p className="mb-6">Sign up for SMS-exclusive deals.</p>
          <input
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full mb-4 p-2 border rounded"
          />
          <div className="flex justify-around">
            <button
              onClick={handleAccept}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Yes
            </button>
            <button
              onClick={handleDecline}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdPopup;
