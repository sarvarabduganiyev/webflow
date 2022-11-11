import ChoiceCardWrapper from "../components/Landing/ChoiceCardWrapper/ChoiceCardWrapper";
import LandingBrands from "../components/Landing/LandingBrands/LandingBrands";
import LandingInro from "../components/Landing/LandingInro/LandingInro";
import LandingNote from "../components/Landing/LandingNote/LandingNote";
import LandingQuestions from "../components/Landing/LandingQuestions/LandingQuestions";
import Rhombus from "../components/Landing/Rhombus/Rhombus";
import Layout from "../layout/Layout";
function Landing() {
  return (
    <Layout>
      <LandingInro />
      <LandingBrands />
      <LandingNote />
      <Rhombus />
      <ChoiceCardWrapper />
      <LandingQuestions />
    </Layout>
  );
}

export default Landing;
