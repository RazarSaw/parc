export default function dailyHF() {
  const dailyHF = [
    {
      Day: "Daily",
      "Local Time": "07:00 / 08:00",
      "UTC Time": "13:00 / 14:00",
      "Name of Net": "Saskatchewan WX",
      Frequency: "3.753/6 MHz (LSB)",

      href: "https://sarl.ca/departments/",
    },
    {
      Day: "Daily",
      "Local Time": "07:30 / 08:30",
      "UTC Time": "13:30 / 14:30",
      "Name of Net": "Manitoba WX",
      Frequency: "3.743/5 MHz (LSB)",

      href: "https://ramb.ca/info/nets/",
    },
    {
      Day: "Daily",
      "Local Time": "10:00 / 19:00",
      "UTC Time": "16:00 / 01:00",
      "Name of Net": "Maritimes Mobile Service",
      Frequency: "14.300 MHz (USB)",

      href: "https://www.mmsn.org/",
    },
    {
      Day: "Daily",
      "Local Time": "17:00",
      "UTC Time": "23:00",
      "Name of Net": "Afternoon Aurora",
      Frequency: "7.100 MHz (LSB)",

      href: "https://auroranet.ham-radio.ca/",
    },
    {
      Day: "Daily",
      "Local Time": "19:00",
      "UTC Time": "01:00",
      "Name of Net": "Saskatchewan Public Service	",
      Frequency: "3.735 MHz (LSB)",

      href: "",
    },
    {
      Day: "Daily",
      "Local Time": "19:30",
      "UTC Time": "01:30",
      "Name of Net": "Alberta Public Service",
      Frequency: "3.700 MHz (LSB)",

      href: "https://www.apsn3700.net/",
    },
    {
      Day: "Daily",
      "Local Time": "19:30",
      "UTC Time": "01:30",
      "Name of Net": "BC Public Service",
      Frequency: "3.729 MHz (LSB)",

      href: "https://www.bcpsn.com/",
    },
  ];
  return (
    <div className="flex flex-col gap-8">
      <h2>Daily HF Nets</h2>
      <div className="flex flex-row flex-wrap gap-8">
        {dailyHF.map((net) => {
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
