import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { BiSearch } from "react-icons/bi";

const people = [{ id: 1, name: "Wade Cooper" }];

function SearchBar({ handelSearchBar }: any) {
  const [selected, setSelected] = useState();
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  const isEmpty = query === "";
  return (
    <Combobox value={selected} onChange={setSelected}>
      <div className="relative">
        <div
          className={`  bg-white  pl-[9.2px] pr-2  relative flex items-center w-full overflow-hidden text-left transition ease-in duration-100   border-[#D0D5DD] outline-none cursor-default focus:outline-none sm:text-sm  ${
            !isEmpty
              ? "bg-[#F9FAFB] rounded-t-2xl border-x-[1.8px] border-t-[1.8px]"
              : "rounded-full border-[1.8px]"
          }`}
        >
          <Combobox.Input
            placeholder="Search Contacts"
            className="w-full text-sm  py-[8px] leading-5 text-gray-900 bg-transparent border-none outline-none focus:ring-0"
            displayValue={(person: any) => person.name}
            onChange={(event) => setQuery(event.target.value)}
          />

          <BiSearch
            size={24}
            className="text-gray-400 cursor-pointer"
            onClick={handelSearchBar}
          />
        </div>
        {!isEmpty && (
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute w-full px-3 py-1 overflow-auto text-base bg-white border-b-[1.8px] border-[#D0D5DD] border-x-[1.8px] rounded-b-2xl max-h-60 focus:outline-none sm:text-sm">
              {filteredPeople.length === 0 && query !== "" ? (
                <div className="relative py-2 text-gray-700 border-t-[1.8px] cursor-default select-none">
                  Nothing found.
                </div>
              ) : (
                filteredPeople.map((person) => (
                  <Combobox.Option
                    key={person.id}
                    className={({ active }) =>
                      `relative cursor-default border-t-[1.8px]  select-none py-2 `
                    }
                    value={person}
                  >
                    <div className="mb-3 font-medium">
                      <span className="text-xs text-gray-400 ">Contacts</span>
                      <ul className="mt-1 text-primaryDark">
                        <li>Jack Emmanuel</li>
                        <li>Jack Emmanuel</li>
                      </ul>
                    </div>
                    <div className="mb-3 font-medium ">
                      <span className="text-xs text-gray-400 ">Campaigns</span>
                      <ul className="mt-1 text-primaryDark">
                        <li>Featuring Jack Tyson this BFCM</li>
                      </ul>
                    </div>
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        )}
      </div>
    </Combobox>
  );
}

export default SearchBar;
