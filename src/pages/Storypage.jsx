import Layout from "../layout/Layout";
import Intro from "../components/StoryPage/intro/Intro";
import IntroData from "../components/StoryPage/IntroData/IntroData";
import GirlContent from "../components/StoryPage/girl-content/GirlContent";
import Challange from "../components/StoryPage/challangeContent/Challange";
import Marketing from "../components/StoryPage/MarketingContent/Marketing";
function Storypage() {
  return (
    <div>
      <Layout>
        <Intro />
        <IntroData />
        <GirlContent />
        <Challange />
        <Marketing />
      </Layout>
    </div>
  );
}

export default Storypage;
