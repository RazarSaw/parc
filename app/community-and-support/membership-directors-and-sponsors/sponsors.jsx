import { FiRewind } from "react-icons/fi";
import Link from "next/link";

export default function Sponsors() {
  const links = [
    {
      alt: "SaskTel Pioneers logo",
      href: "https://www.sasktelpioneers.com/wordpress/",
      imageHref: "pioneers.png",
      title: "SaskTel Pioneers",
    },
    {
      alt: "TransGas logo",
      href: "https://www.transgas.com",
      imageHref: "transgas.jpg",
      title: "TransGas",
    },
    {
      alt: "Miccar Aerial logo",
      href: "http://www.miccaraerial.com",
      imageHref: "miccar-aerial.jpg",
      title: "Miccar Aerial",
    },
    {
      alt: "83North logo",
      href: "https://www.83north.com",
      imageHref: "83north.png",
      title: "83North",
    },
    {
      alt: "Home Hardware logo",
      href: "https://www.homehardware.ca/en/",
      imageHref: "home-hardware.webp",
      title:
        "Home Hardware | P.O. Box 1780 456 3rd Ave. S. Kamsack, SK. S0A 1S0",
    },
    {
      alt: "SaskTel logo",
      href: "https://www.sasktel.com",
      imageHref: "sasktel.svg",
      title: "SaskTel",
    },
    {
      alt: "SaskPower logo",
      href: "http://www.saskpower.com/",
      imageHref: "saskpower.png",
      title: "SaskPower",
    },
    {
      alt: "True Value logo",
      href: "https://www.truevalue.com/",
      imageHref: "truevalue.webp",
      title: "True Value | 7 Main St. Preeceville, SK. S0A 3B0",
    },
    {
      alt: "International Lions Club logo",
      href: "https://www.lionsclubs.org/en/about-us/our-organization/about-lions-international",
      imageHref: "Lions_Clubs_International_logo.svg.png",
      title: "Canora Lions Club",
    },
    {
      alt: "Town of Kamsask logo",
      href: "https://kamsack.ca/",
      imageHref: "kamsack.png",
      title: "Town of Kamsask",
    },
    {
      alt: "Town of Preeceville logo",
      href: "http://www.townofpreeceville.ca/",
      imageHref: "town-of-preeceville.jpg",
      title: "Town of Preeceville",
    },
    {
      alt: "Town of Canora logo",
      href: "https://canora.com/",
      imageHref: "town-of-canora.gif",
      title: "Town of Canora",
    },
    {
      alt: "Gateway Co-operative Ltd. logo",
      href: "https://www.facebook.com/gatewaycoop/",
      imageHref: "gateway-coop.png",
      title: "Gateway Co-operative Ltd.",
    },
    {
      alt: "Canora Bargain Store logo",
      href: "#",
      imageHref: "bargain_store.gif",
      title: "Canora Bargain Store",
    },
    {
      alt: "Horizon Technical Services logo",
      href: "mailto:hts@imagewireless.ca",
      imageHref: "horizon-technical-services.png",
      title: "Horizon Technical Services",
    },
    {
      alt: "",
      href: "#",
      imageHref: "../../unfound.jpg",
      title: "Logan Stevens Equipment & Rentals | Dallas Harman",
    },
    {
      alt: "",
      href: "#",
      imageHref: "../../unfound.jpg",
      title: "Buchanan Branch | Buchanan, SK S0A 0J0",
    },
    {
      alt: "",
      href: "#",
      imageHref: "../../unfound.jpg",
      title: "Preeceville Branch |Preeceville, SK S0A 3B0",
    },
    {
      alt: "",
      href: "#",
      imageHref: "../../unfound.jpg",
      title: "Sturgis Branch | Sturgis, SK S0A 4A0",
    },
    {
      alt: "",
      href: "#",
      imageHref: "../../unfound.jpg",
      title: "Sky Farms Ltd. | Michael Yaholnitsky",
    },
    {
      alt: "",
      href: "#",
      imageHref: "../../unfound.jpg",
      title: "Canora Agencies Ltd. | Clarence & Alice Derow",
    },
    {
      alt: "",
      href: "#",
      imageHref: "../../unfound.jpg",
      title: "CANORA AMBULANCE CARE (1996) LTD.",
    },
    {
      alt: "",
      href: "#",
      imageHref: "../../unfound.jpg",
      title: "Canora Greenhouse Ltd. Coral Tibbett",
    },
    {
      alt: "",
      href: "#",
      imageHref: "../../unfound.jpg",
      title: "EMW Ltd. Chris Morrison",
    },
  ];

  const friends = [
    {
      title: "Frank & Angy Yaholnitsky",
      href: "#",
      imageHref: "Frank%20and%20Angy%20Yaholnitsky.jpg",
      desc: "Frank and Angy are very community service minded people. They are impressed with the public service and emergency communications aspects of ham radio and have generously allowed access to the 160 foot tower and radio shack, located at their property east of Yorkton. This has enabled the Parkland Amateur Radio Club to install a permanent commercial grade - long range repeater, that will serve all local hams as well as travelers on the Yellowhead Highway.",
      rowspan: 3,
      colspan: 2
    },
    {
      title: "Nick Toma",
      href: "#",
      imageHref: "kamsack.png",
      desc: "Nick Toma has been very generous towards the Parkland Amateur Radio Club and members alike. Nick has been one of our main tower climbers and has donated his 150' Tower, which houses the Endeavour Repeater.   He has helped us out when it comes to testing out our radio's for optimum performance.   He has provided the Parkland Amateur Radio Club in providing a public service with emergency communications if the need should arise.  Located North of Preeceville, this repeater provides increase coverage, even where normal modes of communication don't work.",
      rowspan: 2,
      colspan: 3
    },
    {
      title: "PCS - Rocanville Division",
      href: "https://www.nutrien.com/locations/potash-operations",
      imageHref: "Frank%20and%20Angy%20Yaholnitsky.jpg",
      desc: "PCS Rocanville has been most generous to our club in providing a new repeater site for 2010-2011.  PCS Rocanville will help the Parkland Amateur Radio Club extend it's coverage area to cover the #1 Trans Canada Hwy",
      rowspan: 2,
      colspan: "full"
    },
  ];

  return (
    <>
      <h2 className="xl:col-span-2 col-span-1">Sponsors</h2>

      <section className="flex flex-col md:grid md:grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] grid-flow-dense	 gap-8 text-white">
        <div className="col-span-2 row-span-2 bg-neutral-700 p-8 rounded-[8px] flex flex-col gap-4 justify-center">
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
          {/* <div className="flex flex-col gap-8"></div> */}
        </div>
        {friends.map((friend) => {
          return (
            <div
              key={friend.title}
              className={`bg-neutral-700 rounded-[8px] flex flex-col justify-stretch overflow-hidden row-span-${friend.rowspan} col-span-${friend.colspan}`}
            >
              <div
                className={`bg-[url('/images/sponsors/${friend.imageHref}')] bg-center bg-black/25 bg-blend-multiply p-4 flex flex-col justify-center items-center min-h-64 bg-no-repeat bg-contain`}
              >
                <h4>
                  <Link className="text-white" href={friend.href}>
                    {friend.title}
                  </Link>
                </h4>
              </div>
              <p className="col-span-2 p-4">{friend.desc}</p>
            </div>
          );
        })}
        {links.map((link) => {
          return (
            <a
              className="bg-white rounded-[8px] grid place-items-center p-8 hover:scale-[1.03] transition-all "
              href={link.href}
              title={link.title}
              key={link.title}
            >
              <img
                src={`/images/sponsors/${link.imageHref}`}
                alt={link.alt}
                className="rounded-[8px]"
              />
            </a>
          );
        })}
      </section>
    </>
  );
}
