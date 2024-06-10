import { Layout } from "../../components";
import img from "../../assets/MysteryPaintByNumber.webp";
import toast from "react-hot-toast";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { DeleteForever } from "@mui/icons-material";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useEffect, useState, useMemo, useCallback } from "react";
import { AuthContext } from "../../config/AuthContext";

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
      price += 500;
    }
    if (mysteryPaintKit) {
      price += pricing(); // Add mysteryPaintKit price
    }

    const totalDiscount = (price * mysteryPaintKitDiscount) / 100;
    price -= totalDiscount;

    return price;
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
        <div className="w-full max-w-6xl px-4 md:px-5 lg-6 mx-auto">
          <h2 className="title font-inter font-bold text-4xl leading-10 mb-8 text-center text-black">
            Your Cart
          </h2>
          <div className="hidden lg:flex items-center justify-between">
            <div className="font-normal text-xl leading-8 text-gray-500">
              Product
            </div>
            <div className="font-normal text-xl leading-8  text-gray-500 ml-96">
              Style
            </div>
            <div className="font-normal text-xl  leading-8 text-gray-500">
              Frame
            </div>
            <div className="font-normal text-xl leading-8 text-gray-500 mr-10">
              Total
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
                  <h6 className="text-[#587cdd] font-inter font-bold text-2xl leading-9 w-full max-w-[176px] text-center">
                    ${(pricing() / 100).toFixed(2)}
                  </h6>
                </div>
              </div>
            )}
          {orders?.map((order, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6"
            >
              <div className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
                <div className="img-box">
                  <img src={order?.image} alt="" className="xl:w-[140px]" />
                </div>
                <div className="pro-data w-full max-w-sm">
                  <h5 className="font-semibold text-xl leading-8 text-black max-[550px]:text-center">
                    {order?.name}
                  </h5>
                  <p className="font-normal text-lg leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center">
                    {order?.description}
                  </p>
                  <p className="font-normal text-lg leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center">
                    Size:{" "}
                    <select
                      value={selectedSizes[index] || order.size}
                      onChange={(e) => handleSizeChange(index, e.target.value)}
                    >
                      <option value="Small">Small</option>
                      <option value="Medium">Medium</option>
                      <option value="Large">Large</option>
                    </select>
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="font-normal text-lg leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center">
                      Quantity: {order?.quantity}
                    </p>
                    <div className="flex items-center gap-4">
                      <RemoveIcon
                        onClick={() =>
                          setOrders((prev) =>
                            prev.map((o, i) =>
                              i === index
                                ? {
                                    ...o,
                                    quantity:
                                      o.quantity > 1 ? o.quantity - 1 : 1,
                                  }
                                : o,
                            ),
                          )
                        }
                      />
                      <AddIcon
                        onClick={() =>
                          setOrders((prev) =>
                            prev.map((o, i) =>
                              i === index
                                ? { ...o, quantity: o.quantity + 1 }
                                : o,
                            ),
                          )
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-10 justify-end">
                <div className="frame flex items-center gap-2">
                  <button
                    onClick={() =>
                      updateFrameOptions(
                        index,
                        frameOptions[index]?.style === "Detailed"
                          ? "Exquisite"
                          : "Detailed",
                        frameOptions[index]?.selected || false,
                      )
                    }
                    className={`${
                      frameOptions[index]?.style === "Detailed"
                        ? "bg-[#587cdd] text-white"
                        : "bg-[#d1d5db] text-black"
                    } px-2 py-1 rounded-md`}
                  >
                    {frameOptions[index]?.style || "Detailed"}
                  </button>
                  <input
                    type="checkbox"
                    checked={frameOptions[index]?.selected || false}
                    onChange={() =>
                      updateFrameOptions(
                        index,
                        frameOptions[index]?.style || "",
                        !frameOptions[index]?.selected,
                      )
                    }
                    className="w-4 h-4"
                  />
                </div>
                <h6 className="text-[#587cdd] font-inter font-bold text-2xl leading-9 w-full max-w-[176px] text-center">
                  $
                  {(
                    getPriceForVariant(
                      frameOptions[index]?.style || "Detailed",
                      selectedSizes[index] || order.size,
                      frameOptions[index]?.selected || false,
                    ) / 100
                  ).toFixed(2)}
                </h6>
                <button
                  className="bg-red-500 text-white text-base px-2 py-2 rounded-md flex items-center gap-2 disabled:bg-[#c4c4c4] disabled:text-[#787878]"
                  onClick={() => handleRemove(order)}
                >
                  <DeleteForever fontSize="medium" />
                </button>
              </div>
            </div>
          ))}
          <div className="mt-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="mb-4 md:mb-0">
                <label className="block text-lg font-medium text-gray-700">
                  Coupon Code
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input
                    type="text"
                    name="coupon-code"
                    id="coupon-code"
                    className="flex-1 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                  />
                  <button
                    className="px-4 py-2 border border-transparent text-sm font-medium rounded-r-md bg-indigo-600 text-white hover:bg-indigo-700"
                    onClick={handleCouponApply}
                    disabled={couponMutation.isLoading}
                  >
                    Apply
                  </button>
                </div>
              </div>
              <div className="text-lg font-medium text-gray-700">
                Subtotal: ${(subtotal / 100).toFixed(2)}
              </div>
            </div>
            {discount > 0 && (
              <div className="mt-2 text-lg font-medium text-gray-700">
                Discount: -${(discountAmount / 100).toFixed(2)}
              </div>
            )}
            <div className="mt-2 text-lg font-medium text-gray-700">
              Warranty: +$5.00
              <input
                type="checkbox"
                checked={warrantySelected}
                onChange={addWarranty}
                className="ml-2"
              />
            </div>
            {mysteryPaintKit && (
              <div className="mt-2 text-lg font-medium text-gray-700">
                Mystery Paint Kit Discount: -$
                {((totalPrice * mysteryPaintKitDiscount) / 100 / 100).toFixed(
                  2,
                )}
              </div>
            )}
            <div className="mt-4 text-2xl font-bold text-gray-900">
              Total: ${(totalPrice / 100).toFixed(2)}
            </div>
            <div className="mt-8 flex justify-center">
              <button
                className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                onClick={handleCheckout}
                disabled={checkoutLoading}
              >
                {checkoutLoading ? "Processing..." : "Checkout"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
