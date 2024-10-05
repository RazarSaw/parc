import Image from "next/image";

const members = [
  {
    name: "Jennifer Nielsen",
    imageHref: "bg-[url('/parc/images/profiles/Jennifer.jpeg')]",
    om: "Erin",
    "member-since": "2021",
    width: 952,
    height: 900,
  },
  {
    name: "Michelle Schneider",
    imageHref: "bg-[url('/parc/images/profiles/Michelle.jpg')]",
    om: "Randy",
    "member-since": "2017",
    width: 768,
    height: 1024,
  },
];

export default function AssociateMembers() {
  return (
    <section className="flex flex-col gap-8 text-white">
      <h2>Associate Members</h2>
      <div className="flex flex-col md:flex-row flex-wrap justify-center items-stretch md:gap-8 gap-4">
        {members.map((member) => {
          return (
            <a
              key={member.name}
              target="_blank"
              href={member.href}
              className="group flex-grow bg-neutral-700 grid grid-cols-[auto,1fr]  rounded-[8px] p-0 overflow-hidden group-hover:scale-[1.02] duration-500 ease-in-out outline outline-black/0 hover:outline-white hover:scale-[1.05] transition-all text-white"
            >
              <div
                className={`p-8 bg-center bg-cover bg-no-repeat ${member.imageHref} min-w-32 md:min-w-48 `}
              ></div>
              <div className="flex-grow flex flex-col md:gap-8 gap-4 md:p-8 p-4 z-30">
                <p className="md:hidden block ">{member.name.split(" ")[0]}</p>
                <p className="md:block hidden">{member.name}</p>
                <div className="flex flex-col md:gap-4 gap-2">
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

                  <p className="md:text-sm text-[0.6rem] md:py-3 py-2 md:px-4 px-3 bg-neutral-600 rounded-[8px] ">
                    Member Since {member["member-since"]}
                  </p>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
