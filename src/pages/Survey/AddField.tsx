import DragableField, { dragCardData } from "./DragCardData";
import DefaultCardLayout from "@/layout/DefaultCardLayout";
import { BiSolidChevronDown, BiSolidChevronUp } from "react-icons/bi";
import { useState } from "react";
export default function AddField() {
  const [fShow, setFShow] = useState(false);
  const [sShow, setSShow] = useState(false);
  return (
    <DefaultCardLayout>
      <div className=" w-full">
        <div className="flex items-center gap-1 mb-4">
          <div className="text-[#263238]  font-semibold text-md  ml-2 ">
            Frequently used fields
          </div>
          {fShow ? (
            <div onClick={() => setFShow(!fShow)}>
              <BiSolidChevronDown />
            </div>
          ) : (
            <div onClick={() => setFShow(!fShow)}>
              <BiSolidChevronUp />
            </div>
          )}
        </div>    
        {!fShow && (
          <div className="flex gap-3 flex-col">
            {dragCardData.map(
              (val, index) =>
                index <= 5 && (
                  <DragableField key={index} id={index}>
                    {val.fieldValue}
                  </DragableField>
                )
            )}
          </div>
        )}
        <div className="flex items-center gap-1  mb-4 mt-6">
          <div className="text-[#263238]  font-semibold text-md  ml-2 ">
            General fields
          </div>
          {sShow ? (
            <div onClick={() => setSShow(!sShow)}>
              <BiSolidChevronDown />
            </div>
          ) : (
            <div onClick={() => setSShow(!sShow)}>
              <BiSolidChevronUp />
            </div>
          )}
        </div>
        {!sShow && (
          <div className="flex gap-3 flex-col">
            {dragCardData.map(
              (val, index) =>
                index > 5 && (
                  <DragableField key={index} id={index}>
                    {val.fieldValue}
                  </DragableField>
                )
            )}
          </div>
        )}
      </div>
    </DefaultCardLayout>
  );
}
