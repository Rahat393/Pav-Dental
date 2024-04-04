import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import SectionHeader from "../global/SectionHeader";
import TeamCard from "./TeamCard";

const Team = () => {
  const data = useStaticQuery(graphql`
    query DentistQuery {
      allContentfulTeam(sort: { memberId: ASC }) {
        nodes {
          designation
          gdc
          gmc
          name
          contentful_id
          type
          photo {
            gatsbyImageData(width: 400, height: 400, placeholder: BLURRED)
          }
        }
      }
    }
  `);

  const dentistData = data?.allContentfulTeam?.nodes;

  const groupedData = dentistData.reduce((result, item) => {
    // Find an existing group with the same id
    const existingItem = result.find((group) => group.type === item.type);

    if (existingItem) {
      // If a group with the same id exists, add the value to its values array
      existingItem.employees.push(item);
    } else {
      // If no group with the same id exists, create a new group and add it to the result
      result.push({ type: item.type, employees: [item] });
    }

    return result;
  }, []);

  console.log(groupedData);

  return (
    <section className="my-24">
      <div className="container px-10 mx-auto ">
        <div className="my-10">
          <SectionHeader
            subTitle="MEET OUR Founder"
            mainTitle="FOUNDER of Pav Dental"
          />
        </div>

        <div className="w-full">
          <hr className="w-2/3 mx-auto mb-10" />
          <div className="my-5 grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
            <div></div>
            <TeamCard
              name={"Dr Pavan Amar Singh Bhogal MBA"}
              imageWithUrl={true}
              image={
                "https://res.cloudinary.com/db1i46uiv/image/upload/v1704565406/Untitled_design_tl2psx.png"
              }
              position={"Founder"}
              gdc={"273704"}
              lateName={"The Late Dr Pav Bhogal"}
              dateLived={"03/07/1992 to 16/08/2023 "}
              age={"31"}
            />
            <div></div>
          </div>
          <div className="text-center">
            <a
              className="text-primary text-center text-lg font-semibold p-10 "
              href="/about"
            >
              About Us
            </a>
          </div>
        </div>
        <div className="my-10">
          <SectionHeader
            subTitle="MEET OUR TEAM"
            mainTitle="Dentists & Staff"
            description="We have a dedicated team consisting of highly skilled dentists and staff who works relentlessly to preserve your happy smile."
          />
        </div>

        {groupedData.map((group) => (
          <>
            <h2 className="text-center text-4xl mt-20 mb-3 capitalize font-semibold text-primary">
              {group.type}
            </h2>
            <hr className="w-2/3 mx-auto mb-10" />
            <div className="my-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {group.employees?.map((dentist, index) => (
                <TeamCard
                  key={index}
                  name={dentist?.name}
                  image={dentist?.photo?.gatsbyImageData}
                  position={dentist?.designation}
                  gdc={dentist?.gdc}
                  gmc={dentist?.gmc}
                />
              ))}
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default Team;
