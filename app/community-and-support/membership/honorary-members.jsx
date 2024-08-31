export default function honoraryMembers() {
  const honoraryMembers = [
    {
      name: "Nick Toma",
      callsign: "",
      desc: "",
    },
    {
      name: "Ray Rosler",
      callsign: "VE5RAE",
      desc: "XYL: Misel",
    },
    {
      name: "Arnold Krieger",
      callsign: "VE5HV",
      desc: "",
    },
    {
      name: "Scott Diamond",
      callsign: "VE6RZ",
      desc: "",
    },
    {
      name: "Bruce McGregor",
      callsign: "VE4DBM",
      desc: "",
    },
  ];
  return (
    <section className="flex flex-col gap-8 text-white">
      <h2>Honorary Members</h2>
      <div className="flex flex-row flex-wrap md:gap-8 gap-4">
        {honoraryMembers.map((member) => {
          return (
            <a
              key={member.name}
              className={`group flex-1 min-w-[200px]`}
              href={`${
                member["callsign"] == ""
                  ? ""
                  : "https://www.qrz.com/db/" + member.callsign
              }`}
            >
              <div className="bg-neutral-700 flex-col h-full rounded-[8px] p-0 overflow-hidden group-hover:scale-[1.02] transition-all text-white">
                <div className="flex flex-col gap-4 p-4 z-30 bg-neutral-700 h-full justify-between">
                  <h3>{member.name}</h3>
                  {member["desc"] == "" ? "" : <p>{member["desc"]}</p>}
                  {member["callsign"] == "" ? "" : <p>{member["callsign"]}</p>}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
