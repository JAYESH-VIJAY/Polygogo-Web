import LineChart from "@/components/Chart/LineChart";
import PageHeading from "@/components/PageHeading";
import { Select, Table } from "antd";
import { BsCheck2Circle } from "react-icons/bs";
import { FiEdit3 } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { LuMessageSquare } from "react-icons/lu";
import CampaignChart from "./CampaignChart";
import CampaignChartApex from "./CampaignChartApex";

function AnalyticsCampaignsPage() {
  const data = [
    {
      key: "3",
      name: "QuantumQuirk Media",
      type: true,
      status: true,
      date: "Aug 17 2023 10:46 AM EDT",
      openRate: "54.96%",
      clickRate: "54.96%",
      audience: "54.96%",
    },

    {
      key: "3",
      name: "G Brown",
      type: false,
      status: false,
      date: "Aug 17 2023 10:46 AM EDT",
      openRate: "54.96%",
      clickRate: "54.96%",
      audience: "54.96%",
    },
    {
      key: "3",
      name: "G Brown",
      type: true,
      status: true,
      date: "Aug 17 2023 10:46 AM EDT",
      openRate: "54.96%",
      clickRate: "54.96%",
      audience: "54.96%",
    },

    {
      key: "3",
      name: "G Brown",
      type: false,
      status: false,
      date: "Aug 17 2023 10:46 AM EDT",
      openRate: "54.96%",
      clickRate: "54.96%",
      audience: "54.96%",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text: string, data: any) => (
        <div className="flex flex-col  w-[150px]">
          <div className="font-medium font-primary">{text}</div>
          <div className="font-medium font-primary text-xs text-[#667085]">
            {text}
          </div>
        </div>
      ),
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",

      render: (text: string) => (
        <div className="w-[100px] flex items-center gap-3">
          <span className="font-light font-primary">
            {text ? (
              <div className="p-1 flex items-center px-2 gap-x-1 text-xs font-medium text-[#475467] bg-[#E5E8E5] rounded-full">
                <span>
                  <HiOutlineMail size={18} />
                </span>
                <span>Email</span>
              </div>
            ) : (
              <div className="p-1 px-2 text-xs flex items-center  gap-x-1 font-medium text-[#475467] bg-[#E5E8E5] rounded-full">
                <span>
                  <LuMessageSquare size={18} />
                </span>
                <span>SMS</span>
              </div>
            )}
          </span>
        </div>
      ),
    },

    {
      title: "Status",
      dataIndex: "status",
      key: "status",

      render: (text: string) => (
        <div className="w-[100px] flex items-center gap-3">
          <span className="font-light font-primary">
            {text ? (
              <div className="p-1 flex items-center px-2 gap-x-1 text-xs font-medium text-[#027A48] bg-[#D1FADF] rounded-full">
                <span>
                  <BsCheck2Circle size={18} />
                </span>
                <span>Sent</span>
              </div>
            ) : (
              <div className="p-1 px-2 text-xs flex items-center   gap-x-1 font-medium text-[#475467] bg-[#E5E8E5] rounded-full">
                <span>
                  <FiEdit3 size={18} />
                </span>
                <span>Draft</span>
              </div>
            )}
          </span>
        </div>
      ),
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (text: string, data: any) => (
        <div className="flex flex-col w-[250px]">
          <div className="text-xs font-medium font-primary text-[#667085]">
            {text}
          </div>
        </div>
      ),
    },
    {
      title: "Open rate",
      dataIndex: "openRate",
      key: "openRate",
      render: (text: string, data: any) => (
        <div className="flex flex-col w-[100px]">
          <div className="text-xs font-medium font-primary text-primary">
            {text}
          </div>
          <div className="text-xs font-medium font-primary text-[#667085]">
            4,938 recipient
          </div>
        </div>
      ),
    },
    {
      title: "Click rate",
      dataIndex: "clickRate",
      key: "clickRate",
      render: (text: string, data: any) => (
        <div className="flex flex-col w-[100px]">
          <div className="text-xs font-medium font-primary text-primary">
            {text}
          </div>
          <div className="text-xs font-medium font-primary text-[#667085]">
            4,938 recipient
          </div>
        </div>
      ),
    },
    {
      title: "Audience",
      dataIndex: "audience",
      key: "audience",
      render: (text: string, data: any) => (
        <div className="flex flex-col w-[100px]">
          <div className="text-xs font-medium font-primary text-primary">
            {text}
          </div>
          <div className="text-xs font-medium font-primary text-[#667085]">
            4,938 recipient
          </div>
        </div>
      ),
    },
  ];
  return (
    <>
      <div className="relative   lg:h-[440px]">
        <div className="p-4 rounded-md h-[230px] bg-primaryDark">
          <PageHeading
            isDark={false}
            title="Campaign"
            content="August 28, 2023 - September 4, 2023 "
          />
        </div>
        <div className="relative grid gap-4 mx-4 overflow-x-scroll lg:grid-cols-4 -top-[110px]">
          {/* // payments */}
          <div className="pr-4 bg-white rounded-md shadow-sm lg:col-span-3">
            {/* <CampaignChart /> */}
            <CampaignChartApex />
          </div>

          {/* // Reviews */}
          <div className="min-w-[150px] pr-4 bg-white rounded-md shadow-sm">
            <div className="flex flex-col justify-around h-full gap-2 p-3 gap-y-4">
              <div>
                <h4 className="text-sm font-medium">Last Week</h4>
                <h2 className="text-3xl font-semibold ">6</h2>
              </div>
              <div className="flex flex-col gap-2">
                {[
                  {
                    title: "Email",
                    color: "#000",
                    value: 4,
                  },
                  {
                    title: "SMS",
                    color: "#FEC637",
                    value: 2,
                  },
                ].map((item, index) => (
                  <div
                    className="flex items-center justify-between"
                    key={index}
                  >
                    <div className="flex items-center gap-1 text-xs">
                      <div
                        className="w-[15px] h-[15px] "
                        style={{
                          backgroundColor: item.color,
                        }}
                      ></div>
                      <span className="font-semibold">{item.title}</span>
                    </div>
                    <div className="text-xs">{item.value}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                <h5 className="text-xs font-bold">Conversions</h5>
                {[
                  {
                    title: "Email",
                    color: "#000",
                    value: 24.54,
                  },
                  {
                    title: "SMS",
                    color: "#FEC637",
                    value: 88.05,
                  },
                ].map((item, index) => (
                  <div
                    className="flex items-center justify-between"
                    key={index}
                  >
                    <div className="flex items-center gap-1 text-xs">
                      <div
                        className="w-[15px] h-[15px] "
                        style={{
                          backgroundColor: item.color,
                        }}
                      ></div>
                      <span className="font-semibold">{item.title}</span>
                    </div>
                    <div className="text-xs">{item.value}%</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                <h5 className="text-xs font-bold">Unsubscribed</h5>
                {[
                  {
                    title: "Email",
                    color: "#000",
                    value: 4.54,
                  },
                  {
                    title: "SMS",
                    color: "#FEC637",
                    value: 8.05,
                  },
                ].map((item, index) => (
                  <div
                    className="flex items-center justify-between"
                    key={index}
                  >
                    <div className="flex items-center gap-1 text-xs">
                      <div
                        className="w-[15px] h-[15px] "
                        style={{
                          backgroundColor: item.color,
                        }}
                      ></div>
                      <span className="font-semibold">{item.title}</span>
                    </div>
                    <div className="text-xs">{item.value}%</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="w-full mt-5 bg-white rounded">
          <div className="flex items-center justify-between p-4">
            <h1 className="text-lg font-semibold">Campaigns</h1>
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

export default AnalyticsCampaignsPage;
