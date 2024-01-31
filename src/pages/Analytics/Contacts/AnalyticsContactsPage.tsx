import LineChart from "@/components/Chart/LineChart";
import PageHeading from "@/components/PageHeading";
import { Select, Table } from "antd";

function AnalyticsContactsPage() {
  const data = [
    {
      key: "3",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSSNn8_M7J9iuGc2f-UDI0aSVzB7xkmWI5fSPqyMwZbX0X5o4XOaJM-cKCdcK7jp34aLQ&usqp=CAU",
      username: "G Brown",
      phoneNumber: "(323)861-5463",
      email: "a@gmail.com",
      channel: "Google",
      location: "New York",
      list: "Weekly Sale",
      marketing: "Yes",
    },
    {
      key: "3",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSSNn8_M7J9iuGc2f-UDI0aSVzB7xkmWI5fSPqyMwZbX0X5o4XOaJM-cKCdcK7jp34aLQ&usqp=CAU",
      username: "G Brown",
      phoneNumber: "(323)861-5463",
      email: "a@gmail.com",
      channel: "Google",
      location: "New York",
      marketing: "Yes",
      list: "Weekly Sale",
    },
    {
      key: "3",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSSNn8_M7J9iuGc2f-UDI0aSVzB7xkmWI5fSPqyMwZbX0X5o4XOaJM-cKCdcK7jp34aLQ&usqp=CAU",
      username: "G Brown",
      phoneNumber: "(323)861-5463",
      email: "a@gmail.com",
      channel: "Instagram",
      location: "New York",
      marketing: "Yes",
      list: "Weekly Sale",
    },
    {
      key: "3",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSSNn8_M7J9iuGc2f-UDI0aSVzB7xkmWI5fSPqyMwZbX0X5o4XOaJM-cKCdcK7jp34aLQ&usqp=CAU",
      username: "G Brown",
      phoneNumber: "(323)861-5463",
      email: "a@gmail.com",
      channel: "Twitter",
      location: "New York",
      marketing: "Yes",
      list: "Weekly Sale",
    },
    {
      key: "3",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSSNn8_M7J9iuGc2f-UDI0aSVzB7xkmWI5fSPqyMwZbX0X5o4XOaJM-cKCdcK7jp34aLQ&usqp=CAU",
      username: "G Brown",
      phoneNumber: "(323)861-5463",
      email: "a@gmail.com",
      location: "New York",
      channel: "Twitter",
      list: "Weekly Sale",
      marketing: "Yes",
    },
  ];

  const columns = [
    {
      title: "User Name",
      dataIndex: "username",
      key: "username",
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
      title: "Channel",
      dataIndex: "channel",
      key: "channel",

      render: (text: string) => (
        <div className=" w-[100px]  font-primary">{text}</div>
      ),
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",

      render: (text: string) => (
        <div className=" w-[250px]  font-primary">{text}</div>
      ),
    },
    {
      title: "Email address",
      dataIndex: "email",
      key: "email",
      render: (text: string) => (
        <div className="w-[150px] flex items-center gap-3">
          <span className="font-medium font-primary">${text}</span>
        </div>
      ),
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
      render: (text: string) => (
        <div className="w-[100px] flex items-center gap-3">
          <span className="font-medium font-primary">{text}</span>
        </div>
      ),
    },
    {
      title: "Marketing Opt-in",
      dataIndex: "marketing",
      key: "marketing",
      render: (text: string) => (
        <div className="w-[50px] flex items-center gap-3">
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
          <span className="font-medium font-primary">{text}</span>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="relative   lg:h-[390px]">
        <div className="p-4 rounded-md h-[200px] bg-primaryDark">
          <PageHeading
            isDark={false}
            title="Inbound Leads"
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
            <div className="flex flex-col gap-2 p-3 gap-y-4">
              <h4 className="text-base font-medium">Last Week</h4>
              <h2 className="text-3xl font-semibold">13</h2>
              {/* // Gap */}
              {[
                {
                  bg: "#000",
                  label: "Email",
                },
                {
                  bg: "#FEC637",
                  label: "SMS",
                },
                {
                  bg: "#5F87D6",
                  label: "Web Chat",
                },
                {
                  bg: "#FA5B5B",
                  label: "Google Business",
                },
                {
                  bg: "#36AA48",
                  label: "Trustpilot Inbox",
                },
              ].map((item, index) => (
                <div className="flex items-center gap-1 text-xs" key={index}>
                  <div
                    className="w-[15px] h-[15px] "
                    style={{
                      backgroundColor: item.bg,
                    }}
                  ></div>
                  <span className="font-semibold"> {item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="w-full mt-5 bg-white rounded">
          <div className="flex items-center justify-between p-4">
            <h1 className="text-lg font-semibold">Contacts</h1>
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

export default AnalyticsContactsPage;
