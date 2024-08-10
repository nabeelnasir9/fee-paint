import { Link } from "react-router-dom";
import CancelIcon from "@mui/icons-material/Cancel";
import { Layout } from "../../components";
export default function Cancel() {
  return (
    <Layout>
      <div className="flex min-h-screen flex-col items-center justify-center  gradient-bg-img px-4 py-12">
        <div className="mx-auto w-full max-w-lg rounded-lg bg-white p-10 shadow-lg">
          <div className="flex flex-col items-center justify-center space-y-6">
            <CancelIcon
              sx={{
                fontSize: 60,
              }}
              className="h-16 w-16 text-red-500"
            />
            <div className="flex gap-3 flex-col text-center">
              <h2 className="text-2xl font-semibold text-red-500">
                Payment Unsuccessful
              </h2>
              <p className="text-gray-500">
                Payment did not verify and hence was cancelled
              </p>
            </div>
            <Link
              className="inline-flex w-full items-center justify-center rounded-md bg-[#587cdd] px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 "
              to="/"
            >
              Go back to homepage
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
