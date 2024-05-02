import React from "react";
import { Layout } from "../../components";
import Grid from "@mui/material/Grid";
import "./index.css";
const RefundPolicy = () => {
  return (
    <Layout>
      <div className="pages-data-container">
        <Grid container spacing={0}>
          <Grid item xs={1} sm={1} md={1} lg={1} xl={2}></Grid>
          <Grid xs={10} sm={10} md={10} lg={10} xl={8}>
            <h1 className="privacy-policy-heading">Refund Policy</h1>
            {/* <p className="refund-policy-update">Last updated: March 12, 2024</p> */}
            <p className="privacy-policy-text">
              We have a 30-day return policy, which means you have 30 days after
              receiving your item to request a return.
            </p>
            <p className="privacy-policy-text">
              To be eligible for a return, your item must be in the same
              condition that you received it, unworn or unused, with tags, and
              in its original packaging. You’ll also need the receipt or proof
              of purchase.
            </p>
            <p className="privacy-policy-text">
              To start a return, you can contact us at info@mypaintgenie.com.
            </p>
            <p className="privacy-policy-text">
              If your return is accepted, we’ll send you a return shipping
              label, as well as instructions on how and where to send your
              package. Items sent back to us without first requesting a return
              will not be accepted.
            </p>
            <p className="privacy-policy-text">
              You can always contact us for any return questions at
              info@mypaintgenie.com
            </p>
            {/* <ul className="privacy-policy-list">
              <li>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.
              </li>
              <li>
                Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                consequat.
              </li>
              <li>
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit
                esse molestie consequat, vel illum dolore eu feugiat nulla
                facilisis at vero eros et accumsan et.{" "}
              </li>
              <li>
                iusto odio dignissim qui blandit praesent luptatum zzril delenit
                augue duis dolore te feugait nulla facilisi.
              </li>
            </ul> */}
            <p className="privacy-policy-title">Damages and issues</p>
            <p className="privacy-policy-text">
              Please inspect your order upon reception and contact us
              immediately if the item is defective, damaged or if you receive
              the wrong item so that we can evaluate the issue and make it
              right.
            </p>

            <p className="privacy-policy-title">
              Exceptions / non-returnable items
            </p>
            <p className="privacy-policy-text">
              Certain types of items cannot be returned, like perishable goods
              (such as food, flowers, or plants), custom products (such as
              special orders or personalized items), and personal care goods
              (such as beauty products). We also do not accept returns for
              hazardous materials, flammable liquids, or gases. Please get in
              touch if you have questions or concerns about your specific item.
            </p>
            <p className="privacy-policy-text">
              Unfortunately, we cannot accept returns on sale items or gift
              cards.
            </p>

            <p className="privacy-policy-title">Exchanges</p>
            <p className="privacy-policy-text">
              The fastest way to ensure you get what you want is to return the
              item you have, and once the return is accepted, make a separate
              purchase for the new item.
            </p>
            <p className="privacy-policy-title">
              European Union 14-day cooling off period
            </p>
            <p className="privacy-policy-text">
              Notwithstanding the above, if the merchandise is being shipped
              into the European Union, you have the right to cancel or return
              your order within 14 days, for any reason and without a
              justification. As mentioned above, your item must be in the same
              condition that you received it, unworn or unused, with tags, and
              in its original packaging. You’ll also need the receipt or proof
              of purchase.
            </p>
            <p className="privacy-policy-title">Refunds</p>
            <p className="privacy-policy-text">
              We will notify you once we’ve received and inspected your return,
              and let you know if the refund was approved or not. If approved,
              you’ll be automatically refunded on your original payment method
              within 10 business days. Please remember it can take some time for
              your bank or credit card company to process and post the refund to
              info@mypaintgenie.com
            </p>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1} xl={2}></Grid>
        </Grid>
      </div>
    </Layout>
  );
};
export default RefundPolicy;
