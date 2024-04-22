import React from "react";
import DynamicSeo from "../components/global/DynamicSeo";
import Layout from "../components/global/Layout";
import About from "../components/home/About";
import Achievements from "../components/home/Achievements";
import Blog from "../components/home/Blog";
import Contact from "../components/home/Contact";
import Cta from "../components/home/Cta";
import Features from "../components/home/Features";
import HomeBanner from "../components/home/HomeBanner";
import Services from "../components/home/Services";
import Testimonials from "../components/home/Testimonials";
import Slide from "../components/home/slide";

const IndexPage = () => {
   
  return (
        <>
          <Layout>
            <Slide />
            <Cta />
            <HomeBanner />
            <Features />
            <Services />
            <About />
            <Achievements />
            <Testimonials />
            <Contact />
            <Blog />
          </Layout>
        </>
  );
};

export default IndexPage;

export const Head = () => (
  <DynamicSeo
    title="24 Hours Private Dental Clinic in Leeds -Book Appointment Now!"
    description="Pav Dental is a leading private dental clinic in Leeds, UK offering emergency treatments and online appointments for all your dental needs. Book now!"
  />
);
