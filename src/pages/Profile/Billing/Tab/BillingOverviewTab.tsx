import { Progress, Table } from "antd";

const BillingOverviewTab = () => {
  const data = [
    {
      tags: "🇺🇸 US Recipient",
      smsCredits: "2",
      mmsCredits: "123",
    },
    {
      tags: "🇺🇸 US Canada",
      smsCredits: "2",
      mmsCredits: "123",
    },
    {
      tags: "🇺🇸 US Recipient",
      smsCredits: "2",
      mmsCredits: "123",
    },
    {
      tags: "🇺🇸 US Canada",
      smsCredits: "2",
      mmsCredits: "123",
    },
    {
      tags: "🇺🇸 US Recipient",
      smsCredits: "2",
      mmsCredits: "123",
    },
    {
      tags: "🇺🇸 US Canada",
      smsCredits: "2",
      mmsCredits: "123",
    },
  ];
  const columns = [
    {
      title: "Tags",
      dataIndex: "tags",
      key: "tags",
      render: (text: string) => (
        <div className=" w-[300px] font-medium  font-primary">{text}</div>
      ),
    },
    {
      title: "SMS Credits",
      dataIndex: "smsCredits",
      key: "smsCredits",

      render: (text: string) => (
        <div className="w-[150px] flex items-center gap-3">
          <span className="font-light font-primary">{text}</span>
        </div>
      ),
    },
    {
      title: "MMS Credits",
      dataIndex: "mmsCredits",
      key: "mmsCredits",
      render: (text: string) => (
        <div className="w-[150px] flex items-center gap-3">
          <span className="font-light font-primary">{text}</span>
        </div>
      ),
    },
  ];
  return (
    <>
      {/* Billing */}
      <div className="p-6 mt-5 bg-white border border-gray-200 rounded-xl">
        <div className="flex items-center justify-between pb-3 border-b border-gray-200">
          <h3 className="mb-1 text-lg font-semibold text-gray-700">Billing</h3>
          <div>
            <button className="px-6 py-2 text-sm font-semibold border bg-[#E2EEFF] rounded-full border-primary text-primary">
              Change Plan
            </button>
          </div>
        </div>
        <div className="grid gap-5 mt-5 sm:grid-cols-2">
          <div className="border-b">
            <div className="flex flex-col gap-2 mb-2">
              <div className="text-xs text-gray-400 ">Billing Cycle</div>
              <label className="text-xs font-medium">
                August 11, 2023 to Sep 10, 2023
              </label>
            </div>
          </div>
          <div className="border-b">
            <div className="flex flex-col gap-2 mb-2">
              <div className="text-xs text-gray-400 ">Billing Information</div>
              <label className="text-xs font-medium">
                Visa ending in 7232, expiring 11, 2025
              </label>
            </div>
          </div>
          <div className="border-b">
            <div className="flex flex-col gap-2 mb-2">
              <div className="text-xs text-gray-400 ">Monthly total</div>
              <label className="text-xs font-medium">$360.00 USD</label>
            </div>
          </div>
        </div>
      </div>

      {/* Profiles + Email */}
      <div className="p-6 mt-5 bg-white border border-gray-200 rounded-xl">
        <div className="flex items-center justify-between pb-3 border-b border-gray-200">
          <h3 className="mb-1 text-lg font-semibold text-gray-700">
            Profiles + Email
          </h3>
        </div>
        <div className="grid gap-5 mt-5 sm:grid-cols-2">
          <div className="border-b">
            <div className="flex flex-col gap-2 mb-2">
              <label className="text-xs font-medium">
                Profiles monthly usage
              </label>
              <div className="text-xs text-gray-400 ">
                17,242 of 13,342 active profiles
              </div>
              <div>
                <Progress percent={20} showInfo={false} />
              </div>
              <div className="text-xs text-gray-400 ">128% used</div>
            </div>
          </div>
          <div className="border-b">
            <div className="flex flex-col gap-2 mb-2">
              <label className="text-xs font-medium">Email monthly usage</label>
              <div className="text-xs text-gray-400 ">
                2,100 of 13,342 emails sent
              </div>
              <div>
                <Progress percent={20} showInfo={false} />
              </div>
              <div className="flex justify-between text-xs text-gray-400 ">
                <span>2% used</span>
                <span>188 emails sent today</span>
              </div>
            </div>
          </div>
          <div>
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
      </div>

      {/* SMS */}

      <div className="p-6 mt-5 bg-white border border-gray-200 rounded-xl">
        <div className="flex items-center justify-between pb-3 border-b border-gray-200">
          <h3 className="mb-1 text-lg font-semibold text-gray-700">SMS</h3>
        </div>
        <div className="gap-5 my-5 ">
          <div className="border-b">
            <div className="flex flex-col gap-2 mb-2">
              <label className="text-xs font-medium">SMS monthly usage</label>
              <div className="text-xs text-gray-400 ">
                16 of 3,750 credits used
              </div>
              <div>
                <Progress percent={20} showInfo={false} />
              </div>
              <div className="flex justify-between text-xs text-gray-400 ">
                <span>0% used</span>
                <span>2 credits used today</span>
              </div>
            </div>
          </div>
        </div>
        {/* // Table of Contents */}
        <div>
          <Table
            pagination={{
              position: ["bottomCenter"],
            }}
            scroll={{ x: "1000px" }}
            columns={columns}
            dataSource={data}
          />
        </div>

        <div className="flex ">
          <div className="flex-1 border-b">
            <div className="flex flex-col gap-2 mb-2">
              <div className="text-xs text-gray-400 ">Next month’s plan</div>
              <label className="text-xs font-medium">
                Nex billing cycle starts on Sep 11, 2023
              </label>
            </div>
          </div>

          <div className="flex flex-col flex-1 gap-2 mb-2">
            <div className="text-xs text-right text-[#263238] font-medium ">$35</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BillingOverviewTab;
