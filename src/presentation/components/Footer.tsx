// import React from 'react'
import fileLogo from "../assets/imgs/procob.png";

const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-center h-fit">
      <div className="w-full h-full mx-5 mt-3 bg-blue-procoinec rounded-xl">
        <div className="w-full px-28 w-ful h-full">
          <div className="flex items-baseline justify-between gap-8 border-b-1 border-[#eef5db15] pt-6">
            <div className="flex-shrink-0">
              <img
                src={fileLogo}
                alt="Procoineec Logo"
                className="h-9 w-auto"
              />
            </div>
            <div className="flex flex-col items-start py-10">
              <h4 className="font-[Kanit] font-medium text-white text-2xl">
                Secciones
              </h4>
              <div className="flex items-center justify-between gap-20 my-4">
                <div className="flex flex-col">
                  <a
                    className="font-[Titilium Web] text-white font-normal text-lg mb-3"
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Acerca de
                  </a>
                  <a
                    className="font-[Titilium Web] text-white font-normal text-lg mb-3"
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Nuestro Trabajo
                  </a>
                  <a
                    className="font-[Titilium Web] text-white font-normal text-lg mb-3"
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Servicios
                  </a>
                </div>
                <div className="flex flex-col items-start justify-center">
                  <a
                    className="font-[Titilium Web] text-white font-normal text-lg mb-3"
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Testimonios
                  </a>
                  <a
                    className="font-[Titilium Web] text-white font-normal text-lg mb-3"
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contacto
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="py-8 flex items-center justify-between">
            <p className="text-[16px] font-[Titilium Web] font-normal text-[#EEF5DB]">
              &copy; 2025 Procoineec. Todos los derechos reservados.
            </p>
            <p className="text-[16px] font-[Titilium Web] font-normal text-[#EEF5DB]">
              ParCons
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
