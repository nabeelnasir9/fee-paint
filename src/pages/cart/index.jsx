import { Layout } from "../../components";
import DiscountIcon from "@mui/icons-material/Discount";
import img from "../../assets/MysteryPaintByNumber.webp";
import brushes from "../../assets/brushes.jpeg";
import toast from "react-hot-toast";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { DeleteForever } from "@mui/icons-material";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useEffect, useState, useMemo, useCallback } from "react";
import { AuthContext } from "../../config/AuthContext";
import { trackCheckoutButtonClicked } from "../../tracking/MetaEvents.js";
import mixpanel from "mixpanel-browser";

export default function Cart() {
  const {
    orders,
    setOrders,
    setTrackingId,
    mysteryPaintKit,
    setMysteryPaintKit,
  } = useContext(AuthContext);
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [warrantySelected, setWarrantySelected] = useState(false);
  const [frameOptions, setFrameOptions] = useState([]);
  const [mysteryPaintKitDiscount, setMysteryPaintKitDiscount] = useState(0);
  const [selectedSizes, setSelectedSizes] = useState({});
  const [isShippingFree, setIsShippingFree] = useState(false);

  useEffect(() => {
    const defaultFrameOptions = orders.map(() => {
      return { style: "Detailed", selected: false };
    });
    setFrameOptions(defaultFrameOptions);
  }, [orders]);

  useEffect(() => {
    if (mysteryPaintKit) {
      setMysteryPaintKitDiscount(10);
    } else {
      setMysteryPaintKitDiscount(0);
    }
  }, [mysteryPaintKit]);

  const addWarranty = () => {
    setWarrantySelected(!warrantySelected);
  };

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
      setCheckoutLoading(true);
      const response = await checkoutMutation.mutateAsync({
        images: orders.map((order, index) => ({
          ...order,
          size: selectedSizes[index] || order.size,
          frame: frameOptions[index] || { style: "", selected: false },
        })),
        price: Math.round(totalPrice),
        mysteryPaintKit: mysteryPaintKit,
        warranty: warrantySelected,
        couponCode: couponCode.length > 0 ? couponCode : null,
      });
      setTrackingId(response.trackingId);
      trackCheckoutButtonClicked();
      mixpanel.track("Checkout Initiated");
      window.location.href = response.url;
    } catch (error) {
      console.error("Error during checkout:", error);
    } finally {
      setCheckoutLoading(false);
    }
  };

  const handleMysteryRemove = () => {
    setMysteryPaintKit(null);
    setMysteryPaintKitDiscount(0);
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

  const getPriceForVariant = (style, size, frameSelected) => {
    const prices = {
      Detailed: {
        Small: { "No Frame": 4499, "DIY Frame": 5999 },
        Medium: { "No Frame": 5999, "DIY Frame": 7499 },
        Large: { "No Frame": 7499, "DIY Frame": 8999 },
      },
      Exquisite: {
        Small: { "No Frame": 5499, "DIY Frame": 6999 },
        Medium: { "No Frame": 7499, "DIY Frame": 8999 },
        Large: { "No Frame": 10499, "DIY Frame": 11999 },
      },
    };

    if (prices[style] && prices[style][size]) {
      return prices[style][size][frameSelected ? "DIY Frame" : "No Frame"];
    }
    return 6000; // default price if style or size is not set
  };

  const subtotal = useMemo(() => {
    return orders.reduce((total, order, index) => {
      const style = frameOptions[index]?.style || "";
      const size = selectedSizes[index] || order.size || "default";
      const frameSelected = frameOptions[index]?.selected || false;
      return total + getPriceForVariant(style, size, frameSelected);
    }, 0);
  }, [orders, frameOptions, selectedSizes]);

  const discountAmount = useMemo(() => {
    return (subtotal * discount) / 100;
  }, [subtotal, discount]);

  const pricing = useCallback(() => {
    if (mysteryPaintKit === "Small") {
      return 2500;
    }
    if (mysteryPaintKit === "Medium") {
      return 2900;
    }
    if (mysteryPaintKit === "Large") {
      return 3400;
    }
  }, [mysteryPaintKit]);

  const totalPrice = useMemo(() => {
    let price = subtotal - discountAmount;

    if (warrantySelected) {
      price += 500; // Adding warranty cost
    }

    if (mysteryPaintKit) {
      price += pricing(); // Adding mysteryPaintKit price
    }

    const totalDiscount = (price * mysteryPaintKitDiscount) / 100;
    price -= totalDiscount;

    // Ensure price is not less than zero before adding shipping
    if (price < 0) {
      price = 0;
    }

    let shippingFee = 1000; // 10 dollars represented as cents

    if (price > 5500) {
      // 55 dollars represented as cents
      setIsShippingFree(true); // Shipping becomes free
      shippingFee = 0;
    } else {
      setIsShippingFree(false); // Shipping is not free
    }

    // Calculate final total price including shipping fee
    return price + shippingFee;
  }, [
    subtotal,
    discountAmount,
    warrantySelected,
    mysteryPaintKit,
    mysteryPaintKitDiscount,
    pricing,
  ]);

  const updateFrameOptions = (index, style, selected) => {
    const newFrameOptions = [...frameOptions];
    newFrameOptions[index] = { style, selected };
    setFrameOptions(newFrameOptions);
  };

  const handleSizeChange = (index, newSize) => {
    setSelectedSizes((prev) => ({ ...prev, [index]: newSize }));
  };

  return (
    <Layout>
      <section className="py-32 relative mt-10 font-inter">
        <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
          <h2 className="title font-inter font-bold text-4xl leading-10 mb-8 text-center text-black">
            Your Cart
          </h2>
          <div className="hidden lg:flex items-center justify-between">
            <div className="font-normal text-xl leading-8 text-gray-500">
              Product
            </div>
            <div className="font-normal text-xl leading-8  text-gray-500 ml-[550px]">
              Size
            </div>
            <div className="font-normal text-xl leading-8  text-gray-500 ">
              Style
            </div>
            <div className="font-normal text-xl  leading-8 text-gray-500">
              Frame
            </div>
            <div className="font-normal text-xl leading-8 text-gray-500 mr-10">
              Total
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6">
            <div className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
              <div className="img-box">
                <img
                  src={brushes}
                  alt="Mystery Paint Kit"
                  className="xl:w-[140px]"
                />
              </div>
              <div className="pro-data w-full max-w-sm">
                <h5 className="font-semibold text-xl leading-8 text-black max-[550px]:text-center">
                  Professional PBN Paint Brush Set
                </h5>
                <p className="font-normal text-lg leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center"></p>
              </div>
            </div>
            <div className="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-10 justify-end">
              <h6 className="text-[#587cdd] font-inter font-bold text-2xl leading-9 w-full max-w-[136px] text-center flex items-center gap-3">
                <span className="line-through">$25</span>
                <span className="">$0</span>
              </h6>
            </div>
          </div>
          {mysteryPaintKit &&
            ["Small", "Medium", "Large"].includes(mysteryPaintKit) && (
              <div className="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6">
                <div className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
                  <div className="img-box">
                    <img
                      src={img}
                      alt="Mystery Paint Kit"
                      className="xl:w-[140px]"
                    />
                  </div>
                  <div className="pro-data w-full max-w-sm">
                    <h5 className="font-semibold text-xl leading-8 text-black max-[550px]:text-center">
                      {mysteryPaintKit} Paint Kit
                    </h5>
                    <p className="font-normal text-lg leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center">
                      Size: {mysteryPaintKit}
                    </p>
                  </div>
                </div>
                <div className="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-10 justify-end">
                  <button
                    className="bg-red-500 text-white text-base px-2 py-2 rounded-md flex items-center gap-2 disabled:bg-[#c4c4c4] disabled:text-[#787878]"
                    onClick={() => handleMysteryRemove()}
                  >
                    <DeleteForever fontSize="medium" />
                  </button>
                  <h6 className="text-[#587cdd] font-inter font-bold text-2xl leading-9 w-full max-w-[136px] text-center">
                    ${(pricing() / 100).toFixed(2)}
                  </h6>
                </div>
              </div>
            )}
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
                    Paint-By-Numbers Kit
                  </h5>
                  <p className="font-normal text-lg leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center">
                    Size: {selectedSizes[index] || image?.size}
                  </p>
                </div>
              </div>
              <div className="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-10 justify-end">
                <button
                  className="bg-red-500 text-white text-base px-2 py-2 rounded-md flex items-center gap-2 disabled:bg-[#c4c4c4] disabled:text-[#787878]"
                  onClick={() => handleRemove(image)}
                >
                  <DeleteForever fontSize="medium" />
                </button>
                <select
                  className=" bg-gray-200 rounded-md border-0 pl-2 pr-3 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                  value={selectedSizes[index] || image.size}
                  onChange={(e) => handleSizeChange(index, e.target.value)}
                >
                  <option value="Small">Small</option>
                  <option value="Medium">Medium</option>
                  <option value="Large">Large</option>
                </select>
                <select
                  className=" bg-gray-200 rounded-md border-0 pl-2 pr-3 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={frameOptions[index]?.style || ""}
                  onChange={(e) =>
                    updateFrameOptions(
                      index,
                      e.target.value,
                      frameOptions[index]?.selected || false,
                    )
                  }
                >
                  <option selected value="Detailed">
                    Detailed
                  </option>
                  <option value="Exquisite">Exquisite</option>
                </select>

                <div className="flex p-7 flex-col">
                  <input
                    type="checkbox"
                    checked={frameOptions[index]?.selected || false}
                    className="w-6 h-6 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                    onChange={(e) =>
                      updateFrameOptions(
                        index,
                        frameOptions[index]?.style || "",
                        e.target.checked,
                      )
                    }
                  />
                  <label className=" text-gray-700 text-sm pt-2">
                    DIY Frame
                  </label>
                </div>
                <h6 className="text-[#587cdd] font-inter font-bold text-2xl leading-9 w-full max-w-[176px] text-center">
                  $
                  {(
                    getPriceForVariant(
                      frameOptions[index]?.style || "Detailed",
                      selectedSizes[index] || image.size,
                      frameOptions[index]?.selected || false,
                    ) / 100
                  ).toFixed(2)}
                </h6>
              </div>
            </div>
          ))}

          <div className="bg-gray-50 rounded-xl p-6 w-full mb-8 max-lg:max-w-xl max-lg:mx-auto">
            <div className="flex items-center w-full justify-between mb-4">
              <p className="font-inter font-semibold text-base leading-9 text-gray-900">
                $5 Life Time Warranty
              </p>
              <div className="flex items-center gap-10">
                <button
                  className=" bg-gray-200 rounded-xl "
                  onClick={addWarranty}
                >
                  {warrantySelected ? (
                    <RemoveIcon
                      fontSize="large"
                      className="animate-fade text-red-500"
                    />
                  ) : (
                    <AddIcon fontSize="large" clnassName="animate-fade" />
                  )}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between w-full mb-4">
              <input
                type="text"
                className="block w-full max-w-5xl rounded-md border-0 pl-2 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Enter coupon code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
              />
              <button
                onClick={handleCouponApply}
                className="bg-[#587cdd] text-white p-2 rounded-md flex justify-center items-center gap-2"
              >
                <DiscountIcon />
                Apply Coupon
              </button>
            </div>
            <div className="flex items-center justify-between w-full mb-4">
              <p className="font-inter font-medium text-xl leading-9 text-gray-900">
                Discount
              </p>
              <h6 className="font-inter font-bold text-xl leading-9 text-[#587cdd]">
                {discount + mysteryPaintKitDiscount} %
              </h6>
            </div>
            <div className="flex items-center justify-between w-full pb-6 border-b border-gray-200"></div>
            <div className="flex items-center justify-between w-full mb-6 mt-2">
              <p className="font-normal text-xl leading-8 text-gray-400">
                Sub Total
              </p>
              <h6 className="font-semibold text-xl leading-8 text-gray-900">
                ${(subtotal / 100).toFixed(2)}
              </h6>
            </div>
            <div className="flex items-center justify-between w-full mb-6 mt-2">
              <p className="font-normal text-xl leading-8 text-gray-400">
                Shipping costs
              </p>
              <h6 className="font-semibold text-xl leading-8 text-gray-900">
                {isShippingFree ? "Free" : "$10"}
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
