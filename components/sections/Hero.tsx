
import React from 'react';

const Hero: React.FC = () => (
  <section className="h-auto lg:h-[819rem] pt-[40rem] lg:pt-[50rem] pb-[40rem] lg:pb-0 flex flex-col items-center lg:items-stretch lg:relative gradient-bg-1 lg:px-[100rem]">
    {/* Mobile view */}
    <div className="lg:hidden w-[300rem] flex flex-col gap-[20rem] mb-[40rem]">
      <h1 className="font-medium text-[34rem] leading-[110%] text-[#223442]">анонимная наркологическая помощь</h1>
      <div className="flex flex-col gap-[5rem]">
        <div className="font-light text-[16rem] leading-[150%] text-[#223442]">Врач у вас дома через 30–45 минут</div>
        <div className="font-light text-[16rem] leading-[150%] text-[#223442]">Без постановки на учет</div>
      </div>
    </div>
    
    {/* Desktop view */}
    <div className="hidden lg:flex gap-[114rem]">
      <div className="w-[507rem] pt-[130rem] flex flex-col gap-[30rem]">
        <h1 className="font-medium text-[58rem] leading-[110%] tracking-[-0.03em]">анонимная наркологическая помощь</h1>
        <div className="flex flex-col gap-[15rem]">
          <div className="font-light text-[22rem] leading-[140%] tracking-[-0.02em]">Врач у вас дома через 30–45 минут</div>
          <div className="font-light text-[22rem] leading-[140%] tracking-[-0.02em]">Без постановки на учет</div>
        </div>
      </div>
    </div>

    {/* Shared Image */}
    <img src="https://i.postimg.cc/RJJMBmyj/image-1.png" className="w-[360rem] h-[336rem] lg:w-[1099rem] lg:h-[769rem] object-cover object-bottom lg:absolute lg:right-[100rem] lg:top-auto" />
  </section>
);

export default Hero;
