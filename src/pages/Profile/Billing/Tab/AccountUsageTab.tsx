import LineChart from "@/components/Chart/LineChart";
import ProfileDropDown from "@/components/Input/ProfileDropDown";
import { Select } from "antd";

function AccountUsageTab() {
  return (
    <>
      <EmailUsage />
      <SmsUsage />
    </>
  );
}

const EmailUsage = () => {
  return (
    <div className="p-6 my-5 bg-white border border-gray-200 rounded-xl">
      <div className="w-full pb-3 border-b border-gray-200 ">
        <h3 className="flex justify-between mb-1 text-lg font-semibold text-gray-700">
          <span>Email Usage</span>
        </h3>
      </div>
      <div className="grid mt-5 md:grid-cols-2">
        {[1].map((_, index) => (
          <div key={index}>
            <div className="flex gap-3 mb-3">
              <ProfileDropDown placeholder="Last 3 billing cycles" width={44}>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </ProfileDropDown>
              <ProfileDropDown
                placeholder="Select an option"
                width={36}
              ></ProfileDropDown>
            </div>
            <h3 className="flex justify-between mb-1 text-lg font-semibold text-gray-700">
              <span>Email sent per billing cycle</span>
            </h3>
            <div className="mt-5">
              <LineChart />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SmsUsage = () => {
  return (
    <div className="p-6 mt-5 bg-white border border-gray-200 rounded-xl">
      <div className="w-full pb-3 border-b border-gray-200 ">
        <h3 className="flex justify-between mb-1 text-lg font-semibold text-gray-700">
          <span>SMS Usage</span>
        </h3>
      </div>
      <div className="grid mt-5 md:grid-cols-2">
        {[1, 2].map((_, index) => (
          <div key={index}>
            <div className="flex gap-3 mb-3">
              <Select placeholder="Last 3 billing cycles" />
              <Select placeholder="Select an option" />
            </div>
            <h3 className="flex justify-between mb-1 text-lg font-semibold text-gray-700">
              <span>(Credit Used)SMS credit used per billing cycle</span>
            </h3>
            <div className="mt-5">
              <LineChart />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AccountUsageTab;
