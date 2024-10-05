export default function digital() {
  const digital = [
    {
      Day: "Friday",
      "Local Time": "19:00",
      "UTC Time": "01:00",
      "Name of Net": "Canadian D-Star",
      Frequency: "XRF103B / XRF021B",

      href: "",
    },
    {
      Day: "Wednesday",
      "Local Time": "19 / 20:00",
      "UTC Time": "01 / 02:00",
      "Name of Net": "	The Canada Fusion / C4FM",
      Frequency: "Wires-X Room 40678",

      href: "https://www.dxzone.com/dx33263/cq-canada.html",
    },
  ];
  return (
    <div className="flex flex-col gap-8">
      <h2>Digital Nets</h2>
      <div className="flex flex-row flex-wrap gap-8">
        {digital.map((net) => {
          return (
            <a
              key={net["Name of Net"]}
              target="_blank"
              href={net.href}
              className="flex-grow"
            >
              <div className="bg-neutral-700 flex flex-col justify-between gap-2 md:gap-4 h-full rounded-[8px] p-8 transition-all duration-300 ease-in-out outline hover:scale-[1.02] hover:outline-white outline-black/0 text-white">
                <h3 className="mb-4">{net["Name of Net"]}</h3>
                <p className="uppercase font-semibold text-[0.6rem] md:text-sm bg-neutral-600/80 backdrop-blur-sm rounded-[8px] py-2 px-3 md:py-3 md:px-4 grow text-center">
                  {net["Day"]}
                </p>
                <div className="flex flex-row flex-wrap gap-2 md:gap-4">
                  <p className="uppercase flex-grow font-semibold text-[0.6rem] md:text-sm bg-neutral-600/80 backdrop-blur-sm rounded-[8px] py-2 px-3 md:py-3 md:px-4 text-center">
                    {net["UTC Time"]} UTC
                  </p>
                  <p className="uppercase flex-grow font-semibold text-[0.6rem] md:text-sm bg-neutral-600/80 backdrop-blur-sm rounded-[8px] py-2 px-3 md:py-3 md:px-4 text-center">
                    {net["Local Time"]} CST
                  </p>
                  <p className="uppercase flex-grow font-semibold text-[0.6rem] md:text-sm bg-neutral-600/80 backdrop-blur-sm rounded-[8px] py-2 px-3 md:py-3 md:px-4 text-center">
                    {net["Frequency"]}
                  </p>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
