import { useContext } from "react";
import { useForm } from "react-hook-form";
import { PopupContext } from "../../config/PopupContext";

const SecondPopup = () => {
  const { popupState, setPopupState, resetPopupState, setEmail, setName } = useContext(PopupContext);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    setName(data.name);
    setEmail(data.email);
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
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative" onClick={(e) => e.stopPropagation()}>
        <button onClick={handleClose} className="absolute top-2 right-2 text-gray-700 hover:text-gray-900">
          &times;
        </button>
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-4">Sign up for 15% discount</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Name"
              {...register("name", { required: "Name is required" })}
              className="w-full mb-4 p-2 border rounded"
            />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}

            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: "Email is required" })}
              className="w-full mb-4 p-2 border rounded"
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}

            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SecondPopup;
