import { Tab } from "@headlessui/react";
import BillingOverviewTab from "./Tab/BillingOverviewTab";
import CreatePlanTab from "./Tab/CreatePlanTab";
import PreferencesTab from "./Tab/PreferencesTab";
import PaymentHistory from "./Tab/PaymentHistory";

import AccountUsageTab from "./Tab/AccountUsageTab";

function BillingPage() {
  return (
    <div>
      <Tab.Group>
        <div className="jayesh">
          <Tab.List>
            <div className="flex gap-4 border-b">
              {[
                {
                  title: "Overview",
                },
                {
                  title: "Create your plan",
                },
                {
                  title: "Account Usage",
                },
                {
                  title: "Preferences",
                },
                {
                  title: "Payment history",
                },
              ].map((item, index) => (
                  <Tab key={index} className="outline-none">
                    {({ selected }) => (
                      <div
                        className={`p-3 min-w-[100px]  ${
                          selected && "border-b-2 border-primary  "
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
              <BillingOverviewTab />
            </Tab.Panel>
            <Tab.Panel>
              <CreatePlanTab />
            </Tab.Panel>
            <Tab.Panel>
              <AccountUsageTab />
            </Tab.Panel>
            <Tab.Panel>
              <PreferencesTab />
            </Tab.Panel>
            <Tab.Panel>
              <PaymentHistory />
            </Tab.Panel>
          </Tab.Panels>
        </div>
      </Tab.Group>
    </div>
  );
}

export default BillingPage;
