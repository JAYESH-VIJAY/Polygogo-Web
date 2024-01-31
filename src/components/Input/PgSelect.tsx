import { ConfigProvider, Select } from "antd";

interface PgSelectReviewsType {
  options: { value: any; label: string }[];
  defaultValue?: string;
  placeholder?: string;
  label?: string;
  isRequired?: boolean;
  padding?: number;
}
function PgSelectReviews({
  options,
  defaultValue,
  placeholder,
  label,
  isRequired,
  padding = 1,
}: PgSelectReviewsType) {
  return (
    <>
      {label && (
        <div className="mb-2">
          <label className="text-xs text-gray-400 ">
            {label}
            <span className="text-red-500">&nbsp;{isRequired && "*"}</span>
          </label>
        </div>
      )}

      <div className={`p-2 py-${padding}  border min-w-[200px] rounded-full`}>
        <ConfigProvider
          theme={{
            components: {
              Select: {
                colorTextPlaceholder: "#98A2B3",
              },
            },
          }}
        >
          <Select
            bordered={false}
            defaultValue={defaultValue}
            placeholder={placeholder}
            className="font-medium   placeholder:text-[#98A2B3]"
            style={{ width: "100%" }}
            options={options}
          />
        </ConfigProvider>
      </div>
    </>
  );
}

export default PgSelectReviews;
