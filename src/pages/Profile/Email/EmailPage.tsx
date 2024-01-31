function EmailPage() {
  return (
    <div className="p-6 mt-5 bg-white border border-gray-200 rounded-xl">
      <div className="flex items-center justify-between pb-3 border-b border-gray-200">
        <h3 className="mb-1 text-lg font-semibold text-gray-700">
          Dedicated Sending Domain
        </h3>
        <div>
          <button className="px-6 py-2 text-sm font-semibold border bg-[#E2EEFF] rounded-full border-primary text-primary">
            Get Started
          </button>
        </div>
      </div>
      <p className="max-w-lg mt-4 text-xs leading-4 text-gray-400 ">
        This page allows you to set up your dedicated sending domain for use on
        Klaviyo. Sending from a dedicated domain v. improves the likelihood of
        landing in the inbox. A dedicated sending domain will enable your From
        Address on your emails to match the domain you're sending from, no
        longer showing a "via klaviyomail.com" message on your emails.{" "}
      </p>
    </div>
  );
}

export default EmailPage;
