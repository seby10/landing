// import React from 'react'
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <section
      id="contact"
      className="w-full flex items-center justify-center h-fit min-w-xs"
    >
      <div className="w-full h-full mx-5 bg-blue-procoinec rounded-xl">
        <div className="w-full px-8 xl:px-22 w-ful h-full">
          <div className="grid gap-24 py-16 xl:grid-cols-2 xl:grid-rows-1">
            <div className="">
              <div>
                <h2 className="bg-orange-procoinec text-[#EEF5DB] py-0.5 px-3 rounded-full flex justify-center items-center text-md font-bold mb-4 max-w-15">
                  Info
                </h2>
                <h3 className="font-[Fira Sans] text-white font-bold text-5xl tracking-tight">
                  Contactanos
                </h3>
                <p className="text-[22px] text-[#EEF5DB] font-[Titillium Web] font-normal tracking-tighter leading-normal max-w-140 mt-4">
                  Para explorar más a fondo su visión, le invitamos a ponerse en
                  contacto con nuestro equipo profesional utilizando los datos
                  que se proporcionan a continuación.
                </p>
              </div>
              <div className="mt-10 border-b-1 border-[#eef5db15] pb-5">
                <div className="flex flex-col gap-3 mb-5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="font-[Titillium Web] text-[22px] tracking-tight leading-normal font-semibold text-[#EEF5D8]">
                    Ubicacion
                  </p>
                  <p className="font-[Titillium Web] text-[22px] tracking-tight leading-normal font-normal text-[#EEF5DB]">
                    Unidad Nacional y Av.Cevallos, Ambato
                  </p>
                </div>
                <div className="flex flex-col gap-3 mb-5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="font-[Titillium Web] text-[22px] tracking-tight leading-normal font-semibold text-[#EEF5DB]">
                    Email
                  </p>
                  <p className="font-[Titillium Web] text-[22px] tracking-tight leading-normal font-norma text-[#EEF5DB]">
                    proco@contact.com
                  </p>
                </div>
                <div className="flex flex-col gap-3 mb-5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="font-[Titillium Web] text-[22px] tracking-tight leading-normal font-semibold text-[#EEF5DB]">
                    Telefono
                  </p>
                  <p className="font-[Titillium Web] text-[22px] tracking-tight leading-normal font-normal text-[#EEF5DB]">
                    098 337 2092
                  </p>
                </div>
              </div>
              <div className="mt-10">
                <div className="flex flex-col items-baseline gap-3 mb-5 justify-center">
                  <p className="font-[Titillium Web] text-[22px] tracking-tight leading-normal font-semibold text-[#EEF5D8]">
                    Siguenos
                  </p>
                  <p className="font-[Titillium Web] text-[22px] tracking-tight leading-normal font-normal text-[#EEF5DB]">
                    <Instagram className="inline mr-4" />
                    <Facebook className="inline mr-4" />
                    <Twitter className="inline mr-4" />
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white px-4 py-4 rounded-xl w-full h-full animate-slideUp">
                <div className="flex flex-col items-baseline gap-2 mb-5 justify-center px-2">
                  <p className="font-[Titillium Web] text-[16px] tracking-tight leading-normal font-medium text-[#2A4798]">
                    Nombre <span className="text-[#FF2244]">*</span>
                  </p>
                  <input
                    type="text"
                    className="w-full px-3 py-3 border border-[#dbdad9] bg-[#f5fbee] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#2A4798] focus:border-transparent placeholder-[#10101450]"
                    placeholder="Juan Cajas"
                  />
                </div>
                <div className="flex flex-col items-baseline gap-2 mb-5 justify-center px-2">
                  <p className="font-[Titillium Web] text-[16px] tracking-tight leading-normal font-medium text-[#2A4798]">
                    Correo Electronico <span className="text-[#FF2244]">*</span>
                  </p>
                  <input
                    type="text"
                    className="w-full px-3 py-3 border border-[#dbdad9] bg-[#f5fbee] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#2A4798] focus:border-transparent placeholder-[#10101450]"
                    placeholder="juancajas@gmail.com"
                  />
                </div>
                <div className="flex flex-col items-baseline gap-2 mb-5 justify-center px-2">
                  <p className="font-[Titillium Web] text-[16px] tracking-tight leading-normal font-medium text-[#2A4798]">
                    Telefono
                  </p>
                  <input
                    type="text"
                    className="w-full px-3 py-3 border border-[#dbdad9] bg-[#f5fbee] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#2A4798] focus:border-transparent placeholder-[#10101450]"
                    placeholder="0998765431"
                  />
                </div>
                <div className="flex flex-col items-baseline gap-2 mb-4 justify-center px-2">
                  <p className="font-[Titillium Web] text-[16px] tracking-tight leading-normal font-medium text-[#2A4798]">
                    Comentario <span className="text-[#FF2244]">*</span>
                  </p>
                  <textarea
                    className="w-full px-3 py-3 border border-[#dbdad9] bg-[#f5fbee] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#2A4798] focus:border-transparent placeholder-[#10101450] min-h-36 align-top"
                    placeholder="Me gustaria que agregaran mas productos electricos..."
                  ></textarea>
                </div>
                <div className="flex items-center justify-center">
                  <button
                    type="submit"
                    className="bg-[#4c4c4f] text-white px-5 py-2 rounded-lg font-[Titillium Web] font-semibold text-lg hover:bg-[#4c4c4fcd] transition-colors w-full hover:cursor-pointer disabled:bg-[#4c4c4f7a] disabled:cursor-not-allowed"
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
