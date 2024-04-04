import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import SectionHeader from "../global/SectionHeader";

const NhsCharges = () => {
  const data = useStaticQuery(graphql`
    query NHSQuery {
      contentfulPages(title: { eq: "Pricing" }) {
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
          ... on ContentfulNhsFeatures {
            id
            price
            services
            title
            contentful_id
          }
        }
      }
    }
  `);

  // Over Engineering the simple card to show red cross and green tick

  const header = data?.contentfulPages?.blocks[0];
  const nhsCards = data?.contentfulPages?.blocks?.slice(1, 4);

  const fullArray = nhsCards[2]?.services?.map((elem) => elem);

  return (
    <section className="w-full bg-backgroundSecondary">
      <div className="container mx-auto px-10  py-24">
        <SectionHeader
          mainTitle={header?.mainTitle}
          description={header?.description?.description}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-10 mt-16">
          <div className="bg-white rounded text-center py-16">
            <div className="uppercase text-center text-secondary font-medium tracking-[0.2em] text-sm ">
              Bronze
            </div>
            <h3 className="text-xl  my-2 px-8 text-primary font-semibold">
              {" "}
              £9.47 (just 40p per day) <br /> per month
            </h3>
            <ul className="my-7 text-gray-600 px-8 text-left">
              <li className="my-4 flex items-start">
                <span className="w-4 h-4 inline-block mr-4">
                  <FaCheckCircle className="text-green-500 text-lg  mt-1" />
                </span>
                1x check-up
              </li>
              <li className="my-4 flex items-start">
                <span className="w-4 h-4 inline-block mr-4">
                  <FaCheckCircle className="text-green-500 text-lg  mt-1" />
                </span>
                1x hygiene treatments
              </li>
              <li className="my-4 flex items-start">
                <span className="w-4 h-4 inline-block mr-4">
                  <FaCheckCircle className="text-green-500 text-lg  mt-1" />
                </span>
                Xrays included
              </li>
              <li className="my-4 flex items-start">
                <span className="w-4 h-4 inline-block mr-4">
                  <FaCheckCircle className="text-green-500 text-lg  mt-1" />
                </span>
                Emergency appointments within 72hrs
              </li>
              <li className="my-4 flex items-start">
                <span className="w-4 h-4 inline-block mr-4">
                  <FaCheckCircle className="text-green-500 text-lg  mt-1" />
                </span>
                10% off treatment
              </li>
              <li className="my-4 flex items-start">
                <span className="w-4 h-4 inline-block mr-4">
                  <FaCheckCircle className="text-green-500 text-lg  mt-1" />
                </span>
                10% off Products
              </li>
            </ul>
          </div>
          <div className="bg-white rounded text-center py-16">
            <div className="uppercase text-center text-secondary font-medium tracking-[0.2em] text-sm ">
            Silver
            </div>
            <h3 className="text-xl  my-2 px-8 text-primary font-semibold">
              {" "}
              £13.85 per month
            </h3>
            <ul className="my-7 text-gray-600 px-8 text-left">
              <li className="my-4 flex items-start">
                <span className="w-4 h-4 inline-block mr-4">
                  <FaCheckCircle className="text-green-500 text-lg  mt-1" />
                </span>
                2x check-up
              </li>
              <li className="my-4 flex items-start">
                <span className="w-4 h-4 inline-block mr-4">
                  <FaCheckCircle className="text-green-500 text-lg  mt-1" />
                </span>
                2x hygiene treatments
              </li>
              <li className="my-4 flex items-start">
                <span className="w-4 h-4 inline-block mr-4">
                  <FaCheckCircle className="text-green-500 text-lg  mt-1" />
                </span>
                Xrays included
              </li>
              <li className="my-4 flex items-start">
                <span className="w-4 h-4 inline-block mr-4">
                  <FaCheckCircle className="text-green-500 text-lg  mt-1" />
                </span>
                Emergency appointments within 48hrs
              </li>
              <li className="my-4 flex items-start">
                <span className="w-4 h-4 inline-block mr-4">
                  <FaCheckCircle className="text-green-500 text-lg  mt-1" />
                </span>
                15% off treatment
              </li>
              <li className="my-4 flex items-start">
                <span className="w-4 h-4 inline-block mr-4">
                  <FaCheckCircle className="text-green-500 text-lg  mt-1" />
                </span>
                15% off Products
              </li>
            </ul>
          </div>
          <div className="bg-white rounded text-center py-16">
            <div className="uppercase text-center text-secondary font-medium tracking-[0.2em] text-sm ">
            Gold
            </div>
            <h3 className="text-xl  my-2 px-8 text-primary font-semibold">
              {" "}
              £18.24 per month
            </h3>
            <ul className="my-7 text-gray-600 px-8 text-left">
              <li className="my-4 flex items-start">
                <span className="w-4 h-4 inline-block mr-4">
                  <FaCheckCircle className="text-green-500 text-lg  mt-1" />
                </span>
                2x check-up
              </li>
              <li className="my-4 flex items-start">
                <span className="w-4 h-4 inline-block mr-4">
                  <FaCheckCircle className="text-green-500 text-lg  mt-1" />
                </span>
                2x hygiene treatments
              </li>
              <li className="my-4 flex items-start">
                <span className="w-4 h-4 inline-block mr-4">
                  <FaCheckCircle className="text-green-500 text-lg  mt-1" />
                </span>
                Xrays included
              </li>
              <li className="my-4 flex items-start">
                <span className="w-4 h-4 inline-block mr-4">
                  <FaCheckCircle className="text-green-500 text-lg  mt-1" />
                </span>
                Dedicated Whatsapp Number – Reply with dentist within 12 hrs and can issue online prescription if needed

              </li>
              <li className="my-4 flex items-start">
                <span className="w-4 h-4 inline-block mr-4">
                  <FaCheckCircle className="text-green-500 text-lg  mt-1" />
                </span>
                Emergency appointments within 24hrs
              </li>
              <li className="my-4 flex items-start">
                <span className="w-4 h-4 inline-block mr-4">
                  <FaCheckCircle className="text-green-500 text-lg  mt-1" />
                </span>
                20% off treatment
              </li>
              <li className="my-4 flex items-start">
                <span className="w-4 h-4 inline-block mr-4">
                  <FaCheckCircle className="text-green-500 text-lg  mt-1" />
                </span>
                20% off Products
              </li>
            </ul>
          </div>
          <div className="bg-white rounded text-center py-16">
            <div className="uppercase text-center text-secondary font-medium tracking-[0.2em] text-sm ">
            Platinum
            </div>
            <h3 className="text-xl  my-2 px-8 text-primary font-semibold">
              {" "}
              £27.49 per month
            </h3>
            <ul className="my-7 text-gray-600 px-8 text-left">
              <li className="my-4 flex items-start">
                <span className="w-4 h-4 inline-block mr-4">
                  <FaCheckCircle className="text-green-500 text-lg  mt-1" />
                </span>
                2x check-up
              </li>
              <li className="my-4 flex items-start">
                <span className="w-4 h-4 inline-block mr-4">
                  <FaCheckCircle className="text-green-500 text-lg  mt-1" />
                </span>
                3x hygiene treatments
              </li>
              <li className="my-4 flex items-start">
                <span className="w-4 h-4 inline-block mr-4">
                  <FaCheckCircle className="text-green-500 text-lg  mt-1" />
                </span>
                Xrays included
              </li>
              <li className="my-4 flex items-start">
                <span className="w-4 h-4 inline-block mr-4">
                  <FaCheckCircle className="text-green-500 text-lg  mt-1" />
                </span>
                Dedicated Whatsapp Number – Reply with dentist within 3 hrs and can issue online prescriptions if needed
              </li>
              <li className="my-4 flex items-start">
                <span className="w-4 h-4 inline-block mr-4">
                  <FaCheckCircle className="text-green-500 text-lg  mt-1" />
                </span>
                Emergency appointments within 12hrs
              </li>
              <li className="my-4 flex items-start">
                <span className="w-4 h-4 inline-block mr-4">
                  <FaCheckCircle className="text-green-500 text-lg  mt-1" />
                </span>
                25% off treatment
              </li>
              <li className="my-4 flex items-start">
                <span className="w-4 h-4 inline-block mr-4">
                  <FaCheckCircle className="text-green-500 text-lg  mt-1" />
                </span>
                25% off Products
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NhsCharges;
