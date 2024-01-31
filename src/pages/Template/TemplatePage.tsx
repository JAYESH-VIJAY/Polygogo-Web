// import Dropdown from "@/components/Input/Dropdown";
import InputField from "@/components/Input/InputField";
import PgSelect from "@/components/Input/PgSelect";
import DefaultCardLayout from "@/layout/DefaultCardLayout";
import { Checkbox, Table, Modal } from "antd";
import { Form, Formik } from "formik";
import { useState } from "react";

function TemplatePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const dataSource = [
    {
      key: "1",
      title: "Title 1",
      content:
        "Content Here, Making it great this is looks like flower and i am the creator of this world..",
      type: "Facebook",
      date: "Sep 10, 2023",
    },
    {
      key: "2",
      title: "Title 2",
      content:
        "Content Here, Making it great this is looks like flower and i am the creator of this world..",
      type: "Facebook",
      date: "Sep 10, 2023",
    },
    {
      key: "3",
      title: "Title 3",
      content:
        "Content Here, Making it great this is looks like flower and i am the creator of this world..",
      type: "Facebook",
      date: "Sep 10, 2023",
    },
    {
      key: "4",
      title: "Title 4",
      content:
        "Content Here, Making it great this is looks like flower and i am the creator of this world..",
      type: "Facebook",
      date: "Sep 10, 2023",
    },
    {
      key: "5",
      title: "Title 5",
      content:
        "Content Here, Making it great this is looks like flower and i am the creator of this world..",
      type: "Facebook",
      date: "Sep 10, 2023",
    },
    {
      key: "6",
      title: "Title 6",
      content:
        "Content Here, Making it great this is looks like flower and i am the creator of this world..",
      type: "Facebook",
      date: "Sep 10, 2023",
    },
  ];

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text: string) => (
        <div className="flex items-center gap-3 w-[100px]">
          <Checkbox />
          <span className="font-semibold text-md font-primary">{text}</span>
        </div>
      ),
    },
    {
      title: "Content",
      dataIndex: "content",
      key: "content",
      render: (text: string) => (
        <div className="flex items-center gap-3 w-[350px] text-sm">
          <span className="font-light font-primary">{text}</span>
        </div>
      ),
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      render: (text: string) => (
        <div className="flex items-center gap-3 w-[80px] ">
          <span className="font-light font-primary">{text}</span>
        </div>
      ),
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (text: string) => (
        <div className="w-[100px] flex items-center gap-3">
          <span className="font-light font-primary">{text}</span>
        </div>
      ),
    },
  ];
  return (
    <div>
      <DefaultCardLayout>
        <div className="flex flex-wrap items-center justify-between gap-4 ">
          <div>
            <h1 className="font-semibold text-[#344054] text-2xl stext-sm">
              Reply templates
            </h1>
            <p className="text-sm text-[#667085] mt-1">
              Create and manage response templates for omni-channel inbox{" "}
            </p>
          </div>
          <div>
            <Modal
              title="Create a Template"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
              footer={null}
              width={700}
            >
              <Formik
                initialValues={{}}
                onSubmit={(values) => {
                  // handleOk();
                  // console.log(values);
                }}
              >
                {() => (
                  <Form>
                    <div className="flex flex-col items-center gap-4 sm:flex-row">
                      <div className="w-full">
                        <InputField name="title" label="Title" />
                      </div>
                      <div className="w-full">
                        <PgSelect
                          label="Type"
                          options={[
                            { value: "All Reviews", label: "All Reviews" },
                          ]}
                          placeholder="Year to Date"
                          padding={2}
                          isRequired
                        />
                      </div>
                    </div>
                    <div>
                      <InputField
                        name="content"
                        input="textarea"
                        label="Content"
                      />
                    </div>
                    <button
                      type="submit"
                      className="border border-[#3787FF] flex items-center  text-sm px-6 rounded-full p-2 mt-4 text-white bg-[#3787FF]"
                    >
                      Save Template
                    </button>
                  </Form>
                )}
              </Formik>
            </Modal>
            <button
              onClick={showModal}
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
              Create New Template
            </button>
          </div>
        </div>
        <div className="mt-6 jayesh">
          <Table pagination={false} dataSource={dataSource} columns={columns} />
        </div>
      </DefaultCardLayout>
    </div>
  );
}

export default TemplatePage;
