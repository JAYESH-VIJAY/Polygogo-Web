import { Tab } from "@headlessui/react";
import MembersTab from "./Tab/MembersTab";
import SettingsTab from "./Tab/SettingsTab";
import SignupForms from "./Tab/SignupForms";
import SubscribeTab from "./Tab/SubscribeTab";
import ImportsTab from "./Tab/ImportsTab";
import DefaultCardLayout from "@/layout/DefaultCardLayout";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

function ContactListDetails() {
  return (
    <>
      <Link to="/contacts/lists" className="flex items-center mb-4">
        <span className="text-[#A0AEC0]">
          <IoIosArrowBack size={20} />
        </span>
        <div className="text-lg font-medium">All List</div>
      </Link>
      <DefaultCardLayout>
        <Tab.Group>
          <Tab.List className="jayesh border-b">
            <div className="flex ">
              {[
                {
                  title: "Members (0)",
                },
                {
                  title: "Settings",
                },
                {
                  title: "Signup forms",
                },
                {
                  title: "Subscribe & Preferences Page",
                },
                {
                  title: "Imports",
                },
              ].map((item, index) => (
                <Tab key={index} className="outline-none">
                  {({ selected }) => (
                    <div
                      className={`p-3 min-w-[100px]  ${
                        selected && "border-b-2  border-primaryDark "
                      } `}
                    >
                      <span
                        className={`text-sm font-medium ${
                          selected ? "text-primaryDark" : "text-gray-400"
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
          <div className="mt-5 ">
            <Tab.Panels>
              <Tab.Panel>
                <MembersTab />
              </Tab.Panel>
              <Tab.Panel>
                <SettingsTab />
              </Tab.Panel>
              <Tab.Panel>
                <SignupForms />
              </Tab.Panel>
              <Tab.Panel>
                <SubscribeTab />
              </Tab.Panel>
              <Tab.Panel>
                <ImportsTab />
              </Tab.Panel>
            </Tab.Panels>
          </div>
        </Tab.Group>
      </DefaultCardLayout>
    </>
  );
}

export default ContactListDetails;
