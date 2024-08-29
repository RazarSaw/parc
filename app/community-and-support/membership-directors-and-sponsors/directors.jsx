import Image from "next/image";

export default function Directors() {
  const members = {
    directors: [
      {
        name: "Leon Fourie",
        callsign: "VE5LWF",
        href: "http://www.qrz.com/db/ve5lwf",
        "member-since": "2013",
        XYL: "Rentia",
        position: "President",
      },
      {
        name: "Erin Lutz",
        callsign: "VE5EML",
        href: "http://www.qrz.com/db/ve5eml",
        "member-since": "2021",
        XYL: "Jennifer",
        position: "Vice President",
      },
      {
        name: "Steve Lenaghan",
        callsign: "VE5SR",
        href: "http://www.qrz.com/db/ve5sr",
        "member-since": "2016",
        XYL: "Loraine SK",
        position: "Secretary & Treasurer",
      },
      {
        name: "Jack Glenn",
        callsign: "VE4JRG",
        href: "http://www.qrz.com/db/ve4jrg",
        "member-since": "2014",
        XYL: "Jessie",
        position: "Fundraiser Coordinator",
      },
      {
        name: "Randy Molyneaux",
        callsign: "VE5RJM",
        href: "http://www.qrz.com/db/ve5rjm",
        "member-since": "2000",
        XYL: "Michelle",
        position: "Repeater Manager",
      },
    ],
  };
  return (
    <>
      <section className="flex flex-col gap-8 text-white">
        <h2>Directors</h2>
        <p>
          Our local club would not be possible without the people who make it
          up. From high level directors, to regular members, we&apos;re
          constantly hoping to gain people in the hobby.
        </p>
        <div className="grid md:grid-cols-[repeat(auto-fill,_minmax(200px,1fr))] grid-cols-1 md:gap-8 gap-4">
          {members.directors.map((member) => {
            return (
              <a key={member.name} href={member.href} className="group">
                <div className="bg-neutral-700 grid grid-cols-[100px,_1fr] md:flex flex-col h-full rounded-[8px] p-0 overflow-hidden group-hover:scale-[1.02] transition-all text-white">
                  <Image
                    layout="responsive"
                    width={200}
                    height={200}
                    src={`/parc/images/profiles/${member.callsign.toLowerCase()}.jpg`}
                    alt={member.name}
                    className="w-full md:h-auto h-full md:aspect-square object-cover md:object-left object-center transition-all group-hover:object-right md:rounded-t-[8px] group-hover:scale-[1.10] ease-in-out duration-700"
                  />
                  <div className="flex-grow flex flex-col gap-4 p-4 z-40 overflow-hidden bg-neutral-700">
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
        </div>
      </section>
    </>
  );
}
