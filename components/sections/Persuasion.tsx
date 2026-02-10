
import React from 'react';

const Persuasion: React.FC = () => (
  <section className="p-[40rem_0] lg:p-[50rem_100rem] flex flex-col lg:flex-row items-center lg:gap-[100rem] lg:h-[916rem] gradient-bg-1 lg:gradient-bg-2">
    <img src="https://i.postimg.cc/CnnFg09z/image-3.png" className="w-[360rem] h-[269rem] lg:w-[1135rem] lg:h-[816rem] object-cover" />
    <div className="w-[300rem] lg:w-[500rem] pt-[20rem] lg:pt-[130rem] flex flex-col gap-[20rem] lg:gap-[30rem]">
      <h2 className="font-medium text-[34rem] lg:text-[58rem] leading-[110%] tracking-[-0.03em]">уговорим вашего близкого на лечение</h2>
      <div className="font-light text-[16rem] lg:text-[22rem] leading-[150%] lg:leading-[140%] tracking-[-0.02em]">Без давления и принуждения</div>
      <button className="w-[199rem] lg:w-[253rem] h-[55rem] lg:h-[58rem] bg-[#E7F5FF] text-[#269EFF] rounded-[20rem] font-normal text-[17rem] lg:text-[22rem] flex items-center justify-center mt-[0] lg:mt-[30rem] p-[13rem_25rem_16rem] lg:p-0 lg:pb-[2rem]">
        получить помощь
      </button>
    </div>
  </section>
);

export default Persuasion;
