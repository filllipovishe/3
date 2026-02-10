
import React from 'react';

const MobileFixedBar: React.FC = () => (
  <div className="fixed bottom-0 left-0 w-full h-[75rem] bg-white border-t border-gray-100 flex items-center justify-center z-[100] px-[10rem] py-[10rem]">
    <div className="w-full flex items-center justify-between">
      <div className="w-[55rem] h-[55rem] bg-[#E7F5FF] rounded-[20rem] flex-shrink-0 flex items-center justify-center">
        <svg width="24" height="22" viewBox="0 0 24 22" fill="none">
          <path d="M12 0L24 11L12 22L0 11L12 0Z" fill="#269EFF"/>
        </svg>
      </div>
      <button className="flex-1 mx-[10rem] h-[55rem] bg-[#269EFF] rounded-[20rem] flex items-center justify-center text-white font-normal text-[17rem] leading-[110%] whitespace-nowrap">
        вызвать врача
      </button>
      <div className="w-[55rem] h-[55rem] bg-[#E7F5FF] rounded-[20rem] flex-shrink-0 flex items-center justify-center mr-[10rem]">
        <svg width="23" height="23" viewBox="0 0 23 23" fill="none">
          <path d="M6.62 10.79c1.44 2.82 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="#269EFF"/>
        </svg>
      </div>
      <div className="w-[55rem] h-[55rem] bg-[#E7F5FF] rounded-[20rem] flex-shrink-0 flex flex-col items-center justify-center gap-[4rem]">
        <div className="w-[23rem] h-[3rem] bg-[#269EFF]"></div>
        <div className="w-[23rem] h-[3rem] bg-[#269EFF]"></div>
        <div className="w-[23rem] h-[3rem] bg-[#269EFF]"></div>
      </div>
    </div>
  </div>
);

export default MobileFixedBar;
