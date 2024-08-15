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
      title: "Home Hardware | P.O. Box 1780 456 3rd Ave. S. Kamsack, SK. S0A 1S0",
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
  ];
  return (
    <>
      <section className="grid grid-cols-1 xl:grid-cols-[minmax(250px,_400px),_1fr] gap-8 text-white">
        <h3 className="xl:col-span-2 col-span-1">Sponsors</h3>
        <div>
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
        <div className="grid md:grid-cols-[repeat(auto-fill,_minmax(150px,1fr))] grid-cols-[repeat(auto-fill,_minmax(200px,1fr))] gap-8 items-stretch justify-stretch">
          {links.map((link) => {
            return (
              <a
                className="bg-white rounded-[8px] grid place-items-center p-8 hover:scale-[1.03] transition-all aspect-square"
                href={link.href}
                title={link.title}
                key={link.title}
              >
                <img
                  src={`/parklandarc/images/sponsors/${link.imageHref}`}
                  alt={link.alt}
                  className="rounded-[8px]"
                />
              </a>
            );
          })}
        </div>
        {/* <div className="grid md:grid-cols-[repeat(auto-fit,_minmax(200px,1fr))] grid-cols-[repeat(auto-fill,_minmax(150px,1fr))] gap-8">
          {members.directors.map((member) => {
            return (
              <a key={member.name} href={member.href}>
                <div className="bg-neutral-700 flex flex-col h-full rounded-[8px] p-0 hover:scale-[1.02] hover:border border-white transition-all text-white">
                  <img
                    src={`/parklandarc/images/profiles/${member.callsign}.jpg`}
                    className="aspect-square object-cover object-left transition-all	hover:object-right rounded-t-[8px]"
                  />
                  <div className="flex-grow flex flex-col gap-4 p-4">
                    <h3 className="md:hidden block ">
                      {member.name.split(" ")[0]}
                    </h3>
                    <h3 className="md:block hidden">{member.name}</h3>
                    <h4 className="-mt-4 mb-4">{member.position}</h4>
                    <div className="flex flex-col gap-4 flex-grow md:place-content-end place-content-between">
                      <p className="flex md:flex-row flex-col justify-between">
                        <span>{member.callsign} </span>
                        <span>
                          {member.hasOwnProperty("XYL")
                            ? `XYL ${member.XYL}`
                            : ""}
                        </span>
                      </p>
                      <p>Member Since {member["member-since"]}</p>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div> */}
      </section>
    </>
  );
}
