import { Form, Formik } from "formik";
import FormInput from "../components/common/FormInput";

interface DashboardProps { }

const Dashboard: React.FC<DashboardProps> = () => {
    return (

        <Formik
            initialValues={{}}
            onSubmit={() => { }}
            validationSchema={{}}
        >



            <Form className="container grid grid-cols-2 gap-10 m-10">
                <div className="shadow-md">
                    <FormInput
                        type="text"
                        id="short-intro"
                        name="shortIntro"
                        placeholder="Enter Short Intro..."
                    />
                    <div>Title short intro</div>
                </div>
                <div className="shadow-md">
                    <div>About Skillset</div>
                </div>
                <div className="shadow-md">Image, Title, Description, Link</div>
                <div className="shadow-md">Image, Title, Description, Link</div>
            </Form>
        </Formik>
    );
};

export default Dashboard;
