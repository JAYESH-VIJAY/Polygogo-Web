import LineChart from "@/components/Chart/LineChart";
import PageHeading from "@/components/PageHeading";
import { Rate, Select, Table } from "antd";

export default function AnalyticsReviewsPage() {
  const data = [
    {
      username: "Olvia GmbH",
      imgUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80",
      channel: "Facebook",
      review: 4,
      email: "olivia@untitledui.com",
      phoneNumber: "(323)861-5463",
      location: "Willowbrook Springs",
      date: "Sep 10, 2023",
    },
  ];

  const columns = [
    {
      title: "User Name",
      dataIndex: "username",
      key: "username",
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
      title: "Channel",
      dataIndex: "channel",
      key: "channel",
      render: (text: string) => (
        <div className=" w-[150px]  font-primary">{text}</div>
      ),
    },
    {
      title: "Overall Review",
      dataIndex: "review",
      key: "review",
      render: (value: number) => (
        <div className=" w-[150px]  font-primary">
          <Rate
            value={value}
            count={5}
            style={{
              fontSize: "15px",
            }}
          />
        </div>
      ),
    },

    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (text: string) => (
        <div className=" w-[150px]  font-primary">{text}</div>
      ),
    },

    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",

      render: (text: string) => (
        <div className=" w-[150px]  font-primary">{text}</div>
      ),
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
      render: (text: string) => (
        <div className="w-[150px] flex items-center gap-3">
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
  ];

  return (
    <>
      <div className="relative   lg:h-[390px]">
        <div className="p-4 rounded-md h-[200px] bg-primaryDark">
          <PageHeading
            isDark={false}
            title="Reviews"
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
              <div>
                <h4 className="text-sm font-medium">Last Week</h4>
                <h2 className="text-3xl font-semibold ">49</h2>
              </div>
              <div className="flex flex-col gap-2">
                {[
                  {
                    title: "Google Business",
                    color: "#FA5B5B",
                    value: 31,
                  },
                  {
                    title: "Trustpilot",
                    color: "#36AA48",
                    value: 18,
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
                      <span className="font-semibold"> Google Business</span>
                    </div>
                    <div className="text-xs">31</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                {[
                  {
                    title: "Positive",
                    color: "#33B24F",
                    value: 80.12,
                  },
                  {
                    title: "Negative",
                    color: "#899099",
                    value: 19.88,
                  },
                ].map((item, index) => (
                  <div
                    className="flex items-center justify-between"
                    key={index}
                  >
                    <div className="flex items-center gap-1 text-xs">
                      <span className="font-semibold">{item.title}</span>
                    </div>
                    <div
                      className="text-xs"
                      style={{
                        color: item.color,
                      }}
                    >
                      {item.value}%
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <h4 className="text-sm font-medium">Overall Rating</h4>
                <h2 className="text-3xl font-semibold ">3.7</h2>
              </div>
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
