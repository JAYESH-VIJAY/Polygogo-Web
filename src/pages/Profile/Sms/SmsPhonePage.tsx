import SingleLineInputField from "@/components/Input/SingleLineInputField";
import { Table, Upload } from "antd";
import { Form, Formik } from "formik";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";
import { TbDragDrop } from "react-icons/tb";
function SmsPhonePage() {
  const data = [
    {
      number: "Facebook",
      type: "Sep 10, 2023",
      region: "Sep 10, 2023",
      status: true,
      created: "Sep 10, 2023",
    },
  ];
  const columns = [
    {
      title: "Number",
      dataIndex: "number",
      key: "number",
      render: (text: string) => (
        <div className="flex  items-center w-[120px] gap-3 ">
          <span className="text-xs font-medium font-primary">{text}</span>
        </div>
      ),
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",

      render: (text: string) => (
        <div className="flex  items-center w-[120px] gap-3 ">
          <span className="text-xs font-medium font-primary">{text}</span>
        </div>
      ),
    },
    {
      title: "Supported Region",
      dataIndex: "region",
      key: "region",

      render: (text: string) => (
        <div className="flex  items-center w-[120px] gap-3 ">
          <span className="text-xs font-medium font-primary">{text}</span>
        </div>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",

      render: () => (
        <div className="flex  items-center w-[120px] gap-3 ">
          <span className="flex items-center justify-center w-6 h-6 text-xs font-medium bg-[#D1FADF] rounded-full font-primary">
            <BsCheck size={20} className="text-green-500" />
          </span>
        </div>
      ),
    },
    {
      title: "Created",
      dataIndex: "created",
      key: "created",

      render: (text: string) => (
        <div className="flex  items-center w-[120px] gap-3 ">
          <span className="text-xs font-medium font-primary">{text}</span>
        </div>
      ),
    },
    {
      title: "",
      dataIndex: "actions",
      key: "actions",

      render: () => (
        <div className="flex items-center justify-between w-full gap-3 ">
          <BiDotsVerticalRounded size={20} className="text-gray-400" />
        </div>
      ),
    },
  ];
  return (
    <>
      <div className="p-6 px-0 pb-2 mt-5 bg-white border border-gray-200 rounded-xl">
        <div className="items-center  ">
          <h3 className="mb-1 px-6 text-lg font-semibold text-gray-700">
            Sending Information
          </h3>
          <p className="text-xs px-6 text-[#667085] ">
            Your customer will receive SMS messages from the number listed below
          </p>
        </div>
        <div>
          <div className="mt-5">
            <Table
              pagination={{
                position: ["bottomCenter"],
              }}
              scroll={{ x: "800px" }}
              columns={columns}
              dataSource={data}
            />
          </div>
        </div>
      </div>
      <CompanyInformationForm />
    </>
  );
}

const CompanyInformationForm = () => {
  return (
    <>
      <div className="p-6 mt-5 bg-white border border-gray-200 rounded-xl">
        <Formik
          onSubmit={() => {}}
          enableReinitialize
          initialValues={{
            company: "",
            phoneNumber: "",
            website: "",
            email: "",
            street: "",
            city: "",
            zipCode: "",
            state: "",
            country: "",
          }}
          validationSchema={{}}
        >
          {({ handleSubmit }) => (
            <>
              <Form onSubmit={handleSubmit}>
                <div className="items-center pb-3 border-b border-gray-200 ">
                  <h4 className="mb-1 font-semibold text-gray-700 text-md">
                    Company Information
                  </h4>
                </div>
                <div>
                  <div className="grid gap-4 mt-5 sm:grid-cols-2">
                    <SingleLineInputField
                      name="company"
                      label="Company /Organization Name"
                      isRequired
                    />
                    <SingleLineInputField
                      name="phoneNumber"
                      label="Phone Number (optional)"
                    />
                    <SingleLineInputField name="website" label="Website URL" />
                    <SingleLineInputField
                      name="email"
                      label="Email Address (optional)"
                    />
                    <SingleLineInputField
                      name="street"
                      label="Street Address"
                      isRequired
                    />
                    <SingleLineInputField isRequired name="city" label="City" />
                    <SingleLineInputField
                      name="zipCode"
                      label="Zip/Postal Code"
                      isRequired
                    />
                    <SingleLineInputField
                      name="state"
                      label="State/Province"
                      isRequired
                    />
                    <SingleLineInputField
                      name="country"
                      label="Country"
                      isRequired
                    />
                  </div>
                </div>

                <div className="items-center pb-3 mt-4 border-b border-gray-200 ">
                  <h4 className="mb-1 font-semibold text-gray-700 text-md">
                    Company Information
                  </h4>
                  <div className="mt-4 h-[200px] ">
                    <Upload.Dragger className="">
                      <div className="flex flex-col gap-y-1">
                        <div className="flex justify-center">
                          <svg
                            width="36"
                            height="36"
                            viewBox="0 0 48 49"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.5002 5.07437C8.48038 5.07437 6.00015 7.55459 6.00015 10.5744C5.99734 10.7731 6.03407 10.9705 6.10819 11.1549C6.18231 11.3394 6.29235 11.5073 6.43191 11.6488C6.57148 11.7904 6.73779 11.9028 6.92118 11.9795C7.10456 12.0562 7.30137 12.0957 7.50015 12.0957C7.69894 12.0957 7.89575 12.0562 8.07913 11.9795C8.26252 11.9028 8.42883 11.7904 8.56839 11.6488C8.70796 11.5073 8.818 11.3394 8.89212 11.1549C8.96624 10.9705 9.00297 10.7731 9.00015 10.5744C9.00015 9.17614 10.1019 8.07437 11.5002 8.07437C11.6989 8.07718 11.8963 8.04046 12.0807 7.96634C12.2652 7.89222 12.4331 7.78218 12.5746 7.64261C12.7162 7.50304 12.8286 7.33673 12.9053 7.15335C12.982 6.96996 13.0215 6.77316 13.0215 6.57437C13.0215 6.37558 12.982 6.17878 12.9053 5.99539C12.8286 5.812 12.7162 5.6457 12.5746 5.50613C12.4331 5.36656 12.2652 5.25652 12.0807 5.1824C11.8963 5.10828 11.6989 5.07156 11.5002 5.07437ZM17.5002 5.07437C16.6722 5.07437 16.0002 5.74637 16.0002 6.57437C16.0002 7.40237 16.6722 8.07437 17.5002 8.07437C18.3282 8.07437 19.0002 7.40237 19.0002 6.57437C19.0002 5.74637 18.3282 5.07437 17.5002 5.07437ZM23.5002 5.07437C22.6722 5.07437 22.0002 5.74637 22.0002 6.57437C22.0002 7.40237 22.6722 8.07437 23.5002 8.07437C24.3282 8.07437 25.0002 7.40237 25.0002 6.57437C25.0002 5.74637 24.3282 5.07437 23.5002 5.07437ZM29.5002 5.07437C29.3014 5.07156 29.104 5.10828 28.9196 5.1824C28.7351 5.25652 28.5673 5.36656 28.4257 5.50613C28.2841 5.6457 28.1717 5.812 28.095 5.99539C28.0183 6.17878 27.9788 6.37558 27.9788 6.57437C27.9788 6.77316 28.0183 6.96996 28.095 7.15335C28.1717 7.33673 28.2841 7.50304 28.4257 7.64261C28.5673 7.78218 28.7351 7.89222 28.9196 7.96634C29.104 8.04046 29.3014 8.07718 29.5002 8.07437C30.8984 8.07437 32.0002 9.17614 32.0002 10.5744C31.9973 10.7731 32.0341 10.9705 32.1082 11.1549C32.1823 11.3394 32.2923 11.5073 32.4319 11.6488C32.5715 11.7904 32.7378 11.9028 32.9212 11.9795C33.1046 12.0562 33.3014 12.0957 33.5002 12.0957C33.6989 12.0957 33.8957 12.0562 34.0791 11.9795C34.2625 11.9028 34.4288 11.7904 34.5684 11.6488C34.708 11.5073 34.818 11.3394 34.8921 11.1549C34.9662 10.9705 35.003 10.7731 35.0002 10.5744C35.0002 7.55459 32.5199 5.07437 29.5002 5.07437ZM20.5002 14.0744C17.4804 14.0744 15.0002 16.5546 15.0002 19.5744V37.5744C15.0002 40.5941 17.4804 43.0744 20.5002 43.0744H38.5002C41.5199 43.0744 44.0002 40.5941 44.0002 37.5744V19.5744C44.0002 16.5546 41.5199 14.0744 38.5002 14.0744H20.5002ZM7.50015 15.0744C6.67215 15.0744 6.00015 15.7464 6.00015 16.5744C6.00015 17.4024 6.67215 18.0744 7.50015 18.0744C8.32815 18.0744 9.00015 17.4024 9.00015 16.5744C9.00015 15.7464 8.32815 15.0744 7.50015 15.0744ZM20.5002 17.0744H38.5002C39.8984 17.0744 41.0002 18.1761 41.0002 19.5744V37.5744C41.0002 38.9726 39.8984 40.0744 38.5002 40.0744H20.5002C19.1019 40.0744 18.0002 38.9726 18.0002 37.5744V19.5744C18.0002 18.1761 19.1019 17.0744 20.5002 17.0744ZM7.50015 21.0744C6.67215 21.0744 6.00015 21.7464 6.00015 22.5744C6.00015 23.4024 6.67215 24.0744 7.50015 24.0744C8.32815 24.0744 9.00015 23.4024 9.00015 22.5744C9.00015 21.7464 8.32815 21.0744 7.50015 21.0744ZM26.5021 23.0802C26.4214 23.0662 26.3365 23.0755 26.258 23.1095C26.102 23.1765 26.0002 23.3321 26.0002 23.5021V32.0763C26.0002 32.2413 26.0943 32.3901 26.2423 32.4611C26.3903 32.5331 26.5684 32.5133 26.6974 32.4103L28.4435 31.0119L30.0959 34.8146C30.1899 35.0316 30.4414 35.1323 30.6584 35.0373L31.9709 34.4669C32.1879 34.3729 32.2866 34.1195 32.1916 33.9025L31.3224 31.8986L30.5412 30.0998L32.8029 29.838C32.9689 29.819 33.1083 29.706 33.1603 29.547C33.2123 29.39 33.169 29.2157 33.047 29.1017L26.7209 23.1896C26.6584 23.1316 26.5829 23.0942 26.5021 23.0802ZM7.47672 27.0529C7.07923 27.0591 6.70047 27.2228 6.42361 27.5081C6.14676 27.7934 5.99445 28.1769 6.00015 28.5744C6.00015 31.5941 8.48038 34.0744 11.5002 34.0744C11.6989 34.0772 11.8963 34.0405 12.0807 33.9663C12.2652 33.8922 12.4331 33.7822 12.5746 33.6426C12.7162 33.503 12.8286 33.3367 12.9053 33.1533C12.982 32.97 13.0215 32.7732 13.0215 32.5744C13.0215 32.3756 12.982 32.1788 12.9053 31.9954C12.8286 31.812 12.7162 31.6457 12.5746 31.5061C12.4331 31.3666 12.2652 31.2565 12.0807 31.1824C11.8963 31.1083 11.6989 31.0716 11.5002 31.0744C10.1019 31.0744 9.00015 29.9726 9.00015 28.5744C9.00303 28.3736 8.96558 28.1743 8.89002 27.9883C8.81445 27.8023 8.70231 27.6333 8.56024 27.4914C8.41818 27.3495 8.24907 27.2376 8.06295 27.1623C7.87683 27.0869 7.67748 27.0497 7.47672 27.0529Z"
                              fill="#475467"
                            />
                          </svg>
                        </div>
                        <h4 className="mb-1 font-semibold text-gray-700 text-lg">
                          Drag and Drop or select image
                        </h4>
                        <p className="text-sm text-[#667085]">
                          drag and drop JPG, JPEG and PNG
                        </p>
                      </div>
                    </Upload.Dragger>
                  </div>
                </div>

                <div className="p-6 mt-5 bg-white border border-gray-200 rounded-xl">
                  <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                    <h3 className="items-center justify-between w-full mb-1 text-lg font-semibold text-gray-700 sm:flex">
                      <span>SMS Messages Add-ons</span>
                      <div>
                        <button className="px-6 py-2 text-sm font-semibold border bg-[#F9FAFB] rounded-full border-[#98A2B3] text-[#98A2B3]">
                          Update SMS Messages Add-ons
                        </button>
                      </div>
                    </h3>
                  </div>
                  <div>
                    <div className="grid gap-4 mt-5 sm:grid-cols-2">
                      <SingleLineInputField
                        name="organizationalPrefix"
                        label="Organizational Prefix"
                        isRequired
                      />
                      <SingleLineInputField
                        name="language"
                        isRequired
                        label="Opt-out Language"
                      />
                    </div>
                  </div>
                </div>
              </Form>
            </>
          )}
        </Formik>
      </div>
    </>
  );
};
export default SmsPhonePage;
