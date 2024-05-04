import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import logo from "../../assets/logo.png";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Signup() {
  const [progress, setProgress] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setProgress(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/auth/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );

      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.message || "Something went wrong");
      }
      setProgress(false);
      toast.success("Signup Successful!");

      navigate("/login");
    } catch (error) {
      console.error("Signup failed:", error.message);
      toast.error("Invalid credential details. Please try again.");
    }
  };

  return (
    <>
      <div className="flex min-h-screen flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img className="mx-auto h-10 w-auto" src={logo} alt="Your Company" />
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-12 shadow-xl sm:rounded-lg sm:px-12">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Full Name
                </label>
                <div className="mt-2">
                  <input
                    id="fullName"
                    name="fullName"
                    autoComplete="name"
                    required
                    {...register("fullName", {
                      required: true,
                      minLength: 3,
                      maxLength: 50,
                    })}
                    className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${errors.fullName ? "border-red-500" : ""}`}
                  />
                  {errors.fullName && (
                    <span className="text-red-500 text-xs">
                      {errors.fullName.message || "Full Name is required"}
                    </span>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    {...register("email", {
                      required: true,
                      minLength: 3,
                      maxLength: 50,
                    })}
                    className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${errors.email ? "border-red-500" : ""}`}
                  />
                  {errors.email && (
                    <span className="text-red-500 text-xs">
                      {errors.email.message || "Email is required"}
                    </span>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    {...register("password", {
                      required: true,
                      minLength: 3,
                      maxLength: 50,
                    })}
                    className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${errors.password ? "border-red-500" : ""}`}
                  />
                  {errors.password && (
                    <span className="text-red-500 text-xs">
                      {errors.password.message || "Password is required"}
                    </span>
                  )}
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-[#587cdd] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-[#c4c4c4] disabled:text-[#787878]"
                  disabled={progress}
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold leading-6 text-indigo-500 hover:text-indigo-400"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
