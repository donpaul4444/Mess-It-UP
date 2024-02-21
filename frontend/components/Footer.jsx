import { CookingPot, Facebook, Github, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="mb-5">
      <div className="flex  justify-center items-center">
        <Link
          href="/"
          className=" font-bold text-inherit text-gray-500 text-xl"
        >MESSITUP</Link>
      </div>
      <div className="flex gap-4 items-center justify-center mt-1 text-default-500">
				<Instagram size={18} className="cursor-pointer hover:text-default-700" />
				<Facebook size={18} className="cursor-pointer hover:text-default-700" />
				<Youtube size={18} className="cursor-pointer hover:text-default-700" />
				<Twitter size={18} className="cursor-pointer hover:text-default-700" />
			</div>
      <p className="mt-4 text-small text-default-500 text-center">© {new Date().getFullYear()} MESSITUP Inc.</p>
    </div>
  );
}

export default Footer;
