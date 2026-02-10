
import React from 'react';

const WhatHappened: React.FC = () => (
  <section className="h-auto lg:h-[916rem] p-[40rem_0] lg:p-[50rem_100rem] flex flex-col lg:flex-row items-center lg:justify-between gradient-bg-2">
    <img src="https://i.postimg.cc/4HHJgGjH/image-2.png" className="w-[360rem] h-[251rem] lg:w-[1135rem] lg:h-[816rem] object-cover order-2 lg:order-1" />
    <div className="w-[300rem] lg:w-[455rem] pt-0 lg:pt-[130rem] flex flex-col gap-[30rem] lg:gap-[60rem] order-1 lg:order-2 mb-[40rem] lg:mb-0">
      <h2 className="font-medium text-[34rem] lg:text-[58rem] leading-[110%] lg:leading-[120%] tracking-[-0.03em] whitespace-nowrap">что случилось?</h2>
      <div className="flex flex-col gap-[20rem] lg:gap-[30rem]">
        {["запой или похмелье", "хочу бросить пить", "наркотическая ломка", "психические расстройства", "зависимость у близкого"].map(item => (
          <div key={item} className="font-medium text-[22rem] lg:text-[32rem] leading-[130%] tracking-[-0.03em] text-[#269EFF] cursor-pointer hover:underline">
            {item}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatHappened;
