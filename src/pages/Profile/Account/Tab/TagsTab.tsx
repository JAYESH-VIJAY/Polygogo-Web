import PgButton from "@/components/Input/PgButton";
import PgButtonBorder from "@/components/Input/PgButtonBorder";
import PageHeading from "@/components/PageHeading";
import { Table } from "antd";

const TagsTab = () => {
  const data = [
    {
      tags: "Attentive",
      campaigns: "2",
      lists: "123",
      flows: "1",
    },
    {
      tags: "Blog Subscribers",
      campaigns: "2",
      lists: "0",
      flows: "1",
    },
    {
      tags: "Clickfunnels 2.23.22",
      campaigns: "0",
      lists: "12",
      flows: "23",
    },
    {
      tags: "Blue Line - Lead Pages",
      campaigns: "23",
      lists: "5",
      flows: "1",
    },
    {
      tags: "Attentive",
      campaigns: "2",
      lists: "123",
      flows: "1",
    },
  ];
  const columns = [
    {
      title: "Tags",
      dataIndex: "tags",
      key: "tags",
      width: 150,
      render: (text: string) => (
        <div className=" font-medium  font-primary">{text}</div>
      ),
    },
    {
      title: "Campaigns",
      dataIndex: "campaigns",
      key: "campaigns",
      width: 120,
      render: (text: string) => (
        <div className="flex items-center gap-3">
          <span className="font-light font-primary">{text}</span>
        </div>
      ),
    },
    {
      title: "Lists/Segments",
      dataIndex: "lists",
      key: "lists",
      width: 120,
      render: (text: string) => (
        <div className=" flex items-center gap-3">
          <span className="font-light font-primary">{text}</span>
        </div>
      ),
    },
    {
      title: "Flows",
      dataIndex: "flows",
      key: "flows",
      width: 100,
      render: (text: string) => (
        <div className=" flex items-center gap-3">
          <span className="font-light font-primary">{text}</span>
        </div>
      ),
    },
  ];
  return (
    <>
      <div className="">
        <div className="grid items-center gap-3 md:grid-cols-2">
          <PageHeading title="Tags" isShowContent={false} />
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <button className="w-full p-3 border border-[#263238] rounded-full ">
              <span className="text-sm font-medium text-primaryDark">
                Create Tag Group
              </span>
            </button>
            <PgButton title="Create Tag" />
          </div>
        </div>

        {/* // Table   */}
        <div className="mt-10">
          <Table
            pagination={{
              position: ["bottomCenter"],
            }}
            scroll={{ x: "1000px" }}
            columns={columns}
            dataSource={data}
            // className="w-[3000px]"
          />
        </div>
      </div>
    </>
  );
};
export default TagsTab;
