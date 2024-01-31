import { Input, Typography } from "antd";
import { Field } from "formik";

interface InputFieldType {
  name: string;
  placeholder?: string;
  label?: string | null;
  isRequired?: boolean;
  substring?: any;
  htmlType?: string;
  input?: string;
  rows?: number;
  asterisk?: string;
  pass?: string;
  // onChange?: (e: any) => void;
}
function InputField({
  name,
  placeholder,
  label,
  isRequired = true,
  htmlType = "text",
  input = "input",
  rows = 5,
  asterisk,
  pass,
  // onChange,
  substring,
}: InputFieldType) {
  return (
    <div className="flex-1">
      <div className="my-2">
        {label && (
          <div className="mb-2">
            <label className="text-xs text-gray-400 ">
              {label}
              <span className="text-red-500">&nbsp;{isRequired && "*"}</span>
            </label>
          </div>
        )}
        <Field name={name}>
          {({ field, meta }: any) => (
            <div>
              {input === "input" ? (
                <input
                  className="w-full p-4 px-6 text-xs font-medium border border-gray-200 rounded-full outline-none text-primaryDark placeholder:text-solid-slate-400 bg-[#FCFCFD]"
                  placeholder={`${placeholder} ${asterisk ? asterisk : ""}`}
                  type={htmlType}
                  {...field}
                  autoComplete={`${pass}`}
                />
              ) : (
                <Input.TextArea
                  placeholder={placeholder}
                  {...field}
                  type={htmlType}
                  rows={rows}
                  style={{
                    padding: 15,
                  }}
                />
              )}
              {meta.touched && meta.error && (
                <div className="text-red-500 text-xs ml-6 mt-1">
                  {meta.error}
                </div>
              )}
            </div>
          )}
        </Field>
        {substring && (
          <Typography.Text>
            <span className="text-[#3298dc] text-xs"> {substring}</span>
          </Typography.Text>
        )}
      </div>
    </div>
  );
}

export default InputField;
