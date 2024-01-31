import { ReactNode } from "react";

interface FormInputTypes {
  placeholder?: string;
  children?: ReactNode;
  htmlType?: string;
  preffix?: ReactNode;

  // onChange?: (e: any) => void;
}
export default function FormInput({
  htmlType,
  preffix,
  children,
}: FormInputTypes) {
  return (
    <>
      <div className="flex w-full gap-4 p-3 px-6 font-medium border border-gray-200 rounded-full text-primaryDark  text-sm">
        <span>{preffix}</span>
        <input
          className="w-full outline-none bg-white placeholder:text-[#475467]"
          placeholder={children?.toString()}
          type={htmlType}
          disabled={true}
        />
      </div>
    </>
  );
}
