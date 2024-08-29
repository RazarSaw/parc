import Image from "next/image";

export default function silentKeys() {
  const silentKeys = [
    {
      name: "Harvey Wirth",
      callsign: "VE5HAW",
      died: "Sunday, August 8th, 2010",
      obituary: "/parc/pdfs/ve5haw.pdf"
    },
    {
      name: "Douglas Lackey",
      callsign: "VE5DLJ",
      died: "Sunday, March 9th, 2014",
      obituary: "/parc/pdfs/ve5dlj.pdf"
    },
    {
      name: "Ian White",
      callsign: "VE5AP-VE7AC",
      died: "Thursday May 11th, 2017",
      obituary: "https://vancouversunandprovince.remembering.ca/obituary/john-white-1066678978"
    },
    {
      name: "David Negrych",
      callsign: "VE4NEG",
      died: "Sunday, July 22, 2018",
      obituary: "/parc/pdfs/ve4neg.pdf"
    },
    {
      name: "Paul Obetkoff",
      callsign: "VE5PWO",
      died: "Tuesday April, 23, 2019",
      obituary: "/parc/pdfs/ve5pwo.pdf"
    },
  ];
  return (
    <section className="flex flex-col gap-8 text-white">
      <h2>Silent Keys</h2>
      <div className="grid md:grid-cols-[repeat(auto-fill,_minmax(200px,1fr))] grid-cols-1 md:gap-8 gap-4">
        {silentKeys.map((member) => {
          return (
            <a key={member.name} href={member.obituary} className="group">
              <div className="bg-neutral-700 grid grid-cols-[100px,_1fr] md:flex flex-col h-full rounded-[8px] p-0 overflow-hidden group-hover:scale-[1.02]    transition-all text-white">
                <Image
                  layout="responsive"
                  width={200}
                  height={200}
                  src={`/parc/images/silent-keys/${member.callsign.toLowerCase()}.jpg`}
                  alt={member.name}
                  className="w-full md:h-auto h-full aspect-square object-cover md:object-left object-center transition-all group-hover:object-right md:rounded-t-[8px] group-hover:scale-[1.10] ease-in-out duration-700"
                />
                <div className="flex-grow flex flex-col gap-4 p-4 z-30 bg-neutral-700">
                  <h3 className="md:hidden block ">
                    {member.name.split(" ")[0]}
                  </h3>
                  <h3 className="md:block hidden">{member.name}</h3>
                  <div className="flex flex-col gap-4 flex-grow md:place-content-end place-content-between">
                    
                    <p>Died {member["died"]}</p>
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
