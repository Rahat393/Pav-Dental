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
          ques: "Why is tooth extraction necessary?",
          ans: "Tooth extraction is necessary when a tooth is too damaged or decayed to be repaired, when there's severe gum disease (periodontitis), for orthodontic reasons (like overcrowding), or impacted wisdom teeth.",
        },
        {
          id: 2,
          ques: "How should I prepare for a tooth extraction?",
          ans: "Inform your dentist about any medical conditions and medications you're taking. Avoid smoking before the procedure, and arrange for someone to drive you home if you'll be sedated.",
        },
        {
          id: 3,
          ques: "What is the procedure for tooth extraction?",
          ans: "The procedure varies depending on the tooth. Generally, the area is numbed with local anesthesia. If the tooth is impacted, an incision may be made in the gum. The tooth is then rocked back and forth to loosen it before removal.",
        },
        {
          id: 4,
          ques: "Is tooth extraction painful?",
          ans: "You shouldn't feel pain during the extraction due to anesthesia, but you may feel pressure. Post-extraction, some discomfort and swelling are normal.",
        },
        {
          id: 5,
          ques: "What should I expect after the extraction?",
          ans: "After the extraction, it's common to experience some bleeding, swelling, and discomfort. Your dentist will provide instructions on managing these symptoms.",
        },
        {
          id: 6,
          ques: "How should I care for my mouth after extraction?",
          ans: "Avoid rinsing, spitting, or sucking actions for the first 24 hours. Use pain relief as advised, and apply an ice pack to reduce swelling. Eat soft foods and gradually reintroduce other foods as healing progresses.",
        },
        {
          id: 7,
          ques: "What are the potential complications of tooth extraction?",
          ans: "Potential complications include dry socket, infection, prolonged bleeding, or damage to adjacent teeth or jawbone. Contact your dentist if you have severe pain, fever, or uncontrolled bleeding.",
        },
        {
          id: 8,
          ques: "How long does recovery take?",
          ans: "Recovery typically takes a few days. However, it's important to avoid strenuous activity for at least 24 hours to minimize bleeding and aid the healing process.",
        },
        {
          id: 9,
          ques: "When should I follow up with my dentist?",
          ans: "Follow up if you experience severe pain, swelling, signs of infection, or if you have any concerns. Otherwise, adhere to your dentist's recommended schedule for check-ups.",
        },
        {
          id: 10,
          ques: "Can I replace the extracted tooth?",
          ans: "Yes, options like dental implants, bridges, or dentures can be considered to replace an extracted tooth. Discuss these options with your dentist.",
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
        <h2 className=" blue text-[#4f5859] text-4xl text-center font-semibold">
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
