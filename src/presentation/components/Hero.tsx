// import React from 'react'
import fileLogo from "../assets/imgs/procob.png";
import heroImage from "../assets/imgs/heroimg.png";
import { ArrowRight, Menu } from "lucide-react";

const Navbar = () => {
  return (
    <div className="bg-blue-procoinec w-full h-fit">
      <div className="absolute right-0 top-0 h-full w-full z-0 px-4 py-4 xl:w-1/2">
        <img src={heroImage} alt="Hero Image" className="rounded-3xl" />
      </div>
      <nav>
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-24 pt-12">
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
              <div className="flex-shrink-0 flex items-center justify-around sm:items-center">
                <img
                  src={fileLogo}
                  alt="Procoineec Logo"
                  className="h-10 w-auto"
                />
                <div className="sm:hidden">
                  {<Menu />}
                </div>
              </div>
              <div className="hidden sm:block sm:ml-6 justify-center">
                <div className="flex space-x-4">
                  <a
                    href="/"
                    className="text-white hover:bg-white/10 hover:text-white px-3 py-2 rounded-2xl text-xl font-[Kanit] font-medium"
                  >
                    Inicio
                  </a>
                  <a
                    href="/about"
                    className="text-white hover:bg-white/10 hover:text-white px-3 py-2 rounded-2xl text-xl font-[Kanit] font-medium"
                  >
                    Acerca de
                  </a>
                  <a
                    href="/contact"
                    className="text-white hover:bg-white/10 hover:text-white px-3 py-2 rounded-2xl text-xl font-[Kanit] font-medium"
                  >
                    Servicios
                  </a>
                  <a
                    href="/contact"
                    className="text-white hover:bg-white/10 hover:text-white px-3 py-2 rounded-2xl text-xl font-[Kanit] font-medium"
                  >
                    Contacto
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="relative w-full px-30 max-w-[1360px] flex items-stretch overflow-hidden">
        <div className="flex flex-col items-baseline min-h-screen max-w-1/2 py-20 font-bold">
          <div className="bg-orange-procoinec text-white px-3 py-1.5 rounded-full flex gap-3 justify-between items-center text-sm mb-4">
            <span className="relative flex size-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-white"></span>
            </span>
            Gala Corp.
          </div>
          <h1 className="text-[55px] font-[Exo] text-white mb-4 tracking-tight leading-tight">
            Tu aliado de confianza para tus insumos eléctricos
          </h1>
          <p className="text-2xl text-[#EEF5DB] mb-8 font-[Titillium Web] font-normal tracking-tighter leading-normal max-w-130">
            ProCoineec ofrece suplementos eléctricos de última generación,
            diseñados para optimizar el consumo y proteger tus dispositivos con
            tecnología avanzada.{" "}
          </p>
          <a
            className="bg-white/10 text-white pl-6 pr-3 py-2.5 rounded-full hover:bg-white hover:text-[#2A4798] transition duration-500 flex gap-7 group items-ce
            nter justify-between items-center font-normal text-lg"
            href="/get-started"
          >
            <p>Contactanos</p>
            <div className="aspect-square w-10">
              <p className="bg-white w-full h-full rounded-full flex justify-center items-center">
                <ArrowRight
                  className="-rotate-45 group-hover:rotate-0 transition-transform duration-500"
                  color="#2A4798"
                  size={20}
                />
              </p>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
