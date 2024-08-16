export default function Nets() {
  const links = [
    {
      title: "DMR Nets",
      href: "https://w0wc.com/resources/brandmeister-dmr-nets/",
    },
    {
      title: "D-STAR Nets",
      href: "https://hamnetlist.blogspot.com/",
    },
    {
      title: "HamNetList.com",
      href: "https://hamnetlist.blogspot.com/",
    },
  ];
  const nets = {
    vhf: [
      {
        Day: "Monday - Friday",
        "Local Time": "21:00",
        "UTC Time": "03:00",
        "Name of Net": "Land of the Living Skies Net",
        Mode: "IRLP 9300 • EchoLink 496527",
        image: "/rs=w_388,h_388,cg_true.webp",
        href: "https://sarl.ca/departments/",
      },
      {
        Day: "Sunday",
        "Local Time": "20:00",
        "UTC Time": "02:00",
        "Name of Net": "PARC Chit Chat",
        Mode: "IRLP 9300 • EchoLink 496527",
        image: "/Ham Radio Info Header.png",
        href: "#",
      },
      {
        Day: "Wednesday",
        "Local Time": "09 / 10:00",
        "UTC Time": "15 / 16:00",
        "Name of Net": "Trans-Canada IRLP Net IRLP",
        Mode: "IRLP 9013 • EchoLink 496527",
        image: "/WARA.jpg",
        href: "https://www.ve7vic.ca/trans-canada-irlp-net-irlp-node-9013/",
      },
      {
        Day: "Sunday",
        "Local Time": "09 / 10:00",
        "UTC Time": "15 / 16:00",
        "Name of Net": "Trans-Canada Net",
        Mode: "IRLP 9029 • EchoLink 496527",
        image: "/The Canada Hub.png",
        href: "https://thecanadahub.ca/index.php/nets/",
      },
    ],
    dailyHF: [
      {
        Day: "Daily",
        "Local Time": "07:00 / 08:00",
        "UTC Time": "13:00 / 14:00",
        "Name of Net": "Saskatchewan WX",
        Frequency: "3.753/6 MHz (LSB)",
        image: "/unfound.jpg",
        href: "https://sarl.ca/departments/",
      },
      {
        Day: "Daily",
        "Local Time": "07:30 / 08:30",
        "UTC Time": "13:30 / 14:30",
        "Name of Net": "Manitoba WX",
        Frequency: "3.743/5 MHz (LSB)",
        image: "/unfound.jpg",
        href: "https://ramb.ca/info/nets/",
      },
      {
        Day: "Daily",
        "Local Time": "10:00 / 19:00",
        "UTC Time": "16:00 / 01:00",
        "Name of Net": "Maritimes Mobile Service",
        Frequency: "14.300 MHz (USB)",
        image: "/unfound.jpg",
        href: "https://www.mmsn.org/",
      },
      {
        Day: "Daily",
        "Local Time": "17:00",
        "UTC Time": "23:00",
        "Name of Net": "Afternoon Aurora",
        Frequency: "7.100 MHz (LSB)",
        image: "/unfound.jpg",
        href: "https://auroranet.ham-radio.ca/",
      },
      {
        Day: "Daily",
        "Local Time": "19:00",
        "UTC Time": "01:00",
        "Name of Net": "Saskatchewan Public Service	",
        Frequency: "3.735 MHz (LSB)",
        image: "/unfound.jpg",
        href: "",
      },
      {
        Day: "Daily",
        "Local Time": "19:30",
        "UTC Time": "01:30",
        "Name of Net": "Alberta Public Service",
        Frequency: "3.700 MHz (LSB)",
        image: "/unfound.jpg",
        href: "https://www.apsn3700.net/",
      },
      {
        Day: "Daily",
        "Local Time": "19:30",
        "UTC Time": "01:30",
        "Name of Net": "BC Public Service",
        Frequency: "3.729 MHz (LSB)",
        image: "/unfound.jpg",
        href: "https://www.bcpsn.com/",
      },
    ],
    weekdayHF: [
      {
        Day: "Sunday",
        "Local Time": "08:30",
        "UTC Time": "14:30",
        "Name of Net": "Saskatchewan ARES",
        Frequency: "3.753 MHz (LSB)",
        image: "/unfound.jpg",
        href: "",
      },
      {
        Day: "Sunday / Saturday",
        "Local Time": "12:00",
        "UTC Time": "18:00",
        "Name of Net": "Trans Canada",
        Frequency: "14.140 MHz (USB)",
        image: "/unfound.jpg",
        href: "https://www.ontars.com/TCN/index.html",
      },
      {
        Day: "Sunday",
        "Local Time": "18:00 / 19:00",
        "UTC Time": "00:00 / 01:00",
        "Name of Net": "Manitoba Public Service",
        Frequency: "3.747 MHz (LSB)",
        image: "/unfound.jpg",
        href: "",
      },
      {
        Day: "Sunday",
        "Local Time": "20:30 / 21:30",
        "UTC Time": "02:30 / 03:30",
        "Name of Net": "Evening Aurora",
        Frequency: "7.100 MHz (LSB)",
        image: "/unfound.jpg",
        href: "https://auroranet.ham-radio.ca/",
      },
      {
        Day: "Sunday - Thursday",
        "Local Time": "22:00 / 23:00",
        "UTC Time": "04:00 / 05:00",
        "Name of Net": "The Pow Wow Club",
        Frequency: "3.750 MHz (LSB)",
        image: "/unfound.jpg",
        href: "https://va3ts.ca/pwc.php",
      },
      {
        Day: "Monday - Friday",
        "Local Time": "07:00",
        "UTC Time": "13:00",
        "Name of Net": "Trans Provincial",
        Frequency: "7.100 MHz (LSB)",
        image: "/unfound.jpg",
        href: "http://www.tpn7055.com/",
      },
      {
        Day: "Monday, Wednesday, Friday",
        "Local Time": "10:30",
        "UTC Time": "16:30",
        "Name of Net": "International Saturn",
        Frequency: "14.325 MHz (USB)",
        image: "/unfound.jpg",
        href: "http://saternusa.org/",
      },
      {
        Day: "Saturday",
        "Local Time": "10:30",
        "UTC Time": "16:30",
        "Name of Net": "International Saturn",
        Frequency: "14.320 MHz (USB)",
        image: "/unfound.jpg",
        href: "http://saternusa.org/",
      },
    ],
    
    digital: [
      {
        Day: "Friday",
        "Local Time": "19:00",
        "UTC Time": "01:00",
        "Name of Net": "Canadian D-Star",
        Frequency: "XRF103B / XRF021B",
        image: "/unfound.jpg",
        href: "",
      },
      {
        Day: "Wednesday",
        "Local Time": "19 / 20:00",
        "UTC Time": "01 / 02:00",
        "Name of Net": "	The Canada Fusion / C4FM",
        Frequency: "Wires-X Room 40678",
        image: "/unfound.jpg",
        href: "https://www.dxzone.com/dx33263/cq-canada.html",
      }
    ]
  };
  return (
    <>
      <header
        className={`bg-[url('/Saskatchewan%202m%20IRLP%20Net.png')] bg-no-repeat bg-cover bg-center min-h-[40vh] grid grid-cols-1 grid-rows-1 justify-center bg-blue-300 bg-blend-multiply`}
      >
        <div className="backdrop-blur-md flex flex-col justify-center">
          <div className="container mx-auto p-8">
            <h1>Nets</h1>
          </div>
        </div>
      </header>
      <main className="bg-neutral-800">
        <div className="container mx-auto py-16 p-8 flex flex-col gap-16">
          <section className="flex flex-row gap-8 flex-wrap justify-stretch items-stretch text-center">
            {links.map((link) => {
              return (
                <a
                  href={link.href}
                  key={link.title}
                  className="flex-1 bg-neutral-700 rounded-[8px] transition-all hover:scale-[1.05] p-4 flex items-center justify-center min-w-[250px]"
                >
                  <p>{link.title}</p>
                </a>
              );
            })}
          </section>
          <section className="text-white flex flex-col gap-8">
            <h2>What Is A Net?</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quibusdam sequi placeat culpa nostrum quisquam laboriosam vero,
              recusandae quam illum repudiandae architecto, tempore tenetur
              accusantium ullam ab nihil numquam maiores eum vel praesentium hic
              nisi. Fugiat dignissimos provident mollitia aliquam quod, saepe
              amet, maiores distinctio quasi, inventore non repellat molestiae
              porro a magnam laborum animi! Esse, recusandae possimus, doloribus
              dolores suscipit sequi dolore aliquid, est similique et nostrum
              alias illum quo sit aperiam ea molestias ab a laboriosam! Tenetur
              aperiam alias tempora nulla excepturi. Quasi, voluptatibus eos.
              Sed iste, accusamus accusantium porro necessitatibus sapiente qui
              animi architecto dolore, sunt, ducimus eligendi.
            </p>
          </section>
          <section className="flex flex-col gap-16 text-white">
            <div className="flex flex-col gap-8">
              <h2>VHF &bull; IRLP &bull; EchoLink Nets</h2>
              <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,1fr))] gap-8">
                {nets.vhf.map((net) => {
                  return (
                    <a key={net["Name of Net"]} href={net.href}>
                      <div className="bg-neutral-700 flex flex-col h-full rounded-[8px] p-0 hover:scale-[1.02] hover:border border-white transition-all text-white">
                        <img
                          src={`${net.image}`}
                          className="aspect-video object-cover object-left transition-all	hover:object-right rounded-t-[8px]"
                        />
                        <div className="flex-grow flex flex-col gap-4 p-4">
                          <h3>{net["Name of Net"]}</h3>
                          <div className="flex flex-col gap-4 flex-grow place-content-end">
                            <p className="uppercase font-semibold text-sm">
                              {net["Day"]}
                            </p>
                            <p>
                              {net["UTC Time"]} UTC &bull; {net["Local Time"]}{" "}
                              (Local)
                            </p>
                            <p>{net["Mode"]}</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <h2>Daily HF Nets</h2>
              <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,1fr))] gap-8">
                {nets.dailyHF.map((net) => {
                  return (
                    <a key={net["Name of Net"]} href={net.href}>
                      <div className="bg-neutral-700 flex flex-col h-full rounded-[8px] p-0 hover:scale-[1.05] hover:border border-white transition-all text-white">
                        <img
                          src={net.image}
                          className="aspect-video object-cover rounded-t-[8px]"
                        />
                        <div className="flex-grow flex flex-col gap-4 p-4">
                          <h3>{net["Name of Net"]}</h3>
                          <div className="flex-grow place-content-end flex flex-col gap-4">
                            <p className="uppercase font-semibold text-sm">
                              {net["Day"]}
                            </p>
                            <p>
                              {net["UTC Time"]} UTC &bull; {net["Local Time"]}{" "}
                              (Local)
                            </p>
                            <p>{net["Mode"]}</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <h2>Weekday HF Nets</h2>
              <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,1fr))] gap-8">
                {nets.weekdayHF.map((net) => {
                  return (
                    <a key={net["Name of Net"]} href={net.href}>
                      <div className="bg-neutral-700 flex flex-col h-full rounded-[8px] p-0 hover:scale-[1.05] hover:border border-white transition-all text-white">
                        <img
                          src={net.image}
                          className="aspect-video object-cover rounded-t-[8px]"
                        />
                        <div className="flex-grow flex flex-col gap-4 p-4">
                          <h3>{net["Name of Net"]}</h3>
                          <div className="flex-grow place-content-end flex flex-col gap-4">
                            <p className="uppercase font-semibold text-sm">
                              {net["Day"]}
                            </p>
                            <p>
                              {net["UTC Time"]} UTC &bull; {net["Local Time"]}{" "}
                              (Local)
                            </p>
                            <p>{net["Mode"]}</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
