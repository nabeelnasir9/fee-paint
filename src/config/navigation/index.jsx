import { useEffect, useLayoutEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import {
  Home,
  Cart,
  Success,
  Cancel,
  Login,
  Signup,
  Generate,
  PrivacyPolicy,
  TermsConditions,
  RefundPolicy,
  Faqs,
  ContactUs,
  TrackYourOrder,
  Payment,
} from "../../pages";
function ScrollToTop() {
  const { pathname } = useLocation();

  // useEffect is used to scroll to the top when the pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // useLayoutEffect is used to scroll to the top when the component mounts
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}
const RouterNavigation = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/generate" element={<Generate />} />
          <Route path="/track-your-order" element={<TrackYourOrder />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        // position="bottom-center"
        toastOptions={{
          style: {
            background: "white",
            color: "black",
          },
        }}
      />
    </>
  );
};
export default RouterNavigation;
