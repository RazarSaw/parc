import { FaFacebookSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Footer() {
  const d = new Date();
  let year = d.getFullYear();

  return (
    <footer className="bg-neutral-900 text-white p-4">
      <div className="container mx-auto flex lg:flex-row flex-col justify-between gap-8">
        <div className="flex lg:flex-row flex-col items-center gap-8">
          <Link to={"/"}>
            <img
              src="./logo.png"
              className="max-h-16 hover:scale-[1.05] transition-all"
            />
          </Link>
          <p>
            Copyright &copy; {year} Parkland Amateur Radio Club <br />
            All Rights Reserved.
          </p>
        </div>
        <div className="flex justify-center items-center gap-8">
          <a
            href="https://www.facebook.com/groups/851578431575204/"
            title="Check out our Facebook for our latest and greatest news"
          >
            <FaFacebookSquare className="text-blue-500 text-4xl hover:scale-[1.05] transition-all" />
          </a>
          <a
            href="mailto:ve5rjm@hotmail.com"
            title="Email our webmaster VE5RJM (Randy)"
          >
            <MdEmail className="text-red-500 text-4xl hover:scale-[1.05] transition-all" />
          </a>
        </div>
      </div>
    </footer>
  );
}
