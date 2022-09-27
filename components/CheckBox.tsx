import React, { useState } from 'react';

const CheckBox = () => {
  const [check, setCheck] = useState(false);
  const handleCheck = () => {
    setCheck(!check);
  };
  return (
    <button
      type="button"
      onClick={handleCheck}
      className={`w-[18px] h-[18px] bg-gray-100 border border-gray-400 rounded ${check ? 'base-color-bg base-color-border' : ''} `}
    >
      {check && <img src="/check.svg" alt="check" className="mx-auto" />}
    </button>
  );
};

export default CheckBox;
