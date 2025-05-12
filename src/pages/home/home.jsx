import React from "react";
import { useTranslation } from "react-i18next";
import { FiSidebar } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "../../components/SideBar"; // Yangi SideBar komponentini import qilish

const Home = () => {
  const { t } = useTranslation(); // Tarjima funksiyasi
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.isOpenState.isOpen); // Redux'dan isOpen holatini olish

  const toggleOpen = () => {
    dispatch({ type: "TOGGLE_IS_OPEN" }); // Redux orqali isOpen holatini o'zgartirish
  };

  const headerRoutes = [
    { name: t("routes.main"), path: "/main" },
    { name: t("routes.ai_pro"), path: "/ai_pro" },
    { name: t("routes.book_lawyer"), path: "/book_lawyer" },
    { name: t("routes.support"), path: "/support" },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-t from-[#0A0F15] to-[#202126] p-4">
      <div
        className={`relative flex ${
          isOpen ? "flex" : "flex-wrap"
        } duration-300`}
      >
        {/* Eski SideBar */}
        <div
          className={`absolute ${
            isOpen ? "opacity-0" : "opacity-100"
          } duration-300 left-3 top-3 w-10 h-10 bg-gray-400`}
        ></div>

        <div
          className={`${
            isOpen ? "h-[96vh] w-60" : "h-20 w-full"
          } duration-300 flex justify-between`}
        >
          <div></div>
          <div
            className={`${
              isOpen ? "w-[400px] h-[96vh] bg-[#222631]" : "w-[608px] h-14"
            } rounded-3xl bg-[#222631] duration-300`}
          >
            <div
              className={`${
                isOpen ? "opacity-0" : "opacity-100"
              } flex justify-between items-center px-5 w-full h-14 bg-[#222631]`}
            >
              <div onClick={toggleOpen} className="text-white text-xl">
                <FiSidebar />
              </div>
              {headerRoutes.map((route, index) => (
                <div key={index} className="text-white text-xl">
                  {route.name}
                </div>
              ))}
            </div>
          </div>
          <div></div>
        </div>

        {/* Yangi SideBar */}
        <SideBar />
      </div>
    </div>
  );
};

export default Home;