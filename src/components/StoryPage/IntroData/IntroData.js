import "./IntroData.scss";
import IntroDataInner from "./IntroDataInner";
const data = [
  {
    title: "Ecommerce Platform",
    desc: "Shopify",
  },
  {
    title: "Industry",
    desc: "Beauty & Cosmetics",
  },
  {
    title: "Use Case",
    desc: "Growth & Scale",
  },
  {
    title: "Additional Integrations",
    desc: "Google Analytics, Facebook/Instagram Ads, Google Ads, Klaviyo",
  },
];
function IntroData() {
  return (
    <div className="intro-data container">
      {data.map(({ title, desc }) => (
        <IntroDataInner title={title} desc={desc} />
      ))}
    </div>
  );
}

export default IntroData;
