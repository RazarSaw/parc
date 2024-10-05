import { PiWaveSineLight } from "react-icons/pi";
import { IoMdKeypad } from "react-icons/io";

export default function Repeaters() {
  const repeaters = [
    {
      location: "Canora",
      href: "https://www.repeaterbook.com/repeaters/details.php?state_id=CA11&ID=9778",
      image: "bg-[url('/parc/images/locations/Canora.webp')]",
      callsign: "VA5EMO",
      frequency: "147.300 + MHz",
      tone: "No Tone",
      info: "IRLP / EchoLink / UHF / Reflector 9300",
    },
    {
      location: "Hendon",
      href: "https://www.repeaterbook.com/repeaters/details.php?state_id=CA11&ID=21437",
      image: "bg-[url('/parc/images/locations/Hendon.webp')]",
      callsign: "VE5EML",
      frequency: "146.610 - MHz",
      tone: "No Tone",
      info: "IRLP / Reflector 9300",
    },
    {
      location: "Norquay",
      href: "https://www.repeaterbook.com/repeaters/details.php?state_id=CA11&ID=3145",
      image: "bg-[url('/parc/images/locations/Norquay.webp')]",
      callsign: "VA5INV",
      frequency: "147.080 + MHz",
      tone: "No Tone",
      info: "IRLP / EchoLink / UHF / Reflector 9300",
    },
    {
      location: "Rocanville",
      href: "https://www.repeaterbook.com/repeaters/details.php?state_id=CA11&ID=10993",
      image: "bg-[url('/parc/images/locations/Rocanville.webp')]",
      callsign: "VA5RSR",
      frequency: "145.310 - MHz",
      tone: "100.0",
      info: "IRLP / EchoLink / Reflector 9300",
    },
    {
      location: "Yorkton",
      href: "https://www.repeaterbook.com/repeaters/details.php?state_id=CA11&ID=66",
      image: "bg-[url('/parc/images/locations/Yorkton.webp')]",
      callsign: "VA5PAR",
      frequency: "145.490 - MHz",
      tone: "No Tone",
      info: "IRLP / EchoLink / UHF / Reflector 9300",
    },
    {
      location: "Fort Qu'Appelle",
      href: "https://repeater.world/repeaters/ve5rjk-2m-fm-fort-qu-appelle-saskatchewan-canada",
      image: "bg-[url('/parc/images/locations/Fort-QuAppelle.webp')]",
      callsign: "VE5RJK",
      frequency: "146.430 MHz",
      tone: "No Tone",
      info: "IRLP / Reflector 9300 / No Offset / Simplex",
    },
  ];
  return (
    <section className="flex flex-row flex-wrap gap-8">
      {repeaters.map((repeater) => {
        return (
          <a
            key={repeater.location}
            href={repeater.href}
            target="_blank"
            className={`${repeater.image} flex-grow text-white bg-left-top hover:bg-right-bottom bg-no-repeat bg-cover transition-all duration-300 ease-in-out outline hover:scale-105 hover:outline-white outline-black/0 bg-neutral-800/90 bg-blend-multiply rounded-[8px] p-8 flex flex-col gap-8 shadow-md`}
          >
            <div className="flex flex-col gap-4">
              <h3>{repeater.location}</h3>
              <p className="text-sm uppercase font-semibold">
                {repeater.callsign}
              </p>
            </div>
            <div className="grid grid-cols-[auto,_1fr] gap-4 items-center">
              <PiWaveSineLight />
              <p>{repeater.frequency}</p>
              <IoMdKeypad />
              <p>{repeater.tone}</p>
            </div>
            <p className="flex flex-wrap gap-2 md:gap-4 col-span-2 md:text-sm text-[0.6rem]">
              {repeater.info.split("/").map((string) => {
                return (
                  <span
                    key={string}
                    className="bg-neutral-600/40 backdrop-blur-sm rounded-[8px] md:py-3 py-2 md:px-4 px-3 grow text-center"
                  >
                    {string}
                  </span>
                );
              })}
            </p>
          </a>
        );
      })}
    </section>
  );
}
