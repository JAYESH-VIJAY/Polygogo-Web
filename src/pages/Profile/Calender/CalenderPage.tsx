import { Tab } from "@headlessui/react";
import CalendarTab from "./Tab/CalendarTab";

function CalenderPage() {
  return (
    <div>
      <Tab.Group>
        <Tab.List>
          <div className="flex border-b">
            {[
              {
                title: "Calendar",
              },
            ].map((item, index) => (
              <div key={index}>
                <Tab className="outline-none">
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
              </div>
            ))}
          </div>
        </Tab.List>
        <div className="mt-5">
          <Tab.Panels>
            <Tab.Panel>
              <CalendarTab />
            </Tab.Panel>
          </Tab.Panels>
        </div>
      </Tab.Group>
    </div>
  );
}

export default CalenderPage;
