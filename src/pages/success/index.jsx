import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { Layout } from "../../components";

export default function Success() {
  const location = useLocation();
  const [trackingId, setTrackingId] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const trackingId = params.get("trackingId");
    if (trackingId) {
      setTrackingId(trackingId);
    }
  }, [location.search]);

  return (
    <Layout>
      <div className="flex min-h-screen flex-col items-center justify-center gradient-bg-img px-4 py-12">
        <div className="mx-auto w-full max-w-lg rounded-lg bg-white p-10 shadow-lg">
          <div className="flex flex-col items-center justify-center space-y-6">
            <CircleCheckIcon className="h-16 w-16 text-green-500" />
            <div className="flex gap-3 flex-col text-center">
              <h2 className="text-2xl font-semibold text-green-500">
                Payment Successful
              </h2>
              <p className="font-semibold">
                Tracking ID will only be shown once <br /> and cannot be
                retrieved later.
              </p>
              <p className="text-gray-500">Your order is being processed.</p>
            </div>
            {trackingId && (
              <div className="w-full rounded-md border border-gray-200 bg-gray-50 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-base font-medium text-gray-500">
                    Tracking ID:
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-gray-900">
                      {trackingId}
                    </span>
                    <button
                      className="rounded-full border border-gray-200"
                      onClick={() => {
                        toast.success("Copied!");
                        navigator.clipboard.writeText(trackingId);
                      }}
                    >
                      <CopyIcon className="h-4 w-4" />
                      <span className="sr-only">Copy tracking ID</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
            <Link
              className="inline-flex w-full items-center justify-center rounded-md bg-[#587cdd] px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
              to="/track-your-order"
            >
              Track your order
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

function CircleCheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function CopyIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  );
}
