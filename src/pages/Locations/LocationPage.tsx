import DefaultCardLayout from "@/layout/DefaultCardLayout";
import { Table } from "antd";
import { FiEdit3 } from "react-icons/fi";
import { PiEyeBold } from "react-icons/pi";
import { useState } from "react";
import PgChevronLeft from "@/assets/location/PgChevronLeft";
import { Tab } from "@headlessui/react";
import LocationTab from "./LocationTab";
function LocationPage() {
  const [showDetail, setShowDetail] = useState(false);
  const data = [
    {
      key: "1",
      locationTitle: "Facebook",
      phoneNumber: "(323)861-5463",
      email: "olivia@untitledui.com",
      location: "Willowbrook Springs",
      customers: "45,345",
    },
    {
      key: "2",
      locationTitle: "Facebook",
      phoneNumber: "(323)861-5463",
      email: "olivia@untitledui.com",
      location: "Willowbrook Springs",
      customers: "45,345",
    },
    {
      key: "3",
      locationTitle: "Facebook",
      phoneNumber: "(323)861-5463",
      email: "olivia@untitledui.com",
      location: "Willowbrook Springs",
      customers: "45,345",
    },
    {
      key: "4",
      locationTitle: "Facebook",
      phoneNumber: "(323)861-5463",
      email: "olivia@untitledui.com",
      location: "Willowbrook Springs",
      customers: "45,345",
    },
  ];

  const columns = [
    {
      title: "Location Title",
      dataIndex: "locationTitle",
      key: "locationTitle",
      render: (text: string) => (
        <div className=" ml-3 w-[150px] font-light font-primary">{text}</div>
      ),
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
      render: (text: string) => (
        <div className="w-[200px] flex items-center gap-3">
          <span className="font-light font-primary">{text}</span>
        </div>
      ),
    },
    {
      title: "Email address",
      dataIndex: "email",
      key: "email",
      render: (text: string) => (
        <div className="w-[250px] flex items-center gap-3">
          <span className="font-light font-primary">{text}</span>
        </div>
      ),
    },

    {
      title: "Location",
      dataIndex: "location",
      key: "location",
      render: (text: string) => (
        <div className="w-[250px] flex items-center gap-3">
          <span className="font-light font-primary">{text}</span>
        </div>
      ),
    },
    {
      title: "Customers",
      dataIndex: "customers",
      key: "customers",
      render: (text: string) => (
        <div className="w-[150px] flex items-center gap-3">
          <span className="font-light font-primary">{text}</span>
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

  return (
    <div>
      {!showDetail && (
        <DefaultCardLayout padding={0}>
          <div className="flex p-6 justify-between items-center flex-wrap gap-4 ">
            <div>
              <h1 className="font-semibold text-2xl text-[#344054] text-2xl stext-sm">
                Locations
              </h1>
            </div>
            <div>
              <button
                onClick={() => setShowDetail(!showDetail)}
                className="border  flex items-center  text-sm px-6 rounded-full p-3 text-white bg-[#3787FF] hover:bg-[#3777dd]"
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
                Add a Location
              </button>
            </div>
          </div>
          <div className="jayesh mt-4  ">
            <Table pagination={false} dataSource={data} columns={columns} />
          </div>
        </DefaultCardLayout>
      )}
      {showDetail && <LocationDetail setShowDetail={setShowDetail} />}
    </div>
  );
}

function LocationDetail({ setShowDetail }: any) {
  return (
    <>
      <h1 className="flex items-center text-[#263238] text-xl gap-1 mb-4 font-medium">
        <div
          onClick={() => setShowDetail(false)}
          className="cursor-pointer hover:text-primary text-[#A0AEC0]"
        >
          <PgChevronLeft />
        </div>
        Location Detail
      </h1>
      <DefaultCardLayout padding={6}>
        <Tab.Group>
          <Tab.List>
            <div className="flex border-b">
              {[
                {
                  title: "General",
                },
              ].map((item, index) => (
                  <Tab key={index} className="outline-none">
                    {({ selected }) => (
                      <div
                        className={`p-3 min-w-[150px]  ${
                          selected && "border-b-2 border-primary "
                        } `}
                      >
                        <span
                          className={`text-sm font-medium ${
                            selected ? "text-primary" : "text-gray-400"
                          }`}
                        >
                          {item.title}
                        </span>
                      </div>
                    )}
                  </Tab>
              ))}
            </div>
          </Tab.List>
          <div className="mt-5">
            <Tab.Panel>
              <LocationTab />
            </Tab.Panel>
          </div>
        </Tab.Group>
      </DefaultCardLayout>
    </>
  );
}
export default LocationPage;
