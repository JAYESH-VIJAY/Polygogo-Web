import LineChart from "@/components/Chart/LineChart";
import PageHeading from "@/components/PageHeading";
import { Select, Table } from "antd";
import { FiEdit3 } from "react-icons/fi";

function AnalyticsPaymentsPage() {
  const data = [
    {
      invoiceNumber: "P0435",
      date: "September 2, 2023",
      dateSent: "September 2, 2023",
      amount: "$260.00",
      status: true,
    },
    {
      invoiceNumber: "P0435",
      date: "September 2, 2023",
      dateSent: "September 2, 2023",
      amount: "$260.00",
      status: false,
    },
    {
      invoiceNumber: "P0435",
      date: "September 2, 2023",
      dateSent: "September 2, 2023",
      amount: "$260.00",
      status: true,
    },
  ];

  const columns = [
    {
      title: "Invoice Number",
      dataIndex: "invoiceNumber",
      key: "invoiceNumber",
      render: (text: string) => (
        <div className="flex items-center gap-3 w-[50px]">
          <span className="font-medium font-primary">{text}</span>
        </div>
      ),
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",

      render: (text: string) => (
        <div className=" w-[150px]  font-primary">{text}</div>
      ),
    },
    {
      title: "Date Sent",
      dataIndex: "dateSent",
      key: "dateSent",

      render: (text: string) => (
        <div className=" w-[150px]  font-primary">{text}</div>
      ),
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (text: string) => (
        <div className="w-[50px] flex items-center gap-3">
          <span className="font-medium font-primary">{text}</span>
        </div>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text: string) => (
        <div className="w-[50px] flex items-center gap-3">
          <span className="font-light font-primary">
            {text ? (
              <div className="p-1 px-2 text-xs font-medium text-green-700 bg-green-200 rounded-full">
                Paid
              </div>
            ) : (
              <div className="p-1 px-2 text-xs font-medium text-[#475467] bg-[#E5E8E5] rounded-full">
                Unpaid
              </div>
            )}
          </span>
        </div>
      ),
    },

    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: () => (
        <div className="w-[50px] flex items-center gap-3">
          <span className="font-medium font-primary">
            <FiEdit3 size={22} />
          </span>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="relative   lg:h-[390px]">
        <div className="p-4 rounded-md h-[200px] bg-primaryDark">
          <PageHeading
            isDark={false}
            title="Payments Received"
            content="August 28, 2023 - September 4, 2023 "
          />
        </div>
        <div className="relative grid gap-4 mx-4 overflow-x-scroll lg:grid-cols-4 -top-[110px]">
          {/* // payments */}
          <div className="pr-4 bg-white rounded-md shadow-sm lg:col-span-3">
            <div className="flex items-center justify-between p-3">
              <h4 className="font-semibold">Payments</h4>
              <Select placeholder="Weekly" size="small" />
            </div>
            <LineChart />
          </div>

          {/* // Reviews */}
          <div className="min-w-[150px] pr-4 bg-white rounded-md shadow-sm">
            <div className="flex flex-col justify-around h-full gap-2 p-3 gap-y-4">
              {[
                {
                  label: "Amount Received - Last Week",
                  value: "$7,645.00",
                  color: "#18C61F",
                },
                {
                  label: "Amount Requested - Last Week",
                  value: "$26,899.00",
                  color: "#7E7E7E",
                },
                {
                  label: "Refunds - Last Week",
                  value: "-$2,552.63",
                  color: "#7E7E7E",
                },
              ].map((item, index) => (
                <div key={index}>
                  <h4 className="text-sm font-medium">{item.label}</h4>
                  <h2
                    className="text-3xl font-semibold "
                    style={{
                      color: item.color,
                    }}
                  >
                    {item.value}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="w-full mt-5 bg-white rounded">
          <div className="flex items-center justify-between p-4">
            <h1 className="text-lg font-semibold">Invoices</h1>
            <div className="flex items-center gap-3 text-sm text-gray-400">
              <div>August 28, 2023 - September 4, 2023</div>
              <div>
                <Select placeholder="Weekly" size="small" />
              </div>
            </div>
          </div>
          <Table
            pagination={{
              position: ["bottomCenter"],
            }}
            columns={columns}
            dataSource={data}
            scroll={{ x: 1300 }}
            // className="overflow-x-scroll"
          />
        </div>
      </div>
    </>
  );
}

export default AnalyticsPaymentsPage;
