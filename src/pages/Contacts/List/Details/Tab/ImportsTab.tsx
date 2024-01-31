import PgButton from "@/components/Input/PgButton";
import { FiRefreshCw } from "react-icons/fi";

import { IoMdAdd } from "react-icons/io";
function ImportsTab() {
  return (
    <div className="flex items-center justify-between py-16 ">
      <div className="w-full h-full max-w-xl mx-auto">
        <div className="flex items-center justify-between text-center ">
          <h2 className="mb-2 text-xl font-semibold">Import History</h2>
          <div>
            <PgButton
              title={
                <span className="flex items-center ">
                  <span>
                    <IoMdAdd size={22} className="text-white" />
                  </span>
                  <span>Import Contacts</span>
                </span>
              }
            />
          </div>
        </div>
        <div className="mt-5">
          {[1, 2, 3].map((_, index) => (
            <Card key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

const Card = () => {
  return (
    <div className="flex  cursor-pointer mb-3  p-5 bg-[#FCFCFD] border-2 border-[#E4E7EC] rounded-xl gap-3 items-start">
      <span className="text-primaryDark">
        <FiRefreshCw size={30} />
      </span>
      <div className="text-lg font-semibold text-[#344054]">
        <h4>Saturday, September 3, 2023</h4>
        <p className="text-xs font-normal text-gray-500 ">
          Imported by Junaid &lt;junaid@havanor.com&gt;
          <br />
          master_list_2022_polygogo.csv
        </p>
      </div>
    </div>
  );
};

export default ImportsTab;
