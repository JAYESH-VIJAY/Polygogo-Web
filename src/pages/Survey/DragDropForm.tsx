import DefaultCardLayout from "@/layout/DefaultCardLayout";
import AddField from "./AddField";
import { useDrop } from "react-dnd";
import { useState } from "react";
import { dragCardData } from "./DragCardData";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import PgDot from "@/assets/forms/PgDot";
import { RiDeleteBinLine } from "react-icons/ri";
import { AiOutlineEdit } from "react-icons/ai";
import { Radio } from "antd";

//================= Screen View {ends 188} ==================

interface fieldTypes {
  id: number;
  fieldValue: string;
}

export default function DragDropForm({ isActive }) {
  // component State
  const [edit, setEdit] = useState<boolean>(false);
  const [label, setLabel] = useState<string>("");
  const [placeholder, setPlaceholder] = useState<string>("");
  const [defaultValue, setDefaultValue] = useState<string>("");
  const [tagLine, setTagLine] = useState<string>("");
  const [isRequired, setIsRequired] = useState<boolean>(false);
  // new Array(100).fill(undefined) || will create a array of 100 element with all values are undefined
  const [newLabel, setNewLabel] = useState<string[]>(
    new Array(100).fill(undefined)
  );
  const [newTagLine, setNewTagLine] = useState<string[]>(
    new Array(100).fill(undefined)
  );
  const [newPlaceholder, setNewPlaceholder] = useState<string[]>(
    new Array(100).fill(undefined)
  );
  const [newDefaultValue, setNewDefaultValue] = useState<string[]>(
    new Array(100).fill(undefined)
  );
  const [newIsRequired, setNewIsRequired] = useState<boolean[]>(
    new Array(100).fill(false)
  );
  const [fieldId, setFieldId] = useState<number>(NaN);
  const [field, setField] = useState<fieldTypes[]>([]);
  const [clickFieldIndex, setClickFieldIndex] = useState<number>(NaN);
  function onDone() {
    const isRequiredArray = [...newIsRequired];
    isRequiredArray[clickFieldIndex] = isRequired;
    const labelArray = [...newLabel];
    labelArray[clickFieldIndex] = label;
    const tagLineArray = [...newTagLine];
    tagLineArray[clickFieldIndex] = tagLine;
    const placeholderArray = [...newPlaceholder];
    placeholderArray[clickFieldIndex] = placeholder;
    const defaultValueArray = [...newDefaultValue];
    defaultValueArray[clickFieldIndex] = defaultValue;
    setNewTagLine(tagLineArray);
    setNewPlaceholder(placeholderArray);
    setNewDefaultValue(defaultValueArray);
    setNewLabel(labelArray);
    setNewIsRequired(isRequiredArray);
    setIsRequired(false);
    setLabel("");
    setPlaceholder("");
    setDefaultValue("");
    setTagLine("");
  }
  //Drop Field Logic
  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: "field",
    drop: (item: any) => addFieldToForm(item.id),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));
  const addFieldToForm = (id: any) => {
    const fieldList: any = dragCardData.filter(
      (field: fieldTypes) => id === field.id
    );
    switch (id) {
      default:
        setField((field: fieldTypes[]) => [...field, fieldList[0]]);
    }
  };
  // Radio Logic
  const onChange = (e: any) => {
    e.target.value === "Yes" && setIsRequired(true);
    e.target.value === "No" && setIsRequired(false);
  };

  return (
    <>
      {isActive === 2 && <PostSubmission />}
      {isActive === 3 && <PublishAndShare />}
      {isActive === 1 && (
        <div className="mt-6 flex w-full gap-4 flex-col md:flex-row">
          <div className="lg:w-1/3">
            {!edit && <AddField />}
            {edit && (
              <DefaultCardLayout padding={0}>
                <div
                  onClick={() => setEdit(false)}
                  className="flex items-center p-3 text-blue-500 gap-2 cursor-pointer"
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
                  <div
                    onClick={onDone}
                    className=" text-md font-medium cursor-pointer hover:text-[#1263DC]"
                  >
                    Done
                  </div>
                </div>
                <h1 className="text-lg font-semibold  mx-7 mt-0 text-[#263238]">
                  Edit Field
                </h1>
                <div className="flex flex-col gap-2 mx-7 mt-3">
                  <div className="text-md font-medium text-[#263238] ">
                    Field Type
                  </div>
                  <div className="text-gray-400 text-sm">First Name</div>
                </div>
                <div className="border-t-2 border-gray-200 mt-3"></div>
                <div className="text-[#263238] m-6 mt-4">
                  <div className="text-base font-medium ml-1">
                    Make this field required
                  </div>
                  <div className="my-6 mt-2 ml-2">
                    <Radio.Group onChange={onChange}>
                      <Radio value={"Yes"}>Yes</Radio>
                      <Radio value={"No"}>No</Radio>
                    </Radio.Group>
                  </div>
                  <div>
                    <EditLabel setLabel={setLabel} />
                    <EditHelpText setTagLine={setTagLine} />
                    <EditPlaceholderText setPlaceholder={setPlaceholder} />
                    <EditDefaultValue setDefaultValue={setDefaultValue} />
                  </div>
                </div>
              </DefaultCardLayout>
            )}
          </div>
          <div className="md:w-2/3">
            <DefaultCardLayout>
              <div>
                <div className="text-[#D0D5DD] text-2xl text-center sm:mt-6 font-semibold w-full ">
                  Untitled Form
                </div>
                <textarea
                  rows={5}
                  placeholder={"Form Description"}
                  className="p-2 rounded-xl border-2 text-xs placeholder:text-sm pl-3 bg-[#FCFCFD] focus:outline-none resize-none w-full mt-4 "
                />
                <div className="border-t-2 w-full my-6 border-[#E4E7EC] "></div>
              </div>
              <div
                ref={dropRef}
                className="form w-full border-2 p-6 flex flex-col gap-4 mt-4 min-h-[200px]"
              >
                {field.map((val: any, index: any) => (
                  <div key={index}>
                    {val.id != 3 && (
                      <SimpleInput
                        label={`${val.fieldValue}`}
                        id={index}
                        setField={setField}
                        field={field}
                        edit={edit}
                        setEdit={setEdit}
                        newTagLine={newTagLine}
                        newLabel={newLabel}
                        newPlaceholder={newPlaceholder}
                        newDefaultValue={newDefaultValue}
                        isRequired={isRequired}
                        setIsRequired={setIsRequired}
                        setFieldId={setFieldId}
                        setNewDefaultValue={setNewDefaultValue}
                        setNewLabel={setNewLabel}
                        setNewPlaceholder={setNewPlaceholder}
                        setNewTagLine={setNewTagLine}
                        setClickFieldIndex={setClickFieldIndex}
                        setNewIsRequired={setNewIsRequired}
                        newIsRequired={newIsRequired}
                      />
                    )}
                    {val.id === 3 && (
                      <Phone
                        label={`${val.fieldValue}`}
                        id={index}
                        setField={setField}
                        field={field}
                        edit={edit}
                        setEdit={setEdit}
                        newTagLine={newTagLine}
                        setNewTagLine={setNewTagLine}
                        newLabel={newLabel}
                        setNewLabel={setNewLabel}
                        isRequired={isRequired}
                        setIsRequired={setIsRequired}
                        setFieldId={setFieldId}
                      />
                    )}
                  </div>
                ))}
              </div>
            </DefaultCardLayout>
          </div>
        </div>
      )}
    </>
  );
}

//========================= Input Fields  =========================

import {
  EditDefaultValue,
  EditHelpText,
  EditLabel,
  EditPlaceholderText,
} from "./components/EditInput";
import PostSubmission from "./PostSubmission";
import PublishAndShare from "./PublishAndShare";

interface SimpleInputTypes {
  label?: string | null;
  htmlType?: string;
  id: number;
  setField?: any;
  field?: any;
  edit?: any;
  setEdit?: any;
  newTagLine?: any;
  setNewTagLine?: any;
  newLabel?: any;
  isRequired?: boolean;
  setIsRequired?: any;
  placeholder?: any;
  setPlaceholder?: any;
  defaultValue?: any;
  setDefaultValue?: any;
  setFieldId?: any;
  newDefaultValue?: any;
  newPlaceholder?: any;
  setNewPlaceholder?: any;
  setNewTagline?: any;
  setNewDefaultValue?: any;
  setNewLabel?: any;
  setClickFieldIndex?: any;
  setNewIsRequired?: any;
  newIsRequired?: any;
}

// *************Component 1. ********************

export function SimpleInput({
  label,
  htmlType = "text",
  id,
  setField,
  field,
  setEdit,
  newTagLine,
  newLabel,
  newPlaceholder,
  newDefaultValue,
  setNewLabel,
  setNewTagLine,
  setNewDefaultValue,
  setNewPlaceholder,
  setFieldId,
  setClickFieldIndex,
  setNewIsRequired,
  newIsRequired,
}: SimpleInputTypes) {
  const [click, setClick] = useState(false);
  function handleDelete() {
    const newField = field.filter((_: any, index: number) => index !== id);
    const newLabelArray = newLabel.filter(
      (_: any, index: number) => index !== id
    );
    const newTagLineArray = newTagLine.filter(
      (_: any, index: number) => index !== id
    );
    const newDefaultValueArray = newDefaultValue.filter(
      (_: any, index: number) => index !== id
    );
    const newPlaceholderArray = newPlaceholder.filter(
      (_: any, index: number) => index !== id
    );
    const newIsRequiredArray = newIsRequired.filter(
      (_: any, index: number) => index !== id
    );
    setNewIsRequired(newIsRequiredArray);
    setField(newField);
    setNewDefaultValue(newDefaultValueArray);
    setNewLabel(newLabelArray);
    setNewTagLine(newTagLineArray);
    setNewPlaceholder(newPlaceholderArray);
  }
  return (
    <div>
      <div
        className={`${
          click ? "border-2 flex relative rounded-xl mt-3 border-primary" : ""
        }`}
      >
        {click && (
          <div
            onClick={() => setClick(false)}
            className="bg-primary cursor-pointer w-6 rounded-s-md flex items-center justify-center text-white"
          >
            <PgDot />
          </div>
        )}
        {click && (
          <>
            <div className="bg-[#1263DC] absolute -right-2 top-5 p-2 px-4 text-white text-xs font-medium rounded-lg  ">
              Make Optional
            </div>
            <div className="flex absolute right-10 -top-5 bg-primary gap-2 text-white rounded-3xl items-center ">
              <div
                className="pl-3 cursor-pointer"
                onClick={() => setEdit(true)}
              >
                <div onClick={() => setFieldId(id)}>
                  <AiOutlineEdit size={16} />
                </div>
              </div>
              <div onClick={handleDelete} className="pr-1 cursor-pointer pl-1">
                <RiDeleteBinLine size={16} />
              </div>
              <div>
                <select
                  className=" outline-none bg-[#1263DC] p-2 pr-1  flex items-center justify-center border-none text-sm rounded-e-3xl"
                  name="payments"
                  id="payments"
                >
                  <option value="more">More1</option>
                  <option value="more">More2</option>
                  <option value="more">More3</option>
                </select>
              </div>
            </div>
          </>
        )}
        <div
          onClick={() => {
            setClick(true);
            setClickFieldIndex(id);
          }}
          className={`py-3 w-full px-2 ${
            click ? "bg-[#26323808]" : "bg-white"
          }`}
        >
          <div className="pl-1">
            {label && (
              <div>
                <label className="text-[13px] font-medium text-[#667085]">
                  {!newLabel[id] ? label : newLabel[id]}
                  <span className="text-[#667085]">
                    &nbsp;{newIsRequired[id] && "*"}
                  </span>
                </label>
              </div>
            )}
            <div className="mb-2 mt-[2px]">
              <div className="text-xs  text-[#98A2B3]">
                {label && !newTagLine[id] && <>Type your {label} Here</>}
                {newTagLine[id] && newTagLine[id]}
              </div>
            </div>
          </div>
          <div
            className={`flex w-full p-3 px-6 ${
              click ? "bg-white" : "bg-[#FCFCFD]"
            } text-xs font-medium border border-gray-200 rounded-full text-primaryDark placeholder:text-solid-slate-400`}
          >
            <input
              className={`w-full outline-none  ${
                click ? "bg-white" : "bg-[#FCFCFD]"
              }`}
              placeholder={newPlaceholder[id]}
              type={htmlType}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// ************* Component 2. *******************

interface PhoneInputTypes {
  label?: string | null;
  id: number;
  edit?: any;
  setEdit?: any;
  newTagLine?: any;
  setNewTagLine?: any;
  newLabel?: any;
  setNewLabel?: any;
  field?: any;
  setField?: any;
  setFieldId?: any;
  isRequired?: boolean;
  setIsRequired?: any;
}
interface PhoneTypes {
  value: string;
  country: {
    name: string;
    dialCode: string;
  };
}
export function Phone({
  label,
  isRequired,
  id,
  edit,
  setEdit,
  newTagLine,
  setNewTagLine,
  newLabel,
  setNewLabel,
  setField,
  field,
  setFieldId,
}: PhoneInputTypes) {
  const [click, setClick] = useState(false);
  function handleDelete() {
    const newField = field.filter((_: any, index: number) => index !== id);
    setField(newField);
  }
  const [phones, setPhones] = useState<PhoneTypes[]>([]);
  const handleOnChange = (
    value: string,
    country: { name: string; dialCode: string }
  ) => {
    setPhones([{ value, country }]);
  };
  const newValue: false | string =
    phones.length > 0 &&
    phones[0].value.replace(phones[0].country.dialCode, "");

  return (
    <div>
      <div
        className={`${
          click ? "border-2 flex relative rounded-xl mt-3 border-primary" : ""
        }`}
      >
        {click && (
          <div
            onClick={() => setClick(false)}
            className="bg-primary cursor-pointer w-6 rounded-s-md flex items-center justify-center text-white"
          >
            <PgDot />
          </div>
        )}
        {click && (
          <>
            <div className="bg-[#1263DC] absolute -right-2 top-5 p-2 px-4 text-white text-xs font-medium rounded-lg  ">
              Make Optional
            </div>
            <div className="flex absolute right-10 -top-5 bg-primary gap-2 text-white rounded-3xl items-center ">
              <div
                className="pl-3 cursor-pointer"
                onClick={() => setEdit(!edit)}
              >
                <div onClick={() => setFieldId(id)}>
                  <AiOutlineEdit size={16} />
                </div>
              </div>
              <div onClick={handleDelete} className="pr-1 cursor-pointer pl-1">
                <RiDeleteBinLine size={16} />
              </div>
              <div>
                <select
                  className=" outline-none bg-[#1263DC] p-2 pr-1  flex items-center justify-center border-none text-sm rounded-e-3xl"
                  name="payments"
                  id="payments"
                >
                  <option value="Weekly">More</option>
                  <option value="Weekly">More</option>
                  <option value="Weekly">More</option>
                </select>
              </div>
            </div>
          </>
        )}
        <div
          onClick={() => {
            setClick(true);
          }}
          className={`py-3 w-full px-2 ${
            click ? "bg-[#26323808]" : "bg-white"
          }`}
        >
          <div className="ml-1">
            {label && (
              <div>
                <label className="text-[13px] font-medium text-[#667085]">
                  {label}
                  <span className="text-[#667085]">
                    &nbsp;{isRequired && "*"}
                  </span>
                </label>
              </div>
            )}
            <div className="mb-2 mt-[2px]">
              <label className="text-[11px]  text-[#98A2B3]">
                Type your {label} Number Here...
                <span className="text-[#667085]">
                  &nbsp;{isRequired && "*"}
                </span>
              </label>
            </div>
          </div>

          <div>
            <PhoneInput
              country={"us"} // Set the default country (optional)
              value={phones.length > 0 ? phones[phones.length - 1].value : ""}
              onChange={handleOnChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
