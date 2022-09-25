import React from 'react';

const CamperCardTransparent = () => (
  <div className="w-[500px] h-[315px] rounded-t-[40px] relative bg-white absolute left-[664px] -top-[315px] bg-gradient-to-bl from-blue-50 bg-gradient-to-tr to-white">
    <div className="bg-white w-fit absolute top-48 left-36 p-3 rounded-xl flex gap-2 z-40 bg-opacity-80 font-[Poppins] font-medium text-sm font-bold">
      <img src="/thunder.svg" alt="thunder" />
      Grow email list
    </div>
    <div className="bg-white w-fit absolute top-[250px] left-32 p-3 rounded-xl flex gap-2 z-40 bg-opacity-80 font-[Poppins] font-medium text-sm font-bold">
      <img src="/dollar.svg" alt="thunder" />
      Increase sales conversion
    </div>

  </div>
);

export default CamperCardTransparent;
