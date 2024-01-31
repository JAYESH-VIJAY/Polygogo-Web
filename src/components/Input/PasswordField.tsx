import { Typography } from "antd";
import { ErrorMessage, Field } from "formik";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

interface PasswordFieldType {
  name: string;
  placeholder?: string;
  label?: string | null;
  isRequired?: boolean;
  substring?: any;
  validate?: any;
  asterisk?: string;
  pass?: string;
  // onChange?: (e: any) => void;
}
function PasswordField({
  name,
  placeholder,
  label,
  isRequired = true,
  validate = null,
  asterisk,
  pass,
  // onChange,
  substring,
}: PasswordFieldType) {
  const [show, setPassword]: any = useState<boolean>(false);
  return (
    <div className="flex-1 ">
      <div className="my-2">
        {label && (
          <div className="mb-2">
            <label className="font-semibold text-indigo-900">
              {label}
              <span className="text-red-500">&nbsp;{isRequired && "*"}</span>
            </label>
          </div>
        )}
        <Field name={name} validate={validate}>
          {({ field }: any) => (
            <div className=" flex text-xs font-medium border border-gray-200 rounded-full text-primaryDark placeholder:text-solid-slate-400 bg-[#FCFCFD] relative">
              <input
                type={show ? "text" : "password"}
                className="p-4 px-0 pl-6 md:px-6 w-full rounded-full outline-none bg-[#FCFCFD] "
                placeholder={`${placeholder} ${asterisk ? asterisk : ""}`}
                {...field}
                autoComplete={`${pass}`}
              />
              <span
                className="cursor-pointer text-[#D0D5DD] text-xl"
                onMouseDown={(e) => {
                  e.preventDefault(); // Prevents the input from losing focus
                  setPassword(!show);
                }}
              >
                {show ? (
                  <div className="top-4 md:top-0 right-5 md:p-4 absolute md:right-3">
                    <FiEye />
                  </div>
                ) : (
                  <div className="top-4 md:top-0 right-5 md:p-4 absolute md:right-3">
                    <FiEyeOff />
                  </div>
                )}
              </span>
            </div>
          )}
        </Field>

        {substring && (
          <Typography.Text>
            <span className="text-[#3298dc] text-xs"> {substring}</span>
          </Typography.Text>
        )}
        <div className="px-6 text-xs text-red-500 mt-1 ">
          <ErrorMessage name={name} component={"div"} />
        </div>
      </div>
    </div>
  );
}

export default PasswordField;
