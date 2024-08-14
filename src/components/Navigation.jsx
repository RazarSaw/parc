export default function Navigation() {
  const elements = [
    "Local Info",
    "Links",
    "Ham Radio Info",
    "Nets",
    "IRLP & EchoLink",
    "Repeaters",
    "Sponsors",
  ];
  return (
    <nav className="bg-neutral-800 text-white">
      <ul className="md:flex justify-center gap-8 py-4 container mx-auto hidden">
        {elements.map((element) => (
          <li className="hover:scale-[1.05] transition-all">
            <a href={`${element.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and")}`} className="text-white">{element}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
