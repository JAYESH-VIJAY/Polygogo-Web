import { Tab } from "@headlessui/react";
import PersonalTab from "./Tab/PersonalTab";
import SecurityTab from "./Tab/SecurityTab";
import TagsTab from "./Tab/TagsTab";

function AccountPage() {
  return (
    <div>
      <Tab.Group>
        <Tab.List>
          <div className="flex border-b">
            {[
              {
                title: "Personal",
              },
              {
                title: "Security",
              },
              {
                title: "Tags",
              },
            ].map((item, index) => (
                <Tab key={index} className="outline-none">
                  {({ selected }) => (
                    <div
                      className={`p-3 min-w-[100px]  ${
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
          <Tab.Panels>
            <Tab.Panel>
              <PersonalTab />
            </Tab.Panel>
            <Tab.Panel>
              <SecurityTab />
            </Tab.Panel>
            <Tab.Panel>
              <TagsTab />
            </Tab.Panel>
          </Tab.Panels>
        </div>
      </Tab.Group>
    </div>
  );
}

export default AccountPage;
