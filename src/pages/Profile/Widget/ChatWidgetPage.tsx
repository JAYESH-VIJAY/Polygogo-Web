import { Tab } from "@headlessui/react";
import ChatButtonTab from "./Tab/ChatButtonTab";
import ChatWidget from "./Tab/ChatWidget";

function ChatWidgetPage() {
  return (
    <div>
      <Tab.Group>
        <div className="jayesh">
          <Tab.List>
            <div className="flex gap-4 border-b">
              {[
                {
                  title: "Chat Button",
                },
                {
                  title: "Chat Widget",
                },
              ].map((item, index) => (
                <Tab key={index} className="outline-none">
                  {({ selected }) => (
                    <div
                      className={`p-3 min-w-[100px]  ${
                        selected && "border-b-2 border-primaryDark "
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
        </div>

        <div className="mt-5">
          <Tab.Panels>
            <Tab.Panel>
              <ChatButtonTab />
            </Tab.Panel>
            <Tab.Panel>
              <ChatWidget />
            </Tab.Panel>
          </Tab.Panels>
        </div>
      </Tab.Group>
    </div>
  );
}

export default ChatWidgetPage;
