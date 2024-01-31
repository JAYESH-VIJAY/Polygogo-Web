import InputField from "@/components/Input/InputField";
import PgSelectField from "@/components/Input/PgSelectField";
import { Form, Formik } from "formik";
import { FiEdit3 } from "react-icons/fi";

function GeneralTab() {
  return (
    <div>
      {/* Personal Info */}
      <div className="p-6 mt-5 bg-white border border-gray-200 rounded-xl">
        <div className="w-full pb-3 border-b border-gray-200 ">
          <h3 className="flex justify-between mb-1 text-lg font-semibold text-gray-700">
            <span>Personal Info</span>
          </h3>
        </div>
        <Formik
          initialValues={{}}
          onSubmit={(values) => {
            // console.log(values);
          }}
        >
          {({ handleSubmit }) => (
            <>
              <Form onSubmit={handleSubmit}>
                <div className="grid gap-4 mt-5 md:grid-cols-2">
                  <div className="md:col-span-2">
                    <InputField
                      label="Full Name"
                      name="fullName"
                      placeholder="Full Name"
                    />
                  </div>
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
                    name="dob"
                    placeholder="Date of Birth"
                  />

                  <InputField
                    label="Email Address"
                    name="email"
                    placeholder="Email Address"
                  />
                  <InputField
                    label="Phone Number"
                    name="phoneNumber"
                    placeholder="phoneNumber"
                  />
                </div>
              </Form>
            </>
          )}
        </Formik>
      </div>

      {/* //Address Info */}
      <div className="p-6 mt-5 bg-white border border-gray-200 rounded-xl">
        <div className="flex items-center justify-between w-full pb-3 border-b border-gray-200 ">
          <h3 className="flex justify-between mb-1 text-lg font-semibold text-gray-700">
            <span>Address</span>
          </h3>
          <div className="cursor-pointer">
            <FiEdit3 />
          </div>
        </div>
        <div className="mt-5">
          {[
            {
              label: "Primary Addresss",
              value: "Banyumanik Street, Central Java. Semarang Indonesia",
            },
            {
              label: "Country",
              value: "Indonesia",
            },
            {
              label: "State/Province",
              value: "Central Java",
            },
            {
              label: "City",
              value: "Semarang",
            },
            {
              label: "Post Code",
              value: "03125",
            },
          ].map((item, index) => (
            <div key={index} className="grid gap-3 mb-5 md:grid-cols-3">
              <div className="text-sm text-gray-400">{item.label}</div>
              <div className="col-span-2 text-primaryDark">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GeneralTab;
