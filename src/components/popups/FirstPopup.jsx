import { useContext } from "react";
import { useForm } from "react-hook-form";
import { PopupContext } from "../../config/PopupContext";
import img from "../../assets/popups/FirstImage.png";
import logo from "../../assets/logo.png";

const FirstPopup = () => {
  const { popupState, setPopupState, resetPopupState, setEmail, setName } =
    useContext(PopupContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setName(data.name);
    setEmail(data.email);
    setPopupState({
      ...popupState,
      firstPopupVisible: false,
      secondPopupVisible: true,
    });
  };

  const handleClose = () => {
    resetPopupState();
  };

  if (!popupState.firstPopupVisible) return null;

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
        <div className="flex flex-col lg:flex-row items-center justify-center mb-4 gap-10">
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
              <p className="lg:text-3xl text-2xl font-bold">
                Unlock 15$ Discount!
              </p>
              <p className="text-gray-500 text-sm">
                Plus be the first to know about new arrivals,exclusive offers
                and more!
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                placeholder="Enter First Name"
                {...register("name", { required: "Name is required" })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}

              <input
                type="email"
                placeholder="Enter Email"
                {...register("email", { required: "Email is required" })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}

              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
              >
                Continue
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPopup;
