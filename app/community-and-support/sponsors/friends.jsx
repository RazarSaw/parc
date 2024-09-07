import Image from "next/image";

const friends = [
  {
    title: "Frank & Angy Yaholnitsky",
    site: "Yorkton Repeater • VA5PAR • 145.490 (-) Mhz",
    href: "#",
    bg: "bg-[url('/parc/images/sponsors/FrankAngyYaholnitsky.jpg')]",
    imageHref: "/parc/images/sponsors/FrankAngyYaholnitsky.jpg",
    desc: "Frank and Angy are very community service minded people. They are impressed with the public service and emergency communications aspects of ham radio and have generously allowed access to the 160 foot tower and radio shack, located at their property east of Yorkton. This has enabled the Parkland Amateur Radio Club to install a permanent commercial grade - long range repeater, that will serve all local hams as well as travelers on the Yellowhead Highway.",
    alt: "Frank & Angy Yaholnitsky portrait side by side",
    width: 218,
    height: 131,
  },
  {
    title: "Nick Toma",
    site: "Endeavour  Repeater • VA5INV • 147.080 (+) Mhz",
    href: "#",
    bg: "bg-[url('/parc/images/sponsors/nicktoma.jpg')]",
    imageHref: "/parc/images/sponsors/nicktoma.jpg",
    desc: "Nick Toma has been very generous towards the Parkland Amateur Radio Club and members alike. Nick has been one of our main tower climbers and has donated his 150' Tower, which houses the Endeavour Repeater.   He has helped us out when it comes to testing out our radio's for optimum performance.   He has provided the Parkland Amateur Radio Club in providing a public service with emergency communications if the need should arise.  Located North of Preeceville, this repeater provides increase coverage, even where normal modes of communication don't work.",
    alt: "Nick Toma climbing antenna tower",
    width: 1823,
    height: 1227,
  },
  {
    title: "PCS - Rocanville Division",
    site: " Rocanville Repeater • VA5RSR • 146.310 (-) Mhz",
    href: "https://www.nutrien.com/locations/potash-operations",
    bg: "bg-[url('/parc/images/sponsors/nutrien.svg')]",
    imageHref: "/parc/images/sponsors/nutrien.svg",
    desc: "PCS Rocanville has been most generous to our club in providing a new repeater site for 2010-2011.  PCS Rocanville will help the Parkland Amateur Radio Club extend it's coverage area to cover the #1 Trans Canada Hwy",
    alt: "Nutrien logo",
    width: 600,
    height: 200,
  },
];

export default function Friends() {
  return (
    <section className="flex flex-col gap-8 text-white">
      {friends.map((friend) => {
        return (
          <div
            key={friend.title}
            className={`rounded-[8px] grid lg:grid-cols-2 lg:grid-rows-1 grid-cols-1 group grid-rows-[1fr_auto] overflow-hidden bg-top hover:bg-center bg-no-repeat bg-cover bg-neutral-700 bg-blend-multiply outline outline-black/0 hover:outline-white transition-all duration-500 hover:scale-[1.02]`}
          >
            <div
              className={`${friend.bg} bg-cover bg-no-repeat bg-left-top group-hover:bg-center duration-700 transition-all ease-in-out`}
            >
              <img
                src={`${friend.imageHref}`}
                alt={friend.alt}
                width={friend.width}
                height={friend.height}
                className="object-cover object-center w-full h-full max-h-64 block lg:hidden"
              />
            </div>
            <div className="flex flex-col gap-8 p-8 justify-center">
              <h4>
                <a className="text-white" href={friend.href}>
                  {friend.title}
                </a>
              </h4>
              <p className="flex flex-row flex-wrap md:gap-4 gap-2">
                {friend.site.split("•").map((tile) => {
                  return (
                    <span key={tile} className="md:px-4 px-3 md:py-3 py-2 md:text-sm text-[0.6rem] md:flex-grow-0 flex-grow font-semibold bg-neutral-600/50 backdrop-blur-md rounded-[8px]">
                      {tile}
                    </span>
                  );
                })}
              </p>
              <p className="col-span-2">{friend.desc}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
