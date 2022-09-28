import React from 'react';
import Image from 'next/image';

const CamperCard = () => (

  <div className="w-[800px] h-[468px] rounded-[40px] flex flex-row bg-white absolute -top-[234px] left-0 overflow-hidden z-20">
    {/* left */}
    <div className="w-1/2 p-10 flex-col">
      <div className="h-1/2 flex flex-col">
        <div className="h-1/2">
          <div className="w-fit mx-auto rounded-lg">
            <Image src="/camper.png" width="106" height="38" />
          </div>
        </div>
        <div className="h-1/2 flex flex-col justify-around">
          <div className="h-1/2 text-center">
            <span className="font-semibold text-4xl font-[Poppins]">Join the club</span>
          </div>
          <div className="h-1/2 text-center">
            <span className="font-medium font-[Poppins] text-lg">
              Subscribe and Get an Extra
              <br />
              <span className="underline font-semibold">25% Off</span>
              {' '}
              on your first purchase.
            </span>
          </div>
        </div>
      </div>
      <div className="h-1/2 flex flex-col justify-evenly justify-items-center gap-2 mt-5">
        <form action="components/Showcase/CamperCard" className="w-fit mx-auto">
          <input
            type="text"
            placeholder="Email address"
            className="rounded-xl border border-gray-400 h-12 w-72 px-4 outline-none"
          />
        </form>
        <button
          type="button"
          className="px-4 text-white bg-black w-72 mx-auto rounded-xl h-12 font-[Poppins]"
        >
          Subscribe
        </button>
        <div className="w-72 mx-auto">
          <span className="text-sm text-gray-500">
            By signing up, you agree to
            {' '}
            <a className="underline" href="components/Showcase/CamperCard#">Privacy Policy</a>
            {' '}
            and
            {' '}
            <a className="underline" href="components/Showcase/CamperCard#">Terms of Use</a>
            .
          </span>
        </div>
      </div>
    </div>
    {/* right */}
    <div className="w-1/2 relative">
      <Image src="/adCard.png" width="400" height="468" />
      <button type="button">
        <img alt="closecardsvg" src="/closeAdCard.svg" width="42" height="42" className="absolute right-5 top-5" />
      </button>
      <p className="z-20 absolute bottom-0 text-white text-4xl font-[Poppins] font-semibold ml-6 mb-4">
        Mediterranean
        Sneakers®
      </p>
    </div>
  </div>
);

export default CamperCard;
