import Link from "next/link";

export default function community() {
  const communities = [
    {
      title: "RM of Buchanan, No. 304",
      href: "https://www.rmbuchanan.ca",
    },
    {
      title: "RM Of Cote No. 271",
      href: "https://www.rmofcote.ca",
    },
    {
      title: "RM of Foam Lake No. 276",
      href: "https://foamlake.com/rm-no-276",
    },
    {
      title: "RM of Preeceville, No. 334",
      href: "https://www.preeceville.ca/rural-municipality",
    },
    {
      title: "Town of Canora",
      href: "https://canora.ca",
    },
    {
      title: "Town of Churchbridge",
      href: "https://churchbridge.com",
    },
    {
      title: "Town of Kamsack",
      href: "https://kamsack.ca",
    },
    {
      title: "Town of Norquay",
      href: "https://norquay.ca",
    },
    {
      title: "Town of Preeceville",
      href: "https://preeceville.ca",
    },
    {
      title: "Town of Rocanville",
      href: "https://rocanville.ca",
    },
    {
      title: "City of Melville",
      href: "https://melville.ca",
    },
  ];

  return (
    <div className="bg-neutral-700 p-8 rounded-[8px] lg:col-span-4 col-span-2 md:row-span-3 lg:row-span-1 flex flex-col gap-8">
      <h3>Community Supports</h3>
      <ul className="flex flex-wrap md:gap-8 gap-4">
        {communities.map((community) => {
          return (
            <Link key={community.title} href={community.href} className="w-auto bg-neutral-500 rounded-[8px] py-1 px-3 grow text-center hover:scale-105 transition-all duration-700">
              <li className="text-white">{community.title}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
