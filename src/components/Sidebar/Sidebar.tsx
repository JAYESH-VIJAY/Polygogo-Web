import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import PgLogoLight from "@/assets/dashboard/PgLogoLight";
import PgLogoSmallLight from "@/assets/dashboard/PgLogoSmallLight";
import { useMediaQuery } from "usehooks-ts";
import ProfilePopup from "../ProfilePopup";
import { AiOutlineClose } from "react-icons/ai";
import { NavigationMenu } from "./NavigationMenu";
import Header from "./Header";

interface SidebarProps {
  collapse: boolean;
  setCollapse: React.Dispatch<React.SetStateAction<boolean>>;
}
function Sidebar({ collapse, setCollapse }: SidebarProps) {
  const navigate = useNavigate();

  const isWidth1024px = useMediaQuery("(min-width: 1024px)");
  useEffect(() => {
    if (!isWidth1024px) {
      setCollapse(true);
    }
  }, [isWidth1024px, navigate, setCollapse]);

  return (
    <>
      <Header collapse={collapse} setCollapse={setCollapse} />

      <div
        className={`hs-overlay-open:translate-x-0 transition-all transform     
         fixed flex  -translate-x-full  ${
           !isWidth1024px && !collapse && "translate-x-0"
         } bottom-0 duration-300 flex-col top-0   z-[1160] bg-primaryDark border-r border-gray-200 py-7   ${
          collapse ? "w-30 " : "w-64"
        }  lg:flex lg:translate-x-0 lg:right-auto lg:bottom-0 shadow-xl shadow-blue-gray-900/5 justify-center`}
      >
        <div className="ml-6">
          <div
            className="items-center justify-between flex-none text-xl font-semibold cursor-pointer dark:text-white"
            aria-label="Brand"
            onClick={() => {
              setCollapse(!collapse);
            }}
          >
            <span>
              {!collapse ? (
                <>
                  <PgLogoLight />
                  <div className="absolute lg:hidden top-5 right-4">
                    <AiOutlineClose />
                  </div>
                </>
              ) : (
                <PgLogoSmallLight />
              )}
            </span>
          </div>
        </div>
        <div className="flex-1" id="application-sidebar">
          <nav
            className={` flex-1 flex flex-col  gap-10  w-full duration-200 ${
              collapse ? "p-4 py-6 pr-0" : "p-6 pl-4   pr-0"
            }`}
            data-hs-accordion-always-open
          >
            <NavigationMenu collapse={collapse} />
          </nav>
        </div>

        <div className="flex justify-center">
          <ProfilePopup collapse={collapse} />
        </div>
      </div>
    </>
  );
}

export default Sidebar;
