import React from 'react';
import { useAppSelector } from '../../redux/store';

const SelectedLanguages = () => {
  const fn = () => {};
  const languages = useAppSelector((state) => state.targeting.languages);

  return (
    <div className="mt-3 border rounded-lg flex flex-wrap items-center gap-[3px] p-[3px] max-w-[398px]">
      {languages.map((language) => (
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
  );
};

export default SelectedLanguages;
