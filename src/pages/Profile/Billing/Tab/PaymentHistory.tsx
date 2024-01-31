import PgButtonBorder from "@/components/Input/PgButtonBorder";
import PgInput from "@/components/Input/PgInput";
import { Table } from "antd";

const PaymentHistory = () => {
  const data = [
    {
      invoices: "Attentive",
      amount: "123",
      status: "Paid on Aug 11, 2023",
    },
  ];
  const columns = [
    {
      title: "Invoices",
      dataIndex: "invoices",
      key: "invoices",
      render: () => (
        <div className="text-xs">
          <h5 className="mb-1 font-semibold">August 11, 2023</h5>
          SMS: 3.8k | Credits: (at $35.001 month)
          <br /> Polygogo Platform: 13.5k <br /> Profiles 135k Emails: (at
          $325.00 / month)
        </div>
      ),
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",

      render: (text: string) => (
        <div className="flex items-center gap-3 ">
          <span className="font-medium font-primary">{text}</span>
        </div>
      ),
    },
    {
      title: "Payment status",
      dataIndex: "status",
      key: "status",

      render: (text: string) => (
        <div className="flex items-center justify-between w-full gap-3 ">
          <div className="font-medium font-primary">{text}</div>
          <span className="w-[150px]">
            <PgButtonBorder title="Download" />
          </span>
        </div>
      ),
    },
  ];
  return (
    <div className="p-6 mt-5 bg-white border border-gray-200 rounded-xl">
      <div className="flex items-center justify-between pb-3 ">
        <h3 className="flex justify-between w-full mb-1 text-lg font-semibold text-gray-700">
          <span>Payment History</span>
        </h3>
      </div>
      <div className="sm:flex gap-x-3">
        <PgInput placeholder="Date range" />
        <PgInput placeholder="Payment status" />
      </div>
      <div className="mt-10">
        <Table
          pagination={{
            position: ["bottomCenter"],
          }}
          scroll={{ x: "800px" }}
          columns={columns}
          dataSource={data}
        />
      </div>
    </div>
  );
};

export default PaymentHistory;
