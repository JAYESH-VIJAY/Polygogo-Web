import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import HeaderProfileMenu from "../Menu/HeaderProfileMenu";
import PgProfile from "@/assets/dashboard/PgProfile";
import PgBurger from "@/assets/dashboard/PgBurger";
import LocationHeading from "../LocationHeading";
import SearchBar from "./SearchBar";
import NotificationPopup from "../NotificationPopup";
import { BiSearch } from "react-icons/bi";
import { getUserInfo } from "@/api/query/auth";
interface HeaderProps {
  collapse: boolean;
  setCollapse: React.Dispatch<React.SetStateAction<boolean>>;
}
const Header = ({ collapse, setCollapse }: HeaderProps) => {
  const { userInfoData, userInfoLoading } = getUserInfo();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSearchShow, setSearchShow] = useState(false);
  const closeModal = () => setIsProfileOpen(false);
  const handelSearchBar = () => setSearchShow(!isSearchShow);
  const shortAddress = (text: string) =>
    text?.length > 30 ? `${text?.slice(0, 27)}...` : text;
  return (
    <>
      <header
        className={`sticky top-0 inset-x-0  py-4 flex  sm:justify-start sm:flex-nowrap z-[48] w-full bg-white border-b text-sm  px-3  ${
          collapse ? "lg:pl-24 " : " lg:pl-64"
        }`}
      >
        <nav
          className={`flex items-center md:flex-[0.2] gap-3  px-3   `}
          aria-label="Global"
        >
          <span
            className="flex cursor-pointer"
            onClick={() => {
              setCollapse(!collapse);
            }}
          >
            <PgBurger />
          </span>
          <LocationHeading />
          {/* <h4 className="hidden text-xl font-semibold md:block">Dashboard</h4> */}
        </nav>
        <div className="flex flex-1 md:flex-[0.8] items-center justify-end w-full px-4 ml-auto sm:justify-between sm:gap-x-3 sm:order-3 ">
          <div className="flex flex-row items-center justify-end w-full gap-5">
            {isSearchShow ? (
              <div className=" hs-overlay-open:translate-x-0  transition ease-in duration-100  hidden md:block w-full  max-w-[400px] h-[2.375rem] text-gray-200">
                <SearchBar handelSearchBar={handelSearchBar} />
              </div>
            ) : (
              <button
                onClick={() => {
                  setSearchShow(true);
                }}
                type="button"
                className="hidden md:inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-white  align-middle hover:bg-gray-50    transition-all text-xs "
              >
                <BiSearch size={24} className="text-gray-400" />
              </button>
            )}
            <NotificationPopup />

            <div className=" items-center  gap-3 hs-dropdown relative inline-flex [--placement:bottom-right]">
              <button
                id="hs-dropdown-with-header"
                type="button"
                className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium  align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-xs"
              >
                <PgProfile />
              </button>
              <div className="font-bold text-primaryDark line-clamp-1">
                {shortAddress(userInfoData?.data?.UserAddress?.address || "")}
              </div>
              {/* <IoIosArrowDown size={22} /> */}

              <span
                className="cursor-pointer"
                onClick={() => {
                  setIsProfileOpen(!isProfileOpen);
                }}
              >
                <MdKeyboardArrowDown size={22} />
              </span>
              <HeaderProfileMenu
                isOpen={isProfileOpen}
                closeModal={closeModal}
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
