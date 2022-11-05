import React from "react";
import Navbar from "../components/StoryPage/Navbar/Navbar";
import Footer from "../components/StoryPage/footer/Footer";
function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
