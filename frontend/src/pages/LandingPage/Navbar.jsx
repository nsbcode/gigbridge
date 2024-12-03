import React from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { Button } from "../../components/Button";

const Navbar = () => {
  return (
    <header className="p-4 border-b flex justify-center border-black/15 md:border-none sticky top-0 z-10 md:backdrop-blur-none backdrop-blur">
      <div className="container">
        <div className="flex justify-between items-center md:border border-black/15 md:p-2.5 rounded-2xl max-w-3xl mx-auto backdrop-blur-sm">
          <div>
            <div className="border h-10 w-10 rounded-lg inline-flex justify-center items-center border-black/15">
              <span className="text-2xl font-bold">G</span>
            </div>
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-8 ">
              <a className="text-black/60 hover:text-black transition" href="#">
                Features
              </a>
              <a className="text-black/60 hover:text-black transition" href="#">
                How it works?
              </a>
              <a className="text-black/60 hover:text-black transition" href="#">
                Contact
              </a>
          
            </nav>
          </div>
          <div className="flex gap-4 items-center">
           
            <button className="px-3 py-2 border border-black/15 rounded-xl bg-black text-white">Login</button>

            <BiMenuAltRight size={30} className="md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
