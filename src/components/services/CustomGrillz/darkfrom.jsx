import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@material-tailwind/react";
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
        "template_qwpl58r",
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
      <div className="flex gap-4">
          <input
            className="px-4 bg-transparent	 outline-none ring-1 ring-otblack focus:ring-1 focus:ring-otwhite rounded  my-3 transition-all w-full text-gray-500	focus:text-white py-2"
            placeholder="First Name"
            type="text"
            required
            name="first_name"
            ref={fname}
            value={firstName}
            onChange={(e) => setfirstName(e.target.value)}
          />
          <input
            className="px-4 bg-transparent	 outline-none ring-1 ring-otblack focus:ring-1 focus:ring-otwhite rounded  my-3 transition-all w-full text-gray-500	focus:text-white py-2"
            placeholder="Last Name"
            type="text"
            required
            name="last_name"
            ref={fname}
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}
          />
        </div>
        <div className="flex gap-4">
          <input
            minLength={10}
            maxLength={11}
            className="px-4 bg-transparent	 outline-none ring-1 ring-otblack focus:ring-1 focus:ring-otwhite rounded  my-3 transition-all w-full text-gray-500	focus:text-white py-2"
            placeholder="Phone Number"
            type="number"
            required
            name="number"
            ref={fname}
            value={Number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <input
            className="px-4 bg-transparent	 outline-none ring-1 ring-otblack focus:ring-1 focus:ring-otwhite rounded  my-3 transition-all w-full text-gray-500	focus:text-white py-2"
            placeholder="Email"
            type="email"
            required
            name="user_email"
            ref={fname}
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <textarea
          minLength={200}
          className="px-4 bg-transparent outline-none ring-1 ring-otblack focus:ring-1 focus:ring-otwhite rounded  my-3 transition-all w-full text-gray-500	focus:text-white py-4"
          placeholder="Message"
          name="message"
          required
          rows={5}
          ref={fname}
          value={Message}
          onChange={(e) => setMessage(e.target.value)}
        />
          {success && (
          <p className="text-center text-lg p-4 ">
            Thanks for contacting us. We will be in touch with you shortly.
          </p>
        )}
        <a href="#">
          <Button
            fullWidth
            type="submit"
            variant="outlined"
            className="text-white focus:ring-otwhite border-otblack"
          >
            Submit
          </Button>
        </a>
      
      </form>
    </Spin>
  );
};

export default ContactUs;
