import LineChart from "@/components/Chart/LineChart";
import PageHeading from "@/components/PageHeading";
import { Select, Table } from "antd";

function AnalyticsPage() {
  const data = [
    {
      key: "3",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSSNn8_M7J9iuGc2f-UDI0aSVzB7xkmWI5fSPqyMwZbX0X5o4XOaJM-cKCdcK7jp34aLQ&usqp=CAU",
      username: "G Brown",
      phoneNumber: "Sample Phone Number Title",
      email: "599",
      location: "New York",
      list: "Weekly Sale",
      marketing: "Yes",
    },
    {
      key: "3",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSSNn8_M7J9iuGc2f-UDI0aSVzB7xkmWI5fSPqyMwZbX0X5o4XOaJM-cKCdcK7jp34aLQ&usqp=CAU",
      username: "G Brown",
      phoneNumber: "Sample Phone Number Title",
      email: "599",
      location: "New York",
      marketing: "Yes",
      list: "Weekly Sale",
    },
    {
      key: "3",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSSNn8_M7J9iuGc2f-UDI0aSVzB7xkmWI5fSPqyMwZbX0X5o4XOaJM-cKCdcK7jp34aLQ&usqp=CAU",
      username: "G Brown",
      phoneNumber: "Sample Phone Number Title",
      email: "599",
      location: "New York",
      marketing: "Yes",
      list: "Weekly Sale",
    },
    {
      key: "3",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSSNn8_M7J9iuGc2f-UDI0aSVzB7xkmWI5fSPqyMwZbX0X5o4XOaJM-cKCdcK7jp34aLQ&usqp=CAU",
      username: "G Brown",
      phoneNumber: "Sample Phone Number Title",
      email: "599",
      location: "New York",
      marketing: "Yes",
      list: "Weekly Sale",
    },
    {
      key: "3",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSSNn8_M7J9iuGc2f-UDI0aSVzB7xkmWI5fSPqyMwZbX0X5o4XOaJM-cKCdcK7jp34aLQ&usqp=CAU",
      username: "G Brown",
      phoneNumber: "Sample Phone Number Title",
      email: "599",
      location: "New York",
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
        <div className="w-[150px] flex items-center gap-3">
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
            title="Analytics"
            content="Here is your quick Analytics overview"
          />
        </div>
        <div className="relative grid gap-4 mx-4 overflow-x-scroll lg:grid-cols-3 -top-[110px]">
          {/* // payments */}
          <div className="pr-4 bg-white rounded-md shadow-sm">
            <div className="flex items-center justify-between p-3">
              <h4 className="font-semibold">Payments</h4>
              <Select placeholder="Weekly" size="small" />
            </div>
            <LineChart />
          </div>
          {/* //Campaign */}
          <div className="pr-4 bg-white rounded-md shadow-sm">
            <div className="flex items-center justify-between p-3">
              <h4 className="font-semibold">Campaigns</h4>
              <div className="flex gap-2 ">
                <Select placeholder="Weekly" size="small" />
                <Select placeholder="SMS" size="small" />
              </div>
            </div>
            <LineChart />
          </div>
          {/* // Reviews */}
          <div className="pr-4 bg-white rounded-md shadow-sm">
            <div className="flex items-center justify-between p-3">
              <h4 className="font-semibold">Reviews</h4>
              <div className="flex gap-2 ">
                <Select placeholder="Google" size="small" />
                <Select placeholder="Trustpilot" size="small" />
              </div>
            </div>
            <LineChart />
          </div>
        </div>
      </div>
      <div>
        <div className="w-full mt-5 bg-white rounded">
          <div className="flex items-center justify-between p-4">
            <h1 className="text-lg font-semibold">Recent Contacts</h1>
            <div>
              <Select placeholder="Weekly" />
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

export default AnalyticsPage;
