import { Layout } from "../../components";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { InfinitySpin } from "react-loader-spinner";

export default function Cart() {
  const getCart = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const email = localStorage.getItem("email");
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/auth/cart`,
        { email },
      );
      return response.data;
    },
  });
  const totalPrice = getCart.data ? getCart.data.images.length * 60 : 0;
  return (
    <Layout>
      <section className="py-24 relative">
        {getCart.isLoading && <InfinitySpin color="#587cdd" />}{" "}
        {getCart.isError && <p className="text-red-500">Error fetching data</p>}
        <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
          <h2 className="title font-inter font-bold text-4xl leading-10 mb-8 text-center text-black">
            Shopping Cart
          </h2>
          <div className="hidden lg:grid grid-cols-2 py-6">
            <div className="font-normal text-xl leading-8 text-gray-500">
              Product
            </div>
            <p className="font-normal text-xl leading-8 text-gray-500 flex items-center justify-end">
              <span className="w-full max-w-[200px] text-center">Total</span>
            </p>
          </div>

          {getCart?.data?.images.map((item, index) => (
            <>
              <div className="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6">
                <div className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
                  <div className="img-box">
                    <img
                      src={item}
                      alt="perfume bottle image"
                      className="xl:w-[140px]"
                    />
                  </div>
                  <div className="pro-data w-full max-w-sm ">
                    <h5 className="font-semibold text-xl leading-8 text-black max-[550px]:text-center">
                      Image {index + 1}
                    </h5>
                    <p className="font-normal text-lg leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center">
                      Generative Image
                    </p>
                    <h6 className="font-medium text-lg leading-8 text-[#587cdd]  max-[550px]:text-center">
                      $60.00
                    </h6>
                  </div>
                </div>
                <div className="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-10 justify-end">
                  <h6 className="text-[#587cdd] font-inter font-bold text-2xl leading-9 w-full max-w-[176px] text-center">
                    $60.00
                  </h6>
                </div>
              </div>
            </>
          ))}
          <div className="bg-gray-50 rounded-xl p-6 w-full mb-8 max-lg:max-w-xl max-lg:mx-auto">
            <div className="flex items-center justify-between w-full mb-6">
              <p className="font-normal text-xl leading-8 text-gray-400">
                Sub Total
              </p>
              <h6 className="font-semibold text-xl leading-8 text-gray-900">
                ${totalPrice.toFixed(2)}
              </h6>
            </div>
            <div className="flex items-center justify-between w-full pb-6 border-b border-gray-200"></div>
            <div className="flex items-center justify-between w-full py-6">
              <p className="font-inter font-medium text-2xl leading-9 text-gray-900">
                Total
              </p>
              <h6 className="font-inter font-bold text-2xl leading-9 text-[#587cdd]">
                ${totalPrice.toFixed(2)}
              </h6>
            </div>
          </div>
          <div className="flex items-center flex-col sm:flex-row justify-center gap-3 mt-8">
            <button className="rounded-full w-full max-w-[280px] py-4 text-center justify-center items-center bg-[#587cdd] font-semibold text-lg text-white flex transition-all duration-500 hover:bg-indigo-600">
              Continue to Payment
              <svg
                className="ml-2"
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
