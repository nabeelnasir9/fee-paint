import { FaQuestionCircle } from "react-icons/fa";

const faqData = [
  {
    heading: "Can I customize the design for my Paint by Number kit?",
    text: "Yes, you can customize your Paint by Number kit by uploading your own image. We will transform your image into a Paint by Number kit just for you.",
  },
  {
    heading: "What sizes are available for the Paint by Number kits?",
    text: "Our Paint by Number kits are available in various sizes, ranging from small (12x16 inches) to large (24x32 inches). Please check the product page for specific size options.",
  },
  {
    heading: "Do you ship internationally?",
    text: "Yes, we do ship internationally. Shipping times and costs may vary depending on the destination country. Please check our shipping policy page for detailed information.",
  },
  {
    heading: "What is included in the Paint by Number kits?",
    text: "Each kit includes a printed canvas with the numbered guide, a set of acrylic paints needed for your chosen design, and a set of brushes. Some kits may also include a frame, depending on the option you select.",
  },
  {
    heading: "Can I return or exchange my Paint by Number kits?",
    text: "Yes, you can return or exchange your kit within 30 days of purchase, provided it is in its original condition and packaging.",
  },
  {
    heading: "How do I track my order?",
    text: "Once your order is shipped, you will receive a tracking number via email. You can use this number to track your order's progress on our website or the carrier's tracking page.",
  },
  {
    heading: "What should I do if my kit is missing parts or damaged?",
    text: "If your kit is missing parts or was damaged during shipping, please contact our customer service immediately. We will arrange for a replacement or the missing parts to be sent to you.",
  },
  {
    heading: "What is the warranty policy for My Paint Genie products?",
    text: "All My Paint Genie products are backed with a 1-year warranty and a 30-day money-back guarantee. We also offer a lifetime warranty for only $5.",
  },
  {
    heading: "What are the shipping times for My Paint Genie products?",
    text: "Because our products are custom made based on your order, it will take 2-3 days for us to process your order and begin creating it. After that, it will take 3-5 days to create your custom Paint by Number and ship it out. It will take about 3-7 days after being shipped to arrive.",
  },
];
const FAQS = () => {
  return (
    <div className="max-w-lg mx-auto md:max-w-2xl">
      <h1 className="text-4xl font-bold text-gray-900 mb-10 text-center">
        Frequently Asked Questions
      </h1>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <details
            key={index}
            className="group border-s-4 border-[#2276D2] bg-gray-50 p-4 [&_summary::-webkit-details-marker]:hidden"
            open={index === 0}
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <FaQuestionCircle className="text-[#2276D2] shrink-0 transition duration-300" />
              <h2 className="text-lg font-medium text-gray-900">
                {faq.heading}
              </h2>

              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 animate-fade leading-relaxed text-gray-700">
              {faq.text}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
};

export default FAQS;
