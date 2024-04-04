import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { toast } from "react-toastify";
import axios from "axios";
import { StaticImage } from "gatsby-plugin-image";
import Froms from "./emergencyfrom"

const Error = ({ errors, name }) => {
  return (
    <ErrorMessage
      errors={errors}
      name={name}
      render={({ message }) => (
        <p className="text-red-600 text-sm">{message}</p>
      )}
    />
  );
};

function EmergencyForm() {
  
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 container mx-auto px-10 my-20">
      <div>
        <h2 className="font-bold text-blue-gray-900 text-3xl">
          Send us a message
        </h2>
        <Froms />
       
      </div>

      <div>
        <StaticImage
          src="../../../images/emergency-form.jpeg"
          alt="Emergency Form"
          className="rounded-lg"
          placeholder="blurred"
        />
      </div>
    </section>
  );
}
export default EmergencyForm;
