import React from "react";

const FAQS = () => {
  const faqData = [
    {
      heading: "How can I get in touch with MyPaintGenie?",
      text: "You can easily reach us by sending an email to info@mypaintgenie.com. Our dedicated customer service team is ready to assist you with any inquiries or assistance you may need!",
    },
    {
      heading: "Do you offer worldwide shipping?",
      text: "Absolutely! We provide worldwide shipping to ensure our products reach customers all around the globe.",
    },
    {
      heading: "Where does MyPaintGenie ship from?",
      text: "We ship our products from our warehouse located in Hong Kong.",
    },
    {
      heading: "Can I make changes to or cancel my order?",
      text: "To ensure swift processing and delivery, we kindly ask you to request any changes or cancellations within 12 hours of placing your order. Regrettably, any requests received after this time frame will not be accommodated. However, once you receive your order, you can initiate a return for a full refund.",
    },
    {
      heading: "What payment methods do you accept?",
      text: "We accept all major credit cards, including VISA, Mastercard, and AMEX. Additionally, we also offer the convenience of Apple Pay.",
    },
    {
      heading: "When will my order be processed?",
      text: "We process orders from Monday to Friday. After placing an order, please allow 1-3 business days for processing, with the shipment scheduled for the next working day. Please note that we do not ship orders on weekends. During holidays and sale seasons, additional processing time may be required.",
    },
    {
      heading: "How long will it take to receive my order?",
      text: "Due to the high demand for our products, shipping times typically range between 2-4 weeks. We appreciate your patience and understanding as we strive to deliver your order as quickly as possible.",
    },
    {
      heading: "What if I don't receive my order?",
      text: "If you haven't received your order within 30 days after the shipping date, you are eligible for a full refund. Please contact us, and we will promptly assist you in resolving the issue.",
    },
    {
      heading: "Will I be charged with customs and taxes?",
      text: "The prices displayed on our website are tax-free in US Dollars. However, please note that you may be liable for customs duties, taxes, and related fees imposed by your local customs office upon receiving your order. These charges and taxes are your responsibility and will not be covered by us. We cannot be held responsible for any delays caused by the customs department in your country. For detailed information regarding charges, kindly reach out to your local customs office.",
    },
    {
      heading: "How do I return an item?",
      text: "Please contact us at info@mypaintgenie.com. Our support team will guide you through the return process and provide the necessary assistance.",
    },
    {
      heading: "What if the item(s) I received are defective/incorrect/damaged?",
      text: "If you receive merchandise that is defective, incorrect, or damaged, please contact us immediately. Provide us with your order number, along with photographs of the item(s) and any relevant details. We will work diligently to resolve the matter and provide a suitable solution.",
    },
    {
      heading: "When will I receive my refund?",
      text: "Refunds will be credited to your original form of payment. If you made the payment using a credit or debit card, the refund will be processed and sent to the card-issuing bank within 7-10 business days after we receive the returned item or cancellation request. Please contact your card-issuing bank for more information regarding the timeline for the credit to be posted to your account. If you haven't received a credit for your return yet, please follow these steps: Contact your bank/credit card company for assistance, as it may take some time for the refund to appear in your account.",
    },
  ];

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
              <h2 className="text-lg font-medium text-gray-900">{faq.heading}</h2>

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

            <p className="mt-4 leading-relaxed text-gray-700">{faq.text}</p>
          </details>
        ))}
      </div>
    </div>
  );
};

export default FAQS;
