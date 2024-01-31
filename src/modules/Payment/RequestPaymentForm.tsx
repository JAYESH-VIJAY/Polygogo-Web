import PgButton from "@/components/Input/PgButton";
import { Select } from "antd";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { LiaCoinsSolid } from "react-icons/lia";
import * as Yup from "yup";
function RequestPaymentForm({ closeModal }: any) {
  const [step, setStep] = useState(0);
  const isLastStep = 1;

  const validationSchema = [
    Yup.object().shape({
      username: Yup.string().trim().required("User details is required"),
      amount: Yup.number()
        .positive("Amount must be positive")
        .required("Amount is required"),
      description: Yup.string().trim().required("Description is required"),
      invoiceNumber: Yup.string().trim().required("Invoice Number is required"),
    }),
    Yup.object().shape({
      subjectLine: Yup.string().trim().required("Subject Line is required"),
      message: Yup.string().trim().required("Message is required"),
    }),
  ];

  return (
    <>
      <div className="flex items-start justify-between mb-5 ">
        <div className="">
          {step == 0 ? (
            <h2 className="flex items-center text-xl font-semibold gap-x-2 text-primaryDark">
              <span className="p-2 border rounded-full border-primary bg-sky-100">
                <LiaCoinsSolid color="#3787FF" />
              </span>
              <span>Payments</span>
            </h2>
          ) : (
            <h2 className="flex items-center text-xl font-semibold gap-x-2 text-primaryDark">
              <span
                className=""
                onClick={() => {
                  setStep(step - 1);
                }}
              >
                <IoIosArrowBack />
              </span>
              <span>Request a Payment</span>
            </h2>
          )}
          <p className="mt-2 text-xs text-gray-400 ">Send a Payment Request</p>
        </div>
        <div>
          <span onClick={closeModal} className="cursor-pointer">
            <IoCloseOutline size={24} />
          </span>
        </div>
      </div>
      <Formik
        enableReinitialize
        validateOnBlur
        validationSchema={validationSchema[step]}
        initialValues={{
          username: "",
          subjectLine: "",
          amount: "",
          message: "",
          invoiceNumber: "",
          description: "",
        }}
        onSubmit={(values) => {
          if (isLastStep == step) {
            alert(JSON.stringify(values, null, 2));
            closeModal();
          } else {
            setStep(step + 1);
            // console.log(values);
          }
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            {step == 0 && <RequestPaymentStep1 />}
            {step == 1 && <RequestPaymentStep2 />}
            <div className="flex justify-between gap-2 pt-5">
              <PgButton type="submit" buttonType="primary" title="Continue" />
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

const RequestPaymentStep1 = () => {
  return (
    <>
      <div className="py-5 border-y">
        <div className="flex items-center w-full gap-x-2">
          <div className="text-sm font-medium text-primaryDark min-w-fit ">
            Bill to:
          </div>
          <Field
            name="username"
            className="w-full text-sm outline-none"
            placeholder="Name, phone number or email"
          />
        </div>
        <div className="text-xs text-red-400 ">
          <span>
            <ErrorMessage name={`username`} />
          </span>
        </div>
      </div>
      <div className="w-full py-5 border-b gap-x-2">
        <Field
          name="description"
          className="w-full text-sm outline-none"
          placeholder="Description"
        />
        <div className="text-xs text-red-400 ">
          <span>
            <ErrorMessage name={`description`} />
          </span>
        </div>
      </div>
      <div className="w-full border-b gap-x-2">
        <div className="flex justify-center my-5">
          <Field
            name="amount"
            className="p-5 text-3xl font-semibold text-center bg-gray-100 rounded-full outline-none w-[200px] "
            placeholder="$0.00"
          />
        </div>
        <div className="text-xs text-red-400 ">
          <span>
            <ErrorMessage name={`amount`} />
          </span>
        </div>
      </div>
      <div className="w-full py-5 border-b gap-x-2">
        <div className="flex gap-x-4">
          <Select placeholder="One-Time" size="small" />
          <Select placeholder="No Due Date" size="small" />
        </div>
      </div>
      <div className="w-full py-5 border-b gap-x-2">
        <Field
          name="invoiceNumber"
          className="w-full text-sm outline-none"
          placeholder="+ Invoice Number"
        />
        <div className="text-xs text-red-400 ">
          <span>
            <ErrorMessage name={`invoiceNumber`} />
          </span>
        </div>
      </div>
    </>
  );
};

const RequestPaymentStep2 = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full py-2 border-y gap-x-2">
        <span className="flex items-center justify-center w-10 h-10 font-semibold text-white bg-yellow-400 rounded-full">
          MJ
        </span>
        <span className="text-sm font-medium text-primaryDark min-w-fit ">
          Muhammad Junaid
        </span>
      </div>
      <div className="flex items-center justify-center w-full py-2 border-b gap-x-2">
        <span className="text-2xl font-semibold text-primaryDark min-w-fit ">
          $5770.00
        </span>
      </div>
      <div className="w-full py-5 border-b gap-x-2">
        <label className="text-xs font-normal text-primaryDark">
          Subject Line
        </label>
        <Field
          name="subjectLine"
          className="w-full mt-2 text-sm outline-none"
          placeholder="Write subject line here..."
        />
        <div className="text-xs text-red-400 ">
          <span>
            <ErrorMessage name={`subjectLine`} />
          </span>
        </div>
      </div>
      <div className="w-full py-5 border-b gap-x-2">
        <label className="text-xs font-normal text-primaryDark">
          Add a message
        </label>
        <Field
          as="textarea"
          name="message"
          className="w-full mt-2 text-sm outline-none"
          placeholder="Write message here..."
        />
        <div className="text-xs text-red-400 ">
          <span>
            <ErrorMessage name={`message`} />
          </span>
        </div>
      </div>
    </>
  );
};

export default RequestPaymentForm;
