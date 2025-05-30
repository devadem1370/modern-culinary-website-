import Image from "next/image";
import React from "react";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/",
  },
  {
    label: "Foods",
    href: "/",
  },
];
const Navbar = () => {
  return (
    <nav className=" max-w-[1250px] mt-[40px] mx-auto flex justify-between items-center">
      <div className="logo flex items-center justify-center gap-3">
        <Image src="/icons/logo.svg" alt="logo" width={42} height={42} />
        <span className="text-2xl font-bold">Savory</span>
      </div>


      <div className="flex items-center gap-10 font-opensans text-white/50 font-medium text-base ">
        {navItems.map((item) => (
          <a href={item.href} key={item.label}>
            {item.label}
          </a>
        ))}
      </div>
      <div className="search flex items-center justify-between outline outline-white/40 rounded-full py-[8px] px-8 w-[398px]">
        <input type="text" placeholder="Search..." className="outline-none bg-transparent"/>
        <Image src="/icons/search.svg" alt="search" width={31} height={31}/>
      </div>
      <div className="icons">
        <Image src="/icons/icons.png" alt="user" width={31} height={31}/>
      </div>
    </nav>
  );
};

export default Navbar;
