import PgButton from "@/components/Input/PgButton";
import PgInput from "@/components/Input/PgInput";
import PgSelect from "@/components/Input/PgSelect";
import CreateEstimateModal from "@/components/Modal/CreateEstimateModal";
import TablePagination from "@/components/Table/TablePagination";
import DefaultCardLayout from "@/layout/DefaultCardLayout";
import { Table } from "antd";
import { useCallback, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { FiEdit3 } from "react-icons/fi";
import { Link } from "react-router-dom";

function PaymentsEstimatePage() {
  const [isEstimateModalOpen, setIsEstimateModalOpen] =
    useState<boolean>(false);

  const closeModal = useCallback(() => {
    setIsEstimateModalOpen(false);
  }, []);

  const showModal = () => {
    setIsEstimateModalOpen(true);
  };
  const data = [
    {
      key: "1",
      imgUrl:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
      contact: "John Brown",
      title: "Sample Title Title",
      total: "599",
      type: true,
      date: "September 3, 2023",
      status: false,
    },
    {
      key: "2",
      imgUrl:
        "https://media.istockphoto.com/id/1247693979/photo/close-up-portrait-of-young-smiling-handsome-man-wearing-blue-shirt-and-glasses-feeling.jpg?s=612x612&w=0&k=20&c=PgpEGomO4XLVvRHlFxuqneqm0E68_zYkXVqzr5WN_eo=",
      contact: "John Green",
      title: "Sample Title Title",
      total: "599",
      type: false,
      date: "September 3, 2023",
      status: true,
    },
    {
      key: "3",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSSNn8_M7J9iuGc2f-UDI0aSVzB7xkmWI5fSPqyMwZbX0X5o4XOaJM-cKCdcK7jp34aLQ&usqp=CAU",
      contact: "G Brown",
      title: "Sample Title Title",
      total: "599",
      type: true,
      date: "September 3, 2023",
      status: true,
    },
    {
      key: "4",
      imgUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80",
      contact: "Figma Brown",
      title: "Sample Title Title",
      total: "599",
      type: false,
      date: "September 3, 2023",
      status: false,
    },
  ];

  const columns = [
    {
      title: "Contact",
      dataIndex: "contact",
      key: "contact",
      render: (text: string, data: any) => (
        <div className="flex items-center gap-3 w-[250px]">
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
      title: "Title",
      dataIndex: "title",
      key: "title",

      render: (text: string) => (
        <div className=" w-[150px]  font-primary">{text}</div>
      ),
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",

      render: (text: string) => (
        <div className="w-[50px] flex items-center gap-3">
          <span className="font-light font-primary">
            {text ? (
              <div className="p-1 px-2 text-xs font-medium text-[#0086C9] bg-[#E0F2FE] rounded-full">
                Invoice
              </div>
            ) : (
              <div className="p-1 px-2 text-xs font-medium text-[#475467] bg-[#E4E7EC] rounded-full">
                Estimate
              </div>
            )}
          </span>
        </div>
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
          <Link to="/payments/estimate/123">
            <FiEdit3 size={20} className="text-gray-500" />
          </Link>
        </div>
      ),
    },
  ];
  return (
    <>
      <CreateEstimateModal
        isVisible={isEstimateModalOpen}
        closeModal={closeModal}
      />
      <DefaultCardLayout>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">Estimates</h2>
            <p className="text-xs text-gray-400 ">
              View all your estimates and invoices here
            </p>
          </div>
          <div>
            <PgButton title="+ New Estimate" onClick={showModal} />
          </div>
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
              options={[{ value: "lucy", label: "Channel" }]}
              placeholder="Type"
            />
            <PgSelect
              options={[{ value: "lucy", label: "Email or SMS" }]}
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
    </>
  );
}

export default PaymentsEstimatePage;
