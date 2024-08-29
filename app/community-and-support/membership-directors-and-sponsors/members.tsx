"use client";
import Image from "next/image";

export default function Members() {
  const members = {
    regular: [
      {
        name: "Dwaine Senechal",
        callsign: "VA5DCS",
        href: "http://www.qrz.com/db/va5dcs",
        "member-since": "2017",
      },
      {
        name: "Kevin Brownlee",
        callsign: "VA5MIR",
        href: "http://www.qrz.com/db/va5mir",
        "member-since": "2023",
        XYL: "Jennifer",
      },
      {
        name: "Tom Marshall",
        callsign: "VA5TM",
        href: "http://www.qrz.com/db/va5tm",
        "member-since": "2018",
      },
      {
        name: "Max Geras",
        callsign: "VE4IX",
        href: "http://www.qrz.com/db/ve4ix",
        "member-since": "2020",
        XYL: "Antoinette",
      },
      {
        name: "Jack Glenn",
        callsign: "VE4JRG",
        href: "http://www.qrz.com/db/ve4jrg",
        "member-since": "2014",
        XYL: "Jessie",
      },
      {
        name: "Dennis Rohlick",
        callsign: "VE5AEE",
        href: "http://www.qrz.com/db/ve5aee",
        "member-since": "2005",
      },
      {
        name: "Jose Epon",
        callsign: "VE5BDE",
        href: "http://www.qrz.com/db/ve5bde",
        "member-since": "2017",
        XYL: "Nenette",
      },
      {
        name: "Garf Challoner",
        callsign: "VE5CAT",
        href: "http://www.qrz.com/db/ve5cat",
        "member-since": "2008",
        XYL: "Tricia",
      },
      {
        name: "Chris Sokoloski",
        callsign: "VE5CES",
        href: "http://www.qrz.com/db/ve5ces",
        "member-since": "2015",
      },
      {
        name: "Erin Lutz",
        callsign: "VE5EML",
        href: "http://www.qrz.com/db/ve5eml",
        "member-since": "2021",
        XYL: "Jennifer",
      },
      {
        name: "George T. Williams",
        callsign: "VE5GTW",
        href: "http://www.qrz.com/db/ve5gtw",
        "member-since": "2009",
        XYL: "Darlene",
      },
      {
        name: "Larry Davis",
        callsign: "VE5LBD",
        href: "http://www.qrz.com/db/ve5lbd",
        "member-since": "2005",
        XYL: "Grace",
      },
      {
        name: "Larry Mills",
        callsign: "VE5LCM",
        href: "http://www.qrz.com/db/ve5lcm",
        "member-since": "2008",
        XYL: "Betty",
      },
      {
        name: "Leon Fourie",
        callsign: "VE5LWF",
        href: "http://www.qrz.com/db/ve5lwf",
        "member-since": "2013",
        XYL: "Rentia",
      },
      {
        name: "Grace Davis",
        callsign: "VE5OES",
        href: "http://www.qrz.com/db/ve5oes",
        "member-since": "2005",
        OM: "Larry",
      },
      {
        name: "Peter Legebokoff",
        callsign: "VE5PFL",
        href: "http://www.qrz.com/db/ve5pfl",
        "member-since": "2000",
        XYL: "Arlene",
      },
      {
        name: "Rob Krause",
        callsign: "VE5RJK",
        href: "http://www.qrz.com/db/ve5rjk",
        "member-since": "2023",
      },
      {
        name: "Randy Molyneaux",
        callsign: "VE5RJM",
        href: "http://www.qrz.com/db/ve5rjm",
        "member-since": "2000",
        XYL: "Michelle",
      },
      {
        name: "Steve Lenaghan",
        callsign: "VE5SR",
        href: "http://www.qrz.com/db/ve5sr",
        "member-since": "2016",
        XYL: "Loraine SK",
      },
      {
        name: "Grant See",
        callsign: "VE5SS",
        href: "http://www.qrz.com/db/ve5ss",
        "member-since": "2000",
        XYL: "Blanche SK",
      },
      {
        name: "Terrence Sutherland",
        callsign: "VE5ST",
        href: "http://www.qrz.com/db/ve5st",
        "member-since": "2024",
        XYL: "IVY",
      },
      {
        name: "Troy Rogowski",
        callsign: "VE5TBR",
        href: "http://www.qrz.com/db/ve5tbr",
        "member-since": "2019",
      },
      {
        name: "Jonathon Stevenson",
        callsign: "VE5WTH",
        href: "http://www.qrz.com/db/ve5wth",
        "member-since": "2022",
      },
      {
        name: "Steven Bosley",
        callsign: "VE5ZVX",
        href: "http://www.qrz.com/db/ve5zvx",
        "member-since": "2023",
      },
      {
        name: "Milton Duquette",
        callsign: "VE6MLD",
        href: "http://www.qrz.com/db/ve6mld",
        "member-since": "2023",
      },
      {
        name: "Sue Duquette",
        callsign: "VE6SUE",
        href: "http://www.qrz.com/db/ve6sue",
        "member-since": "2023",
      },
    ],
  };
  return (
    <>
      <section className="flex flex-col gap-8 text-white">
        <h2>Regular Members</h2>
        <div className="grid md:grid-cols-[repeat(auto-fill,_minmax(200px,1fr))] grid-cols-1 md:gap-8 gap-4">
          {members.regular.map((member) => {
            return (
              <a key={member.name} href={member.href} className="group">
                <div className="bg-neutral-700 grid grid-cols-[100px,_1fr] md:flex flex-col h-full rounded-[8px] p-0 overflow-hidden group-hover:scale-[1.02]    transition-all text-white">
                  <Image
                    layout="responsive"
                    width={200}
                    height={200}
                    src={`/parc/images/profiles/${member.callsign.toLowerCase()}.jpg`}
                    alt={member.name}
                    className="w-full md:h-auto h-full md:aspect-square object-cover md:object-left object-center transition-all group-hover:object-right md:rounded-t-[8px] group-hover:scale-[1.10] ease-in-out duration-700"
                  />
                  <div className="flex-grow flex flex-col gap-4 p-4 z-30 bg-neutral-700">
                    <h3 className="md:hidden block ">
                      {member.name.split(" ")[0]}
                    </h3>
                    <h3 className="md:block hidden">{member.name}</h3>
                    <div className="flex flex-col gap-4 flex-grow md:place-content-end place-content-between">
                      <p className="flex md:flex-row flex-col justify-between">
                        <span>{member.callsign} </span>
                        <span>
                          {member.hasOwnProperty("XYL")
                            ? `XYL ${member.XYL}`
                            : ""}
                          {member.hasOwnProperty("OM") ? `OM ${member.OM}` : ""}
                        </span>
                      </p>
                      <p>Member Since {member["member-since"]}</p>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </section>
      <section className="flex flex-col gap-8 text-white">
        <h2>Associate Members</h2>
        <div className="grid md:grid-cols-[repeat(auto-fill,_minmax(200px,1fr))] grid-cols-1 md:gap-8 gap-4">
          <a className="group">
            <div className="bg-neutral-700 grid grid-cols-[100px,_1fr] md:flex flex-col h-full rounded-[8px] p-0 overflow-hidden group-hover:scale-[1.02] transition-all text-white">
              <Image
                layout="responsive"
                width={200}
                height={200}
                alt="Junnifer Nielsen"
                src={`/parc/images/profiles/Jennifer.jpeg`}
                className="w-full md:h-auto h-full md:aspect-square object-cover md:object-left object-center transition-all group-hover:object-right md:rounded-t-[8px] group-hover:scale-[1.10] ease-in-out duration-700"
              />
              <div className="flex-grow flex flex-col gap-4 p-4 z-30 bg-neutral-700">
                <h3 className="md:hidden block">Jennifer</h3>
                <h3 className="md:block hidden">Jennifer Nielsen</h3>
                <div className="flex flex-col gap-4 flex-grow place-content-end">
                  <p className="flex flex-row justify-between">OM Erin</p>
                  <p>Member Since 2021</p>
                </div>
              </div>
            </div>
          </a>
          <a className="group">
            <div className="bg-neutral-700 grid grid-cols-[100px,_1fr] md:flex flex-col h-full rounded-[8px] p-0 overflow-hidden group-hover:scale-[1.02] transition-all text-white">
              <Image
                layout="responsive"
                width={200}
                height={200}
                alt="Michelle Schneider"
                src={`/parc/images/profiles/Michelle.jpg`}
                className="w-full md:h-auto h-full md:aspect-square object-cover md:object-left object-center transition-all group-hover:object-right md:rounded-t-[8px] group-hover:scale-[1.10] ease-in-out duration-700"
              />
              <div className="flex-grow flex flex-col gap-4 p-4 z-30 bg-neutral-700">
                <h3 className="md:hidden block">Michelle</h3>
                <h3 className="md:block hidden">Michelle Schneider</h3>
                <div className="flex flex-col gap-4 flex-grow place-content-end">
                  <p className="flex flex-row justify-between">OM Randy</p>
                  <p>Member Since 2017</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
