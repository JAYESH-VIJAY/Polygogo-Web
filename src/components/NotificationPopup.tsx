import PgNotification from "@/assets/dashboard/PgNotification";
import { Menu, Transition } from "@headlessui/react";
import { BsThreeDots } from "react-icons/bs";
import PgButton from "./Input/PgButton";
import { FiBell, FiSettings } from "react-icons/fi";
import { LuUsers2 } from "react-icons/lu";
import { Link } from "react-router-dom";

function NotificationPopup() {
  return (
    <div className=" sm:block">
      <Menu>
        <Menu.Button>
          <div className=" hidden min-[320px]:inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-white  align-middle hover:bg-gray-50  transition-all text-xs ">
            <PgNotification />
          </div>
        </Menu.Button>
        <div className={`absolute top-[60px] sm:right-[10%] right-5 z-20 `}>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <div className="flex drop-shadow-xl flex-col rounded-3xl w-full max-w-[350px] p-5 bg-white border-[1.8px] border-gray-300">
              <div className="flex items-center justify-between font-medium text-primaryDark">
                <span className="text-md">Notification</span>
                <span>
                  <BsThreeDots size={20} />
                </span>
              </div>
              <NotificationList />
              <Menu.Item>
                {({ close }) => (
                  <Link to="/notification" onClick={close}>
                    <PgButton
                      title="Show All Notifications"
                      buttonType="primaryDark"
                    />
                  </Link>
                )}
              </Menu.Item>
            </div>
          </Transition>
        </div>
      </Menu>
    </div>
  );
}

const NotificationList = () => {
  return (
    <>
      <div className="mt-5">
        {[
          {
            icon: (
              <div className="flex items-center justify-center w-10 h-10 text-xl  text-[#E03137] bg-[#FFEDEC] rounded-full">
                <FiBell />
              </div>
            ),
            title: "Training session reminder",
            time: "Now",
            activity: "Don't forget to join our upcoming...",
          },
          {
            icon: (
              <div className="flex items-center justify-center w-10 h-10 text-xl  text-[#111827] bg-[#F1F2F4] rounded-full">
                <FiSettings />
              </div>
            ),
            title: "New integration anno...",
            time: "9:00 AM",
            activity: "Our HR Management Dashboard  ...",
          },
          {
            icon: (
              <div className="flex items-center justify-center w-10 h-10 text-xl  text-[#27A376] bg-[#E7F7EF] rounded-full">
                <LuUsers2 />
              </div>
            ),
            title: "User feedback survey",
            time: "1 Oct 2022",
            activity: "We want to hear from you! Take our ...",
          },
        ].map((activity, index) => (
          <Menu.Item key={index}>
            <div
              className={`flex items-center gap-3 pb-5 mb-4 ${
                index < 2 && "border-b border-gray-100"
              }`}
            >
              <span>{activity.icon}</span>
              <div className="flex-1">
                <div className="flex justify-between flex-1">
                  <div className="mb-1 text-sm font-medium text-primaryDark">
                    {activity.title}
                  </div>
                  <span className="text-xs text-[#A0AEC0]">
                    {activity.time}
                  </span>
                </div>
                <div className="text-xs font-light text-gray-400">
                  {activity.activity}
                </div>
              </div>
            </div>
          </Menu.Item>
        ))}
      </div>
    </>
  );
};
export default NotificationPopup;
