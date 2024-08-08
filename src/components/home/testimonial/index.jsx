import { FaStar } from "react-icons/fa";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import img1 from "../../../assets/reviews/guy.jpg";
import img2 from "../../../assets/reviews/woman1.jpg";
import img3 from "../../../assets/reviews/woman2.jpg";

const Testimonial = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/generate");
  };

  const testimonials = [
    {
      img: img1,
      text: "I absolutely love using My Paint Genie to whip up hilarious images of my friends. It's so much fun surprising them by sharing these masterpieces on their social media!",
      author: "John M.",
    },
    {
      img: img2,
      text: "My grandma, who's not great with technology, can effortlessly create stunning artwork. She's thrilled and keeps asking my husband to hang her paintings all over the house!",
      author: "Emily S.",
    },
    {
      img: img3,
      text: "My whole family loves using My Paint Genie! We spend hours creating and sharing our unique artworks. It's a fantastic way to bond and have fun together.",
      author: "Susan R.",
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 className="text-center text-4xl font-bold tracking-tight mb-10 text-gray-900 sm:text-5xl">
          Here's What Others Say
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <blockquote
              key={index}
              className="rounded-lg p-6 border border-gray-800 shadow-sm sm:p-8"
            >
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.img}
                  className="w-16 h-16 rounded-full object-cover"
                />

                <div>
                  <div className="flex justify-center gap-0.5 text-yellow-500">
                    {Array(5)
                      .fill(0)
                      .map((_, idx) => (
                        <FaStar key={idx} className="h-5 w-5" />
                      ))}
                  </div>

                  <p className="mt-0.5 text-lg font-medium text-gray-900">
                    {testimonial.author}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-gray-700">{testimonial.text}</p>
            </blockquote>
          ))}
        </div>
        <div className="text-center mt-[2rem]">
          <Button
            variant="contained"
            color="primary"
            onClick={handleButtonClick}
          >
            Create Your Own Artwork Now!{" "}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
