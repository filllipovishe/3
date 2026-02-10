
import React, { useState } from 'react';
import { FAQ as FAQData } from '../../constants.ts';

const FAQ: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(0);

  return (
    <section className="p-[40rem_30rem] lg:p-[90rem_100rem] bg-white">
      <h2 className="font-medium text-[34rem] lg:text-[58rem] leading-[110%] lg:leading-[120%] tracking-[-0.03em]">частые вопросы</h2>
      <div className="mt-[30rem] lg:mt-[60rem] flex flex-col gap-[20rem] lg:gap-[45rem]">
        {FAQData.map((item, i) => (
          <div key={i}>
            <div 
              className="flex items-start gap-[20rem] lg:gap-[32rem] cursor-pointer" 
              onClick={() => setActiveIdx(activeIdx === i ? null : i)}
            >
              <div className={`w-[15rem] h-[15rem] lg:w-[26rem] lg:h-[26rem] flex-shrink-0 mt-[9rem] lg:mt-[5rem] transition-transform duration-300 ${activeIdx === i ? 'rotate-45' : ''}`}>
                <svg viewBox="0 0 26 26" fill="none"><path d="M13 0V26M0 13H26" stroke="#269EFF" strokeWidth="3"/></svg>
              </div>
              <div className="font-medium text-[22rem] lg:text-[32rem] leading-[130%] text-[#269EFF]">{item.question}</div>
            </div>
            <div 
              className="overflow-hidden transition-[max-height] duration-300 pl-[35rem] lg:pl-[58rem]" 
              style={{ maxHeight: activeIdx === i ? '500px' : '0px' }}
            >
              <div className="pt-[10rem] lg:pt-[15rem] font-light text-[16rem] lg:text-[22rem] leading-[150%]">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;