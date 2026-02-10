
import React from 'react';

const Header: React.FC = () => (
  <header className="h-[100rem] flex items-center justify-between bg-white px-[50rem] sticky top-0 z-50 border-b border-gray-50">
    <div className="flex items-center gap-[30rem]">
      <div className="flex items-center gap-[3rem]">
        <div className="font-medium text-[32rem] leading-[130%] tracking-[-0.03em]">health</div>
        <div className="w-[26rem] h-[24rem]">
          <svg width="100%" height="100%" viewBox="0 0 26 24" fill="none">
            <path d="M13 0L26 12L13 24L0 12L13 0Z" fill="#269EFF"/>
          </svg>
        </div>
        <div className="font-medium text-[32rem] leading-[130%] tracking-[-0.03em]">center</div>
      </div>
      <div className="flex items-center gap-[8rem] cursor-pointer">
        <svg width="10rem" height="6rem" viewBox="0 0 10 6" fill="none">
          <path d="M5 6L0 0H10L5 6Z" fill="#223442"/>
        </svg>
        <div className="font-light text-[22rem] leading-[140%] whitespace-nowrap">Н. Новгород</div>
      </div>
    </div>
    <nav>
      <ul className="flex gap-[25rem]">
        {["Услуги", "О клинике", "Цены", "Отзывы", "Врачи", "Контакты"].map((item, i) => (
          <li key={item} className="font-light text-[22rem] leading-[140%] cursor-pointer flex items-center gap-[9rem] whitespace-nowrap">
            {i === 0 && (
              <svg width="10rem" height="6rem" viewBox="0 0 10 6" fill="none">
                <path d="M5 6L0 0H10L5 6Z" fill="#223442"/>
              </svg>
            )}
            {item}
          </li>
        ))}
      </ul>
    </nav>
    <div className="flex items-center gap-[30rem]">
      <div className="flex items-center gap-[9rem] font-light text-[22rem] whitespace-nowrap">
        <svg width="10rem" height="6rem" viewBox="0 0 10 6" fill="none">
          <path d="M5 6L0 0H10L5 6Z" fill="#223442"/>
        </svg>
        8 999 333 10 74
      </div>
      <button className="w-[216rem] h-[58rem] bg-[#269EFF] rounded-[20rem] text-white font-normal text-[22rem] flex items-center justify-center pb-[2rem] hover:opacity-90 transition-opacity">
        вызвать врача
      </button>
    </div>
  </header>
);

export default Header;
