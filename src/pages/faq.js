import React from "react";
import Layout from "../components/global/Layout";
import PageHeader from "../components/global/PageHeader";
import Faq from "../components/about/Faq";
import DynamicSeo from "../components/global/DynamicSeo";

const AboutPage = () => {
  return (
    <Layout>
      <PageHeader pageTitle="FAQ" />
      <Faq />
    </Layout>
  );
};

export default AboutPage;

export function Head() {
  return (
    <DynamicSeo
      title="Get to Know More About Pav Dental | Who We Are"
      description="Get to know more about Pav Dental in the Leeds. Our team of dentists is committed to delivering high-quality dental services at affordable prices. Discover more about us!"
    />
  );
}
