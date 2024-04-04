import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import SectionHeader from "../global/SectionHeader";
import PrivateFeeFiltered from "./PrivateFeeFiltered";

const PrivateFees = () => {
  const data = useStaticQuery(graphql`
    query PrivateFeeQuery {
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
        }
      }
    }
  `);

  const header = data?.contentfulPages?.blocks[4];

  return (
    <>
      <section className="w-full bg-white">
        <div className="py-24 mx-auto container px-10 ">
          <h2 className="text-center text-5xl my-2 capitalize font-semibold text-primary">
            Pav Dental Pricing
          </h2>

          <div className="mt-3">
            {/* one */}
            <div>
              <h3 className="text-primary font-semibold text-2xl mt-8 mb-2"></h3>
              <div className="flex justify-between items-center">
                <div className="flex justify-between items-center w-full border-b">
                  <h5 className="text-base lg:text-2xl text-primary font-semibold my-4 w-3/5 max-w-[600px] ">
                    Patient Examination{" "}
                  </h5>
                  <p className="text-base lg:text-lg text-primary font-semibold w-2/5">
                    £35
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex justify-between items-center w-full border-b">
                  <h5 className="text-base lg:text-xl text-gray-600 my-4 w-3/5 max-w-[600px] ">
                    Same Day Emergency Visit
                  </h5>
                  <p className="text-base lg:text-lg text-secondary font-medium w-2/5">
                    £45 in hours, FROM £90 out of hours
                  </p>
                </div>
              </div>
            </div>
            {/* one end */}
            {/* two */}
            <div>
              <h3 className="text-primary font-semibold text-2xl mt-8 mb-2">
                Periodontal / Gum Treatment{" "}
              </h3>

              <div className="flex justify-between items-center">
                <div className="flex justify-between items-center w-full border-b">
                  <h5 className="text-base lg:text-xl text-gray-600 my-4 w-3/5 max-w-[600px] ">
                    Scale & Polish{" "}
                  </h5>
                  <p className="text-base lg:text-lg text-secondary font-medium w-2/5">
                    £50
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex justify-between items-center w-full border-b">
                  <h5 className="text-base lg:text-xl text-gray-600 my-4 w-3/5 max-w-[600px] ">
                    Periodontal (gum) treatment per quadrant{" "}
                  </h5>
                  <p className="text-base lg:text-lg text-secondary font-medium w-2/5">
                    £60
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex justify-between items-center w-full border-b">
                  <h5 className="text-base lg:text-xl text-gray-600 my-4 w-3/5 max-w-[600px] ">
                    air flow Cosmetic stain Removal{" "}
                  </h5>
                  <p className="text-base lg:text-lg text-secondary font-medium w-2/5">
                    £75
                  </p>
                </div>
              </div>
            </div>
            {/* two end */}
            {/* three */}
            <div>
              <h3 className="text-primary font-semibold text-2xl mt-8 mb-2">
                Fillings / Bonding{" "}
              </h3>

              <div className="flex justify-between items-center">
                <div className="flex justify-between items-center w-full border-b">
                  <h5 className="text-base lg:text-xl text-gray-600 my-4 w-3/5 max-w-[600px] ">
                    Composite (white) Fillings{" "}
                  </h5>
                  <p className="text-base lg:text-lg text-secondary font-medium w-2/5"></p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex justify-between items-center w-full border-b">
                  <h5 className="text-base lg:text-xl text-gray-600 my-4 w-3/5 max-w-[600px] ">
                    Basic Composite (white) Fillings{" "}
                  </h5>
                  <p className="text-base lg:text-lg text-secondary font-medium w-2/5">
                    £140
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex justify-between items-center w-full border-b">
                  <h5 className="text-base lg:text-xl text-gray-600 my-4 w-3/5 max-w-[600px] ">
                    Intermediate Composite (white) Fillings{" "}
                  </h5>
                  <p className="text-base lg:text-lg text-secondary font-medium w-2/5">
                    £195
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex justify-between items-center w-full border-b">
                  <h5 className="text-base lg:text-xl text-gray-600 my-4 w-3/5 max-w-[600px] ">
                    Advanced Composite (white) Fillings{" "}
                  </h5>
                  <p className="text-base lg:text-lg text-secondary font-medium w-2/5">
                    £295
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex justify-between items-center w-full border-b">
                  <h5 className="text-base lg:text-xl text-gray-600 my-4 w-3/5 max-w-[600px] ">
                    Composite Bonding{" "}
                  </h5>
                  <p className="text-base lg:text-lg text-secondary font-medium w-2/5">
                    from £140
                  </p>
                </div>
              </div>
            </div>
            {/* three end */}
            {/* four */}
            <div>
              <h3 className="text-primary font-semibold text-2xl mt-8 mb-2">
                Root Canal Treatment{" "}
              </h3>

              <div className="flex justify-between items-center">
                <div className="flex justify-between items-center w-full border-b">
                  <h5 className="text-base lg:text-xl text-gray-600 my-4 w-3/5 max-w-[600px] ">
                    Standard Root Canal Treatment
                  </h5>
                  <p className="text-base lg:text-lg text-secondary font-medium w-2/5">
                    £195
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex justify-between items-center w-full border-b">
                  <h5 className="text-base lg:text-xl text-gray-600 my-4 w-3/5 max-w-[600px] ">
                    Intermediate Root Canal Treatment{" "}
                  </h5>
                  <p className="text-base lg:text-lg text-secondary font-medium w-2/5">
                    £295
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex justify-between items-center w-full border-b">
                  <h5 className="text-base lg:text-xl text-gray-600 my-4 w-3/5 max-w-[600px] ">
                    Advanced Root canal Treatment{" "}
                  </h5>
                  <p className="text-base lg:text-lg text-secondary font-medium w-2/5">
                    £495
                  </p>
                </div>
              </div>
            </div>
            {/* four end */}
            {/* five */}
            <div>
              <h3 className="text-primary font-semibold text-2xl mt-8 mb-2">
                Extractions{" "}
              </h3>

              <div className="flex justify-between items-center">
                <div className="flex justify-between items-center w-full border-b">
                  <h5 className="text-base lg:text-xl text-gray-600 my-4 w-3/5 max-w-[600px] ">
                    Simple Extraction{" "}
                  </h5>
                  <p className="text-base lg:text-lg text-secondary font-medium w-2/5">
                    £140
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex justify-between items-center w-full border-b">
                  <h5 className="text-base lg:text-xl text-gray-600 my-4 w-3/5 max-w-[600px] ">
                    Intermediate Extraction{" "}
                  </h5>
                  <p className="text-base lg:text-lg text-secondary font-medium w-2/5">
                    £195
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex justify-between items-center w-full border-b">
                  <h5 className="text-base lg:text-xl text-gray-600 my-4 w-3/5 max-w-[600px] ">
                    Complex Extraction{" "}
                  </h5>
                  <p className="text-base lg:text-lg text-secondary font-medium w-2/5">
                    £295
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex justify-between items-center w-full border-b">
                  <h5 className="text-base lg:text-xl text-gray-600 my-4 w-3/5 max-w-[600px] ">
                    Treatment of Dry Socket{" "}
                  </h5>
                  <p className="text-base lg:text-lg text-secondary font-medium w-2/5">
                    £35
                  </p>
                </div>
              </div>
            </div>
            {/* five end */}
            {/* six */}
            <div>
              <h3 className="text-primary font-semibold text-2xl mt-8 mb-2">
                Crown & Bridge{" "}
              </h3>

              <div className="flex justify-between items-center">
                <div className="flex justify-between items-center w-full border-b">
                  <h5 className="text-base lg:text-xl text-gray-600 my-4 w-3/5 max-w-[600px] ">
                    metal crown{" "}
                  </h5>
                  <p className="text-base lg:text-lg text-secondary font-medium w-2/5">
                    £350
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex justify-between items-center w-full border-b">
                  <h5 className="text-base lg:text-xl text-gray-600 my-4 w-3/5 max-w-[600px] ">
                    Metal Ceramic (white) Crown {" "}
                  </h5>
                  <p className="text-base lg:text-lg text-secondary font-medium w-2/5">
                    £400
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex justify-between items-center w-full border-b">
                  <h5 className="text-base lg:text-xl text-gray-600 my-4 w-3/5 max-w-[600px] ">
                    all ceramic crown   Emax/Zirconia{" "}
                  </h5>
                  <p className="text-base lg:text-lg text-secondary font-medium w-2/5">
                    £495
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex justify-between items-center w-full border-b">
                  <h5 className="text-base lg:text-xl text-gray-600 my-4 w-3/5 max-w-[600px] ">
                    Full Gold Crown{" "}
                  </h5>
                  <p className="text-base lg:text-lg text-secondary font-medium w-2/5">
                    £700
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex justify-between items-center w-full border-b">
                  <h5 className="text-base lg:text-xl text-gray-600 my-4 w-3/5 max-w-[600px] ">
                    bridge per unit{" "}
                  </h5>
                  <p className="text-base lg:text-lg text-secondary font-medium w-2/5">
                    £300
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex justify-between items-center w-full border-b">
                  <h5 className="text-base lg:text-xl text-gray-600 my-4 w-3/5 max-w-[600px] ">
                    Composite Inlay (white) {" "}
                  </h5>
                  <p className="text-base lg:text-lg text-secondary font-medium w-2/5">
                    £300
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex justify-between items-center w-full border-b">
                  <h5 className="text-base lg:text-xl text-gray-600 my-4 w-3/5 max-w-[600px] ">
                    Porcelain Veneer{" "}
                  </h5>
                  <p className="text-base lg:text-lg text-secondary font-medium w-2/5">
                    £495
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex justify-between items-center w-full border-b">
                  <h5 className="text-base lg:text-xl text-gray-600 my-4 w-3/5 max-w-[600px] ">
                    crown/ bridge recementation{" "}
                  </h5>
                  <p className="text-base lg:text-lg text-secondary font-medium w-2/5">
                    £60
                  </p>
                </div>
              </div>
            </div>
            {/* six end */}
            {/* seven */}
            <div>
              <h3 className="text-primary font-semibold text-2xl mt-8 mb-2">
                Dentures{" "}
              </h3>

              <div className="flex justify-between items-center">
                <div className="flex justify-between items-center w-full border-b">
                  <h5 className="text-base lg:text-xl text-gray-600 my-4 w-3/5 max-w-[600px] ">
                    Acrylic Denture  {" "}
                  </h5>
                  <p className="text-base lg:text-lg text-secondary font-medium w-2/5">
                    from £500
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex justify-between items-center w-full border-b">
                  <h5 className="text-base lg:text-xl text-gray-600 my-4 w-3/5 max-w-[600px] ">
                    Chrome Denture{" "}
                  </h5>
                  <p className="text-base lg:text-lg text-secondary font-medium w-2/5">
                    from £750
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex justify-between items-center w-full border-b">
                  <h5 className="text-base lg:text-xl text-gray-600 my-4 w-3/5 max-w-[600px] ">
                    Valplast (flexible){" "}
                  </h5>
                  <p className="text-base lg:text-lg text-secondary font-medium w-2/5">
                    from £600
                  </p>
                </div>
              </div>
            </div>
            {/* seven end  */}
            {/* eight */}
            <div>
              <h3 className="text-primary font-semibold text-2xl mt-8 mb-2">
                Prevention{" "}
              </h3>

              <div className="flex justify-between items-center">
                <div className="flex justify-between items-center w-full border-b">
                  <h5 className="text-base lg:text-xl text-gray-600 my-4 w-3/5 max-w-[600px] ">
                    X-Ray per film{" "}
                  </h5>
                  <p className="text-base lg:text-lg text-secondary font-medium w-2/5">
                    £5
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex justify-between items-center w-full border-b">
                  <h5 className="text-base lg:text-xl text-gray-600 my-4 w-3/5 max-w-[600px] ">
                    Fissure Sealants per tooth{" "}
                  </h5>
                  <p className="text-base lg:text-lg text-secondary font-medium w-2/5">
                    £10
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex justify-between items-center w-full border-b">
                  <h5 className="text-base lg:text-xl text-gray-600 my-4 w-3/5 max-w-[600px] ">
                    Fluoride Varnish Application {" "}
                  </h5>
                  <p className="text-base lg:text-lg text-secondary font-medium w-2/5">
                    £5
                  </p>
                </div>
              </div>
            </div>
            {/* eight end  */}
            {/* nine  */}
            <div>
              <h3 className="text-primary font-semibold text-2xl mt-8 mb-2">
                Other Items{" "}
              </h3>

              <div className="flex justify-between items-center">
                <div className="flex justify-between items-center w-full border-b">
                  <h5 className="text-base lg:text-xl text-gray-600 my-4 w-3/5 max-w-[600px] ">
                    Tooth Whitening {" "}
                  </h5>
                  <p className="text-base lg:text-lg text-secondary font-medium w-2/5">
                    £300
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex justify-between items-center w-full border-b">
                  <h5 className="text-base lg:text-xl text-gray-600 my-4 w-3/5 max-w-[600px] ">
                    top up gels{" "}
                  </h5>
                  <p className="text-base lg:text-lg text-secondary font-medium w-2/5">
                    £60
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex justify-between items-center w-full border-b">
                  <h5 className="text-base lg:text-xl text-gray-600 my-4 w-3/5 max-w-[600px] ">
                    Bite Guard{" "}
                  </h5>
                  <p className="text-base lg:text-lg text-secondary font-medium w-2/5">
                    £99
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex justify-between items-center w-full border-b">
                  <h5 className="text-base lg:text-xl text-gray-600 my-4 w-3/5 max-w-[600px] ">
                    Sports Guard {" "}
                  </h5>
                  <p className="text-base lg:text-lg text-secondary font-medium w-2/5">
                    £99
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex justify-between items-center w-full border-b">
                  <h5 className="text-base lg:text-xl text-gray-600 my-4 w-3/5 max-w-[600px] ">
                    antibiotic prescription{" "}
                  </h5>
                  <p className="text-base lg:text-lg text-secondary font-medium w-2/5">
                    £25
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex justify-between items-center w-full border-b">
                  <h5 className="text-base lg:text-xl text-gray-600 my-4 w-3/5 max-w-[600px] ">
                    Clear aligners{" "}
                  </h5>
                  <p className="text-base lg:text-lg text-secondary font-medium w-2/5">
                    from £1995
                  </p>
                </div>
              </div>
            </div>
            {/* nine end  */}
            {/* ten */}

            {/* ten end */}

            {/* <PrivateFeeFiltered category={null} />
            <PrivateFeeFiltered category="White Filling" />
            <PrivateFeeFiltered category="Root Canal" />
            <PrivateFeeFiltered category="Extractions" /> */}
            {/* <PrivateFeeFiltered category="Restorative" />
            <PrivateFeeFiltered category="Root Canal Treatment" />
            <PrivateFeeFiltered category="Extractions" />
            <PrivateFeeFiltered category="Crown & Bridge" />
            <PrivateFeeFiltered category="Dentures" />
            <PrivateFeeFiltered category="Prevention" /> */}
            <div>
              <h3 className="text-primary font-semibold text-2xl mt-8 mb-2">
                Aesthetics
              </h3>
              <div className="pla">
                <details>
                  <summary>
                    <h3 className="text-primary font-semibold text-xl	 mt-8 mb-2">
                      Dermal Fillers
                    </h3>
                  </summary>
                  <div className="flex justify-between items-center">
                    <div className="flex justify-between items-center w-full border-b">
                      <h5 className="text-base lg:text-xl text-gray-600 my-4 w-3/5 max-w-[600px] ">
                        0.5ML
                      </h5>
                      <p className="text-base lg:text-lg text-secondary font-medium w-2/5">
                        £100
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex justify-between items-center w-full border-b">
                      <h5 className="text-base lg:text-xl text-gray-600 my-4 w-3/5 max-w-[600px] ">
                        0.7ML
                      </h5>
                      <p className="text-base lg:text-lg text-secondary font-medium w-2/5">
                        £150
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex justify-between items-center w-full border-b">
                      <h5 className="text-base lg:text-xl text-gray-600 my-4 w-3/5 max-w-[600px] ">
                        1ML
                      </h5>
                      <p className="text-base lg:text-lg text-secondary font-medium w-2/5">
                        £250
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex justify-between items-center w-full border-b">
                      <h5 className="text-base lg:text-xl text-gray-600 my-4 w-3/5 max-w-[600px] ">
                        2ML
                      </h5>
                      <p className="text-base lg:text-lg text-secondary font-medium w-2/5">
                        £350
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex justify-between items-center w-full border-b">
                      <h5 className="text-base lg:text-xl text-gray-600 my-4 w-3/5 max-w-[600px] ">
                        3ML
                      </h5>
                      <p className="text-base lg:text-lg text-secondary font-medium w-2/5">
                        £400
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex justify-between items-center w-full border-b">
                      <h5 className="text-base lg:text-xl text-gray-600 my-4 w-3/5 max-w-[600px] ">
                        4ML
                      </h5>
                      <p className="text-base lg:text-lg text-secondary font-medium w-2/5">
                        £450
                      </p>
                    </div>
                  </div>
                </details>
                <details>
                  <summary>
                    <h3 className="text-primary font-semibold text-xl mt-8 mb-2">
                      Botox{" "}
                    </h3>
                  </summary>
                  <div className="flex justify-between items-center">
                    <div className="flex justify-between items-center w-full border-b">
                      <h5 className="text-base lg:text-xl text-gray-600 my-4 w-3/5 max-w-[600px] ">
                        1 AREA
                      </h5>
                      <p className="text-base lg:text-lg text-secondary font-medium w-2/5">
                        £180
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex justify-between items-center w-full border-b">
                      <h5 className="text-base lg:text-xl text-gray-600 my-4 w-3/5 max-w-[600px] ">
                        2 AREAS
                      </h5>
                      <p className="text-base lg:text-lg text-secondary font-medium w-2/5">
                        £240
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex justify-between items-center w-full border-b">
                      <h5 className="text-base lg:text-xl text-gray-600 my-4 w-3/5 max-w-[600px] ">
                        3 AREAS
                      </h5>
                      <p className="text-base lg:text-lg text-secondary font-medium w-2/5">
                        £300
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex justify-between items-center w-full border-b">
                      <h5 className="text-base lg:text-xl text-gray-600 my-4 w-3/5 max-w-[600px] ">
                        4 AREAS
                      </h5>
                      <p className="text-base lg:text-lg text-secondary font-medium w-2/5">
                        £400
                      </p>
                    </div>
                  </div>
                </details>
                <details>
                  <summary>
                    <h3 className="text-primary font-semibold text-xl mt-8 mb-2">
                      Others
                    </h3>
                  </summary>
                  <div className="flex justify-between items-center">
                    <div className="flex justify-between items-center w-full border-b">
                      <h5 className="text-base lg:text-xl text-gray-600 my-4 w-3/5 max-w-[600px] ">
                        PROFHILO FIRST DOSE
                      </h5>
                      <p className="text-base lg:text-lg text-secondary font-medium w-2/5">
                        £249
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex justify-between items-center w-full border-b">
                      <h5 className="text-base lg:text-xl text-gray-600 my-4 w-3/5 max-w-[600px] ">
                        SOSUM BOOSTER
                      </h5>
                      <p className="text-base lg:text-lg text-secondary font-medium w-2/5">
                        £160
                      </p>
                    </div>
                  </div>
                </details>
              </div>
            </div>

            {/* <PrivateFeeFiltered category="Other Items" /> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivateFees;
