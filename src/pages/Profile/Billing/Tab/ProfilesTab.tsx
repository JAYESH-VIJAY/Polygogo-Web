import { Progress } from "antd";

const ProfilesTab = () => {
  return (
    <>
      <div className="p-6 mt-5 bg-white border border-gray-200 rounded-xl">
        <div className="flex items-center justify-between pb-3 border-b border-gray-200">
          <h3 className="flex justify-between w-full mb-1 text-lg font-semibold text-gray-700">
            <span>Current Plan</span> <span>$380/month</span>
          </h3>
        </div>
        <div className="mt-5">
          <div className="flex flex-col gap-2 mb-2">
            <label className="text-xs font-medium">Current Cycle Usage</label>
            <div className="text-xs text-gray-400 ">Cycle ends in 21 days</div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5 mt-5">
          {[1, 2, 3].map((_,index) => (
            <div key={index} className="border-b">
              <div className="flex flex-col mb-2">
                <label className="text-xs font-medium">
                  17k of 14k active profiles
                </label>
                <div>
                  <Progress percent={20} showInfo={false} />
                </div>
                <div className="text-xs text-gray-400 ">128% used</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5">
          <div className="flex flex-col gap-2 mb-2">
            <div className="text-xs text-gray-400 ">Next month’s plan *</div>
            <label className="text-xs font-medium">
              13,500 active profiles, 135,000 monthly email sends
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilesTab;
