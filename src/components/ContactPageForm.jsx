import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import QuerieForm from "./global/QuerieFrom";

const ContactPageForm = () => {
  const data = useStaticQuery(graphql`
    query ServicesPageContactQuery {
      contentfulPages(title: { eq: "Services" }) {
        id
        blocks {
          ... on ContentfulSections {
            id
            mainTitle
            subtitle
            description {
              description
            }
          }
        }
      }
    }
  `);

  const contactData = data?.contentfulPages.blocks[3];
  return (
    <>
      <h1 className="f-top hero my-14">
        Find the right point of contact for you
      </h1>
      <section className="container mx-auto px-10 flex flex-col lg:flex-row items-center mb-24 mt-10">
        <div className="w-full lg:w-1/2 lg:p-10">
          <div className="herocxe">
            <h2 className="textred">Private Appointments</h2>
            <h3>
              For Private Appointments and Enquiries –{" "}
              <a href="mailto:private@pavdental.com">private@pavdental.com</a>
            </h3>
            <h4>0800 099 6375</h4>
            {/* <h2>NHS Appointments </h2>
            <h3>
              For NHS Appointments and Enquiries –{" "}
              <a href="mailto:nhs@pavdental.com">nhs@pavdental.com</a>
            </h3>
            <h4>0113 263 8509</h4> */}
            <h2>Accounts Team</h2>
            <h3>
              For Accounts Team –{" "}
              <a href="mailto:accounts@pavdental.com">accounts@pavdental.com</a>
            </h3>
            <h2>Practice Manager</h2>
            <h3>
              For Practice Manager –{" "}
              <a href="mailto:hello@pavdental.com">hello@pavdental.com</a>
            </h3>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-10 mt-16 lg:mt-0">
          <h3 className="uppercase text-secondary font-medium tracking-[0.2em] text-sm">
            Contact Us
          </h3>
          <h2 className="text-4xl my-2 capitalize font-semibold text-primary">
            {contactData?.subtitle}
          </h2>
          <ReactMarkdown className="text-gray-600 mx-auto my-5 text-base leading-8">
            {contactData?.description?.description}
          </ReactMarkdown>
          <QuerieForm />
        </div>
      </section>
    </>
  );
};

export default ContactPageForm;
