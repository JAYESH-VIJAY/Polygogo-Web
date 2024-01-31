import InputField from "@/components/Input/InputField";
import PgButton from "@/components/Input/PgButton";
import PgSelectField from "@/components/Input/PgSelectField";
import DefaultCardLayout from "@/layout/DefaultCardLayout";
import { Form, Formik } from "formik";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

function ContactListCreatePage() {
  return (
    <>
      {/* // Create a new contact */}
      <Link to="/contacts/lists" className="flex items-center mb-4">
        <span className="text-[#A0AEC0]">
          <IoIosArrowBack size={20} />
        </span>
        <div className="text-lg font-medium">All List</div>
      </Link>

      <Formik initialValues={{}} onSubmit={() => {}}>
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <CreateContact />
          </Form>
        )}
      </Formik>
    </>
  );
}

const CreateContact = () => {
  return (
    <>
      <DefaultCardLayout>
        <div className="p-6 bg-white border border-gray-200 rounded-xl">
          <div className="flex items-center justify-between pb-3 border-b border-gray-200">
            <h3 className="mb-1 text-lg font-semibold text-gray-700">
              Create a new list
            </h3>
          </div>
          <div className="grid gap-4 mt-5 md:grid-cols-2">
            <InputField
              label="Name"
              isRequired
              name="name"
              placeholder="Name"
            />
            <PgSelectField
              options={[
                {
                  value: "Tags 1",
                  label: "Tags 1",
                },
                {
                  value: "Tags 2",
                  label: "Tags 2",
                },
              ]}
              label="Tags"
              isRequired
              name="tags"
              placeholder="Select Tags"
            />

            <div className="md:col-span-2">
              <InputField
                label="Description"
                input="textarea"
                isRequired
                name="dob"
                placeholder="Write the description..."
              />
            </div>
          </div>
        </div>
        <div className="max-w-[200px] mt-5">
          <PgButton buttonType="primaryDark" title="Create" />
        </div>
      </DefaultCardLayout>
    </>
  );
};

export default ContactListCreatePage;
