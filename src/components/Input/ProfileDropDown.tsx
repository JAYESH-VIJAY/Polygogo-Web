export default function ProfileDropDown({
  placeholder,
  children,
  width = 64,
}: any) {
  return (
    <div className="relative">
      <select
        className={`w-${width} px-3 py-2 text-[#98A2B3] text-[13px] outline-none border border-[#D0D5DD] rounded-lg appearance-none`}
      >
        <option value="" disabled selected hidden>
          {placeholder}
        </option>
        {children}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
        {/* Custom dropdown icon (downward arrow) */}
        <svg
          className="w-4 h-4 text-[#98A2B3]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>
    </div>
  );
}
