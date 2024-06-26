import React, { useEffect } from "react";
import Layout from "../components/global/Layout";
import PageHeader from "../components/global/PageHeader";
import NhsCharges from "../components/pricing/NhsCharges";
import PrivateFees from "../components/pricing/PrivateFees";
import Insurence from "../components/pricing/Insurence.jsx";

import DynamicSeo from "../components/global/DynamicSeo";

const PricingPage = ({ location }) => {
  useEffect(() => {}, []);

  useEffect(() => {
    const scrollToDiv = () => {
      const hash = location.hash;

      const divElement = document.getElementById(hash.slice(1));
      if (divElement) {
        divElement.scrollIntoView({ behavior: "smooth" });
      }
    };

    scrollToDiv();
  }, []);

  return (
    <Layout>
      <PageHeader pageTitle="Pricing" />
      <NhsCharges />
      <PrivateFees />
      <Insurence/>
    </Layout>
  );
};

export default PricingPage;

export function Head() {
  return (
    <DynamicSeo
      title="Transparent and Affordable Dental Pricing at Pav Dental"
      description="Discover our affordable dental pricing at Pav Dental. We believe in transparent costs for all our dental treatments, including general dentistry, cosmetic procedures, and more!"
    />
  );
}
