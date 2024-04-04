import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { NormalButton } from "./Button";
import { Spin } from "antd";

export const ContactUs = () => {
  const [success, setsuccess] = useState(false);
  const [Loading, setLoading] = useState(false);
  const form = useRef();
  const fname = useRef("");

  const sendEmail = (e) => {
    e.preventDefault();
    setsuccess(true);
    setLoading(true);
    setTimeout(() => {
      fname.current.value = "";
    }, 1000);
    setTimeout(() => {
      setLoading(false);
    }, 1000);

    emailjs
      .sendForm(
        "service_fdpjl7j",
        "template_uekgu45",
        form.current,
        "KOS94cM91AU01eTnJ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Spin spinning={Loading}>
      <form className="flex justify-center" ref={form} onSubmit={sendEmail}>
        <div className="md:flex md:gap-20 md:px-0 md:py-24 md:max-w-[1280px] grid px-10 py-10">
          <div className="pasent">
            <h2 className="gh2">Patient Details:</h2>
            <h1 className="gh1">Full Name:</h1>
            <input
              className="px-4 outline-none ring-2 ring-primary/10 focus:ring-2 focus:ring-primary/40 rounded  my-2 transition-all w-full text-neutral-400 focus:text-neutral-600 py-4"
              placeholder="First Name"
              type="text"
              required
              name="first_name"
            />
            <input
              className="px-4 outline-none ring-2 ring-primary/10 focus:ring-2 focus:ring-primary/40 rounded  my-2 transition-all w-full text-neutral-400 focus:text-neutral-600 py-4"
              placeholder="Middle Name (if applicable)"
              type="text"
              name="middle_name"
            />

            <input
              className="px-4 outline-none ring-2 ring-primary/10 focus:ring-2 focus:ring-primary/40 rounded  my-2 transition-all w-full text-neutral-400 focus:text-neutral-600 py-4"
              placeholder="Last Name"
              type="text"
              required
              name="last_name"
            />
            <h1 className="gh1">Date of Birth:</h1>
            <input
              className="px-4 outline-none ring-2 ring-primary/10 focus:ring-2 focus:ring-primary/40 rounded  my-2 transition-all w-full text-neutral-400 focus:text-neutral-600 py-4"
              placeholder="Date of Birth"
              type="date"
              name="date"
            />
            <h1 className="gh1">NHS Number (if known):</h1>
            <input
              className="px-4 outline-none ring-2 ring-primary/10 focus:ring-2 focus:ring-primary/40 rounded  my-2 transition-all w-full text-neutral-400 focus:text-neutral-600 py-4"
              placeholder="NHS Number"
              type="number"
              required
              name="nhs_number"
            />

            <h1 className="gh1">Gender:</h1>
            <select
              className="px-4 outline-none ring-2 ring-primary/10 focus:ring-2 focus:ring-primary/40 rounded  my-2 transition-all w-full text-neutral-400 focus:text-neutral-600 py-4"
              name="Gender"
            >
              <option value="">--Please choose an option--</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
              <option value="Prefer_not_to_say"> Prefer not to say</option>
            </select>

            <h1 className="gh1">Address: </h1>
            <input
              className="px-4 outline-none ring-2 ring-primary/10 focus:ring-2 focus:ring-primary/40 rounded  my-2 transition-all w-full text-neutral-400 focus:text-neutral-600 py-4"
              placeholder="Street"
              type="text"
              required
              name="Street"
            />
            <input
              className="px-4 outline-none ring-2 ring-primary/10 focus:ring-2 focus:ring-primary/40 rounded  my-2 transition-all w-full text-neutral-400 focus:text-neutral-600 py-4"
              placeholder="City"
              type="text"
              required
              name="city"
            />
            <input
              className="px-4 outline-none ring-2 ring-primary/10 focus:ring-2 focus:ring-primary/40 rounded  my-2 transition-all w-full text-neutral-400 focus:text-neutral-600 py-4"
              placeholder="Post Code"
              type="number"
              required
              name="postcode"
            />
            <h1 className="gh1">Contact Information: </h1>
            <input
              className="px-4 outline-none ring-2 ring-primary/10 focus:ring-2 focus:ring-primary/40 rounded  my-2 transition-all w-full text-neutral-400 focus:text-neutral-600 py-4"
              placeholder="Phone Number"
              type="number"
              required
              name="number"
            />
            <input
              className="px-4 outline-none ring-2 ring-primary/10 focus:ring-2 focus:ring-primary/40 rounded  my-2 transition-all w-full text-neutral-400 focus:text-neutral-600 py-4"
              placeholder="Email"
              type="email"
              required
              name="user_email"
            />
          </div>
          <div className="gurd">
            <h2 className="gh2">
              Parent/Guardian Details (if patient is under 18):
            </h2>
            <h1 className="gh1">Full Name:</h1>
            <input
              className="px-4 outline-none ring-2 ring-primary/10 focus:ring-2 focus:ring-primary/40 rounded  my-2 transition-all w-full text-neutral-400 focus:text-neutral-600 py-4"
              placeholder="First Name"
              type="text"
              name="g_first_name"
            />
            <input
              className="px-4 outline-none ring-2 ring-primary/10 focus:ring-2 focus:ring-primary/40 rounded  my-2 transition-all w-full text-neutral-400 focus:text-neutral-600 py-4"
              placeholder="Middle Name (if applicable)"
              type="text"
              name="g_middle_name"
            />

            <input
              className="px-4 outline-none ring-2 ring-primary/10 focus:ring-2 focus:ring-primary/40 rounded  my-2 transition-all w-full text-neutral-400 focus:text-neutral-600 py-4"
              placeholder="Last Name"
              type="text"
              name="g_last_name"
            />
            <h1 className="gh1">Relationship to Patient :</h1>
            <input
              className="px-4 outline-none ring-2 ring-primary/10 focus:ring-2 focus:ring-primary/40 rounded  my-2 transition-all w-full text-neutral-400 focus:text-neutral-600 py-4"
              placeholder="Relationship to Patient"
              type="text"
              name="relationship_to_patient"
            />
            <h1 className="gh1">Contact Information: </h1>
            <input
              className="px-4 outline-none ring-2 ring-primary/10 focus:ring-2 focus:ring-primary/40 rounded  my-2 transition-all w-full text-neutral-400 focus:text-neutral-600 py-4"
              placeholder="Phone Number"
              type="g_number"
              name="number"
            />
            <input
              className="px-4 outline-none ring-2 ring-primary/10 focus:ring-2 focus:ring-primary/40 rounded  my-2 transition-all w-full text-neutral-400 focus:text-neutral-600 py-4"
              placeholder="Email"
              type="email"
              name="g_email"
            />
            <h2 className="gh2">Medical History:</h2>

            <h1 className="gh1">Does the patient have any known allergies?</h1>
            <select
              required
              className="px-4 outline-none ring-2 ring-primary/10 focus:ring-2 focus:ring-primary/40 rounded  my-2 transition-all w-full text-neutral-400 focus:text-neutral-600 py-4"
              name="allergies"
            >
              <option value="">--Please choose an option--</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>

            <h1 className="gh1">Is the patient currently on any medication?</h1>
            <select
              required
              className="px-4 outline-none ring-2 ring-primary/10 focus:ring-2 focus:ring-primary/40 rounded  my-2 transition-all w-full text-neutral-400 focus:text-neutral-600 py-4"
              name="medication"
            >
              <option value="">--Please choose an option--</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>

            <h1 className="gh1">
              Has the patient had any previous dental surgeries or treatments?
            </h1>
            <select
              required
              className="px-4 outline-none ring-2 ring-primary/10 focus:ring-2 focus:ring-primary/40 rounded  my-2 transition-all w-full text-neutral-400 focus:text-neutral-600 py-4 mb-8"
              name="previous_treatments"
            >
              <option value="">--Please choose an option--</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            {success && (
              <p className="text-center text-lg p-4 ">
                Thanks for contacting us. We will be in touch with you shortly.
              </p>
            )}

            <a href="#">
              <NormalButton
                variant={"blue"}
                className="px-3  w-full py-3 flex justify-center items-center"
                type="submit"
              >
                Submit
              </NormalButton>
            </a>
          </div>
        </div>
      </form>
    </Spin>
  );
};

export default ContactUs;
