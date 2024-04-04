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
          ques: "What is general dentistry?",
          ans: "General dentistry focuses on preventive care and treatments to maintain healthy teeth and gums. It includes regular check-ups, cleanings, fillings, root canals, extractions, and patient education on oral hygiene.",
        },
        {
          id: 2,
          ques: "What services do general dentists offer?",
          ans: "General dentists provide services like dental exams, cleanings, x-rays, fillings, crowns, bridges, root canal treatments, gum care, and sometimes orthodontic treatments like braces.",
        },
        {
          id: 3,
          ques: "How often should I visit a general dentist?",
          ans: "It's recommended to visit a dentist for check-ups and cleanings every six months. However, your dentist may suggest a different schedule based on your specific oral health needs.",
        },
        {
          id: 4,
          ques: "What's the difference between general dentistry and specialized dentistry?",
          ans: "General dentists provide a broad range of dental care and are your primary dental care providers. Specialists, like orthodontists or periodontists, focus on specific areas of dental health.",
        },
        {
          id: 5,
          ques: "Can general dentists perform cosmetic procedures?",
          ans: "Yes, many general dentists can perform cosmetic procedures such as teeth whitening, veneers, and bonding. However, complex cosmetic work may require a specialist.",
        },
        {
          id: 6,
          ques: "What should I expect during a dental check-up?",
          ans: "A dental check-up typically includes an examination of your teeth, gums, and mouth, dental cleanings to remove plaque and tartar, and possibly X-rays to detect underlying issues.",
        },
        {
          id: 7,
          ques: "How can I maintain good oral health at home?",
          ans: "Good oral hygiene includes brushing twice a day, flossing daily, using mouthwash, eating a balanced diet, and avoiding tobacco products. Regular dental visits are also crucial.",
        },
        {
          id: 8,
          ques: "Are dental X-rays safe?",
          ans: "Dental X-rays are safe and expose you to very low levels of radiation. However, inform your dentist if you're pregnant or have specific health concerns.",
        },
        {
          id: 9,
          ques: "What is a dental emergency, and how is it handled?",
          ans: "Dental emergencies include severe toothache, broken or knocked-out teeth, and acute gum or jaw pain. In such cases, it's important to see a dentist immediately for urgent care.",
        },
        {
          id: 10,
          ques: "How are cavities treated?",
          ans: "Cavities are treated by removing the decayed part of the tooth and filling it with materials like composite resin or amalgam.",
        },
        {
          id: 11,
          ques: "What are the signs of gum disease?",
          ans: "Signs of gum disease include red, swollen, or bleeding gums, bad breath, loose teeth, and receding gums. Early detection and treatment are crucial.",
        },
        {
          id: 12,
          ques: "Can general dentists treat children?",
          ans: "Many general dentists can treat children, and some even specialize in pediatric dentistry. It's important to find a dentist who is comfortable and experienced in treating young patients.",
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
