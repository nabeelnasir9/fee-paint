/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import img from "../../assets/gallery-6.png";
import img2 from "../../assets/gallery-5.png";
import img3 from "../../assets/gallery-4.png";
import { PopupContext } from "../../config/PopupContext";

const FirstPopup = () => {
  const { popupState, setPopupState, resetPopupState } =
    useContext(PopupContext);

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
    <>
      <div
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 font-inter animate-fade animate-duration-150"
        onClick={handleClose}
      >
        <div
          className="bg-white rounded-lg shadow-lg p-4 w-full max-w-md relative"
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
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-4">Unlock 15% off!</h2>
            <p className="mb-6">
              This exclusive offer is ticking away-enter your email and name
              before it's gone
            </p>
            <div className="flex flex-col gap-4 bg-white">
              <button
                onClick={handleAccept}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Accept
              </button>
              <button
                onClick={handleDecline}
                className="underline underline-blue-500 text-blue-500 "
              >
                No thanks i don't like discounts
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstPopup;
