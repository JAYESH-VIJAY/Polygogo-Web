import { getUserInfo } from "@/api/query/auth";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, ReactNode } from "react";
import { BiCalendarAlt } from "react-icons/bi";
import { FiArrowUpRight, FiEdit, FiMail, FiPhoneCall } from "react-icons/fi";
import { MdOutlineAttachMoney } from "react-icons/md";
import Loading from "../Loading";
import { Spin } from "antd";

interface RootModalType {
  isOpen: boolean;
  closeModal?: any;
}
function HeaderProfileMenu({ isOpen, closeModal }: RootModalType) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[100]" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-end min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xs p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <DropDownMenu />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default HeaderProfileMenu;

const DropDownMenu = () => {
  const { userInfoData, userInfoLoading } = getUserInfo();
  const shortText = (text: string) =>
    text?.length > 10 ? `${text?.slice(0, 17)}...` : text;
  return (
    <>
      <div className="w-full">
        <div className="flex flex-col items-center space-y-2 lg:block ">
          <div className="flex flex-col items-center w-full pb-5 border-b">
            <div className="flex items-center justify-center w-20 h-20 mb-5 font-bold text-gray-700 bg-gray-300 rounded-full">
              {userInfoData?.data?.fullName?.charAt(0).toUpperCase() +
                userInfoData?.data?.fullName?.charAt(1).toUpperCase()}
            </div>
            {userInfoLoading ? (
              <Spin />
            ) : (
              <div className="text-center">
                <h3 className="flex items-center justify-center mb-1 text-2xl font-semibold gap-x-1 text-primaryDark">
                  <span> {shortText(userInfoData?.data?.fullName)}</span>
                  <span>
                    <FiEdit size={12} color="#D0D5DD" />
                  </span>
                </h3>
                <p className="text-sm items-center justify-center font-medium flex gap-x-1 text-[#687588] ">
                  <span>{userInfoData?.data?.designation}</span>
                  <span>
                    <FiEdit size={12} color="#D0D5DD" />
                  </span>
                </p>
                <p className="text-sm justify-center items-center mt-2 font-medium flex gap-x-1 text-[#687588] ">
                  <span> Created Date: Sep 20, 2023</span>
                  <span>
                    <FiEdit size={12} color="#D0D5DD" />
                  </span>
                </p>
              </div>
            )}
          </div>
          <div className="w-full pt-3 border-b">
            {[
              {
                icon: <FiMail size={18} />,
                value: (
                  <div className="flex items-center gap-x-1">
                    <span>{userInfoData?.data?.email}</span>
                    <span>
                      <FiEdit size={12} color="#D0D5DD" />
                    </span>
                  </div>
                ),
              },
              {
                icon: <FiPhoneCall size={18} />,
                value: (
                  <div className="flex items-center gap-x-1">
                    <span>001 832 1213</span>
                    <span>
                      <FiEdit size={12} color="#D0D5DD" />
                    </span>
                  </div>
                ),
              },
              {
                icon: <BiCalendarAlt size={18} />,
                value: "Last Contact at Sep 20, 2019",
              },
              {
                icon: <MdOutlineAttachMoney size={20} />,
                value: "$340",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 mb-5 text-primaryDark"
              >
                <span>{item.icon}</span>
                <span className="text-sm font-light ">{item.value}</span>
              </div>
            ))}
          </div>

          <div className="w-full py-3 border-b">
            <label className="text-xs font-normal text-[#687588]">Lists</label>
            <h6 className="mt-1 text-sm font-medium text-primaryDark">
              TechTitans Circle
            </h6>
          </div>
          {/* //Reviews */}

          {/* //Discussion */}
          <div className="w-full py-3">
            <div className="pb-2 text-xs font-normal text-primaryDark">
              Discussion
            </div>
            <div className="flex items-end justify-between gap-3 mb-2">
              <span className="flex items-center text-sm font-medium text-primaryDark">
                {shortText("Online Payment Issue")}
                <span>
                  <FiArrowUpRight className="text-primary" />
                </span>
              </span>
              <span className="text-xs text-gray-400">4d ago</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
