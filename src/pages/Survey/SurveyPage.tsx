import PgSearch from "@/assets/Reviews/PgSearch";
import PgSelect from "@/components/Input/PgSelect";
import DefaultCardLayout from "@/layout/DefaultCardLayout";
import { Dialog, Transition } from "@headlessui/react";
import { Button, Input, Pagination, PaginationProps, Table } from "antd";
import { useState, Fragment, useRef } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { FiEdit3 } from "react-icons/fi";
import { PiEyeBold } from "react-icons/pi";

export default function SurveyPage() {
  const data = [
    {
      name: "Customer Retention Survey Q3",
      type: "Survey",
      views: "123",
      submission: "343",
      date: "Sep 10, 2023",
      status: "Published",
      created: "Sep 10, 2023",
    },
    {
      name: "Customer Retention Survey Q3",
      type: "Lead",
      views: "343",
      submission: "532",
      date: "Sep 10, 2023",
      status: "Draft",
      created: "Sep 10, 2023",
    },
    {
      name: "Customer Retention Survey Q3",
      type: "Survey",
      views: "123",
      submission: "343",
      date: "Sep 10, 2023",
      status: "Published",
      created: "Sep 10, 2023",
    },
    {
      name: "Customer Retention Survey Q3",
      type: "Lead",
      views: "343",
      submission: "532",
      date: "Sep 10, 2023",
      status: "Draft",
      created: "Sep 10, 2023",
    },
    {
      name: "Customer Retention Survey Q3",
      type: "Survey",
      views: "123",
      submission: "343",
      date: "Sep 10, 2023",
      status: "Published",
      created: "Sep 10, 2023",
    },
    {
      name: "Customer Retention Survey Q3",
      type: "Lead",
      views: "343",
      submission: "532",
      date: "Sep 10, 2023",
      status: "Draft",
      created: "Sep 10, 2023",
    },
    {
      name: "Customer Retention Survey Q3",
      type: "Survey",
      views: "123",
      submission: "343",
      date: "Sep 10, 2023",
      status: "Published",
      created: "Sep 10, 2023",
    },
    {
      name: "Customer Retention Survey Q3",
      type: "Lead",
      views: "343",
      submission: "532",
      date: "Sep 10, 2023",
      status: "Draft",
      created: "Sep 10, 2023",
    },
  ];
  // Step 1: Create state variables for current page and page size.
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10; // Set your desired page size.

  // Step 2: Define functions to handle page changes.
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    const totalPages = Math.ceil(data.length / pageSize);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  // Step 3: Calculate the data to display based on the current page and page size.
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const displayedData = data.slice(startIndex, endIndex);
  const paginationRef = useRef<PaginationProps>();
  const [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }

  const columns = [
    {
      dataIndex: "name",
      key: "name",
      render: (text: string) => (
        <div className="flex  items-center w-[250px] gap-3 ">
          <span className="text-xs font-medium font-primary">{text}</span>
        </div>
      ),
      title: (
        <div style={{ paddingLeft: 6 }}>
          <span>Name</span>
        </div>
      ),
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",

      render: (text: string) => (
        <div className="flex  items-center w-[130px] gap-3 ">
          {text === "Survey" && (
            <span className="  px-4 py-1 text-xs font-semibold bg-[#C8CCE5] rounded-full text-[#4E5BA6]">
              Survey
            </span>
          )}
          {text === "Lead" && (
            <span className="  px-4 py-1 text-xs font-semibold bg-[#FDDCAB] rounded-full text-[#FB6514]">
              Lead
            </span>
          )}
        </div>
      ),
    },
    {
      title: "Views",
      dataIndex: "views",
      key: "views",
      render: (text: string) => (
        <div className="flex  items-center w-[100px] gap-3 ">
          <span className="text-xs font-medium font-primary">{text}</span>
        </div>
      ),
    },
    {
      title: "Submission",
      dataIndex: "submission",
      key: "submission",
      render: (text: string) => (
        <div className="flex  items-center w-[100px] gap-3 ">
          <span className="text-xs font-medium font-primary">{text}</span>
        </div>
      ),
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",

      render: (text: string) => (
        <div className="flex  items-center w-[130px] gap-3 ">
          <span className="text-xs font-medium font-primary">{text}</span>
        </div>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",

      render: (text: string) => (
        <div className="flex  items-center w-[130px] gap-3 ">
          {text === "Published" && (
            <span className=" px-4 py-1 text-xs font-semibold bg-[#A6F4C5] rounded-full text-[#027A48]">
              Published
            </span>
          )}
          {text === "Draft" && (
            <span className=" px-4 py-1 text-xs font-semibold bg-[#E5E8E5] rounded-full text-[#475467]">
              Draft
            </span>
          )}
        </div>
      ),
    },

    {
      title: "Action",
      dataIndex: "actions",
      key: "actions",
      render: () => (
        <div className="w-[100px] flex items-center gap-3">
          <span>
            <FiEdit3 size={20} className="text-gray-500" />
          </span>
          <span>
            <PiEyeBold size={24} className="text-gray-500" />
          </span>
        </div>
      ),
    },
  ];
  return (
    <DefaultCardLayout padding={0}>
      <div className="flex flex-wrap items-center justify-between gap-4 p-6 ">
        <div>
          <h1 className="font-semibold text-[#344054] text-2xl stext-sm">
            Forms: 3243
          </h1>
          <p className="text-sm text-[#667085] mt-1">
            View All your Froms detail here
          </p>
        </div>
        <div>
          <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex items-center justify-center min-h-full p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full max-w-lg px-8 py-10 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-semibold leading-6 text-center text-gray-900"
                      >
                        Create your Campaign Type
                      </Dialog.Title>
                      <div className="flex flex-col items-center gap-3 mt-6 sm:flex-row">
                        <div className="bg-[#FCFCFD] border border-[#E4E7EC] rounded-xl md:w-1/2 flex flex-col items-center gap-4 p-4 py-6">
                          <div>
                            <svg
                              width={56}
                              height={56}
                              viewBox="0 0 78 78"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M71.5 19.5C71.5 15.925 68.575 13 65 13H13C9.425 13 6.5 15.925 6.5 19.5M71.5 19.5V58.5C71.5 62.075 68.575 65 65 65H13C9.425 65 6.5 62.075 6.5 58.5V19.5M71.5 19.5L39 42.25L6.5 19.5"
                                stroke="#101828"
                                strokeWidth="6.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <div className="text-md text-center font-medium text-[#344054]">
                            Standard Form
                          </div>
                          <p className="text-[#98A2B3]  text-xs text-center">
                            Use this form to collect data and contacts for your
                            lists.
                          </p>
                        </div>
                        <div className="bg-[#F7FAFF] border border-[#3787FF] rounded-xl w-1/2 flex flex-col items-center gap-4 p-4 py-6">
                          <div>
                            <svg
                              width={56}
                              height={56}
                              viewBox="0 0 78 78"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M68.25 37.3751C68.2612 41.6647 67.259 45.8962 65.325 49.7251C63.0319 54.3133 59.5067 58.1724 55.1442 60.8703C50.7817 63.5681 45.7543 64.9981 40.625 65.0001C36.3354 65.0113 32.1039 64.0091 28.275 62.0751L9.75 68.2501L15.925 49.7251C13.991 45.8962 12.9888 41.6647 13 37.3751C13.002 32.2458 14.432 27.2184 17.1298 22.8559C19.8277 18.4934 23.6868 14.9682 28.275 12.6751C32.1039 10.7411 36.3354 9.73891 40.625 9.75009H42.25C49.0241 10.1238 55.4224 12.9831 60.2197 17.7804C65.017 22.5777 67.8763 28.976 68.25 35.7501V37.3751Z"
                                stroke="#3787FF"
                                strokeWidth="6.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <div className="text-md text-center font-medium text-[#344054]">
                            Survey Form
                          </div>
                          <p className="text-[#344054]  text-xs text-center">
                            Use this form to collect data and analyze and the
                            results.
                          </p>
                        </div>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
          <button
            onClick={openModal}
            className="border cursor-pointer flex items-center  text-sm px-6 rounded-full p-3 text-white bg-[#3787FF] hover:bg-[#3777dd]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#fff"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m6-6H6"
              />
            </svg>
            Create a Form
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-3 px-6 md:flex-row">
        <div className="w-full p-1 border rounded-full ">
          <Input
            placeholder="Search Forms"
            bordered={false}
            className="font-medium text-gray-400"
            suffix={<PgSearch />}
          />
        </div>
        <div className="flex flex-col gap-3 sm:flex-row ">
          <PgSelect
            placeholder="Type"
            options={[
              { value: "All Reviews", label: "All Reviews" },
              { value: "5 star", label: "5 star" },
              { value: "4 star", label: "4 star" },
              { value: "3 star", label: "3 star" },
              { value: "2 star", label: "2 star" },
              { value: "1 star", label: "1 star" },
            ]}
          />
          <PgSelect
            options={[
              { value: "All Reviews", label: "All Reviews" },
              { value: "5 star", label: "5 star" },
              { value: "4 star", label: "4 star" },
              { value: "3 star", label: "3 star" },
              { value: "2 star", label: "2 star" },
              { value: "1 star", label: "1 star" },
            ]}
            placeholder="Status"
          />
        </div>
      </div>
      <div className="mt-6 jayesh">
        <div className="w-full ">
          <Table
            pagination={false}
            columns={columns}
            dataSource={data}
            scroll={{ x: 100 }}
          />
          <div className="flex justify-between w-full p-6 pb-8 ">
            <Button onClick={handlePreviousPage} disabled={currentPage === 1}>
              <div className="flex items-center justify-center gap-x-1 text-primaryDark">
                <span>
                  <BsArrowLeftShort size={22} />
                </span>
                <span>Previous</span>
              </div>
            </Button>
            <Pagination
              current={currentPage}
              defaultCurrent={1}
              total={data.length}
              pageSize={pageSize}
              onChange={(page) => setCurrentPage(page)}
            />
            <Button
              onClick={handleNextPage}
              disabled={currentPage === Math.ceil(data.length / pageSize)}
            >
              <div className="flex items-center justify-center gap-x-1 text-primaryDark">
                <span>Next</span>
                <span>
                  <BsArrowRightShort size={22} />
                </span>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </DefaultCardLayout>
  );
}
