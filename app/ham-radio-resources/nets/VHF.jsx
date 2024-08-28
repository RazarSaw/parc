export default function VHF() {
  const vhf = [
    {
      Day: "Monday - Friday",
      "Local Time": "21:00",
      "UTC Time": "03:00",
      "Name of Net": "Land of the Living Skies Net",
      Mode: "IRLP 9300 • EchoLink 496527",
      image: "bg-[url('/parc/Sky%201.webp')]",
      href: "https://sarl.ca/departments/",
    },
    {
      Day: "Sunday",
      "Local Time": "20:00",
      "UTC Time": "02:00",
      "Name of Net": "PARC Chit Chat",
      Mode: "IRLP 9300 • EchoLink 496527",
      image: "bg-[url('/parc/images/headers/ham-radio-info.png')]",
      href: "#",
    },
    {
      Day: "Wednesday",
      "Local Time": "09 / 10:00",
      "UTC Time": "15 / 16:00",
      "Name of Net": "Trans-Canada IRLP Net IRLP",
      Mode: "IRLP 9013 • EchoLink 496527",
      image: "bg-[url('/parc/WARA.jpg')]",
      href: "https://www.ve7vic.ca/trans-canada-irlp-net-irlp-node-9013/",
    },
    {
      Day: "Sunday",
      "Local Time": "09 / 10:00",
      "UTC Time": "15 / 16:00",
      "Name of Net": "Trans-Canada Net",
      Mode: "IRLP 9029 • EchoLink 496527",
      image: "bg-[url('/parc/The%20Canada%20Hub.png')]",
      href: "https://thecanadahub.ca/index.php/nets/",
    },
  ];
  return (
    <div className="flex flex-col gap-8">
      <h2>VHF, IRLP, & EchoLink Nets</h2>
      <div className="flex flex-row flex-wrap gap-8">
        {vhf.map((net) => {
          return (
            <a
              key={net["Name of Net"]}
              href={net.href}
              className={`group flex-grow transition-all duration-300 ease-in-out outline hover:scale-[1.02] hover:outline-white outline-black/0 shadow-md rounded-[8px]`}
            >
              <div
                className={`${net.image} bg-no-repeat bg-cover bg-left-top hover:bg-right-bottom bg-black/90 bg-blend-multiply grid grid-cols-1 grid-rows-[1fr,_repeat(auto-fill,_1fr)] p-8 gap-4 h-full rounded-[8px] duration-700 transition-all text-white`}
              >
                <h3 className="pb-4">{net["Name of Net"]}</h3>
                <p className="uppercase font-semibold text-sm bg-neutral-800/80 backdrop-blur-sm rounded-[8px] py-1 px-3 grow text-center">
                  {net["Day"]}
                </p>
                <div className="flex flex-row flex-wrap gap-4">
                  <p className="uppercase flex-grow font-semibold text-sm bg-neutral-800/80 backdrop-blur-sm rounded-[8px] py-1 px-3 text-center">
                    {net["UTC Time"]} UTC
                  </p>
                  <p className="uppercase flex-grow font-semibold text-sm bg-neutral-800/80 backdrop-blur-sm rounded-[8px] py-1 px-3 text-center">
                    {net["Local Time"]} CST
                  </p>
                  {net.Mode.split("•").map((string) => {
                    return (
                      <p
                        className="uppercase flex-grow font-semibold text-sm bg-neutral-800/80 backdrop-blur-sm rounded-[8px] py-1 px-3 text-center"
                        key={string}
                      >
                        {string}
                      </p>
                    );
                  })}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
