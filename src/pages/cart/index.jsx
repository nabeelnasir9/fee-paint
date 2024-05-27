import { Layout } from "../../components";
import toast from "react-hot-toast";
import { DeleteForever } from "@mui/icons-material";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useState, useMemo } from "react";
import { AuthContext } from "../../config/AuthContext";

export default function Cart() {
  const { orders, setOrders, setTrackingId } = useContext(AuthContext);
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const couponMutation = useMutation({
    mutationFn: async (couponData) => {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/auth/validate`,
        couponData,
      );
      return response.data;
    },
  });
  const checkoutMutation = useMutation({
    mutationFn: async (checkoutData) => {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/auth/payment`,
        checkoutData,
      );
      return response.data;
    },
  });

  const handleCheckout = async () => {
    try {
      setCheckoutLoading(true); // set loading state to true
      const response = await checkoutMutation.mutateAsync({
        images: orders,
        price: Math.round(totalPrice), // Ensure price is rounded to the nearest cent
        couponCode: couponCode.length > 0 ? couponCode : null,
      });
      setTrackingId(response.trackingId);
      window.location.href = response.url;
    } catch (error) {
      console.error("Error during checkout:", error);
    } finally {
      // set loading state to false
      setCheckoutLoading(false);
    }
  };

  const handleRemove = (id) => {
    const newOrders = orders.filter((order) => order !== id);
    setOrders(newOrders);
  };

  const handleCouponApply = async () => {
    try {
      const response = await couponMutation.mutateAsync({ code: couponCode });
      setDiscount(response.discount);
      toast.success("Coupon applied successfully");
    } catch (error) {
      console.error("Invalid or expired coupon:", error);
      setDiscount(0);
    }
  };

  const getPriceForSize = (size) => {
    switch (size) {
      case "Small":
        return 2499;
      case "Medium":
        return 2999;
      case "Large":
        return 3499;
      default:
        return 6000; // default price if size is not set
    }
  };

  const subtotal = useMemo(() => {
    return orders.reduce((total, order) => {
      const size = order.size || "default";
      return total + getPriceForSize(size);
    }, 0);
  }, [orders]);

  const discountAmount = useMemo(() => {
    return (subtotal * discount) / 100;
  }, [subtotal, discount]);

  const totalPrice = useMemo(() => {
    return subtotal - discountAmount;
  }, [subtotal, discountAmount]);
  return (
    <Layout>
      <section className="py-24 relative mt-10">
        <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
          <h2 className="title font-inter font-bold text-4xl leading-10 mb-8 text-center text-black">
            Shopping Cart
          </h2>
          <div className="hidden lg:grid grid-cols-2  py-6">
            <div className="font-normal text-xl leading-8 text-gray-500">
              Product
            </div>
            <p className="font-normal text-xl leading-8 text-gray-500 flex items-center justify-center">
              <span className="w-full max-w-[200px] text-center lg:ml-32">
                Total
              </span>
            </p>
          </div>

          {orders.map((image, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6"
            >
              <div className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
                <div className="img-box">
                  <img
                    src={image.uri}
                    alt={`Image ${index + 1}`}
                    className="xl:w-[140px]"
                  />
                </div>
                <div className="pro-data w-full max-w-sm ">
                  <h5 className="font-semibold text-xl leading-8 text-black max-[550px]:text-center">
                    Image {index + 1}
                  </h5>
                  <p className="font-normal text-lg leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center">
                    {image?.size}
                  </p>
                </div>
              </div>
              <div className="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-10 justify-end">
                <h6 className="text-[#587cdd] font-inter font-bold text-2xl leading-9 w-full max-w-[176px] text-center">
                  $
                  {(
                    (image.size ? getPriceForSize(image.size) : 6000) / 100
                  ).toFixed(2)}
                </h6>
                <button
                  className="bg-[#587cdd] text-white text-base px-4 py-3 rounded-md flex items-center gap-2 disabled:bg-[#c4c4c4] disabled:text-[#787878]"
                  onClick={() => handleRemove(image)}
                >
                  <DeleteForever fontSize="small" />
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="bg-gray-50 rounded-xl p-6 w-full mb-8 max-lg:max-w-xl max-lg:mx-auto">
            <div className="flex items-center justify-between w-full mb-6">
              <p className="font-normal text-xl leading-8 text-gray-400">
                Sub Total
              </p>
              <h6 className="font-semibold text-xl leading-8 text-gray-900">
                {/* ${(totalPrice / 100).toFixed(2)} */}$
                {(subtotal / 100).toFixed(2)}
              </h6>
            </div>
            <div className="flex items-center justify-between w-full pb-6 border-b border-gray-200"></div>
            <div className="flex items-center justify-between w-full mb-4">
              <input
                type="text"
                className=" w-full rounded-md border-0 pl-2 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Enter coupon code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
              />
              <button
                onClick={handleCouponApply}
                className="ml-20 bg-[#587cdd] text-white p-2 rounded-md"
              >
                Apply Coupon
              </button>
            </div>
            <div className="flex items-center justify-between w-full mb-4">
              <p className="font-inter font-medium text-2xl leading-9 text-gray-900">
                Discount
              </p>
              <h6 className="font-inter font-bold text-2xl leading-9 text-[#587cdd]">
                {discount} %
              </h6>
            </div>
            <div className="flex items-center justify-between w-full py-6">
              <p className="font-inter font-medium text-2xl leading-9 text-gray-900">
                Total
              </p>
              <h6 className="font-inter font-bold text-2xl leading-9 text-[#587cdd]">
                ${(totalPrice / 100).toFixed(2)}
              </h6>
            </div>
          </div>
          <div className="flex items-center flex-col sm:flex-row justify-center gap-3 mt-8">
            <button
              className="rounded-md w-full max-w-[280px] py-4 text-center justify-center items-center bg-[#587cdd] font-semibold text-lg text-white flex transition-all duration-500 hover:bg-indigo-600  disabled:bg-[#c4c4c4] disabled:text-[#787878]"
              disabled={checkoutLoading || orders.length === 0}
              onClick={handleCheckout}
            >
              Continue to Payment
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="22"
                viewBox="0 0 23 22"
                fill="none"
              >
                <path
                  d="M8.75324 5.49609L14.2535 10.9963L8.75 16.4998"
                  stroke="white"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
