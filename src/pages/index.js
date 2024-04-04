import React, { useState, useEffect } from "react";
import Layout from "../components/global/Layout";
import Cta from "../components/home/Cta";
import HomeBanner from "../components/home/HomeBanner";
import Achievements from "../components/home/Achievements";
import Features from "../components/home/Features";
import About from "../components/home/About";
import Services from "../components/home/Services";
import Testimonials from "../components/home/Testimonials";
import Contact from "../components/home/Contact";
import Blog from "../components/home/Blog";
import DynamicSeo from "../components/global/DynamicSeo";
import Slide from "../components/home/slide";
import Logo from "../components/global/Logo";

const IndexPage = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="justify-center h-[90vh]  items-center flex flex-col gap-10">
          <Logo />
          <progress className="pure-material-progress-linear" />
        </div>
      ) : (
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
      )}
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
