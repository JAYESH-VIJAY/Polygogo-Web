import InputField from "@/components/Input/InputField";
import PgButton from "@/components/Input/PgButton";
import PgSelectField from "@/components/Input/PgSelectField";
import DefaultCardLayout from "@/layout/DefaultCardLayout";
import { Form, Formik } from "formik";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

function ContactCreatePage() {
  return (
    <>
      {/* // Create a new contact */}

      <Link to="/contacts" className="flex items-center mb-4">
        <span className="text-[#A0AEC0]">
          <IoIosArrowBack size={20} />
        </span>
        <div className="text-lg font-medium">Contacts</div>
      </Link>
      <Formik initialValues={{}} onSubmit={() => {}}>
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <CreateContact />
            <AddToList />
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
              Create a new contact
            </h3>
          </div>
          <InputField
            label="Full Name"
            isRequired
            name="fullName"
            placeholder="Full Name"
          />
          <div className="grid gap-4 mt-5 md:grid-cols-2">
            <PgSelectField
              options={[
                {
                  value: "Male",
                  label: "Male",
                },
                {
                  value: "Female",
                  label: "Female",
                },
              ]}
              label="Gender"
              isRequired
              name="gender"
              placeholder="Select Gender"
            />
            <InputField
              label="Date of Birth"
              isRequired
              name="dob"
              placeholder="Date of Birth"
            />
            <InputField
              label="Street Address"
              isRequired
              name="address"
              placeholder="Street Address"
            />
            <InputField
              label="Suite, Apartment, Building no. (optional)"
              isRequired
              name="building"
              placeholder="Suite, Apartment, Building no. (optional)"
            />
            <InputField
              label="City"
              isRequired
              name="city"
              placeholder="City"
            />
            <InputField
              label="Zip Code"
              isRequired
              name="pinCode"
              placeholder="Zip Code"
            />
            <PgSelectField
              options={[
                {
                  value: "Alabama",
                  label: "Alabama",
                },
                {
                  value: "Alaska",
                  label: "Alaska",
                },
                {
                  value: "Colorado",
                  label: "Colorado",
                },
                {
                  value: "California",
                  label: "California",
                },
                {
                  value: "Georgia",
                  label: "Georgia",
                },
              ]}
              label="State"
              isRequired
              name="state"
              placeholder="Select State"
            />
            <PgSelectField
              options={[
                {
                  value: "Canada",
                  label: "Canada",
                },
                {
                  value: "Germany",
                  label: "Germany",
                },
                {
                  value: "Australia",
                  label: "Australia",
                },
                {
                  value: "Argentina",
                  label: "Argentina",
                },
                {
                  value: "India",
                  label: "India",
                },
              ]}
              label="Country"
              isRequired
              name="country"
              placeholder="Select Country"
            />
          </div>
        </div>
      </DefaultCardLayout>
    </>
  );
};
const AddToList = () => {
  return (
    <div className="mt-5">
      <DefaultCardLayout>
        <div className="p-6 bg-white border border-gray-200 rounded-xl">
          <div className="flex items-center justify-between pb-3 border-b border-gray-200">
            <h3 className="mb-1 text-lg font-semibold text-gray-700">
              Add to a list
            </h3>
          </div>
          <div className="grid mt-5 md:grid-cols-2 gap-x-5">
            <PgSelectField
              options={[
                {
                  value: "Master List",
                  label: "Master List",
                },
                {
                  value: "Main List",
                  label: "Main List",
                },
              ]}
              label="List"
              isRequired
              name="list"
              placeholder="List"
            />
            <InputField
              label="Tags"
              isRequired
              name="tags"
              placeholder="Tags"
            />
          </div>
        </div>
        <div className="max-w-[200px] mt-5">
          <PgButton buttonType="primaryDark" title="Create" />
        </div>
      </DefaultCardLayout>
    </div>
  );
};
export default ContactCreatePage;
