import React from "react";
import Layout from "../../components/global/Layout";
import PageHeader from "../../components/global/PageHeader";
import Services2 from "../../components/services/Services2";
import ContactPageForm from "../../components/ContactPageForm";
import DynamicSeo from "../../components/global/DynamicSeo";

const ServicesPage = () => {
  return (
    <Layout>
      <PageHeader pageTitle="Services" />
      <Services2 />
      <ContactPageForm />
    </Layout>
  );
};

export default ServicesPage;

export const Head = () => (
  <DynamicSeo
    title="Best Dental & Cosmetic Treatments in Leeds | Pav Dental"
    description="Discover a range of exceptional general and cosmetic dental services at Pav Dental in Leeds, UK. Achieve your ideal smile with our expert care. Visit us now!"
  />
);
