import { useContext } from "react";
import { useForm } from "react-hook-form";
import { PopupContext } from "../../config/PopupContext";

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
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 animate-fade animate-duration-150 "
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
          <form onSubmit={handleSubmit(onAccept)}>
            <input
              type="text"
              placeholder="Phone Number"
              {...register("phoneNumber", {
                required: "Phone number is required",
                pattern: {
                  value: /^\+?[0-9]+$/,
                  message:
                    "Phone number must contain only numbers and may start with +",
                },
              })}
              className="w-full mb-4 p-2 border rounded"
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
  );
};

export default ThirdPopup;
