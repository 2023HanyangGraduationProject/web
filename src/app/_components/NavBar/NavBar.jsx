import React from "react";
import Link from "next/link";
import Wallet from "../Wallet";

const NavBar = () => {
  const links = [
    {
      href: "/listing",
      label: "등록",
    },
    {
      href: "/collections",
      label: "구매",
    },
    {
      href: "/contact",
      label: "Contact",
    },
  ];

  return (
    <div className="container flex flex-row justify-between items-center w-4/5 h-16 mt-6 "> 
        <img src="/img/SoulTicket.png" className="w-80" />
        <nav className="px-12 w-3/5 h-16 bg-black flex justify-between items-center rounded-3xl">
            {links.map((link) => (
                <div key={link.href} className="w-48 m-4">
                {/* <Link href={link.href}> */}
                <Link href={link.href} className="text-white text-xl hover:text-gray-300">
                    {/* <a className="text-white hover:underline">{link.label}</a> */}
                    {link.label}
                </Link>
            </div>
            ))}
        </nav>    
        <Wallet />
    </div>
  );
};

export default NavBar;
