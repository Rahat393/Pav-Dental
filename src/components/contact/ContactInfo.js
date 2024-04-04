import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { BsFacebook, BsInstagram, BsTiktok, BsYoutube } from "react-icons/bs";
import { FiMail, FiPhone } from "react-icons/fi";

const ContactInfo = () => {
  const data = useStaticQuery(graphql`
    query ContactPageQuery {
      allContentfulGlobal {
        nodes {
          phone
          email

          address
        }
      }
    }
  `);

  const contactData = data?.allContentfulGlobal?.nodes[0];

  return (
    <section className="mt-20 container px-10 mx-auto text-center">
      <h2 className="text-center text-3xl my-2 capitalize font-semibold text-primary">
        Address
      </h2>
      <p className="text-secondary my-2">{contactData?.address}</p>
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="flex gap-4">
          <div className="relative group">
            <button className="py-1 my-3 font-semibold border-2 border-red-600 rounded-lg hover:text-white text-red-600 px-4 bg-white hover:bg-red-600 group-hover:bg-red-600 group-hover:text-white">
              PRIVATE
            </button>
            <div className="absolute z-[99] right-[-112px] mt-0 w-60	bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible">
              <button className="block py-2 px-4 hover:text-white text-red-600 hover:bg-red-600 w-full text-left">
                <a className="flex  gap-2" href="tel:08000996375">
                  <FiPhone className="mt-[2px]" />
                  0800 099 6375
                </a>
              </button>
              <button className="block py-2 px-4 hover:text-white text-red-600 hover:bg-red-600 w-full text-left">
                <a
                  className="flex  gap-2"
                  href="mailto:private@pavdental.com"
                >
                  <FiMail className="mt-[2px]" />
                  private@pavdental.com
                </a>
              </button>
            </div>
          </div>
          {/* <div className="relative group">
            <button className="py-1  my-3 font-semibold border-2 border-blue-600 rounded-lg hover:text-white text-blue-600 px-4 bg-white hover:bg-blue-600 group-hover:bg-blue-600 group-hover:text-white">
              NHS
            </button>
            <div className="absolute z-[99] right-[-27px] mt-0 w-60	 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible">
              <button className="block py-2 px-4 hover:text-white text-blue-600 hover:bg-blue-600 w-full text-left">
                <a className="flex  gap-2" href="tel:001132638509">
                  <FiPhone className="mt-[2px]" />
                  0113 263 8509
                </a>
              </button>
              <button className="block py-2 px-4 hover:text-white text-blue-600 hover:bg-blue-600 w-full text-left">
                <a className="flex  gap-2" href="mailto:nhspavdental.com">
                  <FiMail className="mt-[2px]" />
                  nhs@pavdental.com
                </a>
              </button>
            </div>
          </div> */}
        </div>
      </div>
      <div className="icon-flex">
      
        <a
          href="https://www.facebook.com/profile.php?id=100094065880755&mibextid=V3Yony"
          target="_blank"
          className="icon text-xl"
        >
          <BsFacebook />
        </a>
        <a
          href="https://instagram.com/parish.dental?igshid=MzRlODBiNWFlZA=="
          className="icon text-xl"
          target="_blank"
        >
          <BsInstagram />
        </a>
        <a
          href="https://www.youtube.com/channel/UCfI_aWjggAbB3ZT1zijgyfg"
          className="icon text-xl"
          target="_blank"
        >
          <BsYoutube />
        </a>
        <a
          href="https://www.tiktok.com/@parishdental?is_from_webapp=1&sender_device=pc"
          className="icon text-xl"
          target="_blank"
        >
          <BsTiktok />
        </a>
      </div>
    </section>
  );
};

export default ContactInfo;
