import PgGoogle from "@/assets/location/PgGoogle";
import PgTrustPilot from "@/assets/location/PgTrustPilot";
import InputField from "@/components/Input/InputField";
import { Form, Formik } from "formik";
import { FiEdit3 } from "react-icons/fi";
import { PiEyeBold } from "react-icons/pi";

const LocationTab = () => {
  return (
    <div className="mt-6">
      <div className="p-6 bg-white border border-gray-200 rounded-xl">
        <div className="flex items-center justify-between pb-3 border-b border-gray-200">
          <h3 className="mb-1 text-lg font-semibold text-gray-700">
            Location Info
          </h3>
          <div>
            <button>
              <PiEyeBold size={20} className="text-[#667085]" />
            </button>
          </div>
        </div>
        <div>
          <Formik onSubmit={() => {}} initialValues={{}} validationSchema={{}}>
            {({ handleSubmit }) => (
              <>
                <Form onSubmit={handleSubmit}>
                  <div className="mt-5">
                    <InputField name="title" label="Title" isRequired={false} />
                  </div>
                </Form>
              </>
            )}
          </Formik>
        </div>
      </div>

      <div className="p-6 mt-5 bg-white border border-gray-200 rounded-xl">
        <div className="pb-3 border-b border-gray-200">
          <div className="flex items-center justify-between pb-3 ">
            <h3 className=" text-lg font-semibold text-gray-700">Address</h3>
            <button>
              <FiEdit3 size={20} className="text-gray-500" />
            </button>
          </div>
        </div>

        <div className="flex gap-6 sm:gap-12 mt-4 jayesh  ">
          <div className="text-[#98A2B3] text-xs flex flex-col gap-2 ">
            <div>Primary Address</div>
            <div>Country</div>
            <div>State/Province</div>
            <div>City</div>
            <div>Post Code</div>
          </div>
          <div className="text-[#263238] text-xs flex flex-col min-w-[150px] gap-2 ">
            <div>Banyumanik Street, Central Java. Semarang Indonesia</div>
            <div>Indonesia</div>
            <div>Central Java</div>
            <div>Semarang</div>
            <div>03125</div>
          </div>
        </div>
      </div>
      <div className="p-6 mt-5 bg-white border border-gray-200 rounded-xl">
        <div className="pb-3 border-b border-gray-200">
          <h3 className=" text-lg font-semibold text-gray-700">
            Locations Settings
          </h3>
        </div>

        <div className="flex sm:flex-row flex-col mt-4 gap-6">
          <div className="border p-6 w-full sm:max-w-[320px]  flex flex-col gap-6 justify-center items-center border-gray-200 rounded-xl">
            <div className="border border-[#00000026] p-4 rounded-full">
              <PgGoogle />
            </div>
            <div className="text-[#98A2B3] w-full  text-sm text-center">
              Manage Google Contacts, Gmail, Calender Permission.
            </div>
            <div className="bg-[#263238] h-12 rounded-3xl w-full "></div>
          </div>
          <div className="border p-6  w-full sm:max-w-[320px] flex flex-col gap-6 justify-center items-center border-gray-200 rounded-xl">
            <div>
              <PgTrustPilot />
            </div>
            <div className="text-[#98A2B3] w-full  text-sm text-center">
              Manage Google Contacts, Gmail, Calender Permission.
            </div>
            <button className="text-[#98A2B3] text-xs flex justify-center w-full border-dashed h-12 rounded-3xl border-2  items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#98A2B3"
                className="w-3 h-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m6-6H6"
                />
              </svg>
              Add TrustPilot
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationTab;
