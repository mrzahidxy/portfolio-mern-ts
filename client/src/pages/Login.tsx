import axios from "axios";
import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import CustomFormField from "../components/common/FormField";

interface FormValues {
  username: string;
  password: string;
}

const formFields = [
  {
    id: "username",
    label: "Username",
    name: "username",
    className: "",
  },
  {
    id: "password",
    label: "Passowrd",
    name: "password",
    className: "",
  },
];

const validationSchema = Yup.object().shape({
  username: Yup.string().required("username is required"),
  password: Yup.string().required("password is required"),
});

const Login = () => {
  const initialValues: FormValues = {
    username: "",
    password: "",
  };

  const handleSubmit = async (
    values: FormValues,
    formikHelpers: FormikHelpers<FormValues>
  ) => {
    const { setSubmitting, resetForm } = formikHelpers;
    setSubmitting(true);

    try {
      const apiUrl = `${import.meta.env.VITE_VERCEL_API_URL}/api/auth/login`;

      await axios.post(apiUrl, values);

      resetForm();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ isSubmitting }) => (
          <Form className="text-sm lg:text-base bg-gray-100 p-10 rounded-md space-y-4 mt-20">
            <div className="text-center font-bold">Login</div>

            {formFields.map((field) => (
              <CustomFormField key={field.id} {...field} />
            ))}

            <div className="flex justify-center pt-6">
              <button
                className="bg-blue-400 text-white px-8 py-2 rounded-md hover:bg-blue-500 transition ease-in-out duration-100"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Login..." : "Login"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
