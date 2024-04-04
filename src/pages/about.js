import React from "react";
import Layout from "../components/global/Layout";
import PageHeader from "../components/global/PageHeader";
import Faq from "../components/about/Faq";
import WhoWeAre from "../components/about/WhoWeAre";
import AboutMe from "../components/about/about-me";
import DynamicSeo from "../components/global/DynamicSeo";

const AboutPage = () => {
  return (
    <Layout>
      <PageHeader pageTitle="About" />
      <AboutMe/>
    </Layout>
  );
};

export default AboutPage;

export function Head() {
  return (
    <DynamicSeo
      title="About Us | Pav Dental in Leeds, UK"
      description="We at Pav Dental are proud to offer a wide range of dental services with quality care in Leeds, UK. Call us now to book your appointment!"
    />
  );
}
