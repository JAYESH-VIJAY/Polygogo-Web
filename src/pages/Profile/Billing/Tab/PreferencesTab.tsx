import PgInput from "@/components/Input/PgInput";
import { FiCheckCircle } from "react-icons/fi";

const PreferencesTab = () => {
  return (
    <div>
      {/* //Plan Overview */}
      <div className="p-6 mt-5 bg-white border border-gray-200 rounded-xl">
        <div className="flex items-center justify-between pb-3 ">
          <h3 className="flex justify-between w-full mb-1 text-lg font-semibold text-gray-700">
            <span>Plan Overview</span>
            <div>
              <button className="px-6 py-2 text-sm font-semibold border bg-[#E2EEFF] rounded-full border-primary text-primary">
                Update plan settings
              </button>
            </div>
          </h3>
        </div>
        <p className="text-xs text-gray-400 ">
          Everyone owns an email address each and every hour, for everything
          from connecting at work, with business prospects.
        </p>
        {[1, 2].map((_, index) => (
          <div className="max-w-md mt-5" key={index}>
            <div className="flex flex-col gap-2 mb-2">
              <label className="flex items-center text-xs font-semibold gap-x-2">
                <FiCheckCircle size={18} />
                <span>Automatically upgrade my SMS plan</span>
              </label>
              <p className="text-xs leading-4 text-gray-400 ">
                Everyone owns an email address each and every hour, for
                everything from connecting at work, with business prospects,
                reaching out to friends and colleagues using the email address
                as an online passport.
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* //Billing address */}
      <div className="p-6 mt-5 bg-white border border-gray-200 rounded-xl">
        <div className="flex items-center justify-between pb-3 ">
          <h3 className="flex justify-between w-full mb-1 text-lg font-semibold text-gray-700">
            <span>Billing address</span>
            <div>
              <button className="px-6 py-2 text-sm font-semibold border bg-[#E2EEFF] rounded-full border-primary text-primary">
                Update plan settings
              </button>
            </div>
          </h3>
        </div>
        <p className="text-xs text-gray-400 ">
          Everyone owns an email address each and every hour, for everything
          from connecting at work, with business prospects.
        </p>
        {[1].map((_, index) => (
          <div className="max-w-md mt-5" key={index}>
            <div className="flex flex-col gap-2 mb-2">
              <label className="flex items-center text-xs font-semibold gap-x-2">
                <FiCheckCircle size={18} />
                <span>Automatically upgrade my SMS plan</span>
              </label>
              <p className="text-xs leading-4 text-gray-400 ">
                Everyone owns an email address each and every hour, for
                everything from connecting at work, with business prospects,
                reaching out to friends and colleagues using the email address
                as an online passport.
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* Billing Email */}
      <div className="p-6 mt-5 bg-white border border-gray-200 rounded-xl">
        <div className="flex items-center justify-between pb-3 ">
          <h3 className="flex justify-between w-full mb-1 text-lg font-semibold text-gray-700">
            <span>Billing Email</span>
            <div>
              <button className="px-6 py-2 text-sm font-semibold border bg-[#E2EEFF] rounded-full border-primary text-primary">
                Update plan settings
              </button>
            </div>
          </h3>
        </div>
        <p className="text-xs text-gray-400 ">
          Everyone owns an email address each and every hour, for everything
          from connecting at work, with business prospects.
        </p>
        {[1].map((_, index) => (
          <div key={index} className="mt-5 border-b">
            <div className="flex flex-col gap-2 mb-2">
              <p className="text-xs text-gray-400 ">
                Send billing notifications
              </p>
              <label className="text-xs font-medium">
                softwarework@jake.com
              </label>
            </div>
          </div>
        ))}
      </div>
      {/* Tax ID */}
      <div className="p-6 mt-5 bg-white border border-gray-200 rounded-xl">
        <div className="flex items-center justify-between pb-3 ">
          <h3 className="flex justify-between w-full mb-1 text-lg font-semibold text-gray-700">
            <span>Billing Email</span>
            <div>
              <button className="px-6 py-2 text-sm font-semibold border bg-[#E2EEFF] rounded-full border-primary text-primary">
                Update tax ID
              </button>
            </div>
          </h3>
        </div>
        <p className="text-xs text-gray-400 ">
          Everyone owns an email address each and every hour, for everything
          from connecting at work, with business prospects.
        </p>
        {[1].map((_, index) => (
          <div key={index} className="mt-5 border-b">
            <div className="flex gap-2 mb-2">
              <PgInput placeholder="Select Country" />
              <PgInput placeholder="TAX ID" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreferencesTab;
