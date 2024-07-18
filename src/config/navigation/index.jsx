import { useContext, useEffect, useLayoutEffect } from "react";
import { useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { FirstPopup, SecondPopup, ThirdPopup } from "../../components";
import Facebook from "../../tracking/FacebookPixel.jsx";
import ReactGA from "react-ga4";
import TiktokPixel from "tiktok-pixel";
import mixpanel from "mixpanel-browser";
import {
  Home,
  Cart,
  ProductPage,
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
import { PopupContext } from "../PopupContext";

function ScrollToTop() {
  const { pathname } = useLocation();
  const { setPopupState } = useContext(PopupContext);
  const [hasShownPopup, setHasShownPopup] = useState(false);
  useEffect(() => {
    if (hasShownPopup) return;

    const timer = setTimeout(() => {
      if (!hasShownPopup) {
        setPopupState((prevState) => ({
          ...prevState,
          firstPopupVisible: true,
        }));
        setHasShownPopup(true);
      }
    }, 7000);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const scrollHeight = document.documentElement.scrollHeight;
      if (scrollPosition / scrollHeight > 0.7 && !hasShownPopup) {
        setPopupState((prevState) => ({
          ...prevState,
          firstPopupVisible: true,
        }));
        setHasShownPopup(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasShownPopup, setPopupState]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

const RouterNavigation = () => {
  ReactGA.initialize("G-1F0602N922");
  TiktokPixel.init("CQ0SU23C77U1C0R51SQG");
  // ReactGA.initialize([
  //   {
  //     trackingId: "G-1F0602N922",
  //     gaOptions: {
  //       testMode: true
  //     }, // optional

  //   },

  // ]);
  ReactGA.send({
    hitType: "pageview",
  });
  TiktokPixel.pageView();
  mixpanel.init("3c06c85ca82cefa8cf12662e1aafe49a", {
    debug: true,
    track_pageview: true,
    persistence: "localStorage",
  });
  return (
    <div className="font-inter">
      <Facebook />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/generate" element={<Generate />} />
          <Route path="/track-your-order" element={<TrackYourOrder />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/success" element={<Success />} />
          <Route path="/product" element={<ProductPage />} />
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
        <FirstPopup />
        <SecondPopup />
        <ThirdPopup />
      </BrowserRouter>
      <Toaster
        toastOptions={{
          style: {
            background: "white",
            color: "black",
          },
        }}
      />
    </div>
  );
};

export default RouterNavigation;
