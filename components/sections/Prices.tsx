
import React, { useState } from 'react';
import { DESKTOP_PRICE_GROUPS, MOBILE_PRICES } from '../../constants.ts';

const Prices: React.FC = () => {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  return (
    <section className="p-[40rem_30rem] lg:p-[90rem_100rem_100rem] bg-white">
      <div className="flex items-start lg:items-center gap-[8rem] mb-[30rem] lg:mb-[60rem]">
        <h2 className="font-medium text-[34rem] lg:text-[58rem] leading-[110%] lg:leading-[120%] tracking-[-0.03em]">стоимость услуг</h2>
        <span className="text-[17rem] lg:text-[22rem] font-light mt-0 lg:mt-[5rem]">₽</span>
      </div>

      {/* Mobile Price List */}
      <div className="lg:hidden w-full flex flex-col items-center">
          <div className="w-[300rem] flex flex-col gap-[20rem]">
              <div className="flex flex-col gap-[20rem]">
                  {MOBILE_PRICES.map((item, i) => (
                      <div key={i} className="flex justify-between items-center gap-[15rem]">
                          <div className="font-light text-[16rem] leading-[140%] text-[#7A858E]">{item.label}</div>
                          <div className="font-light text-[16rem] leading-[140%] text-[#223442]">{item.price}</div>
                      </div>
                  ))}
              </div>
              <div className="font-light text-[17rem] leading-[140%] text-[#269EFF] cursor-pointer">смотреть все</div>
          </div>
      </div>

      {/* Desktop Price Groups */}
      <div className="hidden lg:flex gap-[154rem]">
        {DESKTOP_PRICE_GROUPS.map((group, idx) => (
          <div key={idx} className="w-[469rem] flex flex-col gap-[38rem]">
            <div className="font-medium text-[32rem] mb-[20rem]">{group.title}</div>
            <div className="flex flex-col gap-[25rem]">
              {group.items.map((item, i) => (
                <div key={i} className="flex justify-between font-light text-[22rem] text-[#7A858E]">
                  <span>{item.label}</span>
                  <span className="text-[#223442]">{item.price}</span>
                </div>
              ))}
              {expanded[idx] && [1,2,3,4,5,6].slice(0, group.moreCount).map(i => (
                 <div key={i} className="flex justify-between font-light text-[22rem] text-[#7A858E]">
                    <span>Доп. услуга {i}</span>
                    <span className="text-[#223442]">1 000</span>
                 </div>
              ))}
              <div 
                className="text-[#269EFF] font-light text-[22rem] cursor-pointer" 
                onClick={() => setExpanded(prev => ({...prev, [idx]: !prev[idx]}))}
              >
                {expanded[idx] ? 'Свернуть' : `+ ещё ${group.moreCount}`}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Prices;