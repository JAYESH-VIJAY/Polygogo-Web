import { Input, Typography } from "antd";
import { ReactNode } from "react";

interface InputFieldType {
  placeholder?: string;
  label?: string | null;
  isRequired?: boolean;
  substring?: any;
  htmlType?: string;
  input?: string;
  rows?: number;
  suffix?: ReactNode;

  // onChange?: (e: any) => void;
}
function PgInput({
  placeholder,
  label,
  isRequired = true,
  htmlType = "text",
  input = "input",
  rows = 5,
  suffix,
  // onChange,
  substring,
}: InputFieldType) {
  return (
    <div className="flex-1">
      <div className="my-2">
        {label && (
          <div className="mb-2">
            <label className="text-xs font-medium text-gray-400 ">
              {label}
              <span className="text-red-500">&nbsp;{isRequired && "*"}</span>
            </label>
          </div>
        )}

        {input === "input" ? (
          <div className="flex w-full p-3 px-6 text-xs font-medium border border-gray-200 rounded-full text-primaryDark placeholder:text-solid-slate-400">
            <input
              className="w-full outline-none"
              placeholder={placeholder}
              type={htmlType}
            />
            <span>{suffix}</span>
          </div>
        ) : (
          <Input.TextArea
            placeholder={placeholder}
            rows={rows}
            // onChange={onChange}
          />
        )}

        {substring && (
          <Typography.Text>
            <span className="text-[#3298dc] text-xs"> {substring}</span>
          </Typography.Text>
        )}
      </div>
    </div>
  );
}

export default PgInput;
