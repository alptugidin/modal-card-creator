import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { useAppDispatch } from '../../redux/store';
import { setActiveModal } from '../../features/modalCreateSlice';

const ModalCardGenerator = () => {
  const [page, setPage] = useState<string | null>('1');
  const dispatch = useAppDispatch();
  const changePage = (e:React.MouseEvent) => {
    if (e.currentTarget.textContent !== null) {
      setPage(e.currentTarget.textContent);
    }
  };

  return (
    <div id="ModalCardGenerator">
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
      <div id="chooseTemplate" className="flex items-center gap-4 pt-5">
        <img
          src="/stepOne.svg"
          alt="stepOne"
        />
        <p className="font-[Poppins] font-bold text-xl tracking-tight">Choose your template</p>
      </div>
      <div className="flex flex-wrap gap-[30px] justify-center mt-8">
        {[...Array.from(Array(12).keys())].map((i) => (
          <div
            key={i.toString()}
            className="w-[276px] h-[200px] bg-gray-200 border border-gray-300 rounded-xl flex justify-center items-center relative group"
          >
            <div className="bg-purple-500 h-full w-full rounded-xl absolute bg-opacity-50 flex items-center transition-all justify-center opacity-0 group-hover:opacity-100">
              <Link
                to="Appearance"
                spy
                smooth
                duration={500}
                onClick={() => dispatch(setActiveModal((i + 1) + (12 * (Number(page) - 1))))}
              >
                <div className="bg-white px-7 font-semibold py-3 shadow-lg rounded-lg text-purple-600 cursor-pointer">
                  Select Template
                </div>
              </Link>
            </div>
            <img src={`/previews/p${(i + 1) + (12 * (Number(page) - 1))}.png`} alt="" />
          </div>
        ))}
      </div>

      {/* PAGINATION */}

      <div className="w-fit my-10">
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
