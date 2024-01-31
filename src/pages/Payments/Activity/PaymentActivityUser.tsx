import PgLocation from "@/assets/Reviews/PgLocation";
import PgButton from "@/components/Input/PgButton";
import DefaultCardLayout from "@/layout/DefaultCardLayout";
import { GoDotFill } from "react-icons/go";
function PaymentActivityUser() {
  return (
    <div>
      <DefaultCardLayout>
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Payment Details</h2>
        </div>
        <div className="grid items-center gap-5 mt-5 lg:grid-cols-5">
          <div className="flex flex-col justify-between gap-5 mt-5 md:col-span-2 md:flex-row lg:items-center">
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
          <div className="flex flex-wrap justify-end w-full gap-5 md:flex-nowrap md:col-span-2 md:col-start-4 gap-x-2">
            <PgButton title="View in Inbox" />
            <PgButton title="Payment Actions" />
          </div>
        </div>
      </DefaultCardLayout>
      <div className="grid gap-5 mt-5 md:grid-cols-2">
        <DefaultCardLayout>
          <div>
            <h2 className="mb-1 text-xl font-semibold text-gray-700">
              Information
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
                        <span>Payment Request sent of Estimate</span>
                      </h4>
                      <p className="text-xs text-primary">
                        View estimate details
                      </p>
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
          {" "}
          <div>
            <h3 className="mb-1 text-xl font-semibold text-gray-700">
              Payment Information
            </h3>
            <div className="pb-5 mt-5 border-b">
              <div className="flex justify-between mb-3">
                <h4 className="flex mb-1 text-sm font-normal text-gray-700">
                  <span>Shopify Services</span>
                </h4>
                <span className="text-xs">$10.00</span>
              </div>
              <div className="flex justify-between text-sm font-semibold">
                <h4 className="flex mb-1 text-gray-700 ">
                  <span>Total</span>
                </h4>
                <span className="text-xs">$10.00</span>
              </div>
            </div>
            <div className="mt-5">
              <div className="flex justify-between text-xs font-light">
                <h4 className="flex mb-1 text-gray-700 ">
                  <span>Invoice</span>
                </h4>
                <span className="">Sample Estimate</span>
              </div>
              <div className="flex justify-between text-xs font-light">
                <h4 className="flex mb-1 text-gray-700 ">
                  <span>Location</span>
                </h4>
                <span className="text-end">
                  2991 Michelson Drive, CA,California,<br></br> CA 48393, United
                  States
                </span>
              </div>
            </div>
          </div>
        </DefaultCardLayout>
      </div>
    </div>
  );
}

export default PaymentActivityUser;
