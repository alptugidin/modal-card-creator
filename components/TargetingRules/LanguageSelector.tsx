import React, { useEffect, useState } from 'react';
import CheckBox from '../commons/CheckBox';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { addAllLanguages, clearAllLanguages, setLanguage } from '../../features/targetingSlice';

const LanguageSelector = () => {
  const { targeting } = useAppSelector((state) => state.targeting);
  const [dropdown, setDropdown] = useState(false);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!targeting.languages.isActive) {
      setDropdown(false);
    }
  }, [targeting.languages.isActive]);

  return (
    <div className="mt-3 relative z-20">
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
          <div className="flex bg-white w-full px-4 py-4 gap-2 font-[Inter] text-sm border-b-2 border-gray-100">
            <CheckBox
              tickState={targeting.selectedLanguages.length === targeting.languages.value.length}
              check={() => dispatch(addAllLanguages())}
            />
            <p>All Languages</p>
          </div>
          <ul className="">
            {targeting.languages.value.map((language) => (
              <li key={language} className="px-4 py-1.5 flex gap-2 hover:bg-gray-100">
                <CheckBox
                  check={() => dispatch(setLanguage(language))}
                  tickState={targeting.selectedLanguages.some((lan) => lan === language)}
                />
                <span className="text-sm font-[Inter]">{language}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute bottom-0 flex justify-between w-full p-4 font-[Inter] text-sm border-t-2 border-gray-100">
          <button
            type="button"
            onClick={() => dispatch(clearAllLanguages())}
            className="font-semibold"
          >
            Clear all
          </button>
          <button
            type="button"
            onClick={() => setDropdown(false)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
