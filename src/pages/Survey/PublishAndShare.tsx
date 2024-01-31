import DefaultCardLayout from "@/layout/DefaultCardLayout";
import { PostSubmissionInput } from "./components/EditInput";
import { FiCopy } from "react-icons/fi";

export default function PublishAndShare() {
  return (
    <div className="max-w-[500px] mx-auto my-6">
      <DefaultCardLayout>
        <div className="m-6">
          <PostSubmissionInput inputHeading="Add leads to a list" />
          <PostSubmissionInput inputHeading="Add a custom redirect after submitting the form" />
          <div className="mb-5">
            <label className="mb-3 ml-1 text-base font-medium text-[#475467]  ">
              Embed Code
            </label>
            <p className=" text-[13px] text-[#475467] ml-1 mt-1">
              To embed this form, simply copy and paste the code below into the
              HTML code on your website.
            </p>
            <textarea
              placeholder={"Auto generated embed code will go here"}
              className="p-2 rounded-xl border-2 text-xs placeholder:text-base pl-3 bg-[#FCFCFD] focus:outline-none resize-none w-full mt-4 min-h-[150px] placeholder:text-center placeholder:pt-14"
            />
          </div>
          <div className=" ">
            <div>
              <label className="mb-3 ml-1 text-base font-medium text-[#475467]  ">
                Share Link
              </label>
              <div className="border mt-3 border-[#E4E7EC] p-3 rounded-full mb-6">
                <input className="border-none outline-none text-xs text-black w-full px-2" />
              </div>
              <div className="bg-primary  ">
                <FiCopy className="text-white" />
              </div>
            </div>
          </div>
          <a
            href="#"
            className="flex gap-1 justify-center text-[#0BA5EC] underline"
          >
            Preview link in new tab
            <svg
              width="16"
              height="16"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 10.8333V15.8333C15 16.2754 14.8244 16.6993 14.5118 17.0118C14.1993 17.3244 13.7754 17.5 13.3333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V6.66667C2.5 6.22464 2.67559 5.80072 2.98816 5.48816C3.30072 5.17559 3.72464 5 4.16667 5H9.16667M12.5 2.5H17.5M17.5 2.5V7.5M17.5 2.5L8.33333 11.6667"
                stroke="#0BA5EC"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </DefaultCardLayout>
    </div>
  );
}
