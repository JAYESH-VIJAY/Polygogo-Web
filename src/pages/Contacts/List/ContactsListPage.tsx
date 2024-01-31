import PgButton from "@/components/Input/PgButton";
import PgInput from "@/components/Input/PgInput";
import PgSelect from "@/components/Input/PgSelect";
import PageHeading from "@/components/PageHeading";
import DefaultCardLayout from "@/layout/DefaultCardLayout";
import { Button, Checkbox, Pagination, Table } from "antd";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { FiEdit3 } from "react-icons/fi";
import { Link } from "react-router-dom";
function ContactsListPage() {
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
  const data = [
    {
      key: "1",

      listName: "John Brown",
      description: "Sample description content goes here...",
      tags: "Tag1",
      contacts: "23",
      createdAt: "Sep 10, 2023",
    },
  ];

  const columns = [
    {
      title: "List Name",
      dataIndex: "listName",
      key: "listName",

      render: (text: string) => (
        <div className="flex items-center gap-3 w-[150px]">
          <Checkbox />
          <div className="flex items-center gap-3 ">
            <span className="font-medium font-primary text-primaryDark">
              {text}
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",

      render: (text: string) => (
        <div className=" w-[200px] font-primary">{text}</div>
      ),
    },
    {
      title: "Tags",
      dataIndex: "tags",
      key: "tags",
      width: 200,
      render: (text: string) => (
        <div className="w-[150px] flex items-center gap-3">
          <span className="px-2 font-medium text-gray-400 bg-gray-100 border border-gray-400 rounded-full font-primary">
            {text}
          </span>
        </div>
      ),
    },
    {
      title: "Contacts",
      dataIndex: "contacts",
      key: "contacts",
      width: 300,
      render: (text: string) => (
        <div className="w-[150px] flex items-center gap-3">
          <span className=" font-primary">{text}</span>
        </div>
      ),
    },

    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (text: string) => (
        <div className="w-[150px] flex items-center gap-3">
          <span className="font-primary">{text}</span>
        </div>
      ),
    },

    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: () => (
        <div className="w-[100px] flex items-center gap-3">
          <Link to="/contacts/lists/123">
            <FiEdit3 size={20} className="text-gray-500" />
          </Link>
        </div>
      ),
    },
  ];

  return (
    <div>
      <DefaultCardLayout>
        <div className="flex items-center justify-between">
          <PageHeading title="Lists" content="Create and manage lists" />
          <Link to="/contacts/lists/create">
            <PgButton title="+ Add New List" />
          </Link>
        </div>
        {/* // Filter Container  */}
        <div className="mt-5">
          <div className="flex items-center gap-4 jayesh">
            <div className="w-full  min-w-[300px] text-gray-200">
              <PgInput
                placeholder="Search Contacts"
                suffix={<BiSearch size={20} className="text-gray-400" />}
              />
            </div>

            <PgSelect
              options={[
                { value: "lucy", label: "Channel" },
                { value: "dasdas", label: "Cdasdasdhannel" },
                { value: "ldasdasducy", label: "Chaasdasdnnel" },
              ]}
              placeholder="Tags"
            />
            <PgSelect
              options={[{ value: "lucy", label: "Email or SMS" }]}
              placeholder="Email or SMS"
            />
            <PgSelect
              options={[{ value: "lucy", label: "Marketing Opt-in" }]}
              placeholder={"Marketing Opt-in"}
            />
          </div>
        </div>
        {/* Contact List Container */}
        <div className="mt-8 ">
          <div className="w-full ">
            <Table
              pagination={false}
              columns={columns}
              dataSource={data}
              scroll={{ x: 100 }}
              // className="w-[3000px]"
            />
            <div className="flex justify-between w-full py-4 ">
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
    </div>
  );
}

export default ContactsListPage;
