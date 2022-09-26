import React, { useState } from 'react';

const ModalCardGenerator = () => {
  const [page, setPage] = useState<string | null>('1');
  const changePage = (e:React.MouseEvent) => {
    if (e.currentTarget.textContent !== null) {
      setPage(e.currentTarget.textContent);
    }
  };
  return (
    <div>
      <div className="flex py-24">
        <div className="basis-2/5">
          <p className="text-4xl font-[Poppins] font-semibold tracking-tighter">Modal Card Generator</p>
          <p className="font-[Poppins] tracking-tight mt-5 font-medium">
            Measure your return on email marketing efforts easier and
            faster by using thebest online tools. Popupsmart is ready to
            help you build an efficient email list!
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <img
          src="/stepOne.svg"
          alt="stepOne"
        />
        <p className="font-[Poppins] font-bold text-xl tracking-tight">Choose your template</p>
      </div>
      <div className="flex flex-wrap gap-[30px] justify-center mt-8">
        {[...Array.from(Array(12).keys())].map((i) => (
          <div key={i.toString()} className="w-[276px] h-[200px] bg-gray-200 border border-gray-300 rounded-xl">
            {/*  */}
          </div>
        ))}
      </div>

      {/* PAGINATION */}

      <div className="w-fit my-20">
        <div className="flex bg-[#F5F5F5] rounded-lg p-1">
          {[1, 2, 3].map((i) => (
            <button
              key={i.toString()}
              type="button"
              onClick={changePage}
              className={`${page === i.toString() ? 'bg-white' : 'text-gray-500'} text-sm rounded-md leading-[42px] w-[42px] h-[42px] text-center font-[Inter] font-semibold`}
            >
              {i}
            </button>
          ))}
        </div>
      </div>
    </div>

  );
};

export default ModalCardGenerator;
