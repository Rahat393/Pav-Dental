import { Link, graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { BsFacebook, BsInstagram, BsTiktok, BsYoutube } from "react-icons/bs";
import { FiInstagram, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { navPages, policyPages } from "../../common/constant";
import img from "../../images/pav map.png";
import Logo from "./Logo";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      allContentfulGlobal {
        nodes {
          socials
          phone
          email
          logoWhite {
            url
            title
          }
          logo {
            url
            title
          }
          address
          footerDescription
          mapPicture {
            title
            gatsbyImageData(width: 400, placeholder: BLURRED)
          }
        }
      }
      allContentfulSchedule(sort: { order: ASC, fields: scheduleId }) {
        nodes {
          day
          contentful_id
          time
        }
      }
    }
  `);

  const footerData = data?.allContentfulGlobal?.nodes[0];

  const socials = [
    // { id: 1, icon: FiFacebook, href: socialLinks.facebookLink },
    { id: 2, icon: FiInstagram, href: footerData?.socials[0] },
    // { id: 3, icon: FiTwitter, href: socialLinks.twitterLink },
  ];

  return (
    <footer className="w-full bg-primary py-20">
      <div className="container mx-auto px-10 grid-cols-1 sm:grid-cols-2 grid lg:grid-cols-4 gap-16 text-white mb-12">
        <div>
          <Logo isFooter />
          <p className="my-10 font-light">{footerData?.footerDescription}</p>

          <div className="flex items-center my-5 gap-3	">
            <a
              href="https://www.facebook.com/profile.php?id=61558060799200"
              target="_blank"
              className="icon "
            >
              <BsFacebook />
            </a>
            <a
              href="https://www.instagram.com/pavdentalofficial/?igsh=MXd5MTg2OGU1aW8zNw%3D%3D"
              className="icon "
              target="_blank"
            >
              <BsInstagram />
            </a>
            <a
              href="https://www.youtube.com/@PavDental/featured"
              className="icon "
              target="_blank"
            >
              <BsYoutube />
            </a>
            <a
              href="https://www.tiktok.com/@pavdentalofficial?_t=8liREyMlh45&_r=1"
              className="icon "
              target="_blank"
            >
              <BsTiktok />
            </a>
          </div>

          <div className="mt-10 flex items-center">
            <div className="font-light mr-2 text-sm">Website Built By:</div>
            <a
              target="_blank"
              href="https://www.growwithsayed.com/"
              rel="noreferrer"
            >
              <StaticImage
                width={35}
                alt="Unimax"
                className="rounded-full"
                src="../../images/IMG_20210907_002730_422.jpg"
              />
            </a>
          </div>
        </div>

        <div className="">
          <h3 className="font-medium text-xl mb-7">Quick Links</h3>
          <div className="flex justify-between gap-x-5">
            <div>
              {navPages.map((item) => (
                <Link
                  key={item.id}
                  className="font-light block mb-3"
                  to={item.route}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div>
              {policyPages.map((item) => (
                <Link
                  key={item.id}
                  className="font-light block mb-3"
                  to={item.route}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            {/* {scheduleData?.map((item, index) => (
              <div className="flex justify-between my-2" key={index}>
                <span className="font-light">{item.day}</span>
                <span className="font-light">{item.time}</span>
              </div>
            ))} */}
          </div>
        </div>
        <div className="">
          <h3 className="font-medium text-xl mb-7">Contact Info</h3>

          <div className="flex items-center mb-7">
            <FiMapPin className="mr-2 w-1/12 text-xl" />{" "}
            <span className="w-11/12 font-light">{footerData?.address}</span>
          </div>

          <a
            href="mailto:hello@pavdental.com"
            className="flex items-center  mb-7"
          >
            <FiMail className="mr-2 w-1/12 text-xl" />{" "}
            <span className="font-light">hello@pavdental.com</span>
          </a>
          <div className="flex gap-4">
            <div className="relative group">
              <button className="py-1 my-3 font-semibold border-2 border-red-600 rounded-lg hover:text-white text-red-600 px-4 bg-white hover:bg-red-600 group-hover:bg-red-600 group-hover:text-white">
                PRIVATE
              </button>
              <div className="absolute z-[99] right-[-141px] mt-0 w-60	bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible">
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
              <div className="absolute z-[99] right-[-55px] mt-0 w-60	 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                <button className="block py-2 px-4 hover:text-white text-blue-600 hover:bg-blue-600 w-full text-left">
                  <a className="flex  gap-2" href="tel:01132638509">
                    <FiPhone className="mt-[2px]" />
                    0113 263 8509
                  </a>
                </button>
                <button className="block py-2 px-4 hover:text-white text-blue-600 hover:bg-blue-600 w-full text-left">
                  <a
                    className="flex  gap-2"
                    href="mailto:nhspavdental.com"
                  >
                    <FiMail className="mt-[2px]" />
                    nhs@pavdental.com
                  </a>
                </button>
              </div>
            </div> */}
          </div>
        </div>
        <div>
          <a
            href="https://www.google.com/maps/place/Dr+Pav+Aesthetic+Dentist/@51.7462775,-0.4877934,17z/data=!4m6!3m5!1s0x48764355a891337f:0x30d36970f9ded11b!8m2!3d51.7462825!4d-0.4878604!16s%2Fg%2F11m_lcrktb?entry=ttu"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={img}
              className="h-full w-full object-cover rounded"
              alt={footerData?.mapPicture?.title}
            />
          </a>
        </div>
      </div>
      <div className="text-center text-white">
        Copyright @ {new Date().getFullYear()} Pav Dental
      </div>
    </footer>
  );
};

export default Footer;
