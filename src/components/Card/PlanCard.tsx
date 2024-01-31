import { FaCheckCircle } from "react-icons/fa";
import PgButton from "../Input/PgButton";
import PgMostPopularTag from "@/assets/dashboard/PgMostPopularTag";
import { PlanType } from "@/types";

function PlanCard({
  emoji,
  plan,
  shortDescription,
  type,
  isPopular,
  isActive,
}: PlanType) {
  return (
    <div className="relative h-full">
      {isPopular && (
        <div className="absolute top-[20px]">
          <PgMostPopularTag />
        </div>
      )}
      <div className="h-full p-6 mt-5 bg-white border border-gray-200 rounded-xl">
        <div className="flex flex-col items-center gap-y-10">
          <div>
            <div className="flex items-center justify-center w-20 h-20 text-3xl bg-gray-100 rounded-full">
              <span>{emoji}</span>
            </div>
          </div>
          <div className="">
            <h4 className="text-xl font-bold text-center">{plan}</h4>
            <div className="text-xs text-center text-gray-400 ">
              {shortDescription}
            </div>
          </div>
          <div className="">
            <h3 className="text-3xl font-bold text-center">{type}</h3>
            <div className="text-xs text-gray-400 ">per account / month</div>
          </div>
          <div>
            <ul>
              {[
                { label: "Detailed post analytics" },
                { label: "Share with 5 teams members" },
                { label: "Sync across devices" },
                { label: "Reach and impressions analytics" },
                { label: "Up to 6 social profiles" },
              ].map((item, index) => (
                <li key={index} className="flex items-center mb-5 gap-x-3">
                  <span>
                    <FaCheckCircle className="text-primary" />
                  </span>
                  <span className="text-sm font-medium text-primaryDark">
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <PgButton
            disabled={isActive}
            title={isActive ? "Your Current Plan" : "Upgrade Now"}
          />
        </div>
      </div>
    </div>
  );
}

export default PlanCard;
