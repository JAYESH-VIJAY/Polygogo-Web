import { BsCheck2Circle } from "react-icons/bs";

const SecurityTab = () => {
  return (
    <>
      <div className="p-6 mt-5 bg-white border border-gray-200 rounded-xl">
        <div className="flex flex-col items-start justify-between gap-3">
          <h3 className="mb-1 text-lg font-semibold text-gray-700">
            Multi-factor authentication (MFA)
          </h3>
          <p className="text-sm font-normal text-gray-500">
            MFA increases the security of your account by adding an additional
            authentication step to your login and helps reduce the risk of
            unauthorized access to your account. Recommended authenticators
            include &nbsp;
            <span className="text-[#0BA5EC] font-medium">Authy</span>
            &nbsp;or&nbsp;
            <span className="text-[#0BA5EC] font-medium">
              Google Authenticator
            </span>
          </p>
          <h4 className="flex items-center gap-4 font-semibold">
            <span>
              <BsCheck2Circle size={24} />
            </span>
            <span>Require for your account</span>
          </h4>
        </div>
      </div>
    </>
  );
};
export default SecurityTab;
