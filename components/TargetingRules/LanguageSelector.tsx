import React, { useState } from 'react';
import CheckBox from '../commons/CheckBox';

const LanguageSelector = () => {
  const langs = ['English', 'French', 'German', 'Polish', 'Dutch', 'Finnish', 'Arabic', 'Russian', 'Spanish', '232', '231231'];
  const [dropdown, setDropdown] = useState(false);

  const handleDropDown = () => {

  };

  return (
    <div className="mt-3 relative ">
      <button
        type="button"
        onClick={() => setDropdown(!dropdown)}
        className="border rounded-lg h-[34px] flex justify-between items-center px-3 w-full focus:border-purple-500"
      >
        <p className="font-[Poppins] text-sm text-gray-500 leading-[34px]">Select</p>
        <div>
          <img src="/dd.svg" alt="svg" />
        </div>
      </button>
      <div className={`absolute bg-white w-[260px] right-0 border rounded-lg drop-shadow-lg h-[305px] pt-1 pb-[54px] ${dropdown ? 'block' : 'hidden'}`}>
        <div className="max-h-[251px] overflow-auto">
          <div className="flex bg-white w-full px-4 py-4 gap-2 font-[Inter] text-sm border-t-2 border-gray-100 border-2 border-gray-100">
            <CheckBox />
            <p>All Languages</p>
          </div>
          <ul className="">
            {langs.map((lang) => (
              <li key={lang} className="px-4 py-1.5 flex gap-2 hover:bg-gray-100">
                <CheckBox />
                <span className="text-sm font-[Inter]">{lang}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute bottom-0 flex justify-between w-full p-4 font-[Inter] text-sm border-t-2 border-gray-100">
          <button type="button" className="font-semibold">Clear all</button>
          <button type="button" onClick={() => setDropdown(false)}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
