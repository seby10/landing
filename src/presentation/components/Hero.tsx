// import React from "react";
import fileLogo from "../assets/imgs/procob.png";
import heroImage from "../assets/imgs/heroimg.png";
import { ArrowRight, Menu} from "lucide-react";
import { useState, useEffect } from "react";
import MenuMobile from "./MenuMobile";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-blue-procoinec w-full h-full relative overflow-clip min-w-xs min-h-screen">
      <div className="absolute right-0 top-0 h-full w-full z-0 px-8 py-6 xl:w-1/2">
        <div className="absolute right-0 top-0 h-1/3 z-1 px-8 py-6 bg-gradient-to-b from-[#2a4798b8] to-transparent xl:w-full"></div>
        <div className="absolute right-0 top-0 h-full w-full z-1 px-8 py-6 xl:w-full xl:hidden bg-gradient-to-b from-[#2a4798b0] to-[#000000ad]"></div>
        <img
          src={heroImage}
          alt="Hero Image"
          className="rounded-2xl h-full w-full object-cover z-0"
        />
      </div>
      <MenuMobile isOpen={isOpen} toggleMenu={toggleMenu} />

      <nav>
        <div className="mx-auto px-8 lg:px-20 xl:px-26 w-full h-full">
          <div className="relative flex items-center justify-between h-24 pt-12">
            <div className="flex-1 flex z-10 opa items-center justify-center bg-[#00000099] rounded-2xl p-4 lg:bg-transparent lg:justify-between">
              <div className="flex flex-1 items-center justify-between px-2 gap-32">
                <div className="flex-shrink-0 z-50">
                  <img
                    src={fileLogo}
                    alt="Procoineec Logo"
                    className="h-6 w-auto sm:h-10"
                  />
                </div>
                <div className="lg:hidden flex-shrink-0 cursor-pointer">
                  <Menu color="#fff" size={30} onClick={toggleMenu} />
                </div>
              </div>
              <div className="hidden lg:block lg:ml-20 ">
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
      <section className="relative w-full px-15 xl:px-30 max-w-full overflow-clip">
        <div className="flex flex-col items-baseline pb-6 max-w-fit xl:max-w-1/2 pt-10 md:pt-70 xl:pt-20 font-bold">
          <div className="bg-orange-procoinec text-[#EEF5DB] px-3 py-1.5 rounded-full flex gap-3 justify-between items-center text-sm mb-4 font-bold">
            <span className="relative flex size-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-white"></span>
            </span>
            Gala Corp.
          </div>
          <h1 className="text-[55px] font-[Exo] text-white mb-4 tracking-tight leading-tight animate-typewriter">
            Tu aliado de confianza para tus insumos eléctricos
          </h1>
          <p className="text-2xl text-[#EEF5DB] mb-4 xl:mb-8 font-[Titillium Web] font-normal tracking-tighter leading-normal xl:max-w-130">
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
