import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const navLinks = [
  { name: "Home", path: "#hero" },
  { name: "About", path: "#about" },
  { name: "Services", path: "#services" },
  { name: "Projects", path: "#projects" },
  { name: "Contact", path: "#contact" },
];
function Navbar() {
  const [open, setOpen] = useState(false);
  const togleNav = () => {
    setOpen(!open);
  };

  const closeNav = () => {
    setOpen(false);
  };

  return (
    <div className="z-50 fixed flex justify-center w-full font-bold">
      <div className="border border-white/20 backdrop-blur-3xl rounded-3xl hidden md:flex items-center justify-center p-2 max-w-[500px] mx-auto mt-8">
        <ul className="flex p-2 space-x-8 ">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.path}
                className="transform hover:skew-x-12 hover:text-white/50"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="absolute md:hidden top-5 right-14 border rounded-xl z-50 text-white/70 border-white/70 backdrop-blur-3xl p-2"
        onClick={togleNav}
      >
        {open ? (
          <AiOutlineClose className="text-3xl" />
        ) : (
          <AiOutlineMenu className="text-3xl" />
        )}
      </div>
      <div
        className={`fixed left-0 top-0 w-full h-full bg-black/80 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <ul className="flex flex-col items-center justify-center space-y-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.path}
                  className="transform hover:skew-x-12 hover:text-white/50 text-4xl p-2"
                  onClick={closeNav}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
