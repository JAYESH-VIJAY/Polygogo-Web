import InputField from "@/components/Input/InputField";
import PgButton from "@/components/Input/PgButton";
import { Checkbox, Radio } from "antd";
import { Field, Form, Formik } from "formik";
import { useState } from "react";

function SettingsTab() {
  return (
    <div>
      <Formik initialValues={{ subscriptionType: "" }} onSubmit={() => {}}>
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <ListDetailsForm />
            <ListContactForm />
            <div className="max-w-[200px] mt-5">
              <PgButton buttonType="primaryDark" title="Save" />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

const ListDetailsForm = () => {
  return (
    <>
      <div className="p-6 mt-5 bg-white border border-gray-200 rounded-xl">
        <div className="flex items-center justify-between pb-3 border-b border-gray-200">
          <h3 className="mb-1 text-lg font-semibold text-gray-700">
            List Details
          </h3>
        </div>
        <div className="grid gap-4 mt-5 md:grid-cols-2">
          <InputField
            label="List ID"
            isRequired
            name="listId"
            placeholder="List ID"
          />
          <InputField
            label="Name"
            isRequired
            name="title"
            placeholder="Sample Name"
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
    </>
  );
};

const ListContactForm = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <div className="p-6 mt-5 bg-white border border-gray-200 rounded-xl">
        <div className="flex flex-col border-b border-gray-200 b-3 i">
          <h3 className="mb-1 text-lg font-semibold text-gray-700">
            List ID Contact
          </h3>
          <p className="mb-5 text-xs text-[#667085]">
            The primary contact for this account is Polygogo hello@polygogo.com.
            <br />
            If the contact information for this list is different, specify it
            below.
          </p>
        </div>
        <div className="grid gap-4 mt-5 md:grid-cols-2">
          <InputField
            label="Contact Name"
            isRequired
            name="contactName"
            placeholder="Contact Name"
          />
          <InputField
            label="Contact Email"
            isRequired
            name="contactEmail"
            placeholder="Contact Email"
          />
        </div>
      </div>
      <div className="p-6 mt-5 bg-white border border-gray-200 rounded-xl">
        <div className="flex flex-col border-b border-gray-200 b-3 i">
          <h3 className="mb-1 text-lg font-semibold text-gray-700">Consent</h3>
          <p className="mb-5 text-xs text-[#667085]">
            The generic unsubscribe page for this list is:
            <br />
            <span className="underline text-[#53B1FD]">
              https://lists.polygogo.com/subscriptions/unsubscribe?a=XZ3VWm&g=TnQbM7
            </span>
          </p>
        </div>
        {/* Unsubscribe from all future emails */}
        <div className="flex flex-col border-b border-gray-200 b-3 i">
          <h4 className="flex items-center gap-2 my-5 text-gray-400 text-md">
            <span>
              <Checkbox />
            </span>
            <span>Unsubscribe from all future emails</span>
          </h4>
          <p className="mb-5 text-xs text-[#667085]">
            When someone unsubscribes from Junaid Dummy List 2, unsubscribe that
            person from all future emails.
            <br />
            Note: Your account is currently set to treat any unsubscribe as an
            unsubscribe from all emails.
            <br />
            <br />
            <span className="underline text-[#53B1FD]">View Settings</span>
          </p>
        </div>
        {/* Opt-in Process */}
        <div className="flex flex-col mt-5 border-b border-gray-200 b-3 i">
          <h3 className="mb-1 text-lg font-semibold text-gray-700">
            Opt-in Process
          </h3>
          <p className="mb-5 text-xs text-[#667085]">
            Choose how people subscribe to this list.{" "}
            <span className="underline text-[#53B1FD]">
              Double opt-in is recommended
            </span>
            <br />
            to help prevent invalid and malicious contacts from subscribing.
            <br />
          </p>
          <Radio.Group
            onChange={(e) => {
              // console.log("radio checked", e.target.value);
            }}
          >
            <div className="flex items-start mb-3 text-sm">
              <Radio value={1} />
              <div>
                <span className="font-medium">Double Opt-in (recommended)</span>
                <p className="text-[#667085]">
                  Require new subscribers to confirm their subscription before
                  being added to the list.
                </p>
              </div>
            </div>
            <div className="flex items-start pb-5 text-sm">
              <Radio value={2} />
              <div>
                <div>
                  <span className="font-medium">Single opt-in</span>
                  <p className="text-[#667085]">
                    Immediately subscribe people to this list without a
                    confirmation.
                  </p>
                </div>
              </div>
            </div>
          </Radio.Group>
        </div>
      </div>
    </>
  );
};

export default SettingsTab;
