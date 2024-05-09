import { useEffect } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
const Success = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/track-your-order");
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex items-center justify-center h-[89vh] flex-col gap-5">
      <h1 className="text-5xl font-semibold">Payment Succeeded</h1>
      <p className="text-3xl">Redirecting...</p>
      <RotatingLines
        visible={true}
        height="60"
        width="60"
        strokeColor="#587cdd"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperClass=""
      />
    </div>
  );
};

export default Success;
