import InputField from "@/components/Input/InputField";
import { Form, Formik } from "formik";

const PersonalTab = () => {
  return (
    <>
      <div className="text-sm font-normal text-[#667085]">
        <div>
          Your email is currently
          <span className="ml-1 font-semibold text-black">
            junaid@havanor.com
          </span>
        </div>
        <div>
          Your role is currently
          <span className="ml-1 font-semibold text-black ">Manager</span>
        </div>
      </div>
      {/* // Information  */}
      <div className="p-6 mt-5 bg-white border border-gray-200 rounded-xl">
        <div className="flex items-center justify-between pb-3 border-b border-gray-200">
          <h3 className="mb-1 text-lg font-semibold text-gray-700">
            Information
          </h3>
          <div>
            <button className="px-6 py-2 text-sm font-semibold border bg-[#E2EEFF] rounded-full border-primary text-primary">
              Save
            </button>
          </div>
        </div>
        <div>
          <Formik onSubmit={() => {}} initialValues={{}} validationSchema={{}}>
            {({ handleSubmit }) => (
              <>
                <Form onSubmit={handleSubmit}>
                  <div className="gap-4 mt-5 sm:flex">
                    <InputField
                      name="firstName"
                      label="First Name"
                      placeholder="Jhon"
                      isRequired
                    />
                    <InputField
                      isRequired
                      name="lastName"
                      label="Last Name"
                      placeholder="Doe"
                    />
                  </div>
                </Form>
              </>
            )}
          </Formik>
        </div>
      </div>

      <div className="p-6 mt-5 bg-white border border-gray-200 rounded-xl">
        <div className="pb-3 border-b border-gray-200">
          <div className="flex items-center justify-between pb-3 ">
            <h3 className="mb-1 text-lg font-semibold text-gray-700">
              Login Information
            </h3>

            <div>
              <button className="px-6 py-2 text-sm font-semibold border bg-[#E2EEFF] rounded-full border-primary text-primary">
                Save
              </button>
            </div>
          </div>
          <p className="text-sm text-gray-500">
            To make changes to your email, verify your password
          </p>
        </div>

        <div>
          <Formik onSubmit={() => {}} initialValues={{}} validationSchema={{}}>
            {({ handleSubmit }) => (
              <>
                <Form onSubmit={handleSubmit}>
                  <div className="">
                    <div className="flex flex-col gap-3 pb-3 border-b border-gray-200 ">
                      <div className="gap-4 mt-5 sm:flex">
                        <InputField
                          name="email"
                          label="Email"
                          placeholder="example@gmail.com"
                          isRequired
                        />
                        <InputField
                          isRequired
                          name="currentPassword"
                          label="Current Password"
                          placeholder="Password"
                        />
                      </div>

                      <p className="text-sm text-gray-500">
                        To make changes to your email, verify your password
                      </p>
                    </div>
                    <div className="flex flex-col gap-3 ">
                      <div className="gap-4 mt-5 sm:flex">
                        <InputField
                          isRequired
                          name="newPassword"
                          label="New Password"
                          placeholder="Password"
                        />
                        <InputField
                          isRequired
                          name="verifyPassword"
                          label="Verify New Password"
                          placeholder="Verify Password"
                        />
                      </div>
                    </div>
                  </div>
                </Form>
              </>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default PersonalTab;
