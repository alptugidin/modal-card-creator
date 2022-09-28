import React, { useState } from 'react';

const Toggle = () => {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className={`w-[33px] h-[18px] rounded-full p-[3px] transition-all ${!toggle ? 'bg-gray-500' : 'base-color-bg'}`}
    >
      <div className={`w-[12px] h-[12px] rounded-full bg-white transition-all ${toggle && 'ml-[15px]'}`} />
    </button>
  );
};

export default Toggle;
