import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SlMenu } from "react-icons/sl";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const onModal = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="relative bg-[url(https://portm-html.vercel.app/assets/img/bg/hero_bg_2.svg)]">
      <div className="w-full ">
        <div className="max-w-[1440px] mx-auto flex items-center py-5 justify-between px-5 md:px-20">
          <p className="logocolor cursor-pointer lg:text-[50px] md:text-[36px] text-[24px]">
            LOGO
          </p>
          <div className="lg:flex font-jost hidden items-center gap-6">
            <Link className="text-[18px] font-jost  text-gray-400" to="/">Главная</Link>
            <Link className="text-[18px] font-jost  text-gray-400" to="/about">Обо мне</Link>
            <Link className="text-[18px] font-jost  text-gray-400" to="/services">Услуги</Link>
            <Link className="text-[18px] font-jost  text-gray-400" to="/candidates">Кандидаты</Link>
            <Link className="text-[18px] font-jost text-gray-400" to="/contacts">Контакты</Link>
          </div>
          <div className="flex items-center gap-4">

            <button className="md:px-5 font-jost px-3 cursor-pointer md:py-3 py-2 bg-[rgb(255_109_90)] text-white font-semibold text-lg rounded-xl">
              Оставить заявку
            </button>


            {openMenu ? (
              <IoMdClose onClick={onModal} className="text-2xl lg:hidden cursor-pointer" />
            ) : (
              <SlMenu onClick={onModal} className="text-2xl lg:hidden cursor-pointer" />
            )}
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 w-full h-full bg-black/60 z-50 transition-all duration-300 ${openMenu ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={onModal}
      >
        <div
          className={`fixed top-0 left-0 w-[80%] h-full bg-white p-5 shadow-md transition-all duration-300 ${openMenu ? "translate-x-0" : "-translate-x-full"
            }`}
          onClick={(e) => e.stopPropagation()}
        >
          <IoMdClose
            onClick={onModal}
            className="text-2xl absolute top-5 right-5 cursor-pointer"
          />
          <nav className="flex flex-col gap-4 mt-10">
            <Link className="text-[18px] font-semibold text-gray-700 border-b pb-2" to="/">Главная</Link>
            <Link className="text-[18px] font-semibold text-gray-700 border-b pb-2" to="/about">Обо мне</Link>
            <Link className="text-[18px] font-semibold text-gray-700 border-b pb-2" to="/services">Услуги</Link>
            <Link className="text-[18px] font-semibold text-gray-700 border-b pb-2" to="/candidates">Кандидаты</Link>
            <Link className="text-[18px] font-semibold text-gray-700 border-b pb-2" to="/contacts">Контакты</Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
