import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
const Layout = ({children,contact}) => {
  return (
    <div>
      <Navbar contact={contact}/>
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
