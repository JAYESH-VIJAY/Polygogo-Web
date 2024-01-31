import PgLocation from "@/assets/Reviews/PgLocation";
import DefaultCardLayout from "@/layout/DefaultCardLayout";
import { GoDotFill } from "react-icons/go";
import { MdOutlineLocationOn } from "react-icons/md";
import PgButton from "@/components/Input/PgButton";
import { FiInbox } from "react-icons/fi";
function PaymentEstimateUser() {
  return (
    <div>
      <DefaultCardLayout>
        <div className="grid items-center justify-between gap-5 lg:grid-cols-3">
          <div>
            <h2 className="text-xl font-semibold">Estimate Detail</h2>
            <p className="text-xs text-gray-400 ">
              View all your estimates and invoices here
            </p>
          </div>
          <div className="flex flex-wrap justify-end col-span-2 gap-3 md:flex-nowrap">
            <PgButton title="Create and send invoice" />
            <PgButton
              title={
                <span className="flex items-center justify-center gap-2">
                  <span>
                    <FiInbox />
                  </span>
                  <span>View in Inbox</span>
                </span>
              }
              buttonType="secondary"
            />
            <PgButton title="Actions" buttonType="secondary" />
          </div>
        </div>

        <div className="flex flex-col justify-between gap-5 mt-5 md:flex-row lg:items-center">
          {[
            {
              label: "Contact",
              element: (
                <div className="flex items-center gap-2">
                  <img
                    loading="lazy"
                    className="lazyload object-cover w-10 h-10 rounded-full"
                    src={
                      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                    }
                  />
                  <p className="font-semibold text-md">Jhon Lee</p>
                </div>
              ),
            },
            {
              label: "Total",
              element: <h4 className="text-xl font-semibold">$10.00</h4>,
            },
            {
              label: "Estimate Title",
              element: (
                <h4 className="text-xl font-semibold">
                  Solar Roof Panels Installation
                </h4>
              ),
            },
            {
              label: "Location",
              element: (
                <h4 className="flex items-center gap-1 font-semibold text-md">
                  <span className="text-primaryDark">
                    <PgLocation />
                  </span>
                  <span>2991 Michelson Drive, CA</span>
                </h4>
              ),
            },
          ].map((item, index) => (
            <div className="flex flex-col gap-1" key={index}>
              <p className="mb-3 text-sm font-medium text-gray-400">
                {item.label}
              </p>
              {item.element}
            </div>
          ))}{" "}
        </div>
      </DefaultCardLayout>
      <div className="grid gap-5 mt-5 md:grid-cols-2">
        <DefaultCardLayout>
          <div>
            <h2 className="mb-1 text-xl font-semibold text-gray-700">
              Activity
            </h2>
            <div className="mt-5">
              <ul>
                <li className="flex items-center justify-between">
                  <div className="flex gap-x-2">
                    <span>
                      <GoDotFill />
                    </span>
                    <div>
                      <h4 className="flex mb-1 font-medium text-gray-700 text-md">
                        <span>Estimate draft created</span>
                      </h4>
                    </div>
                  </div>
                  <div className="text-end">
                    <p className="text-sm text-primaryDark">
                      Sep 6, 2023, 11:03 am. EDT
                    </p>
                    <p className="text-[#98A2B3] text-xs">
                      Sent by Muhammad Junaid
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </DefaultCardLayout>
        <DefaultCardLayout>
          <div>
            <div className="flex items-center justify-between pb-5 border-b">
              <div className="flex items-center gap-x-2">
                <div className="flex items-center justify-center text-white rounded-full w-14 h-14 bg-primary">
                  <MdOutlineLocationOn className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold">Michelson Drive</h4>
                  <p className="text-[#98A2B3] text-xs gap-y-3">
                    2991 Michelson Drive, CA <br />
                    California, CA 48393, United States
                  </p>
                </div>
              </div>

              <h3 className="mb-1 text-xl font-semibold text-gray-700">
                $200.00
              </h3>
            </div>
            <div className="pb-5 mt-5 uppercase border-b">
              <h6 className="mb-1 text-xs font-semibold text-gray-700 ">
                SENT TO
              </h6>
              <div className="flex flex-col gap-y-1">
                <div className="text-xs font-normal ">Muhammad Junaid</div>
                <div className="text-xs font-normal ">Muhammad Junaid</div>
              </div>
            </div>
            <div className="pb-5 mt-5 uppercase border-b">
              <h6 className="mb-1 text-xs font-semibold text-gray-700 ">
                ITEMS
              </h6>
              <div className="flex flex-col gap-y-1">
                <div className="flex justify-between text-xs font-normal ">
                  <span>Sample item</span>
                  <span className="font-medium text-end ">$200.00</span>
                </div>
                <div className="flex justify-between text-xs font-normal ">
                  <span>Sample item</span>
                  <span className="font-medium text-end">$200.00</span>
                </div>
              </div>
            </div>
            <div className="pb-5 mt-5 border-b">
              <h6 className="mb-1 text-xs font-semibold text-gray-700 uppercase ">
                ESTIMATE DESCRIPTION
              </h6>
              <div className="flex justify-between text-xs font-normal ">
                This is the sample description
              </div>
            </div>
          </div>
        </DefaultCardLayout>
      </div>
    </div>
  );
}

export default PaymentEstimateUser;
