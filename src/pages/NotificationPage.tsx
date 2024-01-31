import DefaultCardLayout from "@/layout/DefaultCardLayout";
import React from "react";
import { FiBell, FiSettings } from "react-icons/fi";
import { LuUsers2 } from "react-icons/lu";

function NotificationPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <DefaultCardLayout>
        <div className="">
          {[
            {
              icon: (
                <div className="flex items-center justify-center w-10 h-10 text-xl  text-[#E03137] bg-[#FFEDEC] rounded-full">
                  <FiBell />
                </div>
              ),
              title: "Training session reminder",
              time: "Now",
              activity:
                "Don't forget to join our upcoming training session on the HR Management Dashboard. Learn best practices and get the most out of our system.",
            },
            {
              icon: (
                <div className="flex items-center justify-center w-10 h-10 text-xl  text-[#111827] bg-[#F1F2F4] rounded-full">
                  <FiSettings />
                </div>
              ),
              title: "New Integration Announcement.",
              time: "9:00 AM",
              activity:
                "Don't forget to join our upcoming training session on the HR Management Dashboard. Learn best practices and get the most out of our system.",
            },
            {
              icon: (
                <div className="flex items-center justify-center w-10 h-10 text-xl  text-[#27A376] bg-[#E7F7EF] rounded-full">
                  <LuUsers2 />
                </div>
              ),
              title: "User feedback survey",
              time: "1 Oct 2022",
              activity:
                "Don't forget to join our upcoming training session on the HR Management Dashboard. Learn best practices and get the most out of our system.",
            },
            {
              icon: (
                <div className="flex items-center justify-center w-10 h-10 text-xl  text-[#E03137] bg-[#FFEDEC] rounded-full">
                  <FiBell />
                </div>
              ),
              title: "Overdue Performance Review",
              time: "20 Sep 2022",
              activity:
                "Your performance review was due on 1 Oct 2022 . Please contact your manager to schedule a review as soon as possible.",
            },
            {
              icon: (
                <div className="flex items-center justify-center w-10 h-10 text-xl  text-[#27A376] bg-[#E7F7EF] rounded-full">
                  <LuUsers2 />
                </div>
              ),
              title: "New Training Opportunity",
              time: "1 Sep 2022",
              activity:
                "A new training course has been added to the learning management system. Click here to view the course and enroll.",
            },
          ].map((activity, index) => (
            <div
              key={index}
              className={`flex flex-col sm:flex-row items-start gap-3 p-5 mb-4 rounded-lg border border-gray-100`}
            >
              <div className="">{activity.icon}</div>
              <div className="flex-1">
                <div className="flex justify-between flex-1 mb-2">
                  <div className="mb-1 text-sm font-medium text-primaryDark">
                    {activity.title}
                  </div>
                </div>
                <div className="text-xs font-normal text-gray-400">
                  {activity.activity}
                </div>
              </div>
              <div className="text-xs text-[#A0AEC0]">{activity.time}</div>
            </div>
          ))}
        </div>
      </DefaultCardLayout>
    </div>
  );
}

export default NotificationPage;
