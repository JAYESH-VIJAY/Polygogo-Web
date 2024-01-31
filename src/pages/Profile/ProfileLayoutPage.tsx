import DefaultCardLayout from "@/layout/DefaultCardLayout";
import { FiFileText, FiUser } from "react-icons/fi";
import { LuSmartphone } from "react-icons/lu";
import { PiChatCircleBold } from "react-icons/pi";
import { NavLink, Outlet } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { BsCalendar4 } from "react-icons/bs";
function ProfileLayoutPage() {
  return (
    <div className="flex flex-col grid-cols-4 gap-3 lg:grid">
      <div >
        <DefaultCardLayout>
          <div className="w-full jayesh ">
            <ProfileNavigation />
          </div>
        </DefaultCardLayout>
      </div>
      <div className="lg:col-span-3">
        <DefaultCardLayout>
          <Outlet />
        </DefaultCardLayout>
      </div>
    </div>
  );
}

const ProfileNavigation = () => {
  return (
    <>
      <ul className="flex items-center w-full space-y-2 lg:block ">
        {[
          {
            icon: <FiUser size={22} />,
            title: "Account",
            link: "/settings/account",
          },
          {
            icon: <FiFileText size={22} />,
            title: "Billing",
            link: "/settings/billing",
          },
          {
            icon: <LuSmartphone size={22} />,
            title: "SMS & Phone",
            link: "/settings/sms-phone",
          },
          {
            icon: <HiOutlineMail size={22} />,
            title: "Email",
            link: "/settings/email",
          },
          {
            icon: <BsCalendar4 size={18} />,
            title: "Calendar Link",
            link: "/settings/calendar",
          },
          {
            icon: <PiChatCircleBold size={22} />,
            title: "Chat Widget",
            link: "/settings/chat-widget",
          },
        ].map((profile, index) => (
          <li key={index} className="">
            <NavLink
              to={profile.link}
              className={({ isActive }) =>
                `flex cursor-pointer items-center gap-2 py-3 px-6 font-medium rounded-full   ${
                  isActive ? "bg-[#E2EEFF] text-primary" : "text-gray-400"
                }`
              }
            >
              <span>{profile.icon}</span>
              <span>{profile.title}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProfileLayoutPage;
