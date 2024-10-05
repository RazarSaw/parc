export default function honoraryMembers() {
  const members = [
    {
      name: "Nick Toma",
    },
    {
      name: "Ray Rosler",
      callsign: "VE5RAE",
      XYL: "Misel",
    },
    {
      name: "Arnold Krieger",
      callsign: "VE5HV",
    },
    {
      name: "Scott Diamond",
      callsign: "VE6RZ",
    },
    {
      name: "Bruce McGregor",
      callsign: "VE4DBM",
    },
  ];
  return (
    <section className="flex flex-col gap-8 text-white">
      <h2>Honorary Members</h2>
      <div className="flex flex-col md:flex-row flex-wrap justify-center items-stretch md:gap-8 gap-4">
        {members.map((member) => {
          return (
            <a
              key={member.name}
              href={member.href}
              className="group flex-grow bg-neutral-700  rounded-[8px] p-0 overflow-hidden group-hover:scale-[1.02]    transition-all text-white"
            >
              <div className="flex-grow flex flex-col md:gap-8 gap-4 p-4 md:p-8 z-30">
                <p className="md:hidden block ">{member.name.split(" ")[0]}</p>
                <p className="md:block hidden">{member.name}</p>
                <div className="flex flex-row flex-wrap md:flex-col md:gap-4 gap-2">
                  {member.hasOwnProperty("XYL") ? (
                    <p className="md:text-sm text-[0.6rem] md:py-3 py-2 md:px-4 px-3 bg-neutral-600 rounded-[8px] ">
                      XYL {member.XYL}
                    </p>
                  ) : (
                    ""
                  )}
                  {member.hasOwnProperty("OM") ? (
                    <p className="md:text-sm text-[0.6rem] md:py-3 py-2 md:px-4 px-3 bg-neutral-600 rounded-[8px] ">
                      OM {member.OM}
                    </p>
                  ) : (
                    ""
                  )}
                  {member.hasOwnProperty("callsign") ? (
                    <p className="md:text-sm text-[0.6rem] md:py-3 py-2 md:px-4 px-3 bg-neutral-600 rounded-[8px] ">
                      {member.callsign}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
