import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { RiSoundModuleLine, RiStackLine } from "react-icons/ri";
import { FiFileText, FiMail, FiStar } from "react-icons/fi";
import { LuUsers } from "react-icons/lu";
import PgRocket from "@/assets/dashboard/PgRocket";
import PgForm from "@/assets/dashboard/PgForm";
import PgLocation from "@/assets/dashboard/PgLocation";
import { MdOutlineAttachMoney } from "react-icons/md";
import SidebarLinkGroup from "../SidebarLinkGroupProps";
export const NavigationMenu = ({ collapse }: any) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;
  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );
  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);
  return (
    <>
      <div className="flex-1 space-y-5">
        {[
          {
            icon: <RiStackLine size={24} />,
            title: "Dashboard",
            link: "/",
          },
          {
            icon: <FiMail size={24} />,
            title: "Inbox",
            link: "/inbox",
          },
          {
            icon: <LuUsers size={24} />,
            title: "Contacts",
            link: "/contacts",
            submenu: [
              {
                link: "/contacts",
                subtitle: "All Contacts",
              },
              {
                link: "/contacts/lists",
                subtitle: "Lists",
              },
            ],
          },
          {
            icon: <PgRocket />,
            title: "Campaigns",
            link: "/campaigns",
          },
          {
            icon: <PgForm />,
            title: "Forms and Surveys",
            link: "/forms-surveys",
          },

          {
            icon: <MdOutlineAttachMoney size={24} />,
            title: "Payments",
            link: "/payments",
            submenu: [
              {
                link: "/payments/activity",
                subtitle: "Payment Activity",
              },
              {
                link: "/payments/estimate",
                subtitle: "Estimates",
              },
            ],
          },
          {
            icon: <FiStar size={24} />,
            title: "Reviews",
            link: "/reviews",
          },
          {
            icon: <FiFileText size={24} />,
            title: "Templates",
            link: "/templates",
          },

          {
            icon: <PgLocation />,
            title: "Locations",
            link: "/location",
          },

          {
            icon: <RiSoundModuleLine size={24} />,
            title: "Analytics",
            link: "/analytics",
            submenu: [
              {
                link: "/analytics/contacts",
                subtitle: "Contacts",
              },
              {
                link: "/analytics/payments",
                subtitle: "Payments",
              },
              {
                link: "/analytics/campaigns",
                subtitle: "Campaigns",
              },
              {
                link: "/analytics/reviews",
                subtitle: "Reviews",
              },
            ],
          },
        ].map((course, index) => (
          <ul key={index}>
            {course.submenu ? (
              <SidebarLinkGroup
                activeCondition={pathname.includes(course.link)}
              >
                {(handleClick, open) => {
                  return (
                    <>
                      <NavLink
                        to="#"
                        className={() =>
                          `group flex menu items-center gap-x-3.5 p-3 pr-6 duration-200 transition rounded-l-full   text-md hover:text-white  cursor-pointer  rounded-md font-medium  ${
                            pathname.includes(course.link)
                              ? "bg-primary text-white"
                              : "text-gray-400"
                          }`
                        }
                        onClick={(e) => {
                          e.preventDefault();
                          if (sidebarExpanded) {
                            handleClick();
                            navigate(course.link);
                          } else {
                            setSidebarExpanded(true);
                          }
                          // sidebarExpanded
                          //   ? handleClick()
                          //   : setSidebarExpanded(true);
                        }}
                      >
                        {course.icon}
                        <span className={`${collapse && "hidden"}`}>
                          {course.title}
                        </span>
                      </NavLink>

                      {!collapse && (
                        <div
                          className={`translate duration-300 transform overflow-hidden ${
                            !open && "hidden"
                          }`}
                        >
                          <ul className="mt-2 ml-3 border-l-2 border-primary ">
                            {course.submenu.map((subItem) => (
                              <li key={Math.random() * 10000}>
                                <NavLink
                                  end
                                  to={subItem.link}
                                  className={({ isActive }) =>
                                    `group relative flex items-center gap-2.5 rounded-sm   p-4  font-medium  duration-300 ease-in-out  ${
                                      isActive
                                        ? "font-medium text-white"
                                        : "text-gray-400"
                                    }`
                                  }
                                >
                                  {subItem.subtitle}
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </>
                  );
                }}
              </SidebarLinkGroup>
            ) : (
              <NavLink
                to={course.link}
                id="menu"
                className={({ isActive }) =>
                  `flex menu items-center gap-x-3.5 p-3 pr-6 duration-200 transition rounded-l-full   text-md hover:text-white  cursor-pointer  rounded-md font-medium  ${
                    isActive ? "bg-primary text-white" : "text-gray-400"
                  }`
                }
              >
                {course.icon}
                <span className={`${collapse && "hidden"}`}>
                  {course.title}
                </span>
              </NavLink>
            )}
          </ul>
        ))}
      </div>
    </>
  );
};
