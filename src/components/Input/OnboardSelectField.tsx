import { ConfigProvider, Select, Typography } from "antd";
import { Field } from "formik";
import { MdKeyboardArrowDown } from "react-icons/md";

interface PgSelectType {
  options?: { value: any; label: string }[];
  defaultValue?: string;
  placeholder?: string;
  label?: string;
  isRequired?: boolean;
  name: string;
  onChange?: any;
  substring?: any;
  asterisk?: string;
}
function OnboardSelectField({
  options,
  defaultValue,
  placeholder,
  name,
  label,
  isRequired,
  onChange,
  asterisk,
  // onChange,
  substring,
}: PgSelectType) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Select: {
            colorTextPlaceholder: "#000",
          },
        },
      }}
    >
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
                <div className="w-full px-2 py-2 text-xs font-medium border border-gray-200 rounded-full outline-none text-primaryDark placeholder:text-[#98A2B3] bg-[#FCFCFD]">
                  <Select
                    {...field}
                    suffixIcon={
                      <MdKeyboardArrowDown size={18} color="#98A2B3" />
                    }
                    dropdownStyle={{ padding: "10px" }}
                    bordered={false}
                    defaultValue={defaultValue}
                    placeholder={`${placeholder} ${asterisk ? asterisk : ""}`}
                    style={{
                      width: "100%",
                      fontWeight: "normal",
                      background: "#FCFCFD",
                      color: "#98A2B3",
                    }}
                    options={options}
                    onChange={onChange}
                  />
                </div>
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
    </ConfigProvider>
  );
}

export default OnboardSelectField;
