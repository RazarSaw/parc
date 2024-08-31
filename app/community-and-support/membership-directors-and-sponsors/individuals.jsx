import Link from "next/link";

export default function individuals() {
  const individuals = [
    {
      href: "https://www.qrz.com/db/ve5rae",
      title: "Ray Rosler • VE5RAE",
    },
    {
      href: "#",
      title: "Wally & Mary Huebert",
    },
    {
      href: "https://www.qrz.com/db/VE6RZ",
      title: "Scott Diamond • VE6RZ",
    },
    {
      href: "#",
      title: "Nick Toma",
    },
    {
      href: "https://www.qrz.com/db/VE7BYC",
      title: "Dave Aitken • VE7BYC",
    },
    {
      href: "#",
      title: "Terry & Sandy Konkel",
    },
    {
      href: "https://www.qrz.com/db/VE5DN",
      title: "Bill & Edna Dunster • VE5DN (Silent Key)",
    },
    {
      href: "https://www.qrz.com/db/WP3OY",
      title: "Diego Figueroa • WP3OY",
    },
    {
      href: "https://www.qrz.com/db/VE5HG",
      title: "Erich Quiring • VE5HG",
    },
    {
      href: "https://www.qrz.com/db/VE5HV",
      title: "Arnold Krieger • VE5HV",
    },
  ];
  return (
    <div className="bg-neutral-700 p-8 rounded-[8px] lg:col-span-4 col-span-3 md:row-span-3 lg:row-span-1 flex flex-col gap-8">
      <h3>Individuals</h3>
      <ul className="flex flex-wrap lg:gap-8 md:gap-4 gap-2">
        {individuals.map((individual) => {
          return (
            <Link
              key={individual.title}
              href={individual.href}
              className={`w-auto bg-neutral-500 rounded-[8px] md:py-4 py-3 md:px-3 px-2 grow md:text-sm text-[0.6rem] text-center ${individual.href == '#' ? '' : 'hover:scale-105'} transition-all duration-700`}
            >
              <li className="text-white">{individual.title}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
