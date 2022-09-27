import React, { useEffect, useState } from 'react';

const LanguageSelector = () => {
  const langs = ['Arabic', 'Chinese', 'English', 'French', 'Russian', 'Spanish'];
  const [dropdown, setDropdown] = useState(false);
  const handleDropdown = async () => {
    setDropdown(!dropdown);
  };

  const handleLangSelect = (e:any) => {
    console.log(e.target.textContent);
    setDropdown(false);
  };
  return (
    <div className="mt-3 relative">
      <button
        type="button"
        onClick={handleDropdown}
        className="border outline-none rounded-lg p-1 w-full focus:border-purple-500 focus:outline-2 focus:outline-purple-400/40 pl-3 relative cursor-pointer"
      >
        <p className="font-[Poppins] text-gray-400 text-left">Select</p>
        <img
          src="/dd.svg"
          alt="dropdownsvg"
          className="absolute right-3 top-2"
        />
      </button>
      <ul className={`border shadow rounded-lg absolute w-full bg-white z-20 ${!dropdown && 'hidden'}`}>
        {langs.map((lang) => (
          <li
            key={lang}
            onClick={handleLangSelect}
            className="hover:bg-blue-600 hover:text-white px-3 py-1 first:rounded-t-lg last:rounded-b-lg cursor-default font-[Poppins text-sm]"
          >
            {lang}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageSelector;
