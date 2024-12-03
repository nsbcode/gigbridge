import React from "react";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center w-full container">
      <div className="border h-10 w-10 rounded-lg inline-flex m-5 justify-center items-center border-black/15">
        <span className="text-2xl font-bold">G</span>
      </div>
      <div>
         <button className="px-3 py-2 border border-black/15 rounded-xl bg-black text-white">Login</button>
      </div>
    </header>
  );
};

export default Navbar;
