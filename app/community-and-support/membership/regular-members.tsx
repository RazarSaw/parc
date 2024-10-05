"use client";
import Image from "next/image";

const members = [
  {
    name: "Dwaine Senechal",
    callsign: "VA5DCS",
    imageHref: "bg-[url('/parc/images/profiles/va5dcs.jpg')]",
    href: "http://www.qrz.com/db/va5dcs",
    "member-since": "2017",
  },
  {
    name: "Kevin Brownlee",
    callsign: "VA5MIR",
    imageHref: "bg-[url('/parc/images/profiles/va5mir.jpg')]",
    href: "http://www.qrz.com/db/va5mir",
    "member-since": "2023",
    XYL: "Jennifer",
  },
  {
    name: "Tom Marshall",
    callsign: "VA5TM",
    imageHref: "bg-[url('/parc/images/profiles/va5tm.jpg')]",
    href: "http://www.qrz.com/db/va5tm",
    "member-since": "2018",
  },
  {
    name: "Max Geras",
    callsign: "VE4IX",
    imageHref: "bg-[url('/parc/images/profiles/ve4ix.jpg')]",
    href: "http://www.qrz.com/db/ve4ix",
    "member-since": "2020",
    XYL: "Antoinette",
  },
  {
    name: "Jack Glenn",
    callsign: "VE4JRG",
    imageHref: "bg-[url('/parc/images/profiles/ve4jrg.jpg')]",
    href: "http://www.qrz.com/db/ve4jrg",
    "member-since": "2014",
    XYL: "Jessie",
  },
  {
    name: "Dennis Rohlick",
    callsign: "VE5AEE",
    imageHref: "bg-[url('/parc/images/profiles/ve5aee.jpg')]",
    href: "http://www.qrz.com/db/ve5aee",
    "member-since": "2005",
  },
  {
    name: "Jose Epon",
    callsign: "VE5BDE",
    imageHref: "bg-[url('/parc/images/profiles/ve5bde.jpg')]",
    href: "http://www.qrz.com/db/ve5bde",
    "member-since": "2017",
    XYL: "Nenette",
  },
  {
    name: "Garf Challoner",
    callsign: "VE5CAT",
    imageHref: "bg-[url('/parc/images/profiles/ve5cat.jpg')]",
    href: "http://www.qrz.com/db/ve5cat",
    "member-since": "2008",
    XYL: "Tricia",
  },
  {
    name: "Chris Sokoloski",
    callsign: "VE5CES",
    imageHref: "bg-[url('/parc/images/profiles/ve5ces.jpg')]",
    href: "http://www.qrz.com/db/ve5ces",
    "member-since": "2015",
  },
  {
    name: "Erin Lutz",
    callsign: "VE5EML",
    imageHref: "bg-[url('/parc/images/profiles/ve5eml.jpg')]",
    href: "http://www.qrz.com/db/ve5eml",
    "member-since": "2021",
    XYL: "Jennifer",
  },
  {
    name: "George T. Williams",
    callsign: "VE5GTW",
    imageHref: "bg-[url('/parc/images/profiles/ve5gtw.jpg')]",
    href: "http://www.qrz.com/db/ve5gtw",
    "member-since": "2009",
    XYL: "Darlene",
  },
  {
    name: "Larry Davis",
    callsign: "VE5LBD",
    imageHref: "bg-[url('/parc/images/profiles/ve5lbd.jpg')]",
    href: "http://www.qrz.com/db/ve5lbd",
    "member-since": "2005",
    XYL: "Grace",
  },
  {
    name: "Larry Mills",
    callsign: "VE5LCM",
    imageHref: "bg-[url('/parc/images/profiles/ve5lcm.jpg')]",
    href: "http://www.qrz.com/db/ve5lcm",
    "member-since": "2008",
    XYL: "Betty",
  },
  {
    name: "Leon Fourie",
    callsign: "VE5LWF",
    imageHref: "bg-[url('/parc/images/profiles/ve5lwf.jpg')]",
    href: "http://www.qrz.com/db/ve5lwf",
    "member-since": "2013",
    XYL: "Rentia",
  },
  {
    name: "Grace Davis",
    callsign: "VE5OES",
    imageHref: "bg-[url('/parc/images/profiles/ve5oes.jpg')]",
    href: "http://www.qrz.com/db/ve5oes",
    "member-since": "2005",
    OM: "Larry",
  },
  {
    name: "Peter Legebokoff",
    callsign: "VE5PFL",
    imageHref: "bg-[url('/parc/images/profiles/ve5pfl.jpg')]",
    href: "http://www.qrz.com/db/ve5pfl",
    "member-since": "2000",
    XYL: "Arlene",
  },
  {
    name: "Rob Krause",
    callsign: "VE5RJK",
    imageHref: "bg-[url('/parc/images/profiles/ve5rjk.jpg')]",
    href: "http://www.qrz.com/db/ve5rjk",
    "member-since": "2023",
  },
  {
    name: "Randy Molyneaux",
    callsign: "VE5RJM",
    imageHref: "bg-[url('/parc/images/profiles/ve5rjm.jpg')]",
    href: "http://www.qrz.com/db/ve5rjm",
    "member-since": "2000",
    XYL: "Michelle",
  },
  {
    name: "Steve Lenaghan",
    callsign: "VE5SR",
    imageHref: "bg-[url('/parc/images/profiles/ve5sr.jpg')]",
    href: "http://www.qrz.com/db/ve5sr",
    "member-since": "2016",
    XYL: "Loraine SK",
  },
  {
    name: "Grant See",
    callsign: "VE5SS",
    imageHref: "bg-[url('/parc/images/profiles/ve5ss.jpg')]",
    href: "http://www.qrz.com/db/ve5ss",
    "member-since": "2000",
    XYL: "Blanche SK",
  },
  {
    name: "Terrence Sutherland",
    callsign: "VE5ST",
    imageHref: "bg-[url('/parc/images/profiles/ve5st.jpg')]",
    href: "http://www.qrz.com/db/ve5st",
    "member-since": "2024",
    XYL: "IVY",
  },
  {
    name: "Troy Rogowski",
    callsign: "VE5TBR",
    imageHref: "bg-[url('/parc/images/profiles/ve5tbr.jpg')]",
    href: "http://www.qrz.com/db/ve5tbr",
    "member-since": "2019",
  },
  {
    name: "Jonathon Stevenson",
    callsign: "VE5WTH",
    imageHref: "bg-[url('/parc/images/profiles/ve5wth.jpg')]",
    href: "http://www.qrz.com/db/ve5wth",
    "member-since": "2022",
  },
  {
    name: "Steven Bosley",
    callsign: "VE5ZVX",
    imageHref: "bg-[url('/parc/images/profiles/ve5zvx.jpg')]",
    href: "http://www.qrz.com/db/ve5zvx",
    "member-since": "2023",
  },
  {
    name: "Milton Duquette",
    callsign: "VE6MLD",
    imageHref: "bg-[url('/parc/images/profiles/ve6mld.jpg')]",
    href: "http://www.qrz.com/db/ve6mld",
    "member-since": "2023",
  },
  {
    name: "Sue Duquette",
    callsign: "VE6SUE",
    imageHref: "bg-[url('/parc/images/profiles/ve6sue.jpg')]",
    href: "http://www.qrz.com/db/ve6sue",
    "member-since": "2023",
  },
];

export default function RegularMembers() {
  return (
    <>
      <section className="flex flex-col gap-8 text-white">
        <h2>Regular Members</h2>
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-stretch md:gap-8 gap-4">
          {members.map((member) => {
            return (
              <a
                key={member.name}
                href={member.href}
                className="group flex-grow bg-neutral-700 grid grid-cols-[auto,1fr] rounded-[8px] overflow-hidden group-hover:scale-[1.02] duration-500 ease-in-out outline outline-black/0 hover:outline-white hover:scale-[1.05] transition-all text-white"
              >
                <div
                  className={`p-8 bg-center bg-cover bg-no-repeat ${member.imageHref} min-w-32 md:min-w-48 `}
                ></div>
                <div className="flex-grow flex flex-col md:gap-8 gap-4 md:p-8 p-4 z-30">
                  <p className="md:hidden block ">
                    {member.name.split(" ")[0]}
                  </p>
                  <p className="md:block hidden">{member.name}</p>
                  <div className="flex md:flex-col flex-row flex-wrap md:gap-4 gap-2">
                    <p className="flex-grow md:text-sm text-[0.6rem] md:py-3 py-2 md:px-4 px-3 bg-neutral-600 rounded-[8px] ">
                      {member.callsign}
                    </p>
                    {member.hasOwnProperty("XYL") ? (
                      <p className="flex-grow md:text-sm text-[0.6rem] md:py-3 py-2 md:px-4 px-3 bg-neutral-600 rounded-[8px] ">
                        XYL {member.XYL}
                      </p>
                    ) : (
                      ""
                    )}
                    {member.hasOwnProperty("OM") ? (
                      <p className="flex-grow md:text-sm text-[0.6rem] md:py-3 py-2 md:px-4 px-3 bg-neutral-600 rounded-[8px] ">
                        OM {member.OM}
                      </p>
                    ) : (
                      ""
                    )}

                    <p className="flex-grow md:text-sm text-[0.6rem] md:py-3 py-2 md:px-4 px-3 bg-neutral-600 rounded-[8px] ">
                      Member Since {member["member-since"]}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </section>
    </>
  );
}
