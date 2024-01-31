import { getUserInfo } from "@/api/query/auth";
import { PgBilling } from "@/assets/dashboard/PgBiling";
import PgChevronRight from "@/assets/dashboard/PgChevronRight";
import { AuthContext } from "@/context/AuthContext";
import { Menu, Transition } from "@headlessui/react";
import { useContext } from "react";
import { FcBusinesswoman } from "react-icons/fc";
import { FiHome, FiUser } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { LuLogOut} from "react-icons/lu";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "usehooks-ts";

function ProfilePopup({ collapse }: any) {
  const { handleLogout } = useContext(AuthContext);
  const isWidth467px = useMediaQuery("(min-width: 467px)");
  const shortText = (text: string) =>
    text?.length > 16 ? `${text?.slice(0, 17)}...` : text;
  const { userInfoData } = getUserInfo();
  return (
    <Menu>
      <Menu.Button>
        {collapse && (
          <div className="rounded-full bg-[#D2B1AC]  w-9 h-9 flex items-center justify-center">
            <div className="border-[3px] rounded-full border-[#3787FF]">
              <FcBusinesswoman size={32} />
            </div>
          </div>
        )}
        {!collapse && (
          <div className="cursor-pointer flex  justify-between p-2  items-center border-2 border-[#3787FF]  rounded-full bg-[#1D2939] min-w-[230px] mx-4">
            <div className="flex justify-center items-center gap-2">
              <div className="rounded-full bg-[#D2B1AC]  w-9 h-9 flex items-center justify-center">
                <FcBusinesswoman size={32} />
              </div>
              <div className="text-sm text-white">
                {shortText(userInfoData?.data?.fullName)}
              </div>
            </div>
            <div className="mr-2">
              <PgChevronRight />
            </div>
          </div>
        )}
      </Menu.Button>
      <div
        className={`absolute  bottom-0 ${
          !collapse ? `-right-[${!isWidth467px ? 30 : 100}%] ` : "left-[100%]"
        }`}
      >
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Menu.Items>
            <div className="flex flex-col rounded-3xl w-[250px] bg-primaryDark border-2 border-gray-400">
              <div className="p-5 text-white">
                <div className="flex items-center gap-2 pb-3 border-b-[1.5px] border-gray-100 border-opacity-20">
                  <div>
                    <img
                      loading="lazy"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq5WEWvBvL3dv8hsq6JWmaDs2Z_RGXN7YDAhI3_csMkEVtFXTaSPTai_qnuEUc5_Z4uBA&usqp=CAU"
                      className="lazyload object-cover w-10 h-10 rounded-full"
                    />
                  </div>
                  <div className="font-medium text-[#FCFCFD]">
                    <h6 className="text-sm">
                      {shortText(userInfoData?.data?.fullName)}
                    </h6>
                    <p className="text-xs">
                      {shortText(userInfoData?.data?.email)}
                    </p>
                  </div>
                </div>
                {/* new */}
                <div className="flex flex-col ">
                  {[
                    {
                      icon: <FiUser size={22} />,
                      title: "View profile",
                      link: "/settings/account",
                    },
                    {
                      icon: <IoSettingsOutline size={22} />,
                      title: "Settings",
                      link: "/settings/sms-phone",
                    },
                    {
                      icon: <PgBilling />,
                      title: "Billing",
                      link: "/settings/billing",
                    },

                    {
                      icon: <FiHome size={22} />,
                      title: "Email",
                      link: "/settings/email",
                    },
                    {
                      icon: (
                        <svg
                          width={22}
                          height={22}
                          viewBox="0 0 16 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.3337 13V11.6667C11.3337 10.9594 11.0527 10.2811 10.5526 9.78105C10.0525 9.28095 9.37424 9 8.66699 9H3.33366C2.62641 9 1.94814 9.28095 1.44804 9.78105C0.947944 10.2811 0.666992 10.9594 0.666992 11.6667V13M15.3337 13V11.6667C15.3332 11.0758 15.1366 10.5018 14.7746 10.0349C14.4126 9.56791 13.9057 9.23438 13.3337 9.08667M10.667 1.08667C11.2406 1.23353 11.749 1.56713 12.1121 2.03487C12.4752 2.50261 12.6722 3.07789 12.6722 3.67C12.6722 4.26211 12.4752 4.83739 12.1121 5.30513C11.749 5.77287 11.2406 6.10647 10.667 6.25333M8.66699 3.66667C8.66699 5.13943 7.47308 6.33333 6.00033 6.33333C4.52757 6.33333 3.33366 5.13943 3.33366 3.66667C3.33366 2.19391 4.52757 1 6.00033 1C7.47308 1 8.66699 2.19391 8.66699 3.66667Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ),
                      title: "SMS",
                      link: "/settings/sms-phone",
                    },
                    {
                      icon: (
                        <svg
                          width={22}
                          height={22}
                          viewBox="0 0 16 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.667 13V11.6667C10.667 10.9594 10.386 10.2811 9.88594 9.78105C9.38585 9.28095 8.70757 9 8.00033 9H3.33366C2.62641 9 1.94814 9.28095 1.44804 9.78105C0.947944 10.2811 0.666992 10.9594 0.666992 11.6667V13M13.3337 4.33333V8.33333M15.3337 6.33333H11.3337M8.33366 3.66667C8.33366 5.13943 7.13975 6.33333 5.66699 6.33333C4.19423 6.33333 3.00033 5.13943 3.00033 3.66667C3.00033 2.19391 4.19423 1 5.66699 1C7.13975 1 8.33366 2.19391 8.33366 3.66667Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ),
                      title: "Notifications",
                      link: "/settings/notifications",
                    },
                  ].map((item, index) => (
                    <Menu.Item key={index}>
                      {() => (
                        <NavLink
                          to={item.link}
                          className={({ isActive }) =>
                            ` p-3  ${
                              isActive && "bg-primary relative mt-2 text-white"
                            }  font-medium text-sm text-gray-400 rounded-2xl flex gap-2 items-center`
                          }
                        >
                          <div className="flex flex-col">
                            <div className="flex items-center  gap-3 hover:text-white">
                              <span>{item.icon}</span>
                              <span className="text-white">{item.title}</span>
                            </div>
                            {index === 2 && (
                              <div className=" border-b-[1.5px]  mt-8 right-4 left-6 absolute border-gray-100 border-opacity-20"></div>
                            )}
                          </div>
                        </NavLink>
                      )}
                    </Menu.Item>
                  ))}
                </div>
                <div
                  onClick={handleLogout}
                  className={` p-3 cursor-pointer  font-medium text-sm text-red-600 rounded-2xl flex gap-2 items-center`}
                >
                  <span className="">
                    <LuLogOut size={22} />
                  </span>
                  <span>Log out</span>
                </div>
              </div>
            </div>
          </Menu.Items>
        </Transition>
      </div>
    </Menu>
  );
}

export default ProfilePopup;
