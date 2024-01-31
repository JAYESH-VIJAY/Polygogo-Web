import { ConfigProvider, Select } from "antd";
import { ErrorMessage, Field } from "formik";
import { MdKeyboardArrowDown } from "react-icons/md";

interface PgSelectType {
  options: { value: any; label: string }[];
  defaultValue?: string;
  placeholder?: string;
  label?: string;
  isRequired?: boolean;
  name: string;
  onChange?: any;
}
function PgSelectField({
  options,
  defaultValue,
  placeholder,
  name,
  label,
  isRequired,
  onChange,
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
            {({ field }: any) => (
              <div className="w-full px-2 py-2 text-xs font-medium border border-gray-200 rounded-full outline-none text-primaryDark placeholder:text-solid-slate-400">
                <Select
                  {...field}
                  suffixIcon={<MdKeyboardArrowDown size={18} color="#111827" />}
                  dropdownStyle={{ padding: "10px" }}
                  bordered={false}
                  defaultValue={defaultValue}
                  placeholder={placeholder}
                  style={{
                    width: "100%",
                    fontWeight: "normal",
                  }}
                  options={options}
                  onChange={onChange}
                />
              </div>
            )}
          </Field>

          <div className="mt-1 text-xs text-red-500">
            <ErrorMessage name={name} component={"div"} />
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
}

export default PgSelectField;
