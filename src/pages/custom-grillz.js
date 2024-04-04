import React from "react";
import Layout from "../components/global/Layout";
import Griz from "../components/services/CustomGrillz";
import DynamicSeo from "../components/global/DynamicSeo";

const AboutPage = () => {
  return (
    <Layout>
      <Griz />
    </Layout>
  );
};

export default AboutPage;

export function Head() {
  return (
    <DynamicSeo
      title=" Expert in Custom Grillz for Entertainment Industry” | Custom Grillz"
      description="At Pav Dental, we believe in a personalized approach to dental aesthetics. Our custom grillz are more than just accessories; they are a reflection of your individual style and flair. Choose from gold, silver, and diamond options to create a look that's uniquely yours."
    />
  );
}
