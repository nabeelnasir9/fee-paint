import { useState } from "react";
import { Layout } from "../../components";
import Grid from "@mui/material/Grid";
import "./index.css";
import { IoChevronBack } from "react-icons/io5";
import CardImage from "./../../assets/cart.png";
import { MdOutlineDelete } from "react-icons/md";
import UpIcon from "./../../assets/svg/up.svg";
import DownIcon from "./../../assets/svg/down.svg";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FaCircleCheck } from "react-icons/fa6";
import PaypalIcon from "./../../assets/svg/paypal-3.svg";
import VisaIcon from "./../../assets/svg/visa-2.svg";
import { IoIosHelpCircleOutline } from "react-icons/io";

const Payment = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState("Shopping cart");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("Paypal");
  const [firstLineAddres, setFirstLineAddress] = useState("");
  const [streetName, setStreetName] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [shoppingCart, setShoppingCart] = useState([
    {
      img: CardImage,
      name: "Image 1",
      counter: 1,
      price: 68,
    },
    {
      img: CardImage,
      name: "Image 2",
      counter: 1,
      price: 20,
    },
    {
      img: CardImage,
      name: "Image 3",
      counter: 1,
      price: 36,
    },
  ]);
  return (
    <Layout>
      <div className="pages-data-container">
        <Grid container spacing={0}>
          <Grid item xs={1} sm={1} md={1} lg={1} xl={2}></Grid>
          <Grid xs={10} sm={10} md={10} lg={10} xl={8}>
            <div className="payment-container">
              <Grid container spacing={5}>
                <Grid item xs={12} sm={12} md={7} lg={6} xl={6}>
                  <div className="payment-header">
                    <button onClick={() => window.history.back()}>
                      <IoChevronBack />
                      Shopping Continue
                    </button>
                  </div>
                  <p className="payment-heading">{step}</p>
                  {step === "Shopping cart" ? (
                    <div>
                      <p className="payment-text">
                        You have 3 item in your cart
                      </p>
                      {shoppingCart.map((v, i) => {
                        return (
                          <div key={i} className="payment-item-card">
                            <div className="payment-item-card-sec-1">
                              <img src={v.img} />
                              <p>{v.name}</p>
                            </div>
                            <div className="payment-item-card-sec-2">
                              <p>{v.counter}</p>
                              <div>
                                <button
                                  onClick={() => {
                                    shoppingCart[i].counter++;
                                    setShoppingCart([...shoppingCart]);
                                  }}
                                >
                                  <img src={UpIcon} />
                                </button>
                                <button
                                  onClick={() => {
                                    if (v.counter > 1) {
                                      shoppingCart[i].counter--;
                                      setShoppingCart([...shoppingCart]);
                                    }
                                  }}
                                >
                                  <img src={DownIcon} />
                                </button>
                              </div>
                            </div>
                            <p className="payment-item-card-price">
                              ${v.price * v.counter}
                            </p>
                            <button className="payment-item-card-remove-btn">
                              <MdOutlineDelete />
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  ) : step === "Shipping details" ? (
                    <div>
                      <div className="payment-save-address-main">
                        <p>Use saved address</p>
                        <select>
                          <option>123 , Electric avenue</option>
                        </select>
                      </div>
                      <p className="payment-input-title">
                        First line of address
                      </p>
                      <div className="payent-input-main">
                        <input
                          placeholder="First line of address"
                          value={firstLineAddres}
                          onChange={(val) =>
                            setFirstLineAddress(val.target.value)
                          }
                        />
                        <FaCircleCheck
                          size={24}
                          color={firstLineAddres === "" ? "#72747C" : "#587CDD"}
                        />
                      </div>
                      <p className="payment-input-title">Street name</p>
                      <div className="payent-input-main">
                        <input
                          placeholder="Street name"
                          value={streetName}
                          onChange={(val) => setStreetName(val.target.value)}
                        />
                        <FaCircleCheck
                          size={24}
                          color={streetName === "" ? "#72747C" : "#587CDD"}
                        />
                      </div>
                      <div className="payment-post-code-main">
                        <div>
                          <p className="payment-input-title">Postcode</p>
                          <div className="payent-input-main">
                            <input
                              placeholder="Postcode"
                              style={{ marginRight: "0px" }}
                            />
                          </div>
                        </div>
                        <div>
                          <p className="payment-input-title">Select shipping</p>
                          <select className="payment-delivery-dropdown">
                            <option>Free delivery</option>
                          </select>
                        </div>
                      </div>
                      <div className="payment-line" />
                    </div>
                  ) : (
                    <div>
                      <div className="payment-method-main">
                        <p>Payment Method</p>
                        <div>
                          <Button
                            className="payment-method-button"
                            onClick={() => setSelectedPaymentMethod("Paypal")}
                            style={{
                              borderColor:
                                selectedPaymentMethod === "Paypal"
                                  ? "#587CDD"
                                  : "#fff",
                            }}
                          >
                            <img src={PaypalIcon} />
                          </Button>
                          <Button
                            className="payment-method-button"
                            onClick={() => setSelectedPaymentMethod("Visa")}
                            style={{
                              borderColor:
                                selectedPaymentMethod === "Visa"
                                  ? "#587CDD"
                                  : "#fff",
                            }}
                          >
                            <img src={VisaIcon} />
                          </Button>
                        </div>
                      </div>
                      <p className="payment-input-title">Name on card</p>
                      <div className="payent-input-main">
                        <input
                          placeholder="Name on card"
                          value={cardName}
                          onChange={(val) => setCardName(val.target.value)}
                        />
                        <FaCircleCheck
                          size={24}
                          color={cardName === "" ? "#72747C" : "#587CDD"}
                        />
                      </div>
                      <p className="payment-input-title">Card Number</p>
                      <div className="payent-input-main">
                        <input
                          placeholder="Card Number"
                          type="number"
                          value={cardNumber}
                          onChange={(val) => setCardNumber(val.target.value)}
                        />
                        <FaCircleCheck
                          size={24}
                          color={cardNumber === "" ? "#72747C" : "#587CDD"}
                        />
                      </div>
                      <div className="payment-expiration-main">
                        <div className="payment-expiration-inner">
                          <p className="payment-input-title">Expiration</p>
                          <div className="payment-expiration-inner-2">
                            <div>
                              <div className="payent-input-main">
                                <input placeholder="03" type="number" />
                              </div>
                            </div>
                            <div className="payment-expiration-line">/</div>
                            <div>
                              <div className="payent-input-main">
                                <input placeholder="24" type="number" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="payment-cvc-main">
                          <div className="svc-header">
                            <p
                              className="payment-input-title"
                              style={{ marginTop: "0px" }}
                            >
                              CVC
                            </p>
                            <div className="cvc-help-btn">
                              <IoIosHelpCircleOutline
                                size={17}
                                color="#72747C"
                              />
                            </div>
                          </div>
                          <div className="payent-input-main">
                            <input placeholder="123" type="number" />
                          </div>
                        </div>
                      </div>
                      <div className="payment-line" />
                    </div>
                  )}
                  <div className="payment-btn-main">
                    <Button
                      className="payment-cancel-btn"
                      onClick={() => window.history.back()}
                    >
                      Cancel
                    </Button>
                    <Button
                      className="payment-next-btn"
                      onClick={() => {
                        if (step === "Shopping cart") {
                          setStep("Shipping details");
                        } else if (step === "Shipping details") {
                          setStep("Payment details");
                        } else {
                          navigate("/");
                        }
                      }}
                    >
                      {step === "Payment details" ? "Submit" : "Next"}
                    </Button>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={5} lg={6} xl={6}>
                  <h1 className="payment-summary-heading">Order Summary</h1>
                  <div className="payment-summary-price-main">
                    <p className="payment-summary-price-title">Sub total</p>
                    <p className="payment-summary-price">$316.55</p>
                  </div>
                  <div className="payment-summary-price-main">
                    <p className="payment-summary-price-title">Tax</p>
                    <p className="payment-summary-price">$3.45</p>
                  </div>
                  <div className="payment-summary-price-main">
                    <p className="payment-summary-price-title">Shipping</p>
                    <p className="payment-summary-price">Free</p>
                  </div>
                  <div
                    className="payment-summary-price-main"
                    style={{ borderBottomWidth: "0px" }}
                  >
                    <p className="payment-summary-total">Total</p>
                    <p className="payment-summary-price">$320.45</p>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1} xl={2}></Grid>
        </Grid>
      </div>
    </Layout>
  );
};
export default Payment;
