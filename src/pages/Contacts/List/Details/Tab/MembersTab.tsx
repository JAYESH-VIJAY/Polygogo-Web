import { FiBook } from "react-icons/fi";
import { LuList } from "react-icons/lu";
import { TbUpload } from "react-icons/tb";

function MembersTab() {
  return (
    <div className="flex items-center justify-between py-16 ">
      <div className="w-full h-full max-w-md mx-auto">
        <div className="text-center ">
          <h2 className="mb-2 text-2xl font-semibold">
            There isn’t anyone in this list
          </h2>
          <p className="text-sm text-gray-400">
            How would you like to add people?
          </p>
        </div>
        <div className="mt-5">
          {[
            {
              icon: <LuList size={30} />,
              label: "Create a Signup form",
            },
            {
              icon: <FiBook size={30} />,
              label: "Configure subscribe page",
            },
            {
              icon: <TbUpload size={30} />,
              label: "Upload Contact",
            },
          ].map((card, index) => (
            <Card {...card} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

const Card = ({ label, icon }: any) => {
  return (
    <div className="flex items-center cursor-pointer mb-3  p-5 bg-[#FCFCFD] border-2 border-[#E4E7EC] rounded-xl gap-3">
      <span className="text-primary">{icon}</span>
      <span className="text-lg font-semibold text-[#344054]">{label}</span>
    </div>
  );
};

export default MembersTab;
