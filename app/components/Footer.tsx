"use client";

import { FaFacebookSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const d = new Date();
  let year = d.getFullYear();

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container mx-auto flex lg:flex-row flex-col justify-between gap-8 py-4 px-8">
        <div className="flex lg:flex-row flex-col items-center gap-8">
          <Link
            href={"/"}
            aria-label="Parkland Amateur Radio Club logo - go to home page"
          >
            <img
              width={64}
              height={64}
              src="/parc/images/logos/logo.png"
              alt=""
              className="max-h-16 hover:scale-[1.05] transition-all aspect-square"
            />
          </Link>
          <p className="lg:text-left text-center">
            Copyright &copy; {year} Parkland Amateur Radio Club <br />
            All Rights Reserved.
          </p>
        </div>
        <div className="flex justify-center items-center gap-8">
          <a
            href="https://www.facebook.com/groups/851578431575204/"
            target="_blank"
            title="Check out our Facebook for our latest and greatest news"
          >
            <FaFacebookSquare className="text-blue-500 text-4xl hover:scale-[1.05] transition-all" />
          </a>
          <a
            href="mailto:ve5rjm@hotmail.com"
            target="_blank"
            title="Email our webmaster VE5RJM (Randy)"
          >
            <MdEmail className="text-red-500 text-4xl hover:scale-[1.05] transition-all" />
          </a>
        </div>
      </div>
    </footer>
  );
}
