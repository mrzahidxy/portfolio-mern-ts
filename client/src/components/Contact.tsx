import React, { useState } from "react";
import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import FormInput from "./common/FormInput";
import formData from "../JSON/data.json";
import ContactInfo from "./common/ContatcInfo";
import SocialLink from "./common/SocialLink";
import phoneIcon from "../assets/icon/phone.png";
import emailIcon from "../assets/icon/email.png";
import addressIcon from "../assets/icon/address.png";
import facebookIcon from "../assets/icon/facebook.png";
import linkedinIcon from "../assets/icon/linkedin.png";
import githubIcon from "../assets/icon/github.png";

interface FormValues {
  name: string;
  subject: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const initialValues: FormValues = {
    name: "",
    subject: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters"),
    subject: Yup.string().required("Subject is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string()
      .required("Message is required")
      .min(20, "Message must be at least 20 characters"),
  });

  const handleSubmit = async (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    console.log(values);
    try {
      await emailjs.sendForm(
        "service_22y98hx",
        "template_t42a7dm",
        "email-form",
        "IiyX8JA0nQvOYICjB"
      );
      setIsFormSubmitted(true);
      resetForm();
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div id="contact" className="lg:h-screen grid lg:grid-cols-2 pt-60 gap-20 mb-12 lg:mb-0">
      {/* Left Section */}
      <div className="space-y-8">
        <h3 className="text-2xl lg:text-4xl font-bold text-blue-500">
          Let's discuss your project.
        </h3>
        <div className="flex flex-col text-lg font-medium space-y-4">
          <ContactInfo icon={phoneIcon} text="+8801405232258" />
          <ContactInfo icon={emailIcon} text="mrzahidxy@gmail.com" />
          <ContactInfo icon={addressIcon} text="Dhaka, Bangladesh" />
        </div>
        <div className="flex items-center gap-4">
          <h4 className="text-xl font-medium">Find me on:</h4>
          <SocialLink
            href="https://www.facebook.com/mrzahidxy"
            icon={facebookIcon}
            alt="facebook-link"
          />
          <SocialLink
            href="https://www.linkedin.com/in/mrzahidxy/"
            icon={linkedinIcon}
            alt="linkedin-link"
          />
          <SocialLink
            href="https://github.com/mrzahidxy"
            icon={githubIcon}
            alt="github-link"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="space-y-4">
        <p>
          <span className="text-blue-500 font-bold lg:text-xl">
            Give a challenge!{" "}
          </span>{" "}
          Always available for a challenge.
        </p>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <Form id="email-form" className="space-y-8">
            {formData.formDetails.map((data, index) => (
              <FormInput
                key={index}
                type={data.type}
                id={data.id}
                name={data.name}
                placeholder={data.placeholder}
              />
            ))}

            <div className="flex justify-center">
              <button
                type="submit"
                className="px-8 lg:px-12 py-2 rounded-md bg-blue-500 hover:bg-blue-800 transition-colors duration-300 text-white text-lg"
              >
                Submit
              </button>
            </div>

            {isFormSubmitted && (
              <div className="text-blue-600 font-semibold">
                Thank You. I will contact you soon.
              </div>
            )}
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Contact;
