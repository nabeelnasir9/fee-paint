import React from "react";
import Grid from "@mui/material/Grid";
import "./index.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { FaHandshake } from "react-icons/fa";
import { GrSettingsOption } from "react-icons/gr";
import { TbBulb } from "react-icons/tb";

const ArtGenerator = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/generate");
  };
  return (
    <div>
      <section className="bg-white text-black">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl text-black">
              Here Are The 3 Main Reasons Why Everyone Loves Paint Genie
            </h2>

            <p className="mt-4 text-black">
              It's easy to use, produces stunning results, and, most
              importantly, IT'S FUN!
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-gray-500/10 hover:shadow-gray-500/10"
              href="#"
            >
              <FaHandshake className="size-10 text-gray-500" />
              <h2 className="mt-4 text-xl font-bold text-black">Ease of Use</h2>

              <p className="mt-1 text-sm text-black">
                Paint Genie is designed for everyone, from tech-savvy users to
                beginners. The intuitive interface allows you to create stunning
                artwork with just a few clicks. Simply write a prompt and push a
                button to see your ideas come to life.
              </p>
            </a>

            <a
              className="block rounded-xl border border-[#2276D2] bg-[#2276D2] p-8 shadow-xl transition hover:border-gray-500/10 hover:shadow-gray-500/10"
              href="#"
            >
              <GrSettingsOption
                className="size-10 text-gray-500"
                color="white"
              />

              <h2 className="mt-4 text-xl font-bold text-white">
                Instant Results
              </h2>

              <p className="mt-1 text-sm text-white">
                Forget about waiting hours for your artwork to be ready. With
                Paint Genie, you get professional-quality images instantly. This
                means more time for creating and less time for waiting.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-gray-500/10 hover:shadow-gray-500/10"
              href="#"
            >
              <TbBulb className="size-10 text-gray-500" />

              <h2 className="mt-4 text-xl font-bold text-black">
                Browser-Based Convenience{" "}
              </h2>

              <p className="mt-1 text-sm text-black">
                No need for cumbersome downloads or additional software. Paint
                Genie works directly from your browser, making it accessible and
                convenient. You can create art anytime, anywhere, without
                worrying about compatibility issues.
              </p>
            </a>
          </div>

          <div className="text-center mt-[2rem]">
            <Button
              variant="contained"
              color="primary"
              onClick={handleButtonClick}
            >
              Generate your first piece of art !
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ArtGenerator;
