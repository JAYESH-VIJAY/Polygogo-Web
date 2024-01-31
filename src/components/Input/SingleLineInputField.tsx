import { Input } from "antd";
import { ErrorMessage, Field } from "formik";

interface InputFieldType {
  name: string;
  placeholder?: string;
  label?: string | null;
  isRequired?: boolean;
  substring?: any;
  htmlType?: string;
  input?: string;
  rows?: number;

  // onChange?: (e: any) => void;
}
export default function SingleLineInputField({
  name,
  placeholder,
  label,
  isRequired = true,
  htmlType = "text",
  input = "input",
  rows = 5,

  // onChange,
  substring,
}: InputFieldType) {
  return (
    <div>
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
            {({ field }: any) =>
              input === "input" ? (
                <input
                  className="w-full p-2 px-3 text-xs font-medium border-b border-[#D0D5DD] outline-none text-primaryDark placeholder:text-solid-slate-400"
                  placeholder={placeholder}
                  type={htmlType}
                  {...field}
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
                  // onChange={onChange}
                />
              )
            }
          </Field>
          <div className="mt-1 text-xs text-red-500">
            <ErrorMessage name={name} component={"div"} />
          </div>
        </div>
      </div>
    </div>
  );
}
