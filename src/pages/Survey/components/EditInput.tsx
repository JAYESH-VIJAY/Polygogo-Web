export function EditLabel({ setLabel }: any) {
  return (
    <div className="flex flex-col ">
      <label className="mb-3 ml-1 text-base font-medium  ">Label</label>
      <div className="border border-[#E4E7EC] p-3 rounded-full mb-6">
        <input
          onChange={(e) => {
            setLabel(e.target.value);
          }}
          className="border-none outline-none text-xs text-black w-full px-2"
        />
      </div>
    </div>
  );
}
export function EditHelpText({ setTagLine }: any) {
  return (
    <div className="flex flex-col ">
      <label className="mb-3 ml-1 text-base font-medium  ">Help Text</label>
      <div className="border border-[#E4E7EC] p-3 rounded-full mb-6">
        <input
          onChange={(e) => setTagLine(e.target.value)}
          className="border-none outline-none text-xs text-black w-full px-2"
        />
      </div>
    </div>
  );
}

export function EditPlaceholderText({ setPlaceholder }: any) {
  return (
    <div className="flex flex-col ">
      <label className="mb-3 ml-1 text-base font-medium  ">
        Placeholder Text
      </label>
      <div className="border border-[#E4E7EC] p-3 rounded-full mb-6">
        <input
          onChange={(e) => setPlaceholder(e.target.value)}
          className="border-none outline-none text-xs text-black w-full px-2"
        />
      </div>
    </div>
  );
}
export function EditDefaultValue({ setDefaultValue }: any) {
  return (
    <div className="flex flex-col ">
      <label className="mb-3 ml-1 text-base font-medium  ">Default Value</label>
      <div className="border border-[#E4E7EC] p-3 rounded-full mb-6">
        <input
          onChange={(e) => setDefaultValue(e.target.value)}
          className="border-none outline-none text-xs text-black w-full px-2"
        />
      </div>
    </div>
  );
}

export function PostSubmissionInput({inputHeading,onChange}:any){
   return (
     <div className="flex flex-col ">
       <label className="mb-3 ml-1 text-base font-medium text-[#475467]  ">
         {inputHeading}
       </label>
       <div className="border border-[#E4E7EC] p-3 rounded-full mb-6">
         <input
           onChange={(e) => onChange(e)}
           className="border-none outline-none text-xs text-black w-full px-2"
         />
       </div>
     </div>
   );
}