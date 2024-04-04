import React from "react";
import Layout from "../components/global/Layout";
import Form from "../components/global/form";
import PageHeader from "../components/global/PageHeader";
import DynamicSeo from "../components/global/DynamicSeo";

const AboutPage = () => {
  return (
    <Layout>
      <PageHeader pageTitle="NHS Dental Practice Online Registration Form for Under-18 Patients" />
      <Form />
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
