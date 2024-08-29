import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <>
      <header className="grid place-items-center gap-8 px-8 py-16 bg-[url('/parc/images/headers/home.webp')] bg-cover bg-bottom min-h-[40vh] bg-blend-multiply bg-gray-500 text-center">
        <Link href={"/"} className="hover:scale-[1.05] transition-all">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 100 }}
            transition={{ duration: "1.5", }}
            src="/parc/images/logos/PARC-banner.webp"
            alt="Parkland Amateur Radio Club banner"
          />
        </Link>
        <div className="flex gap-4 flex-wrap justify-center">
          <a
            href="/parc/community-and-support/membership-directors-and-sponsors.html"
            className="bg-blue-400 hover:bg-blue-500 rounded-[8px] p-4 text-white font-semibold hover:scale-[1.05] transition-all"
          >
            <p>Join Us & Become A Member!</p>
          </a>
        </div>
      </header>
    </>
  );
}
