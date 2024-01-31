import PgLocation from "@/assets/Reviews/PgLocation";
import PgSearch from "@/assets/Reviews/PgSearch";
import PgSelect from "@/components/Input/PgSelect";
import DefaultCardLayout from "@/layout/DefaultCardLayout";
import { DatePicker, Input, Radio, Space } from "antd";
import { useState } from "react";

export default function ReviewForm() {
  const [reviewPlateform, setReviewPlateform] = useState("");
  const [reviewCategory, setReviewCategory] = useState("");
  const onChange = (e: any) => {

    setReviewPlateform(e.target.value);
  };
  const onChange1 = (e: any) => {

    setReviewCategory(e.target.value);
  };

const { RangePicker } = DatePicker;
  return (
    <div className="w-full  lg:max-w-[360px]">
      <DefaultCardLayout>
        <div className="flex flex-col gap-4 ">
          <div className="flex items-center justify-between ">
            <div className="text-lg font-semibold">Filters</div>
            <div className="text-sm text-[#1570EF] font-semibold">Reset</div>
          </div>
          <div className="w-full p-1 border rounded-full ">
            <Input
              placeholder="Search Keywords"
              bordered={false}
              className="font-medium text-[#98A2B3] outline-none border-none focus:outline-none focus:border-none hover:border-none hover:outline-none placeholder:text-[#98A2B3] "
              suffix={<PgSearch />}
            />
          </div>
          <div className="text-[#667085] font-semibold ">Status</div>
          <PgSelect
            options={[
              { value: "All Reviews", label: "All Reviews" },
              { value: "5 star", label: "5 star" },
              { value: "4 star", label: "4 star" },
              { value: "3 star", label: "3 star" },
              { value: "2 star", label: "2 star" },
              { value: "1 star", label: "1 star" },
            ]}
            placeholder="Status"
          />
          <div className="border-t-2 mt-2 border-[#E4E7EC] w-full"></div>
          <div className="text-[#667085] font-semibold ">Location</div>

          <div className="w-full p-1 border rounded-full ">
            <Input
              placeholder="Address"
              bordered={false}
              className="font-medium text-gray-400"
              suffix={<PgLocation />}
            />
          </div>
          <div className="text-[#667085] font-semibold ">Date Range</div>
          <RangePicker />
          {/* <PgSelect
            options={[
              { value: "Year To Date", label: "Year To Date" },
              { value: "Month to Date", label: "Month to Date" },
            ]}
            placeholder="Date Range"
          /> */}
          <div className="border-t-2 mt-2 border-[#E4E7EC] w-full"></div>
          <div className="text-[#667085] font-semibold ">Ratings</div>
          <div className="flex flex-wrap justify-between gap-4">
            <div className="w-full">
              <div className="mb-2 text-sm">Min. Rating</div>
              <PgSelect
                options={[
                  { value: "5 star", label: "5 star" },
                  { value: "4 star", label: "4 star" },
                  { value: "3 star", label: "3 star" },
                  { value: "2 star", label: "2 star" },
                  { value: "1 star", label: "1 star" },
                ]}
                placeholder="Min. Rating"
              />
            </div>
            <div className="w-full">
              <div className="mb-2 text-sm">Max. Rating</div>
              <PgSelect
                options={[
                  { value: "5 star", label: "5 star" },
                  { value: "4 star", label: "4 star" },
                  { value: "3 star", label: "3 star" },
                  { value: "2 star", label: "2 star" },
                  { value: "1 star", label: "1 star" },
                ]}
                placeholder="Max. Rating"
              />
            </div>
          </div>
          <div className="border-t-2 mt-2 border-[#E4E7EC] w-full"></div>
          <div className="text-[#667085] font-semibold ">Plateform</div>
          <div className="flex flex-col gap-2">
            <Radio.Group onChange={onChange} value={reviewPlateform}>
              <div className="flex flex-col gap-1">
                <Radio value={"Google"}>Google</Radio>
                <Radio value={"TrustPilot"}>TrustPilot</Radio>
              </div>
            </Radio.Group>
          </div>
          <div className="border-t-2 mt-2 border-[#E4E7EC] w-full"></div>
          <div className="text-[#667085] font-semibold ">Employee Tag</div>
          <div className="flex flex-col gap-2">
            <Radio.Group onChange={onChange1} value={reviewCategory}>
              <div className="flex flex-col gap-1">
                <Radio value={"All Reviews"}>All Reviews</Radio>
                <Radio value={"Untagged"}>Untagged</Radio>
                <Radio value={"Tagged"}>Tagged</Radio>
              </div>
            </Radio.Group>
          </div>
        </div>
      </DefaultCardLayout>
    </div>
  );
}
