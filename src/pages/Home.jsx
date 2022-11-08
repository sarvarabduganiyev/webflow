import React from "react";
import HomeAnimatedSlider from "../components/HomePage/HomeAnimatedSlider/HomeAnimatedSlider";
import HomeBlogCard from "../components/HomePage/HomeBlogCard/HomeBlogCard";
import HomeEllipse from "../components/HomePage/HomeEllipse/HomeEllipse";
import HomeIntro from "../components/HomePage/HomeIntro/HomeIntro";
import HomeSlider from "../components/HomePage/HomeSlider/HomeSlider";
import HomeTabContent from "../components/HomePage/HomeTabContent/HomeTabContent";
import Layout from "../layout/Layout";
function Home() {
  return (
    <Layout>
      <HomeIntro />
      <HomeEllipse />
      <HomeSlider />
      <HomeTabContent />
      <HomeAnimatedSlider />
      <HomeBlogCard />
    </Layout>
  );
}

export default Home;
