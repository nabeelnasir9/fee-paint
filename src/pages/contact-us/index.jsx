import { useState } from "react";
import { Layout } from "../../components";
import Grid from "@mui/material/Grid";
import "./index.css";
import ContactImg from "./../../assets/contact.png";
import { MdWifiCalling3 } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { Button } from "@mui/material";
const ContactUs = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [subjectSelected, setSubjectSelected] = useState(0);
  const SubjectList = [
    "General Inquiry",
    "General Inquiry",
    "General Inquiry",
    "General Inquiry",
  ];
  return (
    <Layout>
      <div className="pages-data-container">
        <Grid container spacing={0}>
          <Grid item xs={1} sm={1} md={1} lg={1} xl={2}></Grid>
          <Grid xs={10} sm={10} md={10} lg={10} xl={8}>
            <h1 className="contact-heading">Contact Us</h1>
            <p className="contact-text">
              Any question or remarks? Just write us a message!
            </p>
            <Grid container spacing={5}>
              <Grid item xs={12} sm={12} md={6} lg={5} xl={5}>
                <div className="contact-left-section">
                  <h1>Contact Information</h1>
                  <p>Say something to start a live chat!</p>
                  <div className="contact-left-section-data">
                    <MdWifiCalling3 />
                    <p>+1 7273511108</p>
                  </div>
                  <div className="contact-left-section-data">
                    <MdEmail />
                    <p>info@mypaintgenie.com</p>
                  </div>
                  <div className="contact-left-section-data">
                    <FaLocationDot />
                    <p>
                      444 Alaska Avenue, Suite #BUT765, Torrance, CA 90503, USA
                    </p>
                  </div>
                  {/* <div className="contact-footer-socail"> */}
                  {/*   <a href="https://www.facebook.com/" target="_blank"> */}
                  {/*     <FaTwitter /> */}
                  {/*   </a> */}
                  {/*   <a href="https://www.facebook.com/" target="_blank"> */}
                  {/*     <FaInstagram /> */}
                  {/*   </a> */}
                  {/*   <a href="https://www.facebook.com/" target="_blank"> */}
                  {/*     <FaDiscord /> */}
                  {/*   </a> */}
                  {/* </div> */}
                  <img src={ContactImg} className="contact-left-section-img" />
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={7} xl={7}>
                <div className="contact-from">
                  <div
                    style={{
                      borderBottomColor:
                        firstName === "" ? "#8D8D8D" : "#000000",
                    }}
                  >
                    <input
                      type="text"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(val) => setFirstName(val.target.value)}
                    />
                  </div>
                  <div
                    style={{
                      borderBottomColor:
                        lastName === "" ? "#8D8D8D" : "#000000",
                    }}
                  >
                    <input
                      type="text"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(val) => setLastName(val.target.value)}
                    />
                  </div>
                </div>
                <div className="contact-from">
                  <div
                    style={{
                      borderBottomColor: email === "" ? "#8D8D8D" : "#000000",
                    }}
                  >
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(val) => setEmail(val.target.value)}
                    />
                  </div>
                  <div
                    style={{
                      borderBottomColor: phone === "" ? "#8D8D8D" : "#000000",
                    }}
                  >
                    <input
                      type="text"
                      placeholder="Phone Number"
                      value={phone}
                      onChange={(val) => setPhone(val.target.value)}
                    />
                  </div>
                </div>
                <h1 className="contact-sub-heading">Select Subject?</h1>
                <div className="contact-sub-list">
                  {SubjectList.map((v, i) => {
                    return (
                      <button key={i} onClick={() => setSubjectSelected(i)}>
                        {i === subjectSelected ? (
                          <FaCircleCheck
                            style={{ color: "#000000", marginRight: "10px" }}
                          />
                        ) : (
                          <FaCircle
                            style={{ color: "#E0E0E0", marginRight: "10px" }}
                          />
                        )}
                        {v}
                      </button>
                    );
                  })}
                </div>
                <div className="contact-from">
                  <div
                    style={{
                      borderBottomColor: message === "" ? "#8D8D8D" : "#000000",
                      width: "100%",
                    }}
                  >
                    <textarea
                      placeholder="Write your message.."
                      value={message}
                      onChange={(val) => setMessage(val.target.value)}
                      className="contact-textarea"
                    ></textarea>
                  </div>
                </div>
                <div className="contact-send-btn-main">
                  <Button variant="text" className="contact-send-btn">
                    Send Message
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1} xl={2}></Grid>
        </Grid>
      </div>
    </Layout>
  );
};
export default ContactUs;
