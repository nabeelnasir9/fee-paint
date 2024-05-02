import React from "react";
import { Layout } from "../../components";
import Grid from "@mui/material/Grid";
import "./index.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
const Faqs = () => {
  const List = [
    {
      heading: "How can I get in touch with MyPaintGenie?",
      text: "You can easily reach us by sending an email to info@mypaintgenie.com Our dedicated customer service team is ready to assist you with any inquiries or assistance you may need!",
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
      heading: "What payment methods do you accept?      ",
      text: "We accept all major credit cards, including VISA, Mastercard, and AMEX. Additionally, we also offer the convenience of Apple Pay.      ",
    },
    {
      heading: "When will my order be processed?      ",
      text: "We process orders from Monday to Friday. After placing an order, please allow 1-3 business days for processing, with the shipment scheduled for the next working day. Please note that we do not ship orders on weekends. During holidays and sale seasons, additional processing time may be required.      ",
    },
    {
      heading: "How long will it take to receive my order?      ",
      text: "Due to the high demand for our products, shipping times typically range between 2-4 weeks. We appreciate your patience and understanding as we strive to deliver your order as quickly as possible.      ",
    },
    {
      heading: "What if I don't receive my order?      ",
      text: "If you haven't received your order within 30 days after the shipping date, you are eligible for a full refund. Please contact us, and we will promptly assist you in resolving the issue.      ",
    },
    {
      heading: "Will I be charged with customs and taxes?      ",
      text: "The prices displayed on our website are tax-free in US Dollars. However, please note that you may be liable for customs duties, taxes, and related fees imposed by your local customs office upon receiving your order. These charges and taxes are your responsibility and will not be covered by us. We cannot be held responsible for any delays caused by the customs department in your country. For detailed information regarding charges, kindly reach out to your local customs office.      ",
    },

    {
      heading: "How do I return an item?      ",
      text: "Please contact us at info@mypaintgenie.com. Our support team will guide you through the return process and provide the necessary assistance.      ",
    },
    {
      heading: "What if the item(s) I received are defective/incorrect/damaged?      ",
      text: "If you receive merchandise that is defective, incorrect, or damaged, please contact us immediately. Provide us with your order number, along with photographs of the item(s) and any relevant details. We will work diligently to resolve the matter and provide a suitable solution.      ",
    },
    {
      heading: "When will I receive my refund?      ",
      text: "Refunds will be credited to your original form of payment. If you made the payment using a credit or debit card, the refund will be processed and sent to the card-issuing bank within 7-10 business days after we receive the returned item or cancellation request. Please contact your card-issuing bank for more information regarding the timeline for the credit to be posted to your account. If you haven't received a credit for your return yet, please follow these steps: Contact your bank/credit card company for assistance, as it may take some time for the refund to appear in your account.      ",
    },

  ];
  return (
    <Layout>
      <div className="pages-data-container">
        <Grid container spacing={0}>
          <Grid item xs={1} sm={1} md={1} lg={1} xl={2}></Grid>
          <Grid xs={10} sm={10} md={10} lg={10} xl={8}>
            <p className="faqs-heading">Have any questions? </p>
            {List.map((val, index) => {
              return (
                <Accordion
                  defaultExpanded={index === 0 ? true : false}
                  key={index}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel${index + 1}-content`}
                    id="panel1-header"
                  >
                    <Typography className="faqs-accordion-heading">
                      {val.heading}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="faqs-accordion-text">
                      {val.text}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              );
            })}

            {/* <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography className="faqs-accordion-heading">
                  Lorem ipsum dolor sit amet consectetur?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="faqs-accordion-text">
                  Lorem ipsum dolor sit amet consectetur. Nunc et nulla laoreet
                  et. Tincidunt feugiat in lectus quis. Neque porttitor arcu
                  faucibus elementum egestas. Id proin malesuada leo nunc est
                  fringilla purus consectetur platea. Dis rhoncus magnis dictum
                  dui interdum ullamcorper donec adipiscing.
                </Typography>
              </AccordionDetails>
            </Accordion> */}
            {/* <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                <Typography className="faqs-accordion-heading">
                  Lorem ipsum dolor sit amet consectetur?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="faqs-accordion-text">
                  Lorem ipsum dolor sit amet consectetur. Nunc et nulla laoreet
                  et. Tincidunt feugiat in lectus quis. Neque porttitor arcu
                  faucibus elementum egestas. Id proin malesuada leo nunc est
                  fringilla purus consectetur platea. Dis rhoncus magnis dictum
                  dui interdum ullamcorper donec adipiscing.
                </Typography>
              </AccordionDetails>
            </Accordion> */}
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1} xl={2}></Grid>
        </Grid>
      </div>
    </Layout>
  );
};
export default Faqs;
