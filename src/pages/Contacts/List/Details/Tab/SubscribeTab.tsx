import PgButton from "@/components/Input/PgButton";
import { useState } from "react";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { FiExternalLink, FiLogOut, FiUserPlus } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";

import { MdOutlineMailOutline } from "react-icons/md";
import { SlEnergy } from "react-icons/sl";
function SubscribeTab() {
  const [show, setShow] = useState(true);
  return (
    <>
      {show ? (
        <>
          <div className="flex items-center justify-between py-16 ">
            <div className="w-full h-full max-w-md mx-auto">
              <div className="flex flex-col items-center text-center ">
                <div className="w-[100px] flex text-gray-600 justify-center items-center h-[100px] bg-gray-100 rounded-full">
                  <SlEnergy size={45} />
                </div>
                <p className="mt-4 text-sm text-[#263238]">
                  This list is currently using the default Preference and
                  Subscription pages. You can override the default pages by
                  customizing them for this list.
                </p>
              </div>
              <div className="flex flex-col gap-4 mt-5 md:flex-row md:flex">
                <PgButton
                  title={
                    <span className="flex items-center gap-2">
                      <FiExternalLink size={25} />
                      <span>Go to default page</span>
                    </span>
                  }
                  type="button"
                />
                <PgButton
                  onClick={() => {
                    setShow(false);
                  }}
                  title="Customize for this list"
                  type="button"
                  buttonType="secondary"
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        <CustomizeList setShow={setShow} />
      )}
    </>
  );
}

function CustomizeList({ setShow }: any) {
  return (
    <div className="flex items-center justify-between py-16 ">
      <div className="w-full h-full max-w-xl mx-auto">
        <div className="flex items-center justify-end text-center gap-x-3 ">
          <p className="text-xs font-semibold underline text-[#0BA5EC] flex items-center gap-x-1">
            View Default Pages
            <span>
              <HiOutlineExternalLink size={16} />
            </span>
          </p>
          <div>
            <PgButton
              onClick={() => {
                setShow(true);
              }}
              title={
                <span className="flex items-center ">
                  <span>Reset All Pages To Default</span>
                </span>
              }
            />
          </div>
        </div>
        <div className="mt-5">
          {[
            {
              icon: <AiOutlineUnorderedList size={30} />,
              label: "Preference page",
              content:
                "Customize your customers’ experience when they manage their email preferences for this list.",
            },
            {
              icon: <FiUserPlus size={30} />,
              label: "Subscribe page",
              content:
                "Customize your customers’ experience when they subscribe to this list.",
            },
            {
              icon: <MdOutlineMailOutline size={30} />,
              label: "Email Confirmation",
              content:
                "Customize your customers’ experience when they confirm their subscription to this list.",
            },
            {
              icon: <FiLogOut size={30} />,
              label: "Email unsubscribe page",
              content:
                "Customize your customers’ experience when they unsubscribe from this list.",
            },
          ].map((card, index) => (
            <Card {...card} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

const Card = ({ icon, content, label }: any) => {
  return (
    <div className="flex  cursor-pointer justify-between items-center mb-3  p-5 bg-[#FCFCFD] border-2 border-[#E4E7EC] rounded-xl gap-x-3">
      <div className="flex items-start">
        <span className="mr-5 text-primaryDark">{icon}</span>
        <div className="text-lg font-semibold text-[#344054]">
          <h4>{label}</h4>
          <p className="text-xs font-normal text-gray-500 ">{content}</p>
        </div>
      </div>
      <div className="px-4 py-1.5 text-sm font-medium text-white rounded-full bg-primaryDark">
        Edit
      </div>
    </div>
  );
};

export default SubscribeTab;
