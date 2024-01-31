import PgUsers from "@/assets/dashboard/PgUsers";
import CustomSection from "@/components/dashboard/CustomSection";
import PgCheck from "@/assets/dashboard/PgCheck";
import PgStar from "@/assets/dashboard/PgStar";
import PgDollor from "@/assets/dashboard/PgDollar";
import PgPhone from "@/assets/dashboard/PgPhone";
import PgPhoneOutgoing from "@/assets/dashboard/PgPhoneOutgoing";
import PgMail from "@/assets/dashboard/PgMail";
import { CampaignChart, Chart, ReviewsChart } from "./Chart";
import PgEye from "@/assets/dashboard/PgEye";
import DefaultCardLayout from "@/layout/DefaultCardLayout";
import { Button, Checkbox, Pagination, PaginationProps, Table } from "antd";
import { useRef, useState } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

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
];

const columns = [
  {
    title: "User Name",
    dataIndex: "username",
    key: "username",
    width: 250,
    render: (text: string, data: any) => (
      <div className="flex items-center gap-3 ">
        <Checkbox />
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
    title: "Channel",
    dataIndex: "channel",
    key: "channel",
    width: 150,
    render: (text: string) => (
      <div className="font-light font-primary">{text}</div>
    ),
  },
  {
    title: "Phone Number",
    dataIndex: "phoneNumber",
    key: "phoneNumber",
    width: 180,
    render: (text: string) => (
      <div className="flex items-center gap-3 ">
        <span className="font-light font-primary">{text}</span>
      </div>
    ),
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    width: 220,
    render: (text: string) => (
      <div className="flex items-center gap-3">
        <span className="font-light font-primary">{text}</span>
      </div>
    ),
  },
  {
    title: "Location",
    dataIndex: "location",
    key: "location",
    width: 220,
    render: (text: string) => (
      <div className="flex items-center gap-3">
        <span className="font-light font-primary">{text}</span>
      </div>
    ),
  },
  {
    title: "Marketing Opt-in",
    dataIndex: "marketing",
    key: "marketing",
    width: 150,
    render: (text: string) => (
      <div className="flex items-center gap-3 ">
        <span className="font-light font-primary">{text}</span>
      </div>
    ),
  },
  {
    title: "List",
    dataIndex: "list",
    key: "list",
    width: 130,
    render: (text: string) => (
      <div className="flex items-center gap-3 ">
        <span className="font-light font-primary">{text}</span>
      </div>
    ),
  },
];
const firstBox = [
  {
    primaryline: "Connect your first location",
    secondaryline:
      "Sign in to your Google Business profile to connect your listing reviews.",
    time: 10,
    icon: <PgCheck />,
  },
  {
    primaryline: " Add contacts or bulk imports using a CSV file",
    secondaryline:
      "You can either create contacts manually or use the import tool to bulk import.",
    time: 5,
    icon: <PgUsers />,
  },
  {
    primaryline: "Invite yourself to review",
    secondaryline: "Try sending a review invitation to yourself.",
    icon: <PgStar />,
    time: 3,
  },
  {
    primaryline: "Complete Account Setup",
    secondaryline:
      "Finish adding your business details and connect your bank account.",
    icon: <PgDollor />,
    time: 10,
  },
];

const secondBox = [
  {
    primaryline: "Get your call and textable phone number",
    secondaryline:
      "Fill out this quick form to get a phone number which can be used to make calls and text messages.",
    time: 8,
    icon: <PgPhone />,
  },
  {
    primaryline: "Make your first phone call",
    secondaryline:
      "Let your customers know that they can now contact you by either text or call.",
    time: 10,
    icon: <PgPhoneOutgoing />,
  },
  {
    primaryline: "Connect your domain",
    secondaryline:
      "Get your inbox address by connecting your domain with the plateform.",
    icon: <PgMail />,
    time: 3,
  },
];

export default function DashboardPage() {
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

  return (
    <>
      {/* Welcome start */}
      <div>
        <div
          style={{ borderRadius: "10px" }}
          className=" px-6 sm:px-8 py-6 bg-[#263238] text-white "
        >
          <h1 className="text-2xl font-semibold">Welcome to Polygogo</h1>
          <p className="mt-1 text-sm font-normal sm:mt-2 sm:w-3/4">
            We are excited to have you here, feel free to explore around or
            follow the steps below to quickly get you started!
          </p>
        </div>
        <div
          className="w-full py-6 my-5 bg-white "
          style={{
            borderRadius: "10px",
            boxShadow: "0px 1px 4px 0px #E6EAF0",
          }}
        >
          <div>
            <h1 className="ml-6 text-2xl font-medium sm:ml-8 ">
              Basic account setup
            </h1>
            <div className="mt-1 mb-3 ml-6 text-sm font-normal sm:ml-8">
              Task 1 of 4 complete
            </div>
            {firstBox.map((item, index: number) => (
              <CustomSection
                key={index}
                index={index}
                primaryline={item.primaryline}
                secondaryline={item.secondaryline}
                time={item.time}
                childComponent={item.icon}
              />
            ))}
          </div>
        </div>
        <div
          className="w-full py-6 bg-white 2xl:mb-12"
          style={{
            borderRadius: "10px",
            boxShadow: "0px 1px 4px 0px #E6EAF0",
          }}
        >
          <div>
            <h1 className="ml-6 text-2xl font-medium sm:ml-8 ">
              Let's setup communication and connectivity
            </h1>
            <div className="mt-1 mb-3 ml-6 text-sm font-normal sm:ml-8">
              Task 0 of 3 complete
            </div>
            {secondBox.map((item, index: number) => (
              <CustomSection
                key={index}
                primaryline={item.primaryline}
                secondaryline={item.secondaryline}
                time={item.time}
                childComponent={item.icon}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 ">
        {/* Welcome Back */}
        <div className="relative mt-6 ">
          <div className=" rounded-t-lg sm:h-[250px] px-6 sm:px-8 py-6 bg-[#263238] text-white ">
            <h1 className="text-2xl font-semibold">Welcome Back!</h1>
            <p className="mt-1 text-sm font-normal sm:mt-2 sm:w-3/4">
              Here's your weekly summary of everything:
            </p>
          </div>
          <div className="flex jayesh flex-col sm:flex-row sm:absolute z-10 top-[40%] w-full gap-4  p-2 ">
            <div className="flex-1 mt-2 w-full p-4 bg-white rounded-lg  sm:mt-0 sm:min-w-[410px]">
              <div className="flex flex-wrap justify-between w-full">
                <div className="flex items-center gap-2">
                  <h1 className="text-lg font-semibold text-black ">
                    Payments
                  </h1>
                  <PgEye />
                </div>
                <select
                  className="border border-[#D0D5DD] text-[#98A2B3] outline-none p-1 text-xs rounded-md "
                  name="payments"
                  id="payments"
                >
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Yearly">Yearly</option>
                </select>
              </div>
              <div className="flex-no-wrap w-full pt-6 ">
                <Chart />
              </div>
            </div>
            <div className="flex-1 p-4 text-sm bg-white rounded-lg sm:min-w-[410px]">
              <div className="flex flex-wrap justify-between gap-4 sm:gap-8">
                <div className="flex items-center gap-2">
                  <h1 className="text-lg font-semibold text-black ">
                    Campaigns
                  </h1>
                  <PgEye />
                </div>
                <div className="flex gap-2">
                  <div className="border border-[#7AADFA] text-[#7AADFA] flex items-center gap-1 p-2 py-0   rounded-md text-[11px] font-medium">
                    <div className="border-t-2 w-[8px] border-[#7AADFA]"></div>
                    Email
                  </div>
                  <div className="border border-[#7AADFA] text-[#7AADFA] flex items-center gap-1 p-2 py-0   rounded-md text-[11px] font-medium">
                    <div className="border-t-2 border-dotted w-[12px] border-[#7AADFA]"></div>
                    SMS
                  </div>
                  <select
                    className="border border-[#D0D5DD] text-[#98A2B3] text-xs outline-none p-1 rounded-md "
                    name="payments"
                    id="payments"
                  >
                    <option value="Weekly">Weekly</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Yearly">Yearly</option>
                  </select>
                </div>
              </div>
              <div className="pt-6">
                <CampaignChart />
              </div>
            </div>
            <div className="flex-1 p-4 bg-white rounded-lg sm:min-w-[410px]">
              <div className="flex flex-wrap justify-between gap-4 sm:gap-8">
                <div className="flex items-center gap-2">
                  <h1 className="text-lg font-semibold text-black ">Reviews</h1>
                  <PgEye />
                </div>
                <div className="flex gap-2">
                  <div className="border border-[#7AADFA] text-[#7AADFA] flex items-center gap-1 p-2 py-0   rounded-md text-[11px] font-medium">
                    <div className="border-t-2 w-[8px] border-[#7AADFA]"></div>
                    Google
                  </div>
                  <div className="border border-[#7AADFA] text-[#7AADFA] flex items-center gap-1 p-2 py-0   rounded-md text-[11px] font-medium">
                    <div className="border-t-2 border-dotted w-[12px] border-[#7AADFA]"></div>
                    Trustpilot
                  </div>
                  <select
                    className="border border-[#D0D5DD] text-[#98A2B3] text-xs outline-none p-1 rounded-md "
                    name="payments"
                    id="payments"
                  >
                    <option value="Weekly">Weekly</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Yearly">Yearly</option>
                  </select>
                </div>
              </div>
              <div className="w-full pt-6 ">
                <ReviewsChart />
              </div>
            </div>
          </div>
        </div>
        {/* Table */}
        <div className="sm:mt-40 ">
          <DefaultCardLayout padding={0}>
            {/* // Filter Container  */}

            {/* Contact List Container */}
            <div>
              <h1 className="p-6 pb-4 text-lg font-semibold">
                Reviews this week{" "}
              </h1>
              <div className="w-full ">
                <Table
                  scroll={{ x: "max-content" }}
                  columns={columns}
                  dataSource={data}
                  pagination={false}
                />
                <div className="flex justify-between w-full p-6 pb-8">
                  <Button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                  >
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
      </div>
    </>
  );
}
