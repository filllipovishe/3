
import React, { useRef, useState } from 'react';
import { CONDITIONS } from '../../constants.ts';

const useDragScroll = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = (e: React.MouseEvent) => {
    if (!ref.current) return;
    setIsDown(true);
    setStartX(e.pageX - ref.current.offsetLeft);
    setScrollLeft(ref.current.scrollLeft);
  };

  const onMouseLeave = () => setIsDown(false);
  const onMouseUp = () => setIsDown(false);

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !ref.current) return;
    e.preventDefault();
    const x = e.pageX - ref.current.offsetLeft;
    const walk = (x - startX) * 2;
    ref.current.scrollLeft = scrollLeft - walk;
  };

  return { ref, onMouseDown, onMouseLeave, onMouseUp, onMouseMove };
};

const Conditions: React.FC = () => {
  const { ref, ...dragProps } = useDragScroll();
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateButtons = () => {
    if (!ref.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = ref.current;
    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
  };

  const scroll = (dir: number) => {
    ref.current?.scrollBy({ left: dir * 800, behavior: 'smooth' });
  };

  return (
    <section className="p-[40rem_0] lg:p-[90rem_100rem] bg-white lg:gradient-bg-1">
      <div className="flex justify-between items-center mb-[30rem] lg:mb-[40rem] px-[30rem] lg:px-0">
        <h2 className="font-medium text-[34rem] lg:text-[58rem] leading-[110%] lg:leading-[120%] tracking-[-0.03em]">комфортные условия лечения</h2>
        <div className="hidden lg:flex gap-[20rem]">
          <button 
            onClick={() => scroll(-1)}
            className={`w-[60rem] h-[63rem] flex items-center justify-center transition-colors ${canScrollLeft ? 'bg-[#E7F5FF] cursor-pointer' : 'bg-[#E7F5FF]/50 cursor-default'}`}
          >
            <svg width="60rem" height="63rem" viewBox="0 0 60 63"><path d="M40 20L20 31.5L40 43" stroke="#269EFF" strokeWidth="2" fill="none"/></svg>
          </button>
          <button 
            onClick={() => scroll(1)}
            className={`w-[60rem] h-[63rem] flex items-center justify-center transition-colors ${canScrollRight ? 'bg-[#E7F5FF] cursor-pointer' : 'bg-[#E7F5FF]/50 cursor-default'}`}
          >
            <svg width="60rem" height="63rem" viewBox="0 0 60 63"><path d="M20 20L40 31.5L20 43" stroke="#269EFF" strokeWidth="2" fill="none"/></svg>
          </button>
        </div>
      </div>
      <div 
        ref={ref} 
        onScroll={updateButtons}
        {...dragProps}
        className="overflow-x-auto hide-scrollbar cursor-grab active:cursor-grabbing select-none mobile-horizontal-scroll pl-[30rem] lg:pl-0"
      >
        <div className="flex gap-[20rem] lg:gap-[30rem] w-max">
          {CONDITIONS.map((img, i) => (
            <img key={i} src={img} className="w-[280rem] h-[230rem] lg:w-[835rem] lg:h-[547rem] object-cover flex-shrink-0 pointer-events-none" />
          ))}
          <div className="flex-shrink-0 w-[10rem] h-full invisible lg:hidden"></div>
        </div>
      </div>
    </section>
  );
};

export default Conditions;