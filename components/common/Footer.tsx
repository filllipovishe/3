
import React from 'react';

const Footer: React.FC = () => (
  <footer className="p-[90rem_353rem] bg-white">
    <div className="font-light text-[22rem] leading-[150%] mb-[80rem]">
      Медицинский сайт наркологической клиники помощи людям с алкогольной и наркотической зависимостью<br/>
      Вся представленная на сайте информация, касающаяся медицинских услуг, носит информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями Статьи 437 Гражданского кодекса РФ<br/>
      Имеются противопоказания, необходимо проконсультироваться со специалистом<br/>
      Информация на сайте предназначена для лиц старше 18 лет
    </div>
    <div className="flex justify-between">
      <div className="flex flex-col gap-[15rem]">
        {["Конфиденциальность", "Условия использования", "Лицензии", "группа Vkontakte"].map(link => (
          <a key={link} href="#" className="font-light text-[22rem] leading-[150%] text-[#269EFF]">{link}</a>
        ))}
      </div>
      <div className="flex flex-col gap-[15rem] grid grid-cols-[max-content_auto] gap-x-[30rem] gap-y-[15rem]">
        <div className="text-[#7A858E] font-light text-[22rem] text-right">ООО</div> <div className="text-[#223442] font-light text-[22rem]">ЮгЭкоСервис</div>
        <div className="text-[#7A858E] font-light text-[22rem] text-right">ИНН</div> <div className="text-[#223442] font-light text-[22rem]">6161060788</div>
        <div className="text-[#7A858E] font-light text-[22rem] text-right">ОГРН</div> <div className="text-[#223442] font-light text-[22rem]">1116193001540</div>
        <div className="text-[#7A858E] font-light text-[22rem] text-right">Лицензия</div> <div className="text-[#223442] font-light text-[22rem]">№ Л041-01050-61/00357506<br/>от 29 октября 2020</div>
      </div>
      <div className="flex flex-col gap-[15rem]">
        <span className="font-medium text-[22rem] text-[#223442] mb-[5rem]">Способы оплаты</span>
        {["Банковские карты", "Банковские переводы", "Наличные"].map(p => (
          <span key={p} className="font-light text-[22rem] text-[#223442]">{p}</span>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
