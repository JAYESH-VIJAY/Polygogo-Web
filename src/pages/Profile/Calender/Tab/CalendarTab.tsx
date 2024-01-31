import PgInput from "@/components/Input/PgInput";

export default function CalendarTab() {
  return (
    <div className="p-6 mt-5 bg-white border border-gray-200 rounded-xl">
      <div className="flex items-center justify-between pb-3 border-b border-gray-200">
        <h3 className="mb-1 text-lg font-semibold text-gray-700">
          Use a third-party calendar scheduling link 
        </h3>
        <div>
          <button className="px-6 py-2 text-sm font-semibold border bg-[#E2EEFF] rounded-full border-primary text-primary">
            Save
          </button>
        </div>
      </div>
      <div>
        <div>
          <PgInput label={"Calendar Link"} placeholder="Calendar Link" />
        </div>
      </div>
    </div>
  );
}
