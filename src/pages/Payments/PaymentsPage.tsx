import PgButton from "@/components/Input/PgButton";
import PgInput from "@/components/Input/PgInput";
import PgSelect from "@/components/Input/PgSelect";
import RequestPaymentModal from "@/components/Modal/RequestPaymentModal";
import TablePagination from "@/components/Table/TablePagination";
import useTablePagination from "@/hooks/useTablePagination";
import DefaultCardLayout from "@/layout/DefaultCardLayout";
import { Button, Pagination, Table } from "antd";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsArrowLeftShort, BsArrowRightShort, BsCheckLg } from "react-icons/bs";
import { FiEdit3 } from "react-icons/fi";
import { TbCoins } from "react-icons/tb";
import { Link } from "react-router-dom";

function PaymentsPage() {
  const data = [
    {
      key: "1",
      imgUrl:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
      contact: "John Brown",
      invoice: "Sample Invoice Title",
      total: "599",
      date: "September 3, 2023",
      status: true,
    },
    {
      key: "2",
      imgUrl:
        "https://media.istockphoto.com/id/1247693979/photo/close-up-portrait-of-young-smiling-handsome-man-wearing-blue-shirt-and-glasses-feeling.jpg?s=612x612&w=0&k=20&c=PgpEGomO4XLVvRHlFxuqneqm0E68_zYkXVqzr5WN_eo=",
      contact: "John Green",
      invoice: "Sample Invoice Title",
      total: "599",
      date: "September 3, 2023",
      status: true,
    },
    {
      key: "3",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSSNn8_M7J9iuGc2f-UDI0aSVzB7xkmWI5fSPqyMwZbX0X5o4XOaJM-cKCdcK7jp34aLQ&usqp=CAU",
      contact: "G Brown",
      invoice: "Sample Invoice Title",
      total: "599",
      date: "September 3, 2023",
      status: true,
    },
    {
      key: "4",
      imgUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80",
      contact: "Figma Brown",
      invoice: "Sample Invoice Title",
      total: "599",
      date: "September 3, 2023",
      status: true,
    },
  ];

  const columns = [
    {
      title: "Contact",
      dataIndex: "contact",
      key: "contact",
      render: (text: string, data: any) => (
        <div className="flex items-center gap-3 w-[150px]">
          <img
            loading="lazy"
            className="lazyload object-cover w-10 h-10 rounded-full"
            src={data?.imgUrl}
          />
          <span className="font-medium font-primary">{text}</span>
        </div>
      ),
    },
    {
      title: "Invoice",
      dataIndex: "invoice",
      key: "invoice",

      render: (text: string) => (
        <div className=" w-[250px]  font-primary">{text}</div>
      ),
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
      render: (text: string) => (
        <div className="w-[150px] flex items-center gap-3">
          <span className="font-medium font-primary">${text}</span>
        </div>
      ),
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (text: string) => (
        <div className="w-[150px] flex items-center gap-3">
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
            {text}
            <div className="p-1 px-2 text-xs font-medium text-green-700 bg-green-200 rounded-full">
              Paid
            </div>
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
          <Link to={`/payments/activity/12321`}>
            <FiEdit3 size={20} className="text-gray-500" />
          </Link>
        </div>
      ),
    },
  ];

  const [isRequestPaymentOpen, setIsRequestPaymentOpen] =
    useState<boolean>(false);

  const closeModal = () => {
    setIsRequestPaymentOpen(false);
  };

  const showModal = () => {
    setIsRequestPaymentOpen(true);
  };

  return (
    <>
      <RequestPaymentModal
        isVisible={isRequestPaymentOpen}
        closeModal={closeModal}
      />
      <div className="flex flex-col gap-3">
        {/* //Week Total */}
        <DefaultCardLayout>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="mb-1 text-sm">Weekly Total</h4>
              <h2 className="text-3xl font-medium">$7,599.88</h2>
            </div>

            <div>
              <PgButton title="+ Request a Payment" onClick={showModal} />
            </div>
          </div>
        </DefaultCardLayout>
        {/* // Payments Steps  */}
        <DefaultCardLayout>
          <div className="flex flex-col justify-between gap-y-4">
            <div>
              <h2 className="text-xl font-medium">Get started with Payments</h2>
              <p className="text-xs text-gray-400 ">1 of 2 complete</p>
            </div>
            <div className="max-w-lg">
              {[
                {
                  icon: <TbCoins />,
                  label: "Complete Account Setup",
                  content:
                    "Finish adding your business details and connect your bank                account.",
                  time: 10,
                },
                {
                  icon: <TbCoins />,
                  label: "Send a Payment Request",
                  content:
                    "Finish adding your business details and connect your bank                account.",
                  time: 10,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 mb-3 shadow-sm rounded-xl text-primaryDark bg-gray-50"
                >
                  {index == 0 ? (
                    <div className="flex items-center justify-center w-8 h-8 text-white bg-green-500 rounded-full text-md">
                      <BsCheckLg />
                    </div>
                  ) : (
                    <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full text-md">
                      {item.icon}
                    </div>
                  )}
                  <div className="flex-1">
                    <h4 className="mb-1 font-medium text-md ">{item.label}</h4>
                    <div className="flex justify-between">
                      <p className="mt-1 text-xs">{item.content}</p>
                      <p className="mt-1 text-xs font-light">{item.time} min</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </DefaultCardLayout>
        {/* // Recent Activity */}
        <DefaultCardLayout>
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-medium">Recent Activity</h2>
            <p className="text-xs text-gray-400 ">
              August 28, 2023 - September 4, 2023{" "}
            </p>
          </div>
          <div className="mt-5 ">
            <div className="flex items-center gap-4 jayesh">
              <div className="w-full  min-w-[300px] text-gray-200">
                <PgInput
                  placeholder="Search"
                  suffix={<BiSearch size={20} className="text-gray-400" />}
                />
              </div>

              <PgSelect
                options={[
                  { value: "all", label: "All Status" },
                  { value: "paid", label: "Paid" },
                  { value: "unpaid", label: "Unpaid" },
                ]}
                placeholder="Status"
              />
              <PgSelect
                options={[{ value: "lucy", label: "Email or SMS" }]}
                placeholder="Last Week"
              />
            </div>

            <div className="w-full mt-5">
              <Table
                pagination={false}
                columns={columns}
                dataSource={data}
                scroll={{ x: 1300 }}
                // className="overflow-x-scroll"
              />
            </div>
            <TablePagination tableData={data} />
          </div>
        </DefaultCardLayout>
      </div>
    </>
  );
}

export default PaymentsPage;
