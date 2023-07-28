import { useState } from "react";
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

interface FormValues {
  name: string;
  subject: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [done, setDone] = useState<boolean>(false);
  const initialValues: FormValues = {
    name: "",
    subject: "",
    email: "",
    message: "",
  };

  const onSubmit = (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    const form = document.getElementById("email-form");

    console.log(values);
    if (form instanceof HTMLFormElement) {
      emailjs
        .sendForm(
          "service_22y98hx",
          "template_t42a7dm",
          form,
          "IiyX8JA0nQvOYICjB"
        )
        .then(
          () => {
            setDone(true);
            resetForm();
          },
          (error) => {
            alert(error.text);
          }
        );
    }
  };

  return (
    <div id="contact" className="h-screen grid lg:grid-cols-2 pt-60 gap-20">
      <div className="space-y-8">
        <h3 className="text-5xl font-bold text-blue-500">
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
      <div className="space-y-4">
        <p>
          <span className="text-blue-500 font-bold text-xl">
            Give a challenge!{" "}
          </span>{" "}
          Always available for a challenge.
        </p>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
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
                className="px-12 py-2 rounded-md bg-blue-500 hover:bg-blue-600 transition-colors duration-300 text-white text-lg"
              >
                Submit
              </button>
            </div>
            {done && (
              <div className="text-blue-600 font-semibold">
                {" "}
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
