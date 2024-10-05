import Image from "next/image";

export default function silentKeys() {
  const silentKeys = [
    {
      name: "Harvey Wirth",
      callsign: "VE5HAW",
      imageHref: "bg-[url('/parc/images/silent-keys/ve5haw.jpg')]",
      died: "Sunday, August 8, 2010",
      obituary: "/parc/pdfs/ve5haw.pdf",
    },
    {
      name: "Douglas Lackey",
      callsign: "VE5DLJ",
      imageHref: "bg-[url('/parc/images/silent-keys/ve5dlj.jpg')]",
      died: "Sunday, March 9, 2014",
      obituary: "/parc/pdfs/ve5dlj.pdf",
    },
    {
      name: "Ian White",
      callsign: "VE5AP-VE7AC",
      imageHref: "bg-[url('/parc/images/silent-keys/ve5ap-ve7ac.jpg')]",
      died: "Thursday, May 11, 2017",
      obituary:
        "https://vancouversunandprovince.remembering.ca/obituary/john-white-1066678978",
    },
    {
      name: "David Negrych",
      callsign: "VE4NEG",
      imageHref: "bg-[url('/parc/images/silent-keys/ve4neg.jpg')]",
      died: "Sunday, July 22, 2018",
      obituary: "/parc/pdfs/ve4neg.pdf",
    },
    {
      name: "Paul Obetkoff",
      callsign: "VE5PWO",
      imageHref: "bg-[url('/parc/images/silent-keys/ve5pwo.jpg')]",
      died: "Tuesday, April 23, 2019",
      obituary: "/parc/pdfs/ve5pwo.pdf",
    },
  ];
  return (
    <section className="flex flex-col gap-8 text-white">
      <h2>Silent Keys</h2>
      <div className="flex flex-col md:flex-row flex-wrap items-stretch md:gap-8 gap-4">
        {silentKeys.map((member) => {
          return (
            <a
              key={member.name}
              href={member.obituary}
              target="_blank"
              className="group flex-grow bg-neutral-700 grid grid-cols-[auto,1fr]  rounded-[8px] p-0 overflow-hidden group-hover:scale-[1.02] duration-500 ease-in-out outline outline-black/0 hover:outline-white hover:scale-[1.05] transition-all text-white"
            >
              <div
                className={`p-8 bg-center bg-cover bg-no-repeat ${member.imageHref} min-w-32 md:min-w-48 `}
              ></div>
              <div className="flex-grow flex flex-col md:gap-8 gap-4 md:p-8 p-4 z-30">
                <p className="md:hidden block ">{member.name.split(" ")[0]}</p>
                <p className="md:block hidden">{member.name}</p>
                <div className="flex flex-wrap md:flex-col flex-row md:gap-4 gap-2">
                  <p className="flex-grow md:text-sm text-[0.6rem] md:py-3 py-2 md:px-4 px-3 bg-neutral-600 rounded-[8px] ">
                    {member.callsign}
                  </p>
                  <p className="flex-grow md:text-sm text-[0.6rem] md:py-3 py-2 md:px-4 px-3 bg-neutral-600 rounded-[8px] ">
                    Died {member["died"]}
                  </p>
                </div>
              </div>
            </a>
          );
        })}
      </div>
      <a
        href="https://www.rac.ca/carl-everson-memorial-silent-keys-list/"
        target="_blank"
        className="text-center w-full md:w-auto hover:bg-red-500 bg-red-400 rounded-[8px] p-4 text-white font-semibold hover:scale-[1.02] transition-all"
      >
        <p>Carl Everson Memorial Silent Keys Lists</p>
      </a>
    </section>
  );
}
