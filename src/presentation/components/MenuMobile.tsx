import fileLogo from "../assets/imgs/procob.png";
import { X } from "lucide-react";
import { useEffect } from "react";

const MenuMobile = ({
  isOpen,
  toggleMenu,
}: {
  isOpen: boolean;
  toggleMenu: () => void;
}) => {
  const value = isOpen ? "block" : "hidden";

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <div
      className={`${value} fixed top-0 left-0 w-full h-screen bg-[#0000007a] backdrop-blur-md px-9 py-13 z-40 overflow-hidden transition-opacity duration-300 ease-in-out`}
    >
      <div className="flex flex-col items-baseline justify-start gap-4 w-full">
        <div className="flex-1 flex items-center justify-between w-full px-5 mb-10">
          <div className="flex-shrink-0 z-50">
            <img
              src={fileLogo}
              alt="Procoineec Logo"
              className="h-6 w-auto sm:h-10"
            />
          </div>
          <div className="cursor-pointer pr-4">
            <X color="#fff" size={30} onClick={toggleMenu} />
          </div>
        </div>

        <a
          href="/"
          className="text-white hover:bg-white/10 hover:text-white px-3 py-2 rounded-2xl text-3xl font-[Kanit] font-extralight"
        >
          Inicio
        </a>
        <a
          href="/about"
          className="text-white hover:bg-white/10 hover:text-white px-3 py-2 rounded-2xl text-3xl font-[Kanit] font-extralight"
        >
          Acerca de
        </a>
        <a
          href="/contact"
          className="text-white hover:bg-white/10 hover:text-white px-3 py-2 rounded-2xl text-3xl font-[Kanit] font-extralight"
        >
          Servicios
        </a>
        <a
          href="/contact"
          className="text-white hover:bg-white/10 hover:text-white px-3 py-2 rounded-2xl text-3xl font-[Kanit] font-extralight"
        >
          Contacto
        </a>
      </div>
    </div>
  );
};

export default MenuMobile;
