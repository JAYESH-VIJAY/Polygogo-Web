import { ReactNode } from "react";

interface CustomSectionType {
  primaryline: string;
  secondaryline: string;
  time: number;
  childComponent: ReactNode;
  index?: number;
}
export default function CustomSection({
  primaryline,
  secondaryline,
  time,
  childComponent,
  index = 100,
}: CustomSectionType) {
  return (
    <div
      style={{ boxShadow: "0px 0px 13px 0px rgba(0, 0, 0, 0.03)" }}
      className="flex flex-col sm:flex-row gap-4 font-inter border border-[#E4E7EC] sm:ml-8 ml-4 rounded-lg w-11/12 lg:w-8/12  mb-2 items-center p-3 "
    >
      <div
        className={`rounded-full ${
          index === 0 ? "bg-[#12B76A]" : "bg-[#F2F4F7]"
        } xl:p-3 p-2 sm:mb-0 sm:mr-3`}
      >
        {childComponent}
      </div>
      <div className="w-full">
        <div className="text-base font-medium">{primaryline}</div>
        <div className="flex flex-col justify-between font-light md:flex-row ">
          <div className="mt-1 text-xs font-normal">{secondaryline}</div>
          <div className="mt-1 text-xs font-light">{time} MIN</div>
        </div>
      </div>
    </div>
  );
}
