import axios from "axios";
import {
  Formik,
  Form,
  FormikHelpers,
  Field,
  FieldProps,
  ErrorMessage,
} from "formik";
import * as Yup from "yup";
import CustomFormField from "../components/common/FormField";

interface FormValues {
  title: string;
  description: string;
  githubLink: string;
  liveLink: string;
  image: File | null;
}

const formFields = [
  {
    id: "title",
    label: "Title",
    name: "title",
    className: "",
  },
  {
    id: "description",
    label: "Details",
    name: "description",
    as: "textarea",
    className: "",
  },
  {
    id: "liveLink",
    label: "Live Link",
    name: "liveLink",
    className: "",
  },
  {
    id: "githubLink",
    label: "Github Link",
    name: "githubLink",
    className: "",
  },
  // {
  //   id: "image",
  //   label: "Image",
  //   name: "image",
  //   type: "file",
  //   accept: "image/*",
  //   className: "col-span-4",
  // },
];

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  liveLink: Yup.string()
    .url("Link must be a valid URL")
    .required("Link is required"),
  githubLink: Yup.string()
    .url("Link must be a valid URL")
    .required("Link is required"),
  image: Yup.mixed().required("Image is required"),
  // .test("fileSize", "File size is too large", (value) => {
  //   if (value) {
  //     const file = value as File; // Type assertion
  //     return file.size <= 52428800; // 5 MB
  //   }
  //   return true;
  // }),
});

const Dashboard = () => {
  const initialValues: FormValues = {
    title: "",
    description: "",
    githubLink: "",
    liveLink: "",
    image: null,
  };

  const handleSubmit = async (
    values: FormValues,
    formikHelpers: FormikHelpers<FormValues>
  ) => {
    const { setSubmitting, resetForm, setStatus } = formikHelpers;

    setSubmitting(true);

    try {
      const formData = new FormData();
      const { title, description, githubLink, liveLink, image } = values;
      formData.append("title", title);
      formData.append("description", description);
      formData.append("githubLink", githubLink);
      formData.append("liveLink", liveLink);

      if (image) {
        formData.append("image", image);
      }

      const apiUrl = `${import.meta.env.VITE_VERCEL_API_URL}/api/portfolio/`;

      await axios.post(apiUrl, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      resetForm();
      setStatus("success");
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center relative">
          <div>
            <h1 className="text-3xl font-bold text-blue-500">DashBoard</h1>
          </div>
          <ul className="hidden lg:flex items-center space-x-10"></ul>
        </div>
      </nav>

      <div className="flex justify-center">
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ isSubmitting, status }) => (
            <Form className="text-sm lg:text-base bg-gray-100 p-10 rounded-md space-y-4 mt-20">
              <div className="text-center font-bold">Add new Portfolio</div>
              <div>
                {status === "success" && (
                  <div className="text-green-500">
                    Form submitted successfully!
                  </div>
                )}
                {status === "error" && (
                  <div className="text-red-500">Error submitting the form.</div>
                )}
              </div>

              {formFields.map((field) => (
                <CustomFormField key={field.id} {...field} />
              ))}

              <div className="grid grid-cols-10 items-center">
                <label className="font-medium col-span-2">Image</label>

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
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Dashboard;
