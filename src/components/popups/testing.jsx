import { useContext } from "react";
import { useForm } from "react-hook-form";
import { PopupContext } from "../../config/PopupContext";
import img from "../../assets/FirstImage.png";
import logo from "../../assets/logo.png";

const ThirdPopup = () => {
  const {
    popupState,
    setPopupState,
    resetPopupState,
    setPhoneNumber,
    popupMutation,
    name,
    email,
  } = useContext(PopupContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onAccept = (data) => {
    setPhoneNumber(data.phoneNumber);
    popupMutation.mutate({ name, email, phone: data.phoneNumber });
    setPopupState({
      ...popupState,
      thirdPopupVisible: false,
      fourthPopupVisible: true,
    });
  };

  const onDecline = () => {
    popupMutation.mutate({ name, email });
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
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 animate-fade animate-duration-150">
      <div
        className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
        >
          &times;
        </button>
        <div className="flex items-center justify-center mb-4 gap-10">
          <div className="flex-1">
            <img src={img} alt="Wolf" className="w-full h-auto" />
          </div>
          <div className="flex flex-col flex-1 gap-4 items-center">
            <img src={logo} alt="" className="w-40 h-auto" />
            <div className="flex flex-col flex-1 text-center gap-4">
              <p className="text-3xl font-bold">Unlock 20% Discount!</p>
              <p className="mb-6">Sign up for SMS-exclusive deals.</p>
            </div>
            <form onSubmit={handleSubmit(onAccept)}>
              <input
                type="text"
                placeholder="Phone Number"
                {...register("phoneNumber", {
                  required: "Phone number is required",
                  value: /^\+?[0-9]+$/,
                  pattern: {
                    message:
                      "Phone number must contain only numbers and may start with +",
                  },
                })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              />
              {errors.phoneNumber && (
                <p className="text-red-500">{errors.phoneNumber.message}</p>
              )}

              <div className="flex justify-around">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Yes
                </button>
                <button
                  type="button"
                  onClick={onDecline}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                  No
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdPopup;
