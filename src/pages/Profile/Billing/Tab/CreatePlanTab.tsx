import PlanCard from "@/components/Card/PlanCard";
import { PlanType } from "@/types";
import { Progress } from "antd";

const CreatePlanTab = () => {
  return (
    <>
      <div className="p-6 mt-5 bg-white border border-gray-200 rounded-xl">
        <div className="w-full pb-3 border-b border-gray-200 ">
          <h3 className="flex justify-between mb-1 text-lg font-semibold text-gray-700">
            <span>Current Plan</span> <span> $380/month</span>
          </h3>
        </div>
        <div className="flex flex-col gap-2 my-5">
          <label className="text-xs font-medium">Current Cycle Usage</label>
          <div className="text-xs text-gray-400 ">Cycle ends in 21 days</div>
        </div>
        <div className="grid gap-5 mt-5 sm:grid-cols-3">
          {[
            {
              label: "17k of 14k active profiles",
              percent: 30,
              used: 128,
            },
            {
              label: "2.1k of 135k email sends",
              percent: 10,
              used: 28,
            },
            {
              label: "16k of 3.5k SMS credits",
              percent: 20,
              used: 12,
            },
          ].map((item, index) => (
            <div key={index} className="">
              <div>
                <label className="text-xs font-medium">{item.label}</label>
                <Progress percent={item.percent} showInfo={false} />
              </div>
              <div className="text-xs text-gray-400 ">{item.used}% used</div>
            </div>
          ))}
        </div>
        <div className="my-5">
          <div className="border-b">
            <div className="flex flex-col gap-2 mb-2">
              <div className="text-xs text-gray-400 ">Next month’s plan</div>
              <label className="text-xs font-medium">
                13,500 active profiles, 135,000 monthly email sends
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6 mt-5 bg-white border border-gray-200 rounded-xl">
        <div className="w-full pb-3 border-b border-gray-200 ">
          <h3 className="flex justify-between mb-1 text-lg font-semibold text-gray-700">
            <span>Choose a Plan</span>
          </h3>
        </div>
        <div className="mt-5">
          <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 xl:grid-cols-3">
            {plans.map((plan: PlanType, index) => (
              <PlanCard {...plan} key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePlanTab;

const plans: PlanType[] = [
  {
    emoji: "😀",
    plan: "Basic",
    shortDescription: (
      <span>
        For Personal and Small <br />
        Businesses
      </span>
    ),
    type: "Free",
    isActive: true,
  },
  {
    emoji: "🎉",
    plan: "Advanced",
    shortDescription: "For Marketing Team and Professional Marketers",
    type: "$99",
    isPopular: true,
  },
  {
    emoji: "🔥",
    plan: "Enterprise",
    shortDescription: "For Agencies and Professional Company",
    type: "$102",
  },
];
