export default function weekdayHF() {
  const weekdayHF = [
    {
      Day: "Sunday",
      "Local Time": "08:30",
      "UTC Time": "14:30",
      "Name of Net": "Saskatchewan ARES",
      Frequency: "3.753 MHz (LSB)",

      href: "",
    },
    {
      Day: "Sunday / Saturday",
      "Local Time": "12:00",
      "UTC Time": "18:00",
      "Name of Net": "Trans Canada",
      Frequency: "14.140 MHz (USB)",

      href: "https://www.ontars.com/TCN/index.html",
    },
    {
      Day: "Sunday",
      "Local Time": "18:00 / 19:00",
      "UTC Time": "00:00 / 01:00",
      "Name of Net": "Manitoba Public Service",
      Frequency: "3.747 MHz (LSB)",

      href: "",
    },
    {
      Day: "Sunday",
      "Local Time": "20:30 / 21:30",
      "UTC Time": "02:30 / 03:30",
      "Name of Net": "Evening Aurora",
      Frequency: "7.100 MHz (LSB)",

      href: "https://auroranet.ham-radio.ca/",
    },
    {
      Day: "Sunday - Thursday",
      "Local Time": "22:00 / 23:00",
      "UTC Time": "04:00 / 05:00",
      "Name of Net": "The Pow Wow Club",
      Frequency: "3.750 MHz (LSB)",

      href: "https://va3ts.ca/pwc.php",
    },
    {
      Day: "Monday - Friday",
      "Local Time": "07:00",
      "UTC Time": "13:00",
      "Name of Net": "Trans Provincial",
      Frequency: "7.100 MHz (LSB)",

      href: "http://www.tpn7055.com/",
    },
    {
      Day: "Monday, Wednesday, Friday",
      "Local Time": "10:30",
      "UTC Time": "16:30",
      "Name of Net": "International Saturn",
      Frequency: "14.325 MHz (USB)",

      href: "http://saternusa.org/",
    },
    {
      Day: "Saturday",
      "Local Time": "10:30",
      "UTC Time": "16:30",
      "Name of Net": "International Saturn",
      Frequency: "14.320 MHz (USB)",

      href: "http://saternusa.org/",
    },
  ];
  return (
    <div className="flex flex-col gap-8">
      <h2>Weekday HF Nets</h2>
      <div className="flex flex-row flex-wrap gap-8">
        {weekdayHF.map((net) => {
          return (
            <a key={net["Name of Net"]} href={net.href} className="flex-grow">
              <div className="bg-neutral-700 flex flex-col justify-between gap-4 h-full rounded-[8px] p-8 transition-all duration-300 ease-in-out outline hover:scale-[1.02] hover:outline-white outline-black/0 text-white">
                <h3 className="mb-4">{net["Name of Net"]}</h3>
                <p className="uppercase font-semibold text-sm bg-neutral-600/80 backdrop-blur-sm rounded-[8px] py-1 px-3 grow text-center">
                  {net["Day"]}
                </p>
                <div className="flex flex-row flex-wrap gap-4">
                  <p className="uppercase flex-grow font-semibold text-sm bg-neutral-600/80 backdrop-blur-sm rounded-[8px] py-1 px-3 text-center">
                    {net["UTC Time"]} UTC
                  </p>
                  <p className="uppercase flex-grow font-semibold text-sm bg-neutral-600/80 backdrop-blur-sm rounded-[8px] py-1 px-3 text-center">
                    {net["Local Time"]} CST
                  </p>
                  <p className="uppercase flex-grow font-semibold text-sm bg-neutral-600/80 backdrop-blur-sm rounded-[8px] py-1 px-3 text-center">
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
