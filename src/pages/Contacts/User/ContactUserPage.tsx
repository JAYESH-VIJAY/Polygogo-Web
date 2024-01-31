import PgButton from "@/components/Input/PgButton";
import DefaultCardLayout from "@/layout/DefaultCardLayout";
import { Tab } from "@headlessui/react";
import { Rate } from "antd";
import { BiCalendarAlt } from "react-icons/bi";
import { FiArrowUpRight, FiMail, FiPhoneCall } from "react-icons/fi";
import { MdOutlineAttachMoney } from "react-icons/md";
import GeneralTab from "./Tab/GeneralTab";
import ActivityTab from "./Tab/ActivityTab";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

function ContactUserPage() {
  return (
    <div>
      <Link to="/contacts" className="flex items-center mb-4">
        <span className="text-[#A0AEC0]">
          <IoIosArrowBack size={20} />
        </span>
        <div className="text-lg font-medium">Contacts</div>
      </Link>
      <div className="flex flex-col gap-3 xl:grid-cols-4 lg:grid-cols-3 lg:grid">
        <DefaultCardLayout>
          <UserSideBar />
        </DefaultCardLayout>

        <div className="lg:col-span-2 xl:col-span-3">
          <DefaultCardLayout>
            <div>
              <Tab.Group>
                <div className="">
                  <Tab.List>
                    <div className="flex gap-4 border-b">
                      {[
                        {
                          title: "General",
                        },
                        {
                          title: "Activity",
                        },
                      ].map((item, index) => (
                          <Tab key={index} className="outline-none">
                            {({ selected }) => (
                              <div
                                className={`p-3 min-w-[100px]  ${
                                  selected && "border-b border-primary "
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
                </div>

                <div className="mt-5">
                  <Tab.Panels>
                    <Tab.Panel>
                      <GeneralTab />
                    </Tab.Panel>
                    <Tab.Panel>
                      <ActivityTab />
                    </Tab.Panel>
                  </Tab.Panels>
                </div>
              </Tab.Group>
            </div>
          </DefaultCardLayout>
        </div>
      </div>
    </div>
  );
}

const UserSideBar = () => {
  return (
    <div className="flex flex-col items-center space-y-2 lg:block ">
      <div className="flex flex-col items-center w-full pb-5 border-b">
        <div className="flex items-center justify-center w-20 h-20 mb-5 font-bold text-gray-700 bg-gray-300 rounded-full">
          PC
        </div>
        <div className="text-center">
          <h3 className="mb-1 text-2xl font-semibold text-primaryDark">
            Pristia Candra
          </h3>
          <p className="text-sm font-medium text-gray-400 ">
            Created Date: Sep 20, 2023
          </p>
        </div>
      </div>
      <div className="w-full pt-3 border-b">
        {[
          {
            icon: <FiMail size={18} />,
            value: "pristiacandra@gmail.com",
          },
          {
            icon: <FiPhoneCall size={18} />,
            value: "001 832 1213",
          },
          {
            icon: <BiCalendarAlt size={18} />,
            value: "Last Contact at Sep 20, 2019",
          },
          {
            icon: <MdOutlineAttachMoney size={20} />,
            value: "$340",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 mb-5 text-primaryDark"
          >
            <span>{item.icon}</span>
            <span className="text-sm font-light ">{item.value}</span>
          </div>
        ))}
      </div>
      {/* //Platform */}
      <div className="w-full py-3 border-b">
        <label className="text-xs font-normal  text-[#687588]">Platform</label>
        <h6 className="mt-1 text-sm font-medium text-primaryDark">
          Facebook, Instagram, Google
        </h6>
      </div>
      <div className="w-full py-3 border-b">
        <label className="text-xs font-normal text-[#687588]">Lists</label>
        <h6 className="mt-1 text-sm font-medium text-primaryDark">
          TechTitans Circle
        </h6>
      </div>
      {/* //Reviews */}
      <div className="w-full py-3 border-b">
        <div className="pb-2 text-xs font-normal text-primaryDark">Reviews</div>
        {[
          { rate: 3, platform: "Facebook" },
          { rate: 5, platform: "Instagram" },
          { rate: 2, platform: "Google" },
        ].map((item, index) => (
          <div key={index} className="flex items-center gap-4 mb-2">
            <div className="flex items-center text-sm">
              <Rate
                disabled
                value={item.rate}
                style={{
                  fontSize: 16,
                  color: "#FDB022",
                }}
              />
            </div>
            <h6 className="mt-1 text-sm font-normal text-primaryDark">
              {item.platform}
            </h6>
          </div>
        ))}
      </div>
      {/* //Discussion */}
      <div className="w-full py-3">
        <div className="pb-2 text-xs font-normal text-primaryDark">
          Discussion
        </div>
        <div className="flex items-end justify-between gap-3 mb-2">
          <span className="flex items-center text-sm font-medium text-primaryDark">
            Online Payment Issue...
            <span>
              <FiArrowUpRight className="text-primary" />
            </span>
          </span>
          <span className="text-xs text-gray-400">4d ago</span>
        </div>

        <div className="mt-5">
          <PgButton title="Action" buttonType="primaryDark" />
        </div>
      </div>
    </div>
  );

  //   Instagram, Google
};

export default ContactUserPage;
