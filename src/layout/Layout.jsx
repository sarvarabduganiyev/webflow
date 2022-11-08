import React from "react";
import Navbar from "../components/StoryPage/Navbar/Navbar";
import Footer from "../components/StoryPage/footer/Footer";
import MarketingBanner from "../components/StoryPage/MarketingContent/MarketingBanner";
function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <MarketingBanner />
      <Footer />
    </>
  );
}

export default Layout;
