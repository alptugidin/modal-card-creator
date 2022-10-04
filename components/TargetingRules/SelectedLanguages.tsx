import React, { useState } from 'react';
import { useAppSelector } from '../../redux/store';

const SelectedLanguages = () => {
  const [expand, setExpand] = useState(false);
  const selectedLanguages = useAppSelector((state) => state.targeting.targeting.selectedLanguages);
  return (
    <div className="mt-3 border rounded-lg bg-white z-10 flex flex-wrap items-center gap-[3px] pl-[2px] pt-[2px] pr-5 h-[34px] w-full relative">
      <button
        type="button"
        onClick={() => setExpand(!expand)}
        className="absolute right-0 top-2 pr-3"
      >
        <img src="/dd.svg" alt="svg" />
      </button>
      {selectedLanguages.map((language) => (
        <div key={language} className="group flex items-center gap-3 border border-gray-200 bg-gray-200 px-1.5 h-[28px] rounded-md border hover:border-red-600 cursor-default">
          <span className="font-[Poppins]">
            {language}
          </span>
          <div className="w-[18px] h-[18px] rounded-full bg-gray-200 group-hover:bg-red-600">
            <img src="/remove.svg" alt="remove" className="ml-[3px] mt-[3px] group-hover:hidden" />
            <img src="/removeWhite.svg" alt="remove" className="ml-[3px] mt-[3px] hidden group-hover:block" />
          </div>
        </div>
      ))}

      <div className="absolute -bottom-[200px] left-0 w-full rounded-lg drop-shadow-lg  bg-white">
        <div className=" overflow-auto h-[200px] rounded-bl-lg pb-[40px] flex flex-wrap ">
          {selectedLanguages.map((language) => (
            <div key={language} className="group flex items-center gap-3 border border-gray-200 bg-gray-200 px-1.5 h-[28px] rounded-md border hover:border-red-600 cursor-default">
              <span className="font-[Poppins]">
                {language}
              </span>
              <div className="w-[18px] h-[18px] rounded-full bg-gray-200 group-hover:bg-red-600">
                <img src="/remove.svg" alt="remove" className="ml-[3px] mt-[3px] group-hover:hidden" />
                <img src="/removeWhite.svg" alt="remove" className="ml-[3px] mt-[3px] hidden group-hover:block" />
              </div>
            </div>
          ))}

        </div>
        <div className="flex justify-between px-5 items-center bg-white absolute bottom-0 w-full font-[Inter] py-2 border-t-gray-100 border-2 rounded-bl-lg">
          <button type="button" className="font-semibold text-sm">Clear all</button>
          <button type="button" className="text-sm">Close</button>
        </div>
      </div>
    </div>
  );
};

export default SelectedLanguages;
