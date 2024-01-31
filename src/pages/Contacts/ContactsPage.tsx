import PgButton from "@/components/Input/PgButton";
import PgInput from "@/components/Input/PgInput";
import PgSelect from "@/components/Input/PgSelect";
import PageHeading from "@/components/PageHeading";
import DefaultCardLayout from "@/layout/DefaultCardLayout";
import {
  Button,
  Checkbox,
  Pagination,
  PaginationProps,
  Rate,
  Table,
} from "antd";
import { useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { FiEdit3 } from "react-icons/fi";
import { PiEyeBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const data = [
  {
    key: "1",
    imgUrl:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    username: "John Brown",
    channel: "Facebook",
    phoneNumber: "(323)861-5463",
    email: "olivia@untitledui.com",
    location: "Willowbrook Springs",
    marketing: "Yes",
    list: "Weekly Sale",
    source: "Email",
    date: "Sep 10, 2023",
    reviews: "5",
  },
  {
    key: "2",
    imgUrl:
      "https://media.istockphoto.com/id/1247693979/photo/close-up-portrait-of-young-smiling-handsome-man-wearing-blue-shirt-and-glasses-feeling.jpg?s=612x612&w=0&k=20&c=PgpEGomO4XLVvRHlFxuqneqm0E68_zYkXVqzr5WN_eo=",
    username: "John Green",
    channel: "Facebook",
    phoneNumber: "(323)861-5463",
    email: "olivia@untitledui.com",
    location: "Willowbrook Springs",
    marketing: "Yes",
    list: "Weekly Sale",
    source: "Email",
    date: "Sep 10, 2023",
    reviews: "5",
  },
  {
    key: "3",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSSNn8_M7J9iuGc2f-UDI0aSVzB7xkmWI5fSPqyMwZbX0X5o4XOaJM-cKCdcK7jp34aLQ&usqp=CAU",
    username: "G Brown",
    channel: "Facebook",
    phoneNumber: "(323)861-5463",
    email: "olivia@untitledui.com",
    location: "Willowbrook Springs",
    marketing: "Yes",
    list: "Weekly Sale",
    source: "Email",
    date: "Sep 10, 2023",
    reviews: "5",
  },
  {
    key: "4",
    imgUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80",
    username: "Figma Brown",
    channel: "Facebook",
    phoneNumber: "(323)861-5463",
    email: "olivia@untitledui.com",
    location: "Willowbrook Springs",
    marketing: "Yes",
    list: "Weekly Sale",
    source: "Email",
    date: "Sep 10, 2023",
    reviews: "5",
  },
  {
    key: "1",
    imgUrl:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    username: "John Brown",
    channel: "Facebook",
    phoneNumber: "(323)861-5463",
    email: "olivia@untitledui.com",
    location: "Willowbrook Springs",
    marketing: "Yes",
    list: "Weekly Sale",
    source: "Email",
    date: "Sep 10, 2023",
    reviews: "5",
  },
  {
    key: "2",
    imgUrl:
      "https://media.istockphoto.com/id/1247693979/photo/close-up-portrait-of-young-smiling-handsome-man-wearing-blue-shirt-and-glasses-feeling.jpg?s=612x612&w=0&k=20&c=PgpEGomO4XLVvRHlFxuqneqm0E68_zYkXVqzr5WN_eo=",
    username: "John Green",
    channel: "Facebook",
    phoneNumber: "(323)861-5463",
    email: "olivia@untitledui.com",
    location: "Willowbrook Springs",
    marketing: "Yes",
    list: "Weekly Sale",
    source: "Email",
    date: "Sep 10, 2023",
    reviews: "5",
  },
  {
    key: "3",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSSNn8_M7J9iuGc2f-UDI0aSVzB7xkmWI5fSPqyMwZbX0X5o4XOaJM-cKCdcK7jp34aLQ&usqp=CAU",
    username: "G Brown",
    channel: "Facebook",
    phoneNumber: "(323)861-5463",
    email: "olivia@untitledui.com",
    location: "Willowbrook Springs",
    marketing: "Yes",
    list: "Weekly Sale",
    source: "Email",
    date: "Sep 10, 2023",
    reviews: "5",
  },
  {
    key: "4",
    imgUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80",
    username: "Figma Brown",
    channel: "Facebook",
    phoneNumber: "(323)861-5463",
    email: "olivia@untitledui.com",
    location: "Willowbrook Springs",
    marketing: "Yes",
    list: "Weekly Sale",
    source: "Email",
    date: "Sep 10, 2023",
    reviews: "5",
  },
  {
    key: "1",
    imgUrl:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    username: "John Brown",
    channel: "Facebook",
    phoneNumber: "(323)861-5463",
    email: "olivia@untitledui.com",
    location: "Willowbrook Springs",
    marketing: "Yes",
    list: "Weekly Sale",
    source: "Email",
    date: "Sep 10, 2023",
    reviews: "5",
  },
  {
    key: "1",
    imgUrl:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    username: "John Brown",
    channel: "Facebook",
    phoneNumber: "(323)861-5463",
    email: "olivia@untitledui.com",
    location: "Willowbrook Springs",
    marketing: "Yes",
    list: "Weekly Sale",
    source: "Email",
    date: "Sep 10, 2023",
    reviews: "5",
  },
  //
  {
    key: "1",
    imgUrl:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    username: "Johnsadasdas Brown",
    channel: "Facebook",
    phoneNumber: "(323)861-5463",
    email: "olivia@untitledui.com",
    location: "Willowbrook Springs",
    marketing: "Yes",
    list: "Weekly Sale",
    source: "Email",
    date: "Sep 10, 2023",
    reviews: "5",
  },
  {
    key: "2",
    imgUrl:
      "https://media.istockphoto.com/id/1247693979/photo/close-up-portrait-of-young-smiling-handsome-man-wearing-blue-shirt-and-glasses-feeling.jpg?s=612x612&w=0&k=20&c=PgpEGomO4XLVvRHlFxuqneqm0E68_zYkXVqzr5WN_eo=",
    username: "Jodasdasdn Green",
    channel: "Facebook",
    phoneNumber: "(323)861-5463",
    email: "olivia@untitledui.com",
    location: "Willowbrook Springs",
    marketing: "Yes",
    list: "Weekly Sale",
    source: "Email",
    date: "Sep 10, 2023",
    reviews: "5",
  },
  {
    key: "3",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSSNn8_M7J9iuGc2f-UDI0aSVzB7xkmWI5fSPqyMwZbX0X5o4XOaJM-cKCdcK7jp34aLQ&usqp=CAU",
    username: "G Brown",
    channel: "Facebook",
    phoneNumber: "(323)861-5463",
    email: "olivia@untitledui.com",
    location: "Willowbrook Springs",
    marketing: "Yes",
    list: "Weekly Sale",
    source: "Email",
    date: "Sep 10, 2023",
    reviews: "5",
  },
  {
    key: "4",
    imgUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80",
    username: "Figma Brown",
    channel: "Facebook",
    phoneNumber: "(323)861-5463",
    email: "olivia@untitledui.com",
    location: "Willowbrook Springs",
    marketing: "Yes",
    list: "Weekly Sale",
    source: "Email",
    date: "Sep 10, 2023",
    reviews: "5",
  },
  {
    key: "1",
    imgUrl:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    username: "John Brown",
    channel: "Facebook",
    phoneNumber: "(323)861-5463",
    email: "olivia@untitledui.com",
    location: "Willowbrook Springs",
    marketing: "Yes",
    list: "Weekly Sale",
    source: "Email",
    date: "Sep 10, 2023",
    reviews: "5",
  },
  {
    key: "2",
    imgUrl:
      "https://media.istockphoto.com/id/1247693979/photo/close-up-portrait-of-young-smiling-handsome-man-wearing-blue-shirt-and-glasses-feeling.jpg?s=612x612&w=0&k=20&c=PgpEGomO4XLVvRHlFxuqneqm0E68_zYkXVqzr5WN_eo=",
    username: "John Green",
    channel: "Facebook",
    phoneNumber: "(323)861-5463",
    email: "olivia@untitledui.com",
    location: "Willowbrook Springs",
    marketing: "Yes",
    list: "Weekly Sale",
    source: "Email",
    date: "Sep 10, 2023",
    reviews: "5",
  },
  {
    key: "3",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSSNn8_M7J9iuGc2f-UDI0aSVzB7xkmWI5fSPqyMwZbX0X5o4XOaJM-cKCdcK7jp34aLQ&usqp=CAU",
    username: "G Brown",
    channel: "Facebook",
    phoneNumber: "(323)861-5463",
    email: "olivia@untitledui.com",
    location: "Willowbrook Springs",
    marketing: "Yes",
    list: "Weekly Sale",
    source: "Email",
    date: "Sep 10, 2023",
    reviews: "5",
  },
  {
    key: "4",
    imgUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80",
    username: "Figma Brown",
    channel: "Facebook",
    phoneNumber: "(323)861-5463",
    email: "olivia@untitledui.com",
    location: "Willowbrook Springs",
    marketing: "Yes",
    list: "Weekly Sale",
    source: "Email",
    date: "Sep 10, 2023",
    reviews: "5",
  },
  {
    key: "1",
    imgUrl:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    username: "John Brown",
    channel: "Facebook",
    phoneNumber: "(323)861-5463",
    email: "olivia@untitledui.com",
    location: "Willowbrook Springs",
    marketing: "Yes",
    list: "Weekly Sale",
    source: "Email",
    date: "Sep 10, 2023",
    reviews: "5",
  },
  {
    key: "1",
    imgUrl:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    username: "John Brown",
    channel: "Facebook",
    phoneNumber: "(323)861-5463",
    email: "olivia@untitledui.com",
    location: "Willowbrook Springs",
    marketing: "Yes",
    list: "Weekly Sale",
    source: "Email",
    date: "Sep 10, 2023",
    reviews: "5",
  },
];

const columns = [
  {
    title: "User Name",
    dataIndex: "username",
    key: "username",

    render: (text: string, data: any) => (
      <div className="flex items-center gap-3 w-[250px]">
        <Checkbox />
        <Link to="/contacts/123" className="flex items-center gap-3 ">
          <img
            loading="lazy"
            className="lazyload object-cover w-10 h-10 rounded-full"
            src={data?.imgUrl}
          />
          <span className="font-medium font-primary text-primaryDark">
            {text}
          </span>
        </Link>
      </div>
    ),
  },
  {
    title: "Channel",
    dataIndex: "channel",
    key: "channel",
    width: 100,
    render: (text: string) => (
      <div className=" w-[100px] font-light font-primary">{text}</div>
    ),
  },
  {
    title: "Phone Number",
    dataIndex: "phoneNumber",
    key: "phoneNumber",
    width: 200,
    render: (text: string) => (
      <div className="w-[150px] flex items-center gap-3">
        <span className="font-light font-primary">{text}</span>
      </div>
    ),
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    width: 300,
    render: (text: string) => (
      <div className="w-[150px] flex items-center gap-3">
        <span className="font-light font-primary">{text}</span>
      </div>
    ),
  },
  {
    title: "Location",
    dataIndex: "location",
    key: "location",
    width: 400,
    render: (text: string) => (
      <div className="w-[250px] flex items-center gap-3">
        <span className="font-light font-primary">{text}</span>
      </div>
    ),
  },
  {
    title: "Marketing Opt-in",
    dataIndex: "marketing",
    key: "marketing",
    width: 800,
    render: (text: string) => (
      <div className="w-[150px] flex items-center gap-3">
        <span className="font-light font-primary">{text}</span>
      </div>
    ),
  },
  {
    title: "List",
    dataIndex: "list",
    key: "list",
    render: (text: string) => (
      <div className="w-[150px] flex items-center gap-3">
        <span className="font-light font-primary">{text}</span>
      </div>
    ),
  },
  {
    title: "Source",
    dataIndex: "source",
    key: "list",
    render: (text: string) => (
      <div className="w-[150px] flex items-center gap-3">
        <span className="font-light font-primary">{text}</span>
      </div>
    ),
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "list",
    render: (text: string) => (
      <div className="w-[150px] flex items-center gap-3">
        <span className="font-light font-primary">{text}</span>
      </div>
    ),
  },
  {
    title: "Overall Review",
    dataIndex: "reviews",
    key: "reviews",
    render: () => (
      <div className="w-[150px] flex items-center gap-3">
        {/* <span className="font-light font-primary">{text}</span> */}

        <Rate
          value={3.6}
          disabled
          style={{
            fontSize: "14px",
            color: "#FDB022",
          }}
        />
      </div>
    ),
  },
  {
    title: "",
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
function ContactsPage() {
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

  return (
    <div>
      <DefaultCardLayout>
        <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
          <PageHeading
            title="Contacts"
            content="View all of your contacts here"
          />
          <Link to="/contacts/create">
            <PgButton title="+ Add New Contact" />
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
                { value: "all_platform", label: "All Platform" },
                { value: "instagram", label: "Instagram" },
                { value: "twitter", label: "Twitter" },
                { value: "gmail", label: "Gmail" },
                { value: "facebook", label: "Facebook" },
              ]}
              placeholder="Channel"
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
              dataSource={displayedData}
              scroll={{ x: 100 }}
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

export default ContactsPage;
