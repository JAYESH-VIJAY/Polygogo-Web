import { Link } from "react-router-dom";
import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DragDropForm from "./DragDropForm";
export default function CreateNewForm() {
  const [isActive,setIsActive] = useState<number>(3);
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex justify-between items-center mx-6 sm:mt-2">
        <Link
          to="#"
          className="border border-[#000000] p-2 text-sm px-10 font-semibold  rounded-full "
        >
          Exit
        </Link>
        <h1 className="text-[#263238] text-xl font-semibold ">
          Create your Form
        </h1>
        <Link
          to="#"
          className="border  hover:bg-[#3777dd] text-sm px-6 rounded-full p-2 text-white bg-[#3787FF] border-[#3787ff]"
        >
          Save & Continue
        </Link>
      </div>
      <div className="flex gap-6 justify-center mt-4">
        <div className="flex  justify-center items-center">
          <div
            className={`p-[10px] py-[4px] mr-2 border  text-[#263238] font-semibold  text-sm ${
              isActive === 1
                ? "text-white bg-[#3787FF] border-[#3787FF]"
                : " border-[#263238]"
            }`}
            style={{ borderRadius: "100%" }}
          >
            1
          </div>
          <div
            className={`text-md text-sm font-medium mr-1 ${
              isActive === 1 ? "text-[#3787FF] border-none" : ""
            }`}
          >
            Form Editor
          </div>
          <div className="text-[#263238]">
            <svg
              width="22"
              height="21"
              viewBox="0 0 22 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.70898 14.5L10.084 15.8125L15.6484 10.501L10.084 5.18945L8.70898 6.50195L12.8984 10.501L8.70898 14.5Z"
                fill={`${isActive === 1 ? "#3787FF" : "currentColor"}`}
              />
            </svg>
          </div>
        </div>
        <div className="flex  justify-center items-center">
          <div
            className={`p-[10px] py-[4px] mr-2 border  text-[#263238] font-semibold  text-sm ${
              isActive === 2
                ? "text-white bg-[#3787FF] border-[#3787FF]"
                : " border-[#263238]"
            }`}
            style={{ borderRadius: "100%" }}
          >
            2
          </div>
          <div
            className={`text-md text-sm font-medium mr-1 ${
              isActive === 2 ? "text-[#3787FF] border-none" : ""
            }`}
          >
            Post Submission
          </div>
          <div className="text-[#263238]">
            <svg
              width="22"
              height="21"
              viewBox="0 0 22 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.70898 14.5L10.084 15.8125L15.6484 10.501L10.084 5.18945L8.70898 6.50195L12.8984 10.501L8.70898 14.5Z"
                fill={`${isActive === 2 ? "#3787FF" : "currentColor"}`}
              />
            </svg>
          </div>
        </div>
        <div className="flex  justify-center items-center">
          <div
            className={`p-[10px] py-[4px] mr-2 border  text-[#263238] font-semibold  text-sm ${
              isActive === 3
                ? "text-white bg-[#3787FF] border-[#3787FF]"
                : " border-[#263238]"
            }`}
            style={{ borderRadius: "100%" }}
          >
            3
          </div>
          <div
            className={`text-md text-sm font-medium mr-1 ${
              isActive === 3 ? "text-[#3787FF] border-none" : ""
            }`}
          >
            Publish & Share
          </div>
          <div className="text-[#263238]">
            <svg
              width="22"
              height="21"
              viewBox="0 0 22 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.70898 14.5L10.084 15.8125L15.6484 10.501L10.084 5.18945L8.70898 6.50195L12.8984 10.501L8.70898 14.5Z"
                fill={`${isActive === 3 ? "#3787FF" : "currentColor"}`}
              />
            </svg>
          </div>
        </div>
      </div>
      <div>
        <DragDropForm isActive={isActive}/>
      </div>
    </DndProvider>
  );
}
