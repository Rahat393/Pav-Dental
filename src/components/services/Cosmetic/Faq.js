import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import React, { useState } from "react";

const Faq = () => {
  const [open, setOpen] = useState(0);
  const faqsItems = [
    {
      id: 1,
      title: "",
      faqs: [
        {
          id: 1,
          ques: "What is cosmetic dentistry?",
          ans: "Cosmetic dentistry includes procedures that enhance the appearance of your teeth and smile. It can include teeth whitening, veneers, bonding, crowns, orthodontics, and more.",
        },
        {
          id: 2,
          ques: "What are common cosmetic dental procedures?",
          ans: "Common procedures include teeth whitening, dental veneers, dental bonding, dental crowns, inlays and onlays, dental implants, and orthodontic treatments.",
        },
        {
          id: 3,
          ques: "How do I know if I need cosmetic dentistry?",
          ans: "If you are unhappy with aspects of your smile, such as color, alignment, spacing, size, or shape of your teeth, cosmetic dentistry might be an option.",
        },
        {
          id: 4,
          ques: "Is cosmetic dentistry safe?",
          ans: "Yes, when performed by a qualified dentist, cosmetic dentistry is safe. However, as with any medical procedure, there are risks and benefits that should be discussed with your dentist.",
        },
        {
          id: 5,
          ques: "Does cosmetic dentistry hurt?",
          ans: "Many cosmetic dental procedures are painless or involve minimal discomfort. For more extensive procedures, dentists use local anesthesia to minimize pain.",
        },
        {
          id: 6,
          ques: "How long do cosmetic dental procedures take?",
          ans: "The duration varies depending on the procedure. Some treatments like teeth whitening can be done in one visit, while others like veneers or implants may require multiple visits.",
        },
        {
          id: 7,
          ques: "How much does cosmetic dentistry cost?",
          ans: "Costs vary widely based on the procedure, dentist's experience, and location. Some cosmetic procedures can be expensive, and many are not covered by dental insurance.",
        },
        {
          id: 8,
          ques: "Will my insurance cover cosmetic dentistry?",
          ans: "Most insurance plans do not cover cosmetic procedures if they are purely for aesthetic reasons. However, some procedures that also have restorative benefits might be partially covered.",
        },
        {
          id: 9,
          ques: "How do I choose a cosmetic dentist?",
          ans: "Look for a dentist with experience in cosmetic dentistry. Check their qualifications, before-and-after photos of previous patients, and reviews or testimonials.",
        },
        {
          id: 10,
          ques: "How long do the results of cosmetic dentistry last?",
          ans: "The longevity of results varies. For example, teeth whitening may last for several months, while veneers or implants can last for many years with proper care.",
        },
        {
          id: 11,
          ques: "What are the risks associated with cosmetic dentistry?",
          ans: "Risks can include sensitivity, damage to underlying teeth, and mismatched colors. It's important to discuss potential risks and complications with your dentist.",
        },
        {
          id: 12,
          ques: "Can cosmetic dentistry improve oral health?",
          ans: "While the primary focus is on appearance, some procedures can improve oral health. For instance, correcting misaligned teeth can make them easier to clean and reduce the risk of decay.",
        },
      ],
    },
  ];

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <section className="mt-28">
      <div className="container mx-auto px-10 ">
        <h2 className="blue text-[#4f5859] text-4xl text-center font-semibold">
          Frequently Asked Questions
        </h2>
        <div className="mt-10">
          {faqsItems.map((item, i) => {
            return (
              <div className="mb-10" key={i}>
                <h4 className="font-semibold text-2xl text-[#4f5859] mb-5">
                  {item.title}
                </h4>
                {item.faqs.map((faq, index) => (
                  <Accordion
                    key={index}
                    open={open === index + i}
                    icon={<Icon id={index + i} open={open} />}
                  >
                    <AccordionHeader
                      onClick={() => handleOpen(index + i)}
                      className="text-[#4f5859] text-md font-semibold"
                    >
                      {faq.ques}
                    </AccordionHeader>
                    <AccordionBody className="text-gray-600 text-base font-normal">
                      {faq.ans}
                    </AccordionBody>
                  </Accordion>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default Faq;
