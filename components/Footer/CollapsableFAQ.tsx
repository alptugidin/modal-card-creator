import React from 'react';

const CollapsableFAQ = () => {
  const QA = [
    {
      q: 'How do I pay for the essentials or premium plan?',
      a: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda cupiditate deserunt enim minus quasi?',
    },
    {
      q: 'Can I cancel my essentials or premium plan subscription at my time?',
      a: 'You can pay with a credit card or via net banking (if you’re in United States). We willrenew'
          + ' your subscription automatically at the end of every billing cycle.',
    },
    {
      q: 'How do I pay for the essentials or premium plan?',
      a: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda cupiditate deserunt enim minus quasi?',
    },
    {
      q: 'We need to add new users to our team, how will that be billed?',
      a: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda cupiditate deserunt enim minus quasi?',
    },
    {
      q: 'How do I pay for the essentials or premium plan?',
      a: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda cupiditate deserunt enim minus quasi?',
    },
    {
      q: 'Can I cancel my essentials or premium plan subscription at my time?',
      a: 'You can pay with a credit card or via net banking (if you’re in United States). We willrenew'
          + ' your subscription automatically at the end of every billing cycle.',
    },
  ];
  return (
    <div className="mt-10">
      {QA.map((el, index) => (
        <button
          key={index.toString()}
          type="button"
          className="border-t last:border-b w-full group relative"
        >
          <div className="min-h-[74px] flex justify-between px-8 items-center bg-white group-focus:bg-gray-100">
            <span className="font-[Poppins] text-lg text-gray-500 tracking-tight font-semibold">
              {el.q}
            </span>
            <img src="/expand.svg" alt="expand" width="24" height="24" className="group-focus:hidden" />
            <img src="/collapse.svg" alt="expand" width="24" height="24" className="hidden group-focus:block" />
          </div>
          <div className="flex pl-8 pr-16 relative -z-20 h-0 w-full -top-[74px] group-focus:top-0 transition-all group-focus:h-[74px] group-focus:bg-gray-100">
            <span className="font-[Poppins] tracking-tight text-left">
              {el.a}
            </span>
          </div>

        </button>
      ))}
    </div>
  );
};

export default CollapsableFAQ;
