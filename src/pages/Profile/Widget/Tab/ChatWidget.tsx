import InputField from "@/components/Input/InputField";
import PgButton from "@/components/Input/PgButton";
import { Upload } from "antd";
import { Form, Formik } from "formik";
import { useState } from "react";
import { TwitterPicker } from "react-color";
import { BsChatText } from "react-icons/bs";
import { TbDragDrop } from "react-icons/tb";

export default function ChatWidget() {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [buttonColor, setButtonColorPicker] = useState("#F12345");
  const [displayChatColorPicker, setDisplayChatColorPicker] = useState(false);
  const [buttonChatColor, setButtonChatColorPicker] = useState("#F12345");
  return (
    <div className="gap-3 2xl:flex">
      <div className=" xl:flex-[0.7] p-6 mt-5 bg-white border border-gray-200 grid-span-2 rounded-xl">
        <div className="flex items-center justify-between pb-3 border-b border-gray-200 ">
          <h3 className="mb-1 text-lg font-semibold text-gray-700">
            Appearance
          </h3>
          <div>
            <button className="px-6 py-2 text-sm font-semibold border bg-[#E2EEFF] rounded-full border-primary text-primary">
              Save
            </button>
          </div>
        </div>
        <Formik initialValues={{}} onSubmit={(values) => {}}>
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <InputField
                label="Header Text"
                name="headerText"
                placeholder="Get a quick response via text"
              />
              <div className="grid gap-3 md:grid-cols-4">
                <div className="items-center pb-3 mt-4 ">
                  <h6 className="text-xs text-gray-400 ">Header Icon</h6>
                  <div className="mt-4 h-[100px] ">
                    <Upload.Dragger className="">
                      <div className="flex flex-col gap-y-1">
                        <div className="flex justify-center">
                          <svg
                            width="32"
                            height="32"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.5002 5.00015C8.48038 5.00015 6.00015 7.48038 6.00015 10.5002C5.99734 10.6989 6.03407 10.8963 6.10819 11.0807C6.18231 11.2652 6.29235 11.433 6.43191 11.5746C6.57148 11.7162 6.73779 11.8286 6.92118 11.9053C7.10456 11.982 7.30137 12.0215 7.50015 12.0215C7.69894 12.0215 7.89575 11.982 8.07913 11.9053C8.26252 11.8286 8.42883 11.7162 8.56839 11.5746C8.70796 11.433 8.818 11.2652 8.89212 11.0807C8.96624 10.8963 9.00297 10.6989 9.00015 10.5002C9.00015 9.10192 10.1019 8.00015 11.5002 8.00015C11.6989 8.00296 11.8963 7.96624 12.0807 7.89212C12.2652 7.818 12.4331 7.70796 12.5746 7.56839C12.7162 7.42882 12.8286 7.26251 12.9053 7.07913C12.982 6.89574 13.0215 6.69894 13.0215 6.50015C13.0215 6.30136 12.982 6.10456 12.9053 5.92117C12.8286 5.73779 12.7162 5.57148 12.5746 5.43191C12.4331 5.29234 12.2652 5.1823 12.0807 5.10818C11.8963 5.03406 11.6989 4.99734 11.5002 5.00015ZM17.5002 5.00015C16.6722 5.00015 16.0002 5.67215 16.0002 6.50015C16.0002 7.32815 16.6722 8.00015 17.5002 8.00015C18.3282 8.00015 19.0002 7.32815 19.0002 6.50015C19.0002 5.67215 18.3282 5.00015 17.5002 5.00015ZM23.5002 5.00015C22.6722 5.00015 22.0002 5.67215 22.0002 6.50015C22.0002 7.32815 22.6722 8.00015 23.5002 8.00015C24.3282 8.00015 25.0002 7.32815 25.0002 6.50015C25.0002 5.67215 24.3282 5.00015 23.5002 5.00015ZM29.5002 5.00015C29.3014 4.99734 29.104 5.03406 28.9196 5.10818C28.7351 5.1823 28.5673 5.29234 28.4257 5.43191C28.2841 5.57148 28.1717 5.73779 28.095 5.92117C28.0183 6.10456 27.9788 6.30136 27.9788 6.50015C27.9788 6.69894 28.0183 6.89574 28.095 7.07913C28.1717 7.26251 28.2841 7.42882 28.4257 7.56839C28.5673 7.70796 28.7351 7.818 28.9196 7.89212C29.104 7.96624 29.3014 8.00296 29.5002 8.00015C30.8984 8.00015 32.0002 9.10192 32.0002 10.5002C31.9973 10.6989 32.0341 10.8963 32.1082 11.0807C32.1823 11.2652 32.2923 11.433 32.4319 11.5746C32.5715 11.7162 32.7378 11.8286 32.9212 11.9053C33.1046 11.982 33.3014 12.0215 33.5002 12.0215C33.6989 12.0215 33.8957 11.982 34.0791 11.9053C34.2625 11.8286 34.4288 11.7162 34.5684 11.5746C34.708 11.433 34.818 11.2652 34.8921 11.0807C34.9662 10.8963 35.003 10.6989 35.0002 10.5002C35.0002 7.48038 32.5199 5.00015 29.5002 5.00015ZM20.5002 14.0001C17.4804 14.0001 15.0002 16.4804 15.0002 19.5001V37.5001C15.0002 40.5199 17.4804 43.0001 20.5002 43.0001H38.5002C41.5199 43.0001 44.0002 40.5199 44.0002 37.5001V19.5001C44.0002 16.4804 41.5199 14.0001 38.5002 14.0001H20.5002ZM7.50015 15.0001C6.67215 15.0001 6.00015 15.6721 6.00015 16.5001C6.00015 17.3281 6.67215 18.0001 7.50015 18.0001C8.32815 18.0001 9.00015 17.3281 9.00015 16.5001C9.00015 15.6721 8.32815 15.0001 7.50015 15.0001ZM20.5002 17.0001H38.5002C39.8984 17.0001 41.0002 18.1019 41.0002 19.5001V37.5001C41.0002 38.8984 39.8984 40.0001 38.5002 40.0001H20.5002C19.1019 40.0001 18.0002 38.8984 18.0002 37.5001V19.5001C18.0002 18.1019 19.1019 17.0001 20.5002 17.0001ZM7.50015 21.0002C6.67215 21.0002 6.00015 21.6722 6.00015 22.5002C6.00015 23.3281 6.67215 24.0002 7.50015 24.0002C8.32815 24.0002 9.00015 23.3281 9.00015 22.5002C9.00015 21.6722 8.32815 21.0002 7.50015 21.0002ZM26.5021 23.006C26.4214 22.992 26.3365 23.0013 26.258 23.0353C26.102 23.1023 26.0002 23.2579 26.0002 23.4279V32.0021C26.0002 32.1671 26.0943 32.3159 26.2423 32.3869C26.3903 32.4589 26.5684 32.4391 26.6974 32.3361L28.4435 30.9377L30.0959 34.7404C30.1899 34.9574 30.4414 35.058 30.6584 34.963L31.9709 34.3927C32.1879 34.2987 32.2866 34.0453 32.1916 33.8283L31.3224 31.8244L30.5412 30.0255L32.8029 29.7638C32.9689 29.7448 33.1083 29.6318 33.1603 29.4728C33.2123 29.3158 33.169 29.1415 33.047 29.0275L26.7209 23.1154C26.6584 23.0574 26.5829 23.02 26.5021 23.006ZM7.47672 26.9787C7.07923 26.9849 6.70047 27.1486 6.42361 27.4339C6.14676 27.7192 5.99445 28.1027 6.00015 28.5002C6.00015 31.5199 8.48038 34.0002 11.5002 34.0002C11.6989 34.003 11.8963 33.9662 12.0807 33.8921C12.2652 33.818 12.4331 33.708 12.5746 33.5684C12.7162 33.4288 12.8286 33.2625 12.9053 33.0791C12.982 32.8957 13.0215 32.6989 13.0215 32.5002C13.0215 32.3014 12.982 32.1046 12.9053 31.9212C12.8286 31.7378 12.7162 31.5715 12.5746 31.4319C12.4331 31.2923 12.2652 31.1823 12.0807 31.1082C11.8963 31.0341 11.6989 30.9973 11.5002 31.0002C10.1019 31.0002 9.00015 29.8984 9.00015 28.5002C9.00303 28.2994 8.96558 28.1001 8.89002 27.9141C8.81445 27.728 8.70231 27.5591 8.56024 27.4172C8.41818 27.2753 8.24907 27.1634 8.06295 27.0881C7.87683 27.0127 7.67748 26.9755 7.47672 26.9787Z"
                              fill="#475467"
                            />
                          </svg>
                        </div>
                        <h4 className="mb-1 font-medium text-gray-700 text-md">
                          Drag and Drop or select image
                        </h4>
                      </div>
                    </Upload.Dragger>
                  </div>
                </div>
                <div className="items-center pb-3 mt-4 ">
                  <h6 className="text-xs text-gray-400 ">Header Color</h6>

                  <div className="relative cursor-pointer ">
                    <div
                      onClick={() => {
                        setDisplayColorPicker(!displayColorPicker);
                      }}
                      style={{
                        backgroundColor: buttonColor,
                      }}
                      className={`mt-4 h-[100px] relative  rounded-md drop-shadow-sm`}
                    >
                      <div className="absolute bottom-0 flex items-center justify-center w-full h-10 bg-white">
                        <span>{buttonColor}</span>
                      </div>
                    </div>

                    {displayColorPicker && (
                      <TwitterPicker
                        color={buttonColor}
                        onChange={(value) => {
                          setButtonColorPicker(value?.hex);
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
              <InputField
                label="Message Text"
                name="messageText"
                placeholder="Let's connect and get to know more about each other, we need a few thin..."
              />
              <InputField
                label="Submit Button Text"
                name="submitBtnText"
                placeholder="Send"
              />
              <div className="grid gap-3 md:grid-cols-4">
                <div className="items-center pb-3 mt-4 ">
                  <h6 className="text-xs text-gray-400 ">
                    {" "}
                    Submit Button Color
                  </h6>

                  <div className="relative cursor-pointer ">
                    <div
                      onClick={() => {
                        setDisplayChatColorPicker(!displayChatColorPicker);
                      }}
                      style={{
                        backgroundColor: buttonChatColor,
                      }}
                      className={`mt-4 h-[100px] relative  rounded-md drop-shadow-sm`}
                    >
                      <div className="absolute bottom-0 flex items-center justify-center w-full h-10 bg-white">
                        <span>{buttonChatColor}</span>
                      </div>
                    </div>

                    {displayChatColorPicker && (
                      <TwitterPicker
                        color={buttonChatColor}
                        onChange={(value) => {
                          setButtonChatColorPicker(value?.hex);
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <ChatWidgetComponent
        headerColor={buttonColor}
        buttonColor={buttonChatColor}
      />
    </div>
  );
}

const ChatWidgetComponent = ({ headerColor, buttonColor }: any) => {
  return (
    <>
      <div className=" xl:flex-[0.3]  p-6 mt-5 bg-white border border-gray-200 rounded-xl">
        <div className=" max-w-md mx-auto bg-[#F9FAFB] pb-10">
          <div>
            <h4
              className="flex items-center justify-center gap-3 p-4 font-medium text-white rounded-t-md"
              style={{
                backgroundColor: headerColor,
              }}
            >
              <span>
                <BsChatText size={24} />
              </span>
              <span>Get a quick response via text</span>
            </h4>
          </div>
          <div className="min-h-[300px] px-6 ">
            <p className="p-4 my-5 text-sm font-normal bg-white rounded-md">
              Let's connect and get to know more about each other, we need a few
              things from you to begin the conversation.
            </p>
            <p className="p-4 my-5 text-sm font-normal bg-white rounded-md">
              <Formik initialValues={{}} onSubmit={() => {}}>
                {({ handleSubmit }) => (
                  <Form onSubmit={handleSubmit}>
                    <div>
                      <InputField name="name" placeholder="Name" />
                      <InputField
                        name="mobileNumber"
                        placeholder="Mobile Number"
                      />
                      <InputField name="message" placeholder="Message" />
                    </div>
                  </Form>
                )}
              </Formik>
            </p>
          </div>
          <div className="px-6 text-primaryDark text-opacity-70">
            <p className="my-5 text-xs">
              By submitting, you authorize Podium to send text messages with
              offers & other information, possibly using automated technology,
              to the number you provided. Message/data rates apply. Consent is
              not a condition of purchase. Use is subject to terms.
            </p>
            <button
              className={`w-full py-3.5 px-6 rounded-full `}
              style={{ backgroundColor: buttonColor }}
            >
              <span className={`text-sm font-medium text-white `}>Send</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
