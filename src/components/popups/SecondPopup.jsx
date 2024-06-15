import { useContext } from "react";
import { useForm } from "react-hook-form";
import { PopupContext } from "../../config/PopupContext";
import img from "../../assets/popups/Secondimage.png";
import logo from "../../assets/logo.png";

const SecondPopup = () => {
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
      secondPopupVisible: false,
      thirdPopupVisible: true,
    });
  };

  const onDecline = () => {
    popupMutation.mutate({ name, email });
    setPopupState({
      ...popupState,
      secondPopupVisible: false,
      thirdPopupVisible: true,
    });
  };

  const handleClose = () => {
    resetPopupState();
  };

  if (!popupState.secondPopupVisible) return null;

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
        <div className=" flex flex-col lg:flex-row items-center justify-center mb-4 gap-2">
          <div className="flex-1">
            <img
              src={img}
              alt="Wolf"
              className="lg:w-full lg:h-auto w-40 h-auto"
            />
          </div>
          <div className="flex flex-col flex-1 gap-4 items-center mt-10">
            <img src={logo} alt="" className="w-40 h-auto" />
            <div className="flex flex-col flex-1 text-center gap-4">
              <p className="text-2xl font-bold">
                You have your promised Discount Already!
              </p>
              <p className="mb-6">
                Share your phone number to upgrade to a 20% discount and get
                SMS-exclusive deals.
              </p>
            </div>
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
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              />
              {errors.phoneNumber && (
                <p className="text-red-500">{errors.phoneNumber.message}</p>
              )}

              <div className="flex justify-around">
                <button
                  type="submit"
                  className="bg-blue-500 w-full rounded text-white px-4 py-2 mb-4  hover:bg-blue-600"
                >
                  Upgrade
                </button>
              </div>
            </form>
            <button
              type="button"
              onClick={onDecline}
              className="underline text-gray-500 text-sm"
            >
              No thanks i would like to keep my 15% discount
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPopup;
