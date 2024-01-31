import {
  ErrorMessage,
  Field,
  FieldArray,
  Form,
  Formik,
  useFormikContext,
} from "formik";
import { memo, useState } from "react";
import { BiHash } from "react-icons/bi";
import { IoIosArrowBack } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";
import * as Yup from "yup";
import PgButton from "@/components/Input/PgButton";
import { error } from "console";
interface Item {
  item: string;
  price: number;
}

interface FormData {
  username: string;
  estimateTitle?: string;
  items: Item[];
  description: string;
  message?: string; // Optional if you have a message field in the second step
}

const EstimateForm = ({ closeModal }: any) => {
  const [step, setStep] = useState(0);
  const isLastStep = 1;

  return (
    <>
      <div className="flex items-start justify-between mb-5 ">
        <div className="">
          {step == 0 ? (
            <h2 className="flex items-center text-xl font-semibold gap-x-2 text-primaryDark">
              <span className="p-2 border rounded-full border-primary bg-sky-100">
                <BiHash color="#3787FF" />
              </span>
              <span>Estimate</span>
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
              <span>Send estimate</span>
            </h2>
          )}
          <p className="mt-2 text-xs text-gray-400 ">
            Create and send an estimate
          </p>
        </div>
        <div>
          <span onClick={closeModal} className="cursor-pointer">
            <IoCloseOutline size={24} />
          </span>
        </div>
      </div>
      <Formik
        enableReinitialize
        validateOnMount={true}
        validateOnBlur
        validationSchema={Yup.object().shape({
          username: Yup.string().trim().required("User details is required"),
          items: Yup.array()
            .of(
              Yup.object().shape({
                item: Yup.string().trim().required("Item is required"),
                price: Yup.number()
                  .integer()
                  .positive()
                  .required("Item Price is required"),
              })
            )
            .required("At least items is required"),
          description: Yup.string().trim().required("Description is required"),
        })}
        initialValues={{
          username: "",
          items: [{ item: "123", price: "123" }],
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
            {step == 0 && <EstimateStep1 />}
            {step == 1 && <EstimateStep2 />}
            <div className="flex justify-between gap-2 pt-5">
              <PgButton buttonType="secondary" title="Save as draft" />
              <PgButton
                type="submit"
                title={step == 0 ? "Continue to Message" : "Send Estimate"}
              />
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default EstimateForm;

const EstimateStep1 = memo(() => {
  const { values, touched, errors } = useFormikContext<FormData>();

  return (
    <>
      <div className="py-5 border-y">
        <div className="flex items-center w-full gap-x-2">
          <div className="text-sm font-medium text-primaryDark min-w-fit ">
            Send to:
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
        <label className="text-xs font-normal text-primaryDark">
          Estimate Title
        </label>
        <Field
          name="estimateTitle"
          className="w-full mt-2 text-sm outline-none"
          placeholder="Optional"
        />
      </div>

      <div className="py-5 border-b">
        <div className="flex justify-between mb-5">
          <label className="text-xs font-normal text-primaryDark">Items</label>
          <label className="text-xs font-normal text-primaryDark">Price</label>
        </div>
        <FieldArray name="items">
          {({ push, remove }) => (
            <>
              <div className="w-full gap-x-2">
                {values?.items?.map((_, index: number) => (
                  <div key={index}>
                    <div className="flex items-center justify-between">
                      <Field
                        name={`items[${index}].item`}
                        className="w-full text-sm outline-none"
                        placeholder="Optional"
                      />
                      <div className="flex items-center gap-x-2">
                        <span>
                          <Field
                            name={`items[${index}].price`}
                            className="w-full mt-2 text-sm outline-none text-end"
                            placeholder="$0.00"
                          />
                        </span>
                        <span
                          className="mt-2 text-red-400 cursor-pointer"
                          onClick={() => remove(index)}
                        >
                          <AiOutlineDelete size={18} />
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between w-full text-xs text-red-400">
                      <span>
                        <ErrorMessage name={`items[${index}].item`} />
                      </span>
                      <span>
                        <ErrorMessage name={`items[${index}].price`} />
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div
                onClick={() => {
                  //   setFieldValue("items", [
                  //     ...values.items,
                  //     { item: "", price: "" },
                  //   ]);
                  const lastField = values?.items[values?.items?.length - 1];
                  if (!lastField || lastField.item) {
                    push({ description: "" });
                  }
                }}
                className="mt-5 text-xs font-semibold cursor-pointer text-primaryDark"
              >
                + Add another item
              </div>
            </>
          )}
        </FieldArray>
      </div>

      <div className="w-full py-5 border-b gap-x-2">
        <Field
          as="textarea"
          name="description"
          className="w-full mt-2 text-sm outline-none"
          placeholder="Description"
        />
        <div className="text-xs text-red-400 ">
          <span>
            <ErrorMessage name={`description`} />
          </span>
        </div>
      </div>
    </>
  );
});

const EstimateStep2 = () => {
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
          Add a message
        </label>
        <Field
          as="textarea"
          name="message"
          className="w-full mt-2 text-sm outline-none"
          placeholder="Write message here..."
        />
      </div>
    </>
  );
};
