import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { NormalButton } from "./Button";
import { Spin } from "antd";

export const ContactUs = () => {
  const [success, setsuccess] = useState(false);
  const [Loading, setLoading] = useState(false);
  const form = useRef();
  const fname = useRef("");
  const [
    firstName,
    setfirstName,
    lastName,
    setlastName,
    Number,
    setNumber,
    Email,
    setEmail,
    Address,
    setAddress,
    Message,
    setMessage,
  ] = useState("");

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
        "template_buym0xm",
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
      <form ref={form} onSubmit={sendEmail}>
        <input
          className="px-4 outline-none ring-2 ring-primary/10 focus:ring-2 focus:ring-primary/40 rounded  my-3 transition-all w-full text-neutral-400 focus:text-neutral-600 py-4"
          placeholder="First Name"
          type="text"
          required
          name="first_name"
          ref={fname}
          value={firstName}
          onChange={(e) => setfirstName(e.target.value)}
        />
        <input
          className="px-4 outline-none ring-2 ring-primary/10 focus:ring-2 focus:ring-primary/40 rounded  my-3 transition-all w-full text-neutral-400 focus:text-neutral-600 py-4"
          placeholder="Last Name"
          type="text"
          required
          name="last_name"
          ref={fname}
          value={lastName}
          onChange={(e) => setlastName(e.target.value)}
        />
        <input
          minLength={10}
          maxLength={11}
          className="px-4 outline-none ring-2 ring-primary/10 focus:ring-2 focus:ring-primary/40 rounded  my-3 transition-all w-full text-neutral-400 focus:text-neutral-600 py-4"
          placeholder="Phone Number"
          type="number"
          required
          name="number"
          ref={fname}
          value={Number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <input
          className="px-4 outline-none ring-2 ring-primary/10 focus:ring-2 focus:ring-primary/40 rounded  my-3 transition-all w-full text-neutral-400 focus:text-neutral-600 py-4"
          placeholder="Email"
          type="email"
          required
          name="user_email"
          ref={fname}
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="px-4 outline-none ring-2 ring-primary/10 focus:ring-2 focus:ring-primary/40 rounded  my-3 transition-all w-full text-neutral-400 focus:text-neutral-600 py-4"
          placeholder="Address"
          type="text"
          required
          name="last_name"
          ref={fname}
          value={Address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <textarea
          minLength={80}
          className="px-4 outline-none ring-2 ring-primary/10 focus:ring-2 focus:ring-primary/40 rounded  my-3 transition-all w-full text-neutral-400 focus:text-neutral-600 py-4"
          placeholder="What type of appointment/ treatment do you feel you require?"
          name="message"
          required
          rows={5}
          ref={fname}
          value={Message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <a href="#">
          <NormalButton
            variant={"blue"}
            className="px-3  w-full py-4 flex justify-center items-center"
            type="submit"
          >
            Submit
          </NormalButton>
        </a>
        {success && (
          <p className="text-center text-lg p-4 ">
            Thanks for contacting us. We will be in touch with you shortly.
          </p>
        )}
      </form>
    </Spin>
  );
};

export default ContactUs;
