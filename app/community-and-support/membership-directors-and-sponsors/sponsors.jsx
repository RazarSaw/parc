import { FiRewind } from "react-icons/fi";
import Link from "next/link";
import Community from "./community";
import Individuals from "./individuals";
import Image from "next/image";

export default function Sponsors() {
  const links = [
    {
      alt: "SaskTel Pioneers logo",
      href: "https://www.sasktelpioneers.com/wordpress/",
      imageHref: "pioneers.png",
      title: "SaskTel Pioneers",
      colspan: "1",
    },
    {
      alt: "TransGas logo",
      href: "https://www.transgas.com",
      imageHref: "transgas.jpg",
      title: "TransGas",
      colspan: "1",
    },
    {
      alt: "Miccar Aerial logo",
      href: "http://www.miccaraerial.com",
      imageHref: "miccar-aerial.jpg",
      title: "Miccar Aerial",
      colspan: "1",
    },
    {
      alt: "83North logo",
      href: "https://www.83north.com",
      imageHref: "83north.png",
      title: "83North",
      colspan: "1",
    },
    {
      alt: "Home Hardware logo",
      href: "https://www.homehardware.ca/en/",
      imageHref: "home-hardware.webp",
      title:
        "Home Hardware, P.O. Box 1780 456 3rd Ave. S. Kamsack, SK. S0A 1S0",
      colspan: "1",
    },
    {
      alt: "SaskTel logo",
      href: "https://www.sasktel.com",
      imageHref: "sasktel.svg",
      title: "SaskTel",
      colspan: "1",
    },
    {
      alt: "SaskPower logo",
      href: "http://www.saskpower.com/",
      imageHref: "saskpower.png",
      title: "SaskPower",
      colspan: "1",
    },
    {
      alt: "Horizon Technical Services logo",
      href: "mailto:hts@imagewireless.ca",
      imageHref: "horizon-technical-services.png",
      title: "Horizon Technical Services",
      colspan: "2",
    },
    {
      alt: "True Value logo",
      href: "https://www.truevalue.com/",
      imageHref: "truevalue.webp",
      title: "True Value, 7 Main St. Preeceville, SK. S0A 3B0",
      colspan: "1",
    },
    {
      alt: "International Lions Club logo",
      href: "https://www.lionsclubs.org/en/about-us/our-organization/about-lions-international",
      imageHref: "Lions_Clubs_International_logo.svg.png",
      title: "Canora Lions Club",
      colspan: "1",
    },
    {
      alt: "Town of Kamsask logo",
      href: "https://kamsack.ca/",
      imageHref: "kamsack.png",
      title: "Town of Kamsask",
      colspan: "3",
    },
    {
      alt: "Town of Preeceville logo",
      href: "http://www.townofpreeceville.ca/",
      imageHref: "town-of-preeceville.jpg",
      title: "Town of Preeceville",
      colspan: "2",
    },
    {
      alt: "Town of Canora logo",
      href: "https://canora.com/",
      imageHref: "town-of-canora.gif",
      title: "Town of Canora",
      colspan: "1",
    },
    {
      alt: "Gateway Co-operative Ltd. logo",
      href: "https://www.facebook.com/gatewaycoop/",
      imageHref: "gateway-coop.png",
      title: "Gateway Co-operative Ltd.",
      colspan: "1",
    },
    {
      alt: "Canora Bargain Store logo",
      href: "#",
      imageHref: "bargain_store.gif",
      title: "Canora Bargain Store",
      colspan: "2",
    },
    {
      alt: "",
      href: "#",
      imageHref: "#",
      title: "Logan Stevens Equipment & Rentals, Dallas Harman",
      colspan: "1",
    },
    {
      alt: "",
      href: "#",
      imageHref: "#",
      title: "Buchanan Branch, Buchanan, SK S0A 0J0",
      colspan: "1",
    },
    {
      alt: "",
      href: "#",
      imageHref: "#",
      title: "Preeceville Branch, Preeceville, SK S0A 3B0",
      colspan: "1",
    },
    {
      alt: "",
      href: "#",
      imageHref: "#",
      title: "Sturgis Branch, Sturgis, SK S0A 4A0",
      colspan: "1",
    },
    {
      alt: "",
      href: "#",
      imageHref: "#",
      title: "Sky Farms Ltd., Michael Yaholnitsky",
      colspan: "1",
    },
    {
      alt: "",
      href: "#",
      imageHref: "#",
      title: "Canora Agencies Ltd., Clarence & Alice Derow",
      colspan: "1",
    },
    {
      alt: "",
      href: "#",
      imageHref: "#",
      title: "CANORA AMBULANCE CARE (1996) LTD.",
      colspan: "1",
    },
    {
      alt: "",
      href: "#",
      imageHref: "#",
      title: "Canora Greenhouse Ltd. Coral Tibbett",
      colspan: "1",
    },
    {
      alt: "",
      href: "#",
      imageHref: "#",
      title: "EMW Ltd. Chris Morrison",
      colspan: "1",
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      <h2 className="xl:col-span-2 col-span-1">Sponsors</h2>
      <section className="flex flex-col md:grid md:grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] grid-flow-dense	 gap-8 text-white">
        <div className="col-span-2 row-span-1 lg:row-span-1 lg:col-span-2 xl:row-span-1 xl:col-span-2 bg-neutral-700 p-8 rounded-[8px] flex flex-col gap-4 justify-center">
          <p>
            The Parkland Amateur Radio Club was started in 2002, and has
            successfully installed a long distance working repeater linked with
            the existing EchoLink and IRLP systems that allow communication for
            just basic chit chat or another source of Emergency Communication
            all over the World.
          </p>
          <p>
            We are able to successfully keep this service alive in East Central
            Saskatchewan, through its Sponsors and Members, who we appreciate
            for the service, time and money they have contributed to the club.
          </p>
        </div>
        <div className="col-span-3 row-span-1 bg-neutral-700 p-8 rounded-[8px] flex flex-col gap-4 justify-center">
          <h3>Friends Of Amateur Radio</h3>
          <p>
            Over the years, PARC has made some exemplars in terms of supporting
            our repeaters. Below are our sponsors who have kindly allowed our
            club to host repeaters at there stations.
          </p>
        </div>
        <Friends />
        <Community />
        <Individuals />
        {links.map((link) => {
          return (
            <a
              className={`text-center text-neutral-600 bg-white rounded-[8px] grid place-items-center p-8 ${
                link.href == "#" ? "" : "hover:scale-[1.03]"
              } transition-all col-span-${link.colspan}`}
              href={link.href}
              title={link.title}
              key={link.title}
            >
              {link.imageHref.match("#") ? (
                link.title
              ) : (
                <Image
                  src={`/parc/images/sponsors/${link.imageHref}`}
                  alt={link.alt}
                  layout="responsive"
                  width={200}
                  height={200}
                  className="rounded-[8px]"
                />
              )}
            </a>
          );
        })}
      </section>
    </div>
  );
}

function Friends() {
  const friends = [
    {
      title: "Frank & Angy Yaholnitsky",
      site: "Yorkton Repeater • VA5PAR • 145.490 (-) Mhz",
      href: "#",
      imageHref: "/parc/images/sponsors/FrankAngyYaholnitsky.jpg",
      desc: "Frank and Angy are very community service minded people. They are impressed with the public service and emergency communications aspects of ham radio and have generously allowed access to the 160 foot tower and radio shack, located at their property east of Yorkton. This has enabled the Parkland Amateur Radio Club to install a permanent commercial grade - long range repeater, that will serve all local hams as well as travelers on the Yellowhead Highway.",
      rowspan: 2,
      colspan: 2,
      alt: "Frank & Angy Yaholnitsky portrait side by side",
    },
    {
      title: "Nick Toma",
      site: "Endeavour  Repeater • VA5INV • 147.080 (+) Mhz",
      href: "#",
      imageHref: "/parc/images/sponsors/nicktoma.jpg",
      desc: "Nick Toma has been very generous towards the Parkland Amateur Radio Club and members alike. Nick has been one of our main tower climbers and has donated his 150' Tower, which houses the Endeavour Repeater.   He has helped us out when it comes to testing out our radio's for optimum performance.   He has provided the Parkland Amateur Radio Club in providing a public service with emergency communications if the need should arise.  Located North of Preeceville, this repeater provides increase coverage, even where normal modes of communication don't work.",
      rowspan: 2,
      colspan: 3,
      alt: "Nick Toma climbing antenna tower",
    },
    {
      title: "PCS - Rocanville Division",
      site: " Rocanville Repeater • VA5RSR • 146.310 (-) Mhz",
      href: "https://www.nutrien.com/locations/potash-operations",
      imageHref: "/parc/images/sponsors/nutrien.svg",
      desc: "PCS Rocanville has been most generous to our club in providing a new repeater site for 2010-2011.  PCS Rocanville will help the Parkland Amateur Radio Club extend it's coverage area to cover the #1 Trans Canada Hwy",
      rowspan: 1,
      colspan: "3",
      alt: "Nutrien logo",
    },
  ];
  return friends.map((friend) => {
    return (
      <div
        key={friend.title}
        className={`bg-neutral-700 rounded-[8px] flex flex-col justify-stretch overflow-hidden row-span-${friend.rowspan} col-span-${friend.colspan}`}
      >
        <Image
          src={`${friend.imageHref}`}
          alt={friend.alt}
          layout="responsive"
          width={200}
          height={200}
        />
        <div className="h-full flex flex-col gap-8 justify-center p-8">
          <h4>
            <Link className="text-white" href={friend.href}>
              {friend.title}
            </Link>
          </h4>
          <p>{friend.site}</p>
          <p className="col-span-2">{friend.desc}</p>
        </div>
      </div>
    );
  });
}
