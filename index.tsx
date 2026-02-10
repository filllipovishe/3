// FIX: Import React, hooks, and ReactDOM to resolve missing definitions.
import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';

// --- FROM types.ts ---
interface Doctor {
  name: string;
  role: string;
  exp: string;
  image: string;
}
interface PriceItem {
  label: string;
  price: string;
}
interface PriceGroup {
  title: string;
  items: PriceItem[];
  moreCount?: number;
}
interface FAQItem {
  question: string;
  answer: string;
}

// --- FROM constants.ts ---
const DOCTORS: Doctor[] = [
  { 
    name: "Лапшин Артём", 
    role: "главный врач клиники, нарколог, психиатр", 
    exp: "30 лет стажа",
    image: "https://i.postimg.cc/zHHJrN4N/Vrac-1.png"
  },
  { 
    name: "Родионова Мария", 
    role: "анестезиолог-реаниматолог, нарколог", 
    exp: "7 лет стажа",
    image: "https://i.postimg.cc/rRR8kT7z/Vrac-2.png"
  },
  { 
    name: "Лапшин Артём", 
    role: "врач-психиатр, нарколог", 
    exp: "10 лет стажа",
    image: "https://i.postimg.cc/V00Y8w2J/Vrac-3.png"
  },
  { 
    name: "Никитина Ирина", 
    role: "главный врач клиники, нарколог, психиатр", 
    exp: "5 лет стажа",
    image: "https://i.postimg.cc/DmSfsQ0g/Vrac-4.png"
  },
  { 
    name: "Недова Мария", 
    role: "главный врач клиники, нарколог, психиатр", 
    exp: "12 лет стажа",
    image: "https://i.postimg.cc/w31xJ5M0/Vrac-5.png"
  },
  { name: "Иванов Иван", role: "психиатр-нарколог", exp: "15 лет стажа", image: "https://i.postimg.cc/zHHJrN4N/Vrac-1.png" },
  { name: "Петров Петр", role: "клинический психолог", exp: "8 лет стажа", image: "https://i.postimg.cc/rRR8kT7z/Vrac-2.png" },
  { name: "Сидоров Сидор", role: "реаниматолог", exp: "20 лет стажа", image: "https://i.postimg.cc/V00Y8w2J/Vrac-3.png" },
  { name: "Смирнова Анна", role: "нарколог", exp: "6 лет стажа", image: "https://i.postimg.cc/DmSfsQ0g/Vrac-4.png" },
  { name: "Кузнецов Олег", role: "психотерапевт", exp: "11 лет стажа", image: "https://i.postimg.cc/w31xJ5M0/Vrac-5.png" },
  { name: "Попова Елена", role: "медсестра", exp: "5 лет стажа", image: "https://i.postimg.cc/zHHJrN4N/Vrac-1.png" },
  { name: "Васильев Василий", role: "нарколог", exp: "9 лет стажа", image: "https://i.postimg.cc/rRR8kT7z/Vrac-2.png" },
  { name: "Михайлов Михаил", role: "психиатр", exp: "14 лет стажа", image: "https://i.postimg.cc/V00Y8w2J/Vrac-3.png" },
  { name: "Новикова Ольга", role: "психолог", exp: "7 лет стажа", image: "https://i.postimg.cc/DmSfsQ0g/Vrac-4.png" },
  { name: "Федоров Федор", role: "зав. отделением", exp: "25 лет стажа", image: "https://i.postimg.cc/w31xJ5M0/Vrac-5.png" }
];
const MOBILE_PRICES = [
  { label: "Выезд нарколога на дом", price: "3 000" }, { label: "Вывод из запоя", price: "3 500" }, { label: "Снятие похмелья", price: "5 500" },
  { label: "Снятие ломки", price: "4 000" }, { label: "Кодирование уколом", price: "4 000" }, { label: "Кодирование вшиванием", price: "8 000" },
  { label: "Сутки в стационаре", price: "5 000" }
];
const DESKTOP_PRICE_GROUPS: PriceGroup[] = [
  { title: "экстренно", items: [ { label: "Выезд нарколога на дом", price: "3 000" }, { label: "Вывод из запоя капельницей", price: "3 500" }, { label: "Снятие похмелья капельницей", price: "5 500" }, { label: "Снятие ломки", price: "4 000" }, { label: "Тест на наркотики", price: "40 000" }, { label: "Снятие похмелья", price: "3 000" } ], moreCount: 6 },
  { title: "кодирование", items: [ { label: "Уколом, на 6 – 12 мес", price: "4 000" }, { label: "Вшивание препарата", price: "8 000" }, { label: "Кодирование гипнозом", price: "8 000" }, { label: "Двойной блок", price: "40 000" }, { label: "Кодирование иглоукалыванием", price: "8 000" }, { label: "Иглоукалыванием", price: "8 000" } ], moreCount: 6 },
  { title: "лечение в клинике", items: [ { label: "Сутки (всё включено)", price: "5 000" }, { label: "Детоксикация", price: "6 500" }, { label: "Опиоидная детоксикация", price: "40 000" }, { label: "Сутки с питанием", price: "5 000" }, { label: "Сутки с питанием и осмотром", price: "5 000" }, { label: "Сутки с питанием и осмотром", price: "5 000" } ], moreCount: 2 }
];
const FAQ_DATA: FAQItem[] = [
  { question: "узнают ли соседи, что к нам приезжал нарколог?", answer: "Нет, никто не догадается. Наша бригада приезжает на обычном автомобиле без медицинских наклеек, «крестов» и мигалок. Врач поднимается в квартиру в гражданской одежде (халат он надевает уже внутри, помыв руки). Для соседей это будет выглядеть как визит гостя или родственника" },
  { question: "поставите ли вы на учет?", answer: "Мы частная клиника и гарантируем полную анонимность. Данные о пациентах никуда не передаются, на учет в государственный диспансер мы не ставим." },
  { question: "возможно ли принудительное лечение?", answer: "По закону РФ принудительное лечение возможно только по решению суда. Однако наши психологи владеют методиками интервенции (убеждения), которые помогают пациенту самостоятельно согласиться на лечение в 9 из 10 случаев." },
  { question: "может ли цена вырасти после приезда врача?", answer: "Базовая стоимость озвучивается оператором. Цена может измениться только в случае, если на месте выяснится, что состояние пациента тяжелее описанного (требуются дополнительные препараты) или требуются дополнительные услуги, не оговоренные ранее. Все согласовывается до начала процедур." },
  { question: "безопасно ли ставить капельницу дома?", answer: "Да, абсолютно безопасно. Врач привозит с собой все необходимое реанимационное оборудование и сертифицированные препараты. Перед процедурой проводится осмотр и ЭКГ для исключения противопоказаний." }
];
const CONDITIONS = [ "https://i.postimg.cc/6T86RVqH/Uslovia-1.jpg", "https://i.postimg.cc/MXnZR0HL/Uslovia-2.jpg", "https://i.postimg.cc/6T86RVqH/Uslovia-1.jpg", "https://i.postimg.cc/MXnZR0HL/Uslovia-2.jpg", "https://i.postimg.cc/6T86RVqH/Uslovia-1.jpg" ];

// --- UI COMPONENTS ---

const Header: React.FC = () => (
  <header className="h-[100rem] flex items-center justify-between bg-white px-[50rem] sticky top-0 z-50 border-b border-gray-50">
    <div className="flex items-center gap-[30rem]">
      <div className="flex items-center gap-[3rem]">
        <div className="font-medium text-[32rem] leading-[130%] tracking-[-0.03em]">health</div>
        <div className="w-[26rem] h-[24rem]"><svg width="100%" height="100%" viewBox="0 0 26 24" fill="none"><path d="M13 0L26 12L13 24L0 12L13 0Z" fill="#269EFF"/></svg></div>
        <div className="font-medium text-[32rem] leading-[130%] tracking-[-0.03em]">center</div>
      </div>
      <div className="flex items-center gap-[8rem] cursor-pointer">
        <svg width="10rem" height="6rem" viewBox="0 0 10 6" fill="none"><path d="M5 6L0 0H10L5 6Z" fill="#223442"/></svg>
        <div className="font-light text-[22rem] leading-[140%] whitespace-nowrap">Н. Новгород</div>
      </div>
    </div>
    <nav><ul className="flex gap-[25rem]">{["Услуги", "О клинике", "Цены", "Отзывы", "Врачи", "Контакты"].map((item, i) => ( <li key={item} className="font-light text-[22rem] leading-[140%] cursor-pointer flex items-center gap-[9rem] whitespace-nowrap">{i === 0 && (<svg width="10rem" height="6rem" viewBox="0 0 10 6" fill="none"><path d="M5 6L0 0H10L5 6Z" fill="#223442"/></svg>)}{item}</li>))}</ul></nav>
    <div className="flex items-center gap-[30rem]">
      <div className="flex items-center gap-[9rem] font-light text-[22rem] whitespace-nowrap"><svg width="10rem" height="6rem" viewBox="0 0 10 6" fill="none"><path d="M5 6L0 0H10L5 6Z" fill="#223442"/></svg>8 999 333 10 74</div>
      <button className="w-[216rem] h-[58rem] bg-[#269EFF] rounded-[20rem] text-white font-normal text-[22rem] flex items-center justify-center pb-[2rem] hover:opacity-90 transition-opacity">вызвать врача</button>
    </div>
  </header>
);

const Footer: React.FC = () => (
  <footer className="p-[90rem_353rem] bg-white">
    <div className="font-light text-[22rem] leading-[150%] mb-[80rem]">Медицинский сайт наркологической клиники помощи людям с алкогольной и наркотической зависимостью<br/>Вся представленная на сайте информация, касающаяся медицинских услуг, носит информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями Статьи 437 Гражданского кодекса РФ<br/>Имеются противопоказания, необходимо проконсультироваться со специалистом<br/>Информация на сайте предназначена для лиц старше 18 лет</div>
    <div className="flex justify-between">
      <div className="flex flex-col gap-[15rem]">{["Конфиденциальность", "Условия использования", "Лицензии", "группа Vkontakte"].map(link => (<a key={link} href="#" className="font-light text-[22rem] leading-[150%] text-[#269EFF]">{link}</a>))}</div>
      <div className="flex flex-col gap-[15rem] grid grid-cols-[max-content_auto] gap-x-[30rem] gap-y-[15rem]"><div className="text-[#7A858E] font-light text-[22rem] text-right">ООО</div><div className="text-[#223442] font-light text-[22rem]">ЮгЭкоСервис</div><div className="text-[#7A858E] font-light text-[22rem] text-right">ИНН</div><div className="text-[#223442] font-light text-[22rem]">6161060788</div><div className="text-[#7A858E] font-light text-[22rem] text-right">ОГРН</div><div className="text-[#223442] font-light text-[22rem]">1116193001540</div><div className="text-[#7A858E] font-light text-[22rem] text-right">Лицензия</div><div className="text-[#223442] font-light text-[22rem]">№ Л041-01050-61/00357506<br/>от 29 октября 2020</div></div>
      <div className="flex flex-col gap-[15rem]"><span className="font-medium text-[22rem] text-[#223442] mb-[5rem]">Способы оплаты</span>{["Банковские карты", "Банковские переводы", "Наличные"].map(p => (<span key={p} className="font-light text-[22rem] text-[#223442]">{p}</span>))}</div>
    </div>
  </footer>
);

const MobileFixedBar: React.FC = () => (
  <div className="fixed bottom-0 left-0 w-full h-[75rem] bg-white border-t border-gray-100 flex items-center justify-center z-[100] px-[10rem] py-[10rem]">
    <div className="w-full flex items-center justify-between">
      <div className="w-[55rem] h-[55rem] bg-[#E7F5FF] rounded-[20rem] flex-shrink-0 flex items-center justify-center"><svg width="24" height="22" viewBox="0 0 24 22" fill="none"><path d="M12 0L24 11L12 22L0 11L12 0Z" fill="#269EFF"/></svg></div>
      <button className="flex-1 mx-[10rem] h-[55rem] bg-[#269EFF] rounded-[20rem] flex items-center justify-center text-white font-normal text-[17rem] leading-[110%] whitespace-nowrap">вызвать врача</button>
      <div className="w-[55rem] h-[55rem] bg-[#E7F5FF] rounded-[20rem] flex-shrink-0 flex items-center justify-center mr-[10rem]"><svg width="23" height="23" viewBox="0 0 23 23" fill="none"><path d="M6.62 10.79c1.44 2.82 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="#269EFF"/></svg></div>
      <div className="w-[55rem] h-[55rem] bg-[#E7F5FF] rounded-[20rem] flex-shrink-0 flex flex-col items-center justify-center gap-[4rem]"><div className="w-[23rem] h-[3rem] bg-[#269EFF]"></div><div className="w-[23rem] h-[3rem] bg-[#269EFF]"></div><div className="w-[23rem] h-[3rem] bg-[#269EFF]"></div></div>
    </div>
  </div>
);

const Hero: React.FC = () => (
  <section className="h-auto lg:h-[819rem] pt-[40rem] lg:pt-[50rem] pb-[40rem] lg:pb-0 flex flex-col items-center lg:items-stretch lg:relative gradient-bg-1 lg:px-[100rem]">
    <div className="lg:hidden w-[300rem] flex flex-col gap-[20rem] mb-[40rem]"><h1 className="font-medium text-[34rem] leading-[110%] text-[#223442]">анонимная наркологическая помощь</h1><div className="flex flex-col gap-[5rem]"><div className="font-light text-[16rem] leading-[150%] text-[#223442]">Врач у вас дома через 30–45 минут</div><div className="font-light text-[16rem] leading-[150%] text-[#223442]">Без постановки на учет</div></div></div>
    <div className="hidden lg:flex gap-[114rem]"><div className="w-[507rem] pt-[130rem] flex flex-col gap-[30rem]"><h1 className="font-medium text-[58rem] leading-[110%] tracking-[-0.03em]">анонимная наркологическая помощь</h1><div className="flex flex-col gap-[15rem]"><div className="font-light text-[22rem] leading-[140%] tracking-[-0.02em]">Врач у вас дома через 30–45 минут</div><div className="font-light text-[22rem] leading-[140%] tracking-[-0.02em]">Без постановки на учет</div></div></div></div>
    <img src="https://i.postimg.cc/RJJMBmyj/image-1.png" className="w-[360rem] h-[336rem] lg:w-[1099rem] lg:h-[769rem] object-cover object-bottom lg:absolute lg:right-[100rem] lg:top-auto" />
  </section>
);

const WhatHappened: React.FC = () => (
  <section className="h-auto lg:h-[916rem] p-[40rem_0] lg:p-[50rem_100rem] flex flex-col lg:flex-row items-center lg:justify-between gradient-bg-2">
    <img src="https://i.postimg.cc/4HHJgGjH/image-2.png" className="w-[360rem] h-[251rem] lg:w-[1135rem] lg:h-[816rem] object-cover order-2 lg:order-1" />
    <div className="w-[300rem] lg:w-[455rem] pt-0 lg:pt-[130rem] flex flex-col gap-[30rem] lg:gap-[60rem] order-1 lg:order-2 mb-[40rem] lg:mb-0">
      <h2 className="font-medium text-[34rem] lg:text-[58rem] leading-[110%] lg:leading-[120%] tracking-[-0.03em] whitespace-nowrap">что случилось?</h2>
      <div className="flex flex-col gap-[20rem] lg:gap-[30rem]">{["запой или похмелье", "хочу бросить пить", "наркотическая ломка", "психические расстройства", "зависимость у близкого"].map(item => (<div key={item} className="font-medium text-[22rem] lg:text-[32rem] leading-[130%] tracking-[-0.03em] text-[#269EFF] cursor-pointer hover:underline">{item}</div>))}</div>
    </div>
  </section>
);

const Prices: React.FC = () => {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});
  return (
    <section className="p-[40rem_30rem] lg:p-[90rem_100rem_100rem] bg-white">
      <div className="flex items-start lg:items-center gap-[8rem] mb-[30rem] lg:mb-[60rem]"><h2 className="font-medium text-[34rem] lg:text-[58rem] leading-[110%] lg:leading-[120%] tracking-[-0.03em]">стоимость услуг</h2><span className="text-[17rem] lg:text-[22rem] font-light mt-0 lg:mt-[5rem]">₽</span></div>
      <div className="lg:hidden w-full flex flex-col items-center"><div className="w-[300rem] flex flex-col gap-[20rem]"><div className="flex flex-col gap-[20rem]">{MOBILE_PRICES.map((item, i) => (<div key={i} className="flex justify-between items-center gap-[15rem]"><div className="font-light text-[16rem] leading-[140%] text-[#7A858E]">{item.label}</div><div className="font-light text-[16rem] leading-[140%] text-[#223442]">{item.price}</div></div>))}<div className="font-light text-[17rem] leading-[140%] text-[#269EFF] cursor-pointer">смотреть все</div></div></div></div>
      <div className="hidden lg:flex gap-[154rem]">{DESKTOP_PRICE_GROUPS.map((group, idx) => (<div key={idx} className="w-[469rem] flex flex-col gap-[38rem]"><div className="font-medium text-[32rem] mb-[20rem]">{group.title}</div><div className="flex flex-col gap-[25rem]">{group.items.map((item, i) => (<div key={i} className="flex justify-between font-light text-[22rem] text-[#7A858E]"><span>{item.label}</span><span className="text-[#223442]">{item.price}</span></div>))}{expanded[idx] && [1,2,3,4,5,6].slice(0, group.moreCount).map(i => (<div key={i} className="flex justify-between font-light text-[22rem] text-[#7A858E]"><span>Доп. услуга {i}</span><span className="text-[#223442]">1 000</span></div>))}<div className="text-[#269EFF] font-light text-[22rem] cursor-pointer" onClick={() => setExpanded(prev => ({...prev, [idx]: !prev[idx]}))}>{expanded[idx] ? 'Свернуть' : `+ ещё ${group.moreCount}`}</div></div></div>))}</div>
    </section>
  );
};

const useDragScroll = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const onMouseDown = (e: React.MouseEvent) => { if (!ref.current) return; setIsDown(true); setStartX(e.pageX - ref.current.offsetLeft); setScrollLeft(ref.current.scrollLeft); };
  const onMouseLeave = () => setIsDown(false);
  const onMouseUp = () => setIsDown(false);
  const onMouseMove = (e: React.MouseEvent) => { if (!isDown || !ref.current) return; e.preventDefault(); const x = e.pageX - ref.current.offsetLeft; const walk = (x - startX) * 2; ref.current.scrollLeft = scrollLeft - walk; };
  return { ref, onMouseDown, onMouseLeave, onMouseUp, onMouseMove };
};

const Doctors: React.FC = () => {
  const { ref, ...dragProps } = useDragScroll();
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const updateButtons = () => { if (!ref.current) return; const { scrollLeft, scrollWidth, clientWidth } = ref.current; setCanScrollLeft(scrollLeft > 5); setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5); };
  const scroll = (dir: number) => { ref.current?.scrollBy({ left: dir * 400, behavior: 'smooth' }); };
  return (
    <section className="p-[40rem_0] lg:p-[90rem_100rem] bg-white relative">
      <div className="flex justify-between items-center mb-[30rem] lg:mb-[40rem] px-[30rem] lg:px-0"><h2 className="font-medium text-[34rem] lg:text-[58rem] leading-[110%] lg:leading-[120%] tracking-[-0.03em]">наши врачи</h2><div className="hidden lg:flex gap-[20rem]"><button onClick={() => scroll(-1)} className={`w-[60rem] h-[63rem] flex items-center justify-center transition-colors ${canScrollLeft ? 'bg-[#E7F5FF] cursor-pointer' : 'bg-[#E7F5FF]/50 cursor-default'}`}><svg width="60rem" height="63rem" viewBox="0 0 60 63"><path d="M40 20L20 31.5L40 43" stroke="#269EFF" strokeWidth="2" fill="none"/></svg></button><button onClick={() => scroll(1)} className={`w-[60rem] h-[63rem] flex items-center justify-center transition-colors ${canScrollRight ? 'bg-[#E7F5FF] cursor-pointer' : 'bg-[#E7F5FF]/50 cursor-default'}`}><svg width="60rem" height="63rem" viewBox="0 0 60 63"><path d="M20 20L40 31.5L20 43" stroke="#269EFF" strokeWidth="2" fill="none"/></svg></button></div></div>
      <div ref={ref} onScroll={updateButtons} {...dragProps} className="overflow-x-auto hide-scrollbar cursor-grab active:cursor-grabbing select-none mobile-horizontal-scroll pl-[30rem] lg:pl-0"><div className="flex gap-[30rem] w-max">{DOCTORS.map((doc, i) => (<div key={i} className="flex-shrink-0 w-[190rem] lg:w-[370rem] flex flex-col gap-[20rem] lg:gap-[30rem]"><img src={doc.image} className="w-full h-[190rem] lg:h-[370rem] object-cover pointer-events-none" /><div className="flex flex-col gap-[13rem]"><div className="font-medium text-[16rem] lg:text-[22rem] leading-[140%]">{doc.name}</div><div className="font-light text-[16rem] lg:text-[22rem] leading-[140%]">{doc.role}</div><div className="font-light text-[16rem] lg:text-[22rem] leading-[140%] text-[#7A858E]">{doc.exp}</div></div></div>))}<div className="flex-shrink-0 w-[30rem] h-full invisible lg:hidden"></div></div></div>
    </section>
  );
};

const FAQ: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(0);
  return (
    <section className="p-[40rem_30rem] lg:p-[90rem_100rem] bg-white">
      <h2 className="font-medium text-[34rem] lg:text-[58rem] leading-[110%] lg:leading-[120%] tracking-[-0.03em]">частые вопросы</h2>
      <div className="mt-[30rem] lg:mt-[60rem] flex flex-col gap-[20rem] lg:gap-[45rem]">{FAQ_DATA.map((item, i) => (<div key={i}><div className="flex items-start gap-[20rem] lg:gap-[32rem] cursor-pointer" onClick={() => setActiveIdx(activeIdx === i ? null : i)}><div className={`w-[15rem] h-[15rem] lg:w-[26rem] lg:h-[26rem] flex-shrink-0 mt-[9rem] lg:mt-[5rem] transition-transform duration-300 ${activeIdx === i ? 'rotate-45' : ''}`}><svg viewBox="0 0 26 26" fill="none"><path d="M13 0V26M0 13H26" stroke="#269EFF" strokeWidth="3"/></svg></div><div className="font-medium text-[22rem] lg:text-[32rem] leading-[130%] text-[#269EFF]">{item.question}</div></div><div className="overflow-hidden transition-[max-height] duration-300 pl-[35rem] lg:pl-[58rem]" style={{ maxHeight: activeIdx === i ? '500px' : '0px' }}><div className="pt-[10rem] lg:pt-[15rem] font-light text-[16rem] lg:text-[22rem] leading-[150%]">{item.answer}</div></div></div>))}</div>
    </section>
  );
};

const Persuasion: React.FC = () => (
  <section className="p-[40rem_0] lg:p-[50rem_100rem] flex flex-col lg:flex-row items-center lg:gap-[100rem] lg:h-[916rem] gradient-bg-1 lg:gradient-bg-2">
    <img src="https://i.postimg.cc/CnnFg09z/image-3.png" className="w-[360rem] h-[269rem] lg:w-[1135rem] lg:h-[816rem] object-cover" />
    <div className="w-[300rem] lg:w-[500rem] pt-[20rem] lg:pt-[130rem] flex flex-col gap-[20rem] lg:gap-[30rem]"><h2 className="font-medium text-[34rem] lg:text-[58rem] leading-[110%] tracking-[-0.03em]">уговорим вашего близкого на лечение</h2><div className="font-light text-[16rem] lg:text-[22rem] leading-[150%] lg:leading-[140%] tracking-[-0.02em]">Без давления и принуждения</div><button className="w-[199rem] lg:w-[253rem] h-[55rem] lg:h-[58rem] bg-[#E7F5FF] text-[#269EFF] rounded-[20rem] font-normal text-[17rem] lg:text-[22rem] flex items-center justify-center mt-[0] lg:mt-[30rem] p-[13rem_25rem_16rem] lg:p-0 lg:pb-[2rem]">получить помощь</button></div>
  </section>
);

const Conditions: React.FC = () => {
  const { ref, ...dragProps } = useDragScroll();
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const updateButtons = () => { if (!ref.current) return; const { scrollLeft, scrollWidth, clientWidth } = ref.current; setCanScrollLeft(scrollLeft > 5); setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5); };
  const scroll = (dir: number) => { ref.current?.scrollBy({ left: dir * 800, behavior: 'smooth' }); };
  return (
    <section className="p-[40rem_0] lg:p-[90rem_100rem] bg-white lg:gradient-bg-1">
      <div className="flex justify-between items-center mb-[30rem] lg:mb-[40rem] px-[30rem] lg:px-0"><h2 className="font-medium text-[34rem] lg:text-[58rem] leading-[110%] lg:leading-[120%] tracking-[-0.03em]">комфортные условия лечения</h2><div className="hidden lg:flex gap-[20rem]"><button onClick={() => scroll(-1)} className={`w-[60rem] h-[63rem] flex items-center justify-center transition-colors ${canScrollLeft ? 'bg-[#E7F5FF] cursor-pointer' : 'bg-[#E7F5FF]/50 cursor-default'}`}><svg width="60rem" height="63rem" viewBox="0 0 60 63"><path d="M40 20L20 31.5L40 43" stroke="#269EFF" strokeWidth="2" fill="none"/></svg></button><button onClick={() => scroll(1)} className={`w-[60rem] h-[63rem] flex items-center justify-center transition-colors ${canScrollRight ? 'bg-[#E7F5FF] cursor-pointer' : 'bg-[#E7F5FF]/50 cursor-default'}`}><svg width="60rem" height="63rem" viewBox="0 0 60 63"><path d="M20 20L40 31.5L20 43" stroke="#269EFF" strokeWidth="2" fill="none"/></svg></button></div></div>
      <div ref={ref} onScroll={updateButtons} {...dragProps} className="overflow-x-auto hide-scrollbar cursor-grab active:cursor-grabbing select-none mobile-horizontal-scroll pl-[30rem] lg:pl-0"><div className="flex gap-[20rem] lg:gap-[30rem] w-max">{CONDITIONS.map((img, i) => (<img key={i} src={img} className="w-[280rem] h-[230rem] lg:w-[835rem] lg:h-[547rem] object-cover flex-shrink-0 pointer-events-none" />))}<div className="flex-shrink-0 w-[10rem] h-full invisible lg:hidden"></div></div></div>
    </section>
  );
};


// --- PAGE & APP LOGIC ---

interface HomePageProps {
  isMobile: boolean;
}
const HomePage: React.FC<HomePageProps> = ({ isMobile }) => {
  return (
    <div className="w-full">
      {!isMobile && <Header />}
      <Hero />
      <WhatHappened />
      <Prices />
      <Doctors />
      <FAQ />
      <Persuasion />
      <Conditions />
      {!isMobile && <Footer />}
      {isMobile && <MobileFixedBar />}
    </div>
  );
};

const App: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className={isMobile ? 'mobile-scaling min-h-screen bg-white text-[#223442]' : 'desktop-scaling min-h-screen bg-white text-[#223442]'}>
      <HomePage isMobile={isMobile} />
    </div>
  );
};


// --- RENDER APP ---
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error("Could not find root element to mount to");

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);