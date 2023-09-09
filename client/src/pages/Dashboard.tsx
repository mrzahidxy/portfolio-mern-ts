import { useState } from "react";
import axios from "axios";
import { Formik, Form, Field, FieldProps, ErrorMessage } from "formik";
import * as Yup from "yup";

interface FormValues {
  title: string;
  description: string;
  link: string;
  image: File | null;
}

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  link: Yup.string()
    .url("Link must be a valid URL")
    .required("Link is required"),
  image: Yup.mixed()
    .required("Image is required")
    .test("fileSize", "File size is too large", (value) => {
      if (value) {
        const file = value as File; // Type assertion
        return file.size <= 5242880; // 5 MB
      }
      return true;
    }),
});

const ImageForm = () => {
  const initialValues: FormValues = {
    title: "",
    description: "",
    link: "",
    image: null,
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (values: FormValues) => {
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("description", values.description);
      formData.append("link", values.link);
      if (values.image) {
        formData.append("image", values.image);
      }

      // Send the form data using Axios
      const response = await axios.post(
        "http://localhost:8080/api/portfolio/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Form submission response:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className="text-sm lg:text-base bg-gray-100 p-10 rounded-md space-y-4 mt-20">
          <div className="text-center font-bold">
            Portfolio Dashboard
          </div>
          <div className="grid grid-cols-10 items-center">
            <label htmlFor="title" className="font-medium col-span-2">
              Title
            </label>
            <div className="flex flex-col col-span-8">
              <Field
                type="text"
                id="title"
                name="title"
                className="py-2 rounded-md "
              />
              <div className="text-red-500">
                <ErrorMessage name="title" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-10 items-center">
            <label htmlFor="description" className="font-medium col-span-2">
              Details
            </label>
            <div className="flex flex-col col-span-8">
              <Field
                as="textarea"
                id="description"
                name="description"
                className="py-2 rounded-md "
              />
              <div className="text-red-500">
                <ErrorMessage name="description" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-10 items-center ">
            <label htmlFor="link" className="font-medium col-span-2">
              Link
            </label>

            <div className="flex flex-col col-span-8">
              <Field
                type="text"
                id="link"
                name="link"
                className="py-2 rounded-md "
              />
              <div className="text-red-500">
                <ErrorMessage name="link" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-10 items-center ">
            <label htmlFor="image" className="font-medium col-span-2">
              Image
            </label>
            <div className="flex flex-col col-span-8">
              <Field name="image">
                {({ field, form }: FieldProps<File | null>) => (
                  <input
                    type="file"
                    id="image"
                    accept="image/*"
                    onChange={(event) => {
                      const file = event.currentTarget.files
                        ? event.currentTarget.files[0]
                        : null;
                      form.setFieldValue(field.name, file);
                    }}
                    className="col-span-4"
                  />
                )}
              </Field>
              <div className="text-red-500">
                <ErrorMessage name="image" />
              </div>
            </div>
          </div>
          <div className="flex justify-center pt-6">

          <button
            className="bg-blue-400 text-white px-8 py-2 rounded-md hover:bg-blue-500 transition ease-in-out duration-100"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ImageForm;
