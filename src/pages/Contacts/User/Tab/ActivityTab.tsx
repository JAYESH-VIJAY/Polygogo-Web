import { FiMail, FiPhoneCall } from "react-icons/fi";
import { TbCoins } from "react-icons/tb";

function ActivityTab() {
  return (
    <div className="p-6 mt-5 bg-white border border-gray-200 rounded-xl">
      <div className="flex items-center justify-between w-full pb-3 border-b border-gray-200 ">
        <h3 className="flex justify-between mb-1 text-lg font-semibold text-gray-700">
          <span>Activity</span>
        </h3>
      </div>
      <div className="mt-5">
        {[
          {
            icon: (
              <div className="flex items-center justify-center w-10 h-10 text-xl text-white bg-pink-600 rounded-full">
                <TbCoins />
              </div>
            ),
            activity: " Payment activity • 30 mins ago",
          },
          {
            icon: (
              <div className="flex items-center justify-center w-10 h-10 text-white bg-green-600 rounded-full">
                <FiPhoneCall />
              </div>
            ),
            activity: " Payment activity • 30 mins ago",
          },
          {
            icon: (
              <div className="flex items-center justify-center w-10 h-10 text-white bg-blue-600 rounded-full">
                <FiMail />
              </div>
            ),
            activity: " Payment activity • 30 mins ago",
          },
        ].map((activity, index) => (
          <div key={index} className="flex items-center gap-3 mb-4">
            {activity.icon}
            <span className="text-sm font-medium text-gray-400">
              {activity.activity}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityTab;
