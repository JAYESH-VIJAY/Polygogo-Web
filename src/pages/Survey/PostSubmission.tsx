import DefaultCardLayout from "@/layout/DefaultCardLayout";
import { Radio } from "antd";
import { PostSubmissionInput } from "./components/EditInput";
import PgDone from "@/assets/dashboard/PgDone";
import { useState } from "react";

interface BannerTypes {
  heading: string;
  paragraph: string;
  callToAction: boolean;
  buttonLabel: string;
  buttonLink: string;
}
export default function PostSubmission() {
  const [submissionBanner, setSubmissionBanner] = useState<BannerTypes>({
    heading: "Thank you for submitting the form!",
    paragraph:
      "We highly appreciate that you took the time to submit the feedback. We will use this information to improve your experience on the platform.",
    callToAction: false,
    buttonLabel: "Continue",
    buttonLink: "",
  });
  function handleHeading(e) {
    setSubmissionBanner({ ...submissionBanner, heading: e.target.value });
  }
  function handleParagraph(e) {
    setSubmissionBanner({ ...submissionBanner, paragraph: e.target.value });
  }
  function handleButtonLabel(e) {
    setSubmissionBanner({ ...submissionBanner, buttonLabel: e.target.value });
  }
  function handleButtonLink(e) {
    setSubmissionBanner({ ...submissionBanner, buttonLink: e.target.value });
  }
  function handleCallToAction(e) {
    setSubmissionBanner({ ...submissionBanner, callToAction: e.target.value });
  }
  return (
    <div className="flex flex-col w-full h-auto gap-4 mt-6 md:flex-row">
      <div className="lg:w-1/3 ">
        <DefaultCardLayout padding={0}>
          <div
            // onClick={() => setEdit(false)}
            className="flex items-center gap-2 p-3 text-blue-500 cursor-pointer"
          >
            <svg
              width={18}
              height={18}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#2E90FA] hover:text-[#1263DC]"
            >
              <path
                d="M19 12H5M5 12L12 19M5 12L12 5"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className=" text-md font-medium cursor-pointer hover:text-[#1263DC]">
              Done
            </div>
          </div>
          <h1 className="text-lg font-semibold  mx-7 mt-2 text-[#263238]">
            Edit Post Submission Message
          </h1>

          <div className="p-6 py-3">
            <PostSubmissionInput
              onChange={handleHeading}
              inputHeading="Heading"
            />
            <PostSubmissionInput
              onChange={handleParagraph}
              inputHeading="Paragraph"
            />
            <div className="ml-1 text-base font-medium">Add Call to Action</div>
            <div className="my-6 mt-2 ml-2">
              <Radio.Group onChange={handleCallToAction}>
                <Radio value={true}>Yes</Radio>
                <Radio value={false}>No</Radio>
              </Radio.Group>
            </div>
            <PostSubmissionInput
              onChange={handleButtonLabel}
              inputHeading="Button Label"
            />
            <PostSubmissionInput
              onChange={handleButtonLink}
              inputHeading="Button Link"
            />
          </div>
        </DefaultCardLayout>
      </div>
      <div className="lg:w-2/3 ">
        <div
          className={`p-6 bg-white rounded-lg h-full flex items-center justify-center `}
        >
          <div>
            <div className="flex flex-col items-center justify-center px-4 py-6 text-left ">
              <PgDone />
              <h4 className="mb-2 text-2xl font-medium text-[#263238] text-center">
                {submissionBanner.heading}
              </h4>
              <p className="text-sm mt-1 text-gray-400 max-w-[480px] text-center">
                {submissionBanner.paragraph}
              </p>
              <a
                href={`${
                  submissionBanner.callToAction
                    ? submissionBanner.buttonLink
                    : ""
                }`}
                target={`${
                  submissionBanner.buttonLink &&
                  submissionBanner.callToAction &&
                  "_blank"
                }
                `}
                className="border  hover:bg-[#3777dd] text-md px-10 rounded-full py-3 mt-6 text-white bg-[#263238] "
              >
                {submissionBanner.buttonLabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
